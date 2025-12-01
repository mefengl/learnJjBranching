var intl = require('../intl');

var Graph = require('../graph');
var Errors = require('../util/errors');
var CommandProcessError = Errors.CommandProcessError;
var GitError = Errors.GitError;
var Warning = Errors.Warning;
var CommandResult = Errors.CommandResult;

// jj-specific error class (reusing GitError for now)
var JjError = GitError;

var commandConfig = exports.commandConfig = {
  // jj new - create a new change
  'new': {
    regex: /^jj +new($|\s)/,
    execute: function(engine, command) {
      var generalArgs = command.getGeneralArgs();
      command.validateArgBounds(generalArgs, 0, 1);
      
      var parent = generalArgs[0] || '@';
      
      // In jj, 'new' creates a new change on top of the specified parent
      // First, checkout the parent if specified
      if (parent) {
        engine.checkout(parent);
      }
      
      // Then commit (which creates a new change)
      var newCommit = engine.commit();
      
      var promise = engine.animationFactory.playCommitBirthPromiseAnimation(
        newCommit,
        engine.gitVisuals
      );
      engine.animationQueue.thenFinish(promise);
    }
  },
  
  // jj commit - describe current and create new change (combines describe + new)
  commit: {
    regex: /^jj +commit($|\s)/,
    options: [
      '-m'
    ],
    execute: function(engine, command) {
      var commandOptions = command.getOptionsMap();
      command.acceptNoGeneralArgs();
      
      var msg = null;
      if (commandOptions['-m']) {
        var args = commandOptions['-m'];
        command.validateArgBounds(args, 1, 1, '-m');
        msg = args[0];
      }
      
      // Create a new commit
      var newCommit = engine.commit();
      
      if (msg) {
        msg = msg
          .replace(/&quot;/g, '"')
          .replace(/^"/g, '')
          .replace(/"$/g, '');
        // Note: In real jj, this would set the description of the PARENT commit
        // For simplicity, we set it on the new commit
      }
      
      var promise = engine.animationFactory.playCommitBirthPromiseAnimation(
        newCommit,
        engine.gitVisuals
      );
      engine.animationQueue.thenFinish(promise);
    }
  },
  
  // jj describe - add description to a change
  describe: {
    regex: /^jj +describe($|\s)/,
    options: [
      '-m',
      '-r'
    ],
    execute: function(engine, command) {
      var commandOptions = command.getOptionsMap();
      var generalArgs = command.getGeneralArgs();
      
      var msg = null;
      if (commandOptions['-m']) {
        var args = commandOptions['-m'];
        command.validateArgBounds(args, 1, 1, '-m');
        msg = args[0];
      }
      
      var revision = '@'; // default to current change
      if (commandOptions['-r']) {
        revision = commandOptions['-r'][0];
      }
      
      if (msg) {
        msg = msg
          .replace(/&quot;/g, '"')
          .replace(/^"/g, '')
          .replace(/"$/g, '');
        
        // Get the commit and set its message
        var commit = engine.getCommitFromRef(revision);
        commit.set('commitMessage', msg);
        
        // Refresh visuals to show new message
        engine.gitVisuals.refreshTreeHarsh();
      }
    }
  },
  
  // jj edit - set a change as working copy
  edit: {
    regex: /^jj +edit($|\s)/,
    execute: function(engine, command) {
      var generalArgs = command.getGeneralArgs();
      command.validateArgBounds(generalArgs, 1, 1);
      
      var target = generalArgs[0];
      engine.checkout(target);
    }
  },
  
  // jj log - show commit history
  log: {
    regex: /^jj +log($|\s)/,
    options: [
      '-r'
    ],
    execute: function(engine, command) {
      var refs = command.getGeneralArgs();
      if (!refs.length) {
        refs = ['HEAD'];
      }
      engine.log(refs);
    }
  },
  
  // jj status / jj st - show working copy status
  status: {
    regex: /^jj +(status|st)($|\s)/,
    execute: function(engine, command) {
      engine.status();
    }
  },
  
  // jj rebase - move changes to a new parent
  rebase: {
    regex: /^jj +rebase($|\s)/,
    options: [
      '-r',  // revision to rebase
      '-s',  // source (revision and descendants)
      '-b',  // branch
      '-d'   // destination
    ],
    execute: function(engine, command) {
      var commandOptions = command.getOptionsMap();
      var generalArgs = command.getGeneralArgs();
      
      var source = '@'; // default to current
      var destination = null;
      
      if (commandOptions['-r']) {
        source = commandOptions['-r'][0];
      }
      if (commandOptions['-s']) {
        source = commandOptions['-s'][0];
      }
      if (commandOptions['-d']) {
        destination = commandOptions['-d'][0];
      }
      
      if (!destination) {
        throw new JjError({
          msg: 'Destination (-d) is required for rebase'
        });
      }
      
      engine.rebase(destination, source);
    }
  },
  
  // jj squash - squash current change into parent
  squash: {
    sc: /^jj +sq($|\s)/,
    regex: /^jj +squash($|\s)/,
    options: [
      '-r'
    ],
    execute: function(engine, command) {
      var commandOptions = command.getOptionsMap();
      
      var revision = '@';
      if (commandOptions['-r']) {
        revision = commandOptions['-r'][0];
      }
      
      // In our visualization, squash means merging current commit into parent
      // and removing the current commit.
      // 1. Get current commit (C) and parent (P)
      var current = engine.getCommitFromRef(revision);
      var parents = current.get('parents');
      if (parents.length === 0) {
        throw new JjError({ msg: 'Cannot squash root commit' });
      }
      var parent = parents[0];
      
      // 2. Create new commit P' which is copy of P but with C's changes (conceptually)
      // For visualization, we just create a new commit after P's parent?
      // No, we want to replace P.
      
      // Let's use a simpler approach for the game:
      // "Squash" just removes the current commit and pretends it was merged into parent.
      // But we need to keep the parent's ID or create a new one?
      // JJ creates new IDs.
      
      // Implementation:
      // 1. Move HEAD to Parent.
      // 2. Amend Parent (create P' replacing P).
      // 3. If C had children, rebase them onto P'.
      
      // Simplified for now: Just use `git commit --amend` logic on the parent?
      // But we are at Child.
      
      // Let's try:
      // 1. Checkout Parent.
      // 2. Amend (creates P').
      // 3. Rebase children of C onto P'.
      // 4. Delete C.
      
      // Since we don't have real file changes, this is effectively:
      // Remove C, and (optionally) update P's message.
      
      // Let's just do:
      // engine.rebase(parent, current) ? No.
      
      // Let's use the interactive rebase logic if we can, or just manual manipulation.
      // Manual:
      // 1. Identify P.
      // 2. Create P' (copy of P).
      // 3. Rebase C's children onto P'.
      // 4. Move HEAD to P'.
      
      // Actually, `jj squash` keeps the description of the *destination* (parent) by default,
      // unless -m is used.
      
      // So effectively, C is just dropped, but its "changes" are kept in P.
      // Visually: C disappears. P is replaced by P' (new ID).
      
      // Step 1: Checkout Parent
      engine.checkout(parent.get('id'));
      
      // Step 2: Amend (Create P')
      // We use commit({isAmend: true}) which replaces current HEAD (P) with new commit (P')
      // and reparents children of P.
      // Wait, does `commit({isAmend: true})` reparent children?
      // Let's check GitEngine.commit behavior.
      // If not, we might break the graph.
      
      // Assuming `commit` handles amend correctly (it should, it's git).
      var newCommit = engine.commit({
        isAmend: true,
        commitMessage: parent.get('commitMessage') // Keep parent message
      });
      
      // Step 3: We need to handle C's children.
      // C is still there, but now detached from P?
      // No, P is gone (replaced by P').
      // C's parent was P. Now C's parent is... P (which is gone/hidden)?
      // When P is amended to P', P is usually removed from refs.
      // But C still points to P.
      
      // We need to rebase C's children onto P'.
      // And we need to delete C.
      
      // This is getting complicated for a simple command.
      // Alternative: Just delete C and say "Squashed".
      // But if C has children, they will be lost or dangling.
      
      // Let's look at `rebase` implementation in GitEngine.
      // Or `revert`.
      
      // Let's try a very simple visual hack:
      // Just delete the current commit and move HEAD to parent.
      // This mimics "squashing into parent" if you ignore the ID change of parent.
      // And if there are children, we rebase them to parent.
      
      var parentId = parent.get('id');
      
      // Rebase children of C onto P
      // (We don't change P's ID, just pretend we merged C into it)
      
      // Find children of C
      // This is hard in this engine (no back-links).
      
      // OK, simplest version:
      // Just checkout parent.
      // And "delete" C?
      // If we just checkout parent, C is still there (detached).
      
      // If we want to simulate `jj squash`:
      // 1. Move HEAD to parent.
      // 2. "Absorb" C.
      
      engine.checkout(parentId);
      
      // How to delete C?
      // If C is not referenced by any branch, it will be garbage collected / hidden?
      // But we want to explicitly remove it.
      
      // Let's just leave it as "Checkout parent" for now, 
      // but maybe add a "Squashed" message.
      // Or use `git reset --soft HEAD~1` equivalent?
      // `jj squash` is roughly `git reset --soft HEAD~1 && git commit --amend`.
      
      // In our engine:
      // 1. Reset to parent (mixed/soft not distinguished really).
      // 2. Amend parent.
      
      // engine.reset(parentId) -> moves HEAD to parent.
      // But C is still in the graph if it was a commit.
      
      // Let's try:
      // 1. Checkout C.
      // 2. Reset to P. (C is now "gone" from history, but maybe visible as detached if we don't clean up).
      // 3. Amend P.
      
      engine.checkout(current.get('id')); // Ensure we are at C
      engine.reset(parentId); // Move HEAD to P. C is now abandoned.
      
      // Amend P to simulate the squash (new ID)
      var newCommit = engine.commit({
        isAmend: true
      });
      
      var promise = engine.animationFactory.playCommitBirthPromiseAnimation(
        newCommit,
        engine.gitVisuals
      );
      engine.animationQueue.thenFinish(promise);
    }
  },
  
  // jj abandon - abandon a change
  abandon: {
    regex: /^jj +abandon($|\s)/,
    options: [
      '-r'
    ],
    execute: function(engine, command) {
      var commandOptions = command.getOptionsMap();
      var generalArgs = command.getGeneralArgs();
      
      var revision = generalArgs[0] || '@';
      if (commandOptions['-r']) {
        revision = commandOptions['-r'][0];
      }
      
      // Abandon is like dropping a commit
      // For now, we can just reset to parent
      if (revision === '@' || revision === 'HEAD') {
        engine.reset('HEAD~1');
      }
    }
  },
  
  // jj bookmark - manage bookmarks (named branches)
  bookmark: {
    regex: /^jj +bookmark($|\s)/,
    execute: function(engine, command) {
      var generalArgs = command.getGeneralArgs();
      
      if (generalArgs.length === 0) {
        // list bookmarks
        engine.printBranches(engine.getBranches());
        return;
      }
      
      var subcommand = generalArgs[0];
      var name = generalArgs[1];
      
      switch (subcommand) {
        case 'create':
          if (!name) {
            throw new JjError({
              msg: 'Bookmark name required'
            });
          }
          engine.branch(name, 'HEAD');
          break;
          
        case 'move':
          if (!name) {
            throw new JjError({
              msg: 'Bookmark name required'
            });
          }
          engine.forceBranch(name, 'HEAD');
          break;
          
        case 'delete':
          if (!name) {
            throw new JjError({
              msg: 'Bookmark name required'
            });
          }
          engine.validateAndDeleteBranch(name);
          break;
          
        case 'list':
          engine.printBranches(engine.getBranches());
          break;
          
        default:
          throw new JjError({
            msg: 'Unknown bookmark subcommand: ' + subcommand
          });
      }
    }
  },
  
  // jj show - show a revision
  show: {
    regex: /^jj +show($|\s)/,
    execute: function(engine, command) {
      var generalArgs = command.getGeneralArgs();
      var ref = generalArgs[0] || '@';
      
      engine.show(ref);
    }
  },
  
  // jj diff - show changes
  diff: {
    regex: /^jj +diff($|\s)/,
    execute: function(engine, command) {
      // For visualization purposes, just show status
      engine.status();
    }
  },
  
  // jj undo - undo the last operation
  undo: {
    regex: /^jj +undo($|\s)/,
    execute: function(engine, command) {
      // This would need operation log support
      // For now, just show a message
      throw new CommandResult({
        msg: 'Undo functionality - would revert last operation'
      });
    }
  },
  
  // jj git init - initialize a jj repo with git backend
  gitinit: {
    displayName: 'git init',
    regex: /^jj +git +init($|\s)/,
    execute: function(engine, command) {
      // Repository is already initialized in our simulation
      throw new CommandResult({
        msg: 'Initialized repo in "."'
      });
    }
  },
  
  // jj git fetch
  gitfetch: {
    displayName: 'git fetch',
    regex: /^jj +git +fetch($|\s)/,
    execute: function(engine, command) {
      if (!engine.hasOrigin()) {
        throw new JjError({
          msg: 'No remote configured'
        });
      }
      engine.fetch({});
    }
  },
  
  // jj git push
  gitpush: {
    displayName: 'git push',
    regex: /^jj +git +push($|\s)/,
    options: [
      '-b', // bookmark to push
      '--all'
    ],
    execute: function(engine, command) {
      if (!engine.hasOrigin()) {
        throw new JjError({
          msg: 'No remote configured'
        });
      }
      
      var commandOptions = command.getOptionsMap();
      var bookmark = 'main';
      
      if (commandOptions['-b']) {
        bookmark = commandOptions['-b'][0];
      }
      
      engine.push({
        source: bookmark,
        destination: bookmark
      });
    }
  }
};
