exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "jj New",
    "de_DE": "jj New",
    "es_AR": "jj New",
    "es_MX": "jj New",
    "es_ES": "jj New",
    "pt_BR": "jj New",
    "gl": "jj New",
    "fr_FR": "jj New",
    "ja": "jj New",
    "ko": "jj New",
    "zh_CN": "jj New",
    "zh_TW": "jj New",
    "ro": "jj New",
    "ru_RU": "jj New",
    "uk": "jj New",
    "vi": "jj New",
    "sl_SI": "jj New",
    "pl": "jj New",
    "it_IT": "jj New",
    "ta_IN": "jj New",
    "tr_TR": "jj New"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C3\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj new;jj new",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Just type 'jj new' twice to finish!",
    "de_DE": "Gib einfach zweimal 'jj new' ein!",
    "es_AR": "Simplemente escribe 'jj new' dos veces!",
    "es_MX": "Simplemente escribe 'jj new' dos veces!",
    "es_ES": "Simplemente escribe 'jj new' dos veces!",
    "pt_BR": "Simplesmente digite 'jj new' duas vezes!",
    "gl": "Simplemente escribe 'jj new' duas veces!",
    "fr_FR": "Tapez 'jj new' deux fois!",
    "ja": "'jj new' を2回入力してください！",
    "ko": "'jj new'를 두 번 입력하세요!",
    "zh_CN": "只需输入两次 'jj new' 就可以过关！",
    "zh_TW": "只需輸入兩次 'jj new' 就可以完成！",
    "ro": "Scrie 'jj new' de doua ori!",
    "ru_RU": "Просто введите 'jj new' дважды!",
    "uk": "Просто введiть 'jj new' двiчi!",
    "vi": "Chi can go 'jj new' hai lan!",
    "sl_SI": "Preprosto dvakrat vpisi 'jj new'!",
    "pl": "Po prostu wpisz 'jj new' dwa razy!",
    "it_IT": "Digita 'jj new' due volte!",
    "ta_IN": "'jj new' irantu murai thattachu seyka!",
    "tr_TR": "Sadece iki kere 'jj new' yazin!"
  },
  "disabledMap": {
    "git commit": true,
    "git checkout": true
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Welcome to Learn jj Branching!",
              "",
              "Jujutsu (jj) is a modern version control system that's both *simpler* and *more powerful* than Git.",
              "",
              "### Key Differences from Git:",
              "",
              "* **No staging area** - your working copy IS a commit, changes are tracked automatically",
              "* **Two IDs per change** - Change ID (stable) and Commit ID (changes with content)",
              "* **@ symbol** - represents your working copy commit",
              "* **Root commit** - every repo has a `zzzzzzzz` root commit",
              "",
              "jj has a git-compatible backend, so you can use it on any existing git project!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The `jj new` Command",
              "",
              "When you're done with your current work and ready to start something new:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**It's that easy!** This does two things:",
              "1. Your current work becomes a saved commit (the parent)",
              "2. A new empty change is created for your next piece of work"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see `jj new` in action. On the right we have a small repository.",
              "",
              "Hit the button below to create a new change."
            ],
            "afterMarkdowns": [
              "We now have a new empty change `C2`. Our previous work at `C1` is now the parent."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "Use `jj new` twice to create two new changes and complete the level.",
              "",
              "This is the core of jj's workflow:",
              "1. Make changes (automatically tracked)",
              "2. When done, use `jj new` to start fresh",
              "3. Repeat!"
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 欢迎来到 Learn jj Branching！",
              "",
              "Jujutsu (jj) 是一个现代版本控制系统，它比 Git *更简单*同时也*更强大*。",
              "",
              "### 与 Git 的关键区别：",
              "",
              "* **没有暂存区** - 你的工作副本本身就是一个提交，变更会自动被追踪",
              "* **每个变更有两个 ID** - Change ID（稳定的）和 Commit ID（随内容变化）",
              "* **@ 符号** - 代表你的工作副本提交",
              "* **根提交** - 每个仓库都有一个 `zzzzzzzz` 根提交作为基础",
              "",
              "jj 有 git 兼容的后端，所以你可以在任何现有的 git 项目上使用它！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj new` 命令",
              "",
              "当你完成当前工作并准备开始新工作时：",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**就是这么简单！** 它做了两件事：",
              "1. 你当前的工作变成一个已保存的提交（父提交）",
              "2. 创建一个新的空变更用于你的下一项工作"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们看看 `jj new` 的实际效果。右边是一个小仓库。",
              "",
              "点击下面的按钮创建一个新变更。"
            ],
            "afterMarkdowns": [
              "我们现在有了一个新的空变更 `C2`。我们之前在 `C1` 的工作现在是父提交。"
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "使用 `jj new` 两次来创建两个新变更并完成这个关卡。",
              "",
              "这就是 jj 工作流的核心：",
              "1. 做更改（自动追踪）",
              "2. 完成后，用 `jj new` 重新开始",
              "3. 重复！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Willkommen bei Learn jj Branching!",
              "",
              "Jujutsu (jj) ist ein modernes Versionskontrollsystem, das sowohl *einfacher* als auch *mächtiger* als Git ist.",
              "",
              "### Wesentliche Unterschiede zu Git:",
              "",
              "* **Keine Staging Area** - deine Arbeitskopie IST ein Commit",
              "* **Zwei IDs pro Änderung** - Change ID (stabil) und Commit ID (ändert sich)",
              "* **@ Symbol** - repräsentiert deinen Arbeitskopie-Commit",
              "* **Root Commit** - jedes Repo hat einen `zzzzzzzz` Root-Commit",
              "",
              "jj hat ein git-kompatibles Backend!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Der `jj new` Befehl",
              "",
              "Wenn du mit deiner aktuellen Arbeit fertig bist:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**So einfach ist das!**",
              "1. Deine aktuelle Arbeit wird zu einem gespeicherten Commit",
              "2. Eine neue leere Änderung wird erstellt"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Lass uns `jj new` in Aktion sehen.",
              "",
              "Klicke auf den Button unten."
            ],
            "afterMarkdowns": [
              "Wir haben jetzt eine neue leere Änderung `C2`. `C1` ist jetzt der Eltern-Commit."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Probiere es selbst!",
              "",
              "Verwende `jj new` zweimal, um den Level abzuschließen.",
              "",
              "Der Kern des jj-Workflows:",
              "1. Änderungen machen",
              "2. `jj new` verwenden",
              "3. Wiederholen!"
            ]
          }
        }
      ]
    },
    "ja": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Learn jj Branching へようこそ！",
              "",
              "Jujutsu (jj) は、Git よりも*シンプル*で*強力*なモダンなバージョン管理システムです。",
              "",
              "### Git との主な違い：",
              "",
              "* **ステージングエリアなし** - 作業コピーがそのままコミット、変更は自動追跡",
              "* **変更ごとに2つのID** - Change ID（安定）と Commit ID（内容で変化）",
              "* **@ シンボル** - 作業コピーのコミットを表す",
              "* **ルートコミット** - すべてのリポジトリに `zzzzzzzz` ルートコミットがある",
              "",
              "jj は git 互換のバックエンドを持っています！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj new` コマンド",
              "",
              "現在の作業が終わって新しい作業を始める準備ができたら：",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**とても簡単です！**",
              "1. 現在の作業が保存されたコミットになる",
              "2. 新しい空の変更が作成される"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`jj new` の動作を見てみましょう。",
              "",
              "下のボタンをクリックしてください。"
            ],
            "afterMarkdowns": [
              "新しい空の変更 `C2` ができました。`C1` が親コミットになりました。"
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自分で試してみよう！",
              "",
              "`jj new` を2回使ってレベルをクリアしてください。",
              "",
              "jj ワークフローの核心：",
              "1. 変更を加える（自動追跡）",
              "2. `jj new` を使う",
              "3. 繰り返す！"
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Learn jj Branching에 오신 것을 환영합니다!",
              "",
              "Jujutsu (jj)는 Git보다 *더 간단*하고 *더 강력한* 현대적인 버전 관리 시스템입니다.",
              "",
              "### Git과의 주요 차이점:",
              "",
              "* **스테이징 영역 없음** - 작업 복사본이 곧 커밋, 변경사항은 자동 추적",
              "* **변경당 두 개의 ID** - Change ID (안정적)와 Commit ID (내용에 따라 변경)",
              "* **@ 기호** - 작업 복사본 커밋을 나타냄",
              "* **루트 커밋** - 모든 저장소에 `zzzzzzzz` 루트 커밋이 있음",
              "",
              "jj는 git 호환 백엔드를 가지고 있습니다!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj new` 명령어",
              "",
              "현재 작업을 마치고 새 작업을 시작할 준비가 되면:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**정말 간단합니다!**",
              "1. 현재 작업이 저장된 커밋이 됩니다",
              "2. 새로운 빈 변경이 생성됩니다"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`jj new`의 동작을 봅시다.",
              "",
              "아래 버튼을 클릭하세요."
            ],
            "afterMarkdowns": [
              "새로운 빈 변경 `C2`가 생겼습니다. `C1`이 부모 커밋이 되었습니다."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 직접 해보세요!",
              "",
              "`jj new`를 두 번 사용하여 레벨을 완료하세요.",
              "",
              "jj 워크플로우의 핵심:",
              "1. 변경하기 (자동 추적)",
              "2. `jj new` 사용",
              "3. 반복!"
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Bienvenue dans Learn jj Branching !",
              "",
              "Jujutsu (jj) est un système de contrôle de version moderne, à la fois *plus simple* et *plus puissant* que Git.",
              "",
              "### Différences clés avec Git :",
              "",
              "* **Pas de staging area** - votre copie de travail EST un commit",
              "* **Deux IDs par changement** - Change ID (stable) et Commit ID (change avec le contenu)",
              "* **Symbole @** - représente votre commit de copie de travail",
              "* **Commit racine** - chaque dépôt a un commit racine `zzzzzzzz`",
              "",
              "jj a un backend compatible git !"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## La commande `jj new`",
              "",
              "Quand vous avez terminé votre travail actuel :",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**C'est aussi simple que ça !**",
              "1. Votre travail actuel devient un commit sauvegardé",
              "2. Un nouveau changement vide est créé"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Voyons `jj new` en action.",
              "",
              "Cliquez sur le bouton ci-dessous."
            ],
            "afterMarkdowns": [
              "Nous avons maintenant un nouveau changement vide `C2`. `C1` est maintenant le parent."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Essayez vous-même !",
              "",
              "Utilisez `jj new` deux fois pour terminer le niveau.",
              "",
              "Le cœur du workflow jj :",
              "1. Faire des changements (suivi automatique)",
              "2. Utiliser `jj new`",
              "3. Répéter !"
            ]
          }
        }
      ]
    },
    "es_ES": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Bienvenido a Learn jj Branching!",
              "",
              "Jujutsu (jj) es un sistema de control de versiones moderno, *más simple* y *más potente* que Git.",
              "",
              "### Diferencias clave con Git:",
              "",
              "* **Sin área de staging** - tu copia de trabajo ES un commit",
              "* **Dos IDs por cambio** - Change ID (estable) y Commit ID (cambia con el contenido)",
              "* **Símbolo @** - representa tu commit de copia de trabajo",
              "* **Commit raíz** - cada repo tiene un commit raíz `zzzzzzzz`",
              "",
              "¡jj tiene un backend compatible con git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## El comando `jj new`",
              "",
              "Cuando termines tu trabajo actual:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**¡Así de fácil!**",
              "1. Tu trabajo actual se convierte en un commit guardado",
              "2. Se crea un nuevo cambio vacío"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos `jj new` en acción.",
              "",
              "Pulsa el botón de abajo."
            ],
            "afterMarkdowns": [
              "Ahora tenemos un nuevo cambio vacío `C2`. `C1` es ahora el padre."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Inténtalo tú mismo!",
              "",
              "Usa `jj new` dos veces para completar el nivel.",
              "",
              "El núcleo del flujo de trabajo de jj:",
              "1. Hacer cambios (seguimiento automático)",
              "2. Usar `jj new`",
              "3. ¡Repetir!"
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Bienvenido a Learn jj Branching!",
              "",
              "Jujutsu (jj) es un sistema de control de versiones moderno, *más simple* y *más potente* que Git.",
              "",
              "### Diferencias clave con Git:",
              "",
              "* **Sin área de staging** - tu copia de trabajo ES un commit",
              "* **Dos IDs por cambio** - Change ID (estable) y Commit ID (cambia con el contenido)",
              "* **Símbolo @** - representa tu commit de copia de trabajo",
              "* **Commit raíz** - cada repo tiene un commit raíz `zzzzzzzz`",
              "",
              "¡jj tiene un backend compatible con git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## El comando `jj new`",
              "",
              "Cuando terminás tu trabajo actual:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**¡Así de fácil!**",
              "1. Tu trabajo actual se convierte en un commit guardado",
              "2. Se crea un nuevo cambio vacío"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos `jj new` en acción.",
              "",
              "Hacé clic en el botón de abajo."
            ],
            "afterMarkdowns": [
              "Ahora tenemos un nuevo cambio vacío `C2`. `C1` es ahora el padre."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Probalo vos mismo!",
              "",
              "Usá `jj new` dos veces para completar el nivel.",
              "",
              "El núcleo del flujo de trabajo de jj:",
              "1. Hacer cambios (seguimiento automático)",
              "2. Usar `jj new`",
              "3. ¡Repetir!"
            ]
          }
        }
      ]
    },
    "es_MX": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Bienvenido a Learn jj Branching!",
              "",
              "Jujutsu (jj) es un sistema de control de versiones moderno, *más simple* y *más potente* que Git.",
              "",
              "### Diferencias clave con Git:",
              "",
              "* **Sin área de staging** - tu copia de trabajo ES un commit",
              "* **Dos IDs por cambio** - Change ID (estable) y Commit ID (cambia con el contenido)",
              "* **Símbolo @** - representa tu commit de copia de trabajo",
              "* **Commit raíz** - cada repo tiene un commit raíz `zzzzzzzz`",
              "",
              "¡jj tiene un backend compatible con git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## El comando `jj new`",
              "",
              "Cuando termines tu trabajo actual:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**¡Así de fácil!**",
              "1. Tu trabajo actual se convierte en un commit guardado",
              "2. Se crea un nuevo cambio vacío"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos `jj new` en acción.",
              "",
              "Haz clic en el botón de abajo."
            ],
            "afterMarkdowns": [
              "Ahora tenemos un nuevo cambio vacío `C2`. `C1` es ahora el padre."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Inténtalo tú mismo!",
              "",
              "Usa `jj new` dos veces para completar el nivel.",
              "",
              "El núcleo del flujo de trabajo de jj:",
              "1. Hacer cambios (seguimiento automático)",
              "2. Usar `jj new`",
              "3. ¡Repetir!"
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Bem-vindo ao Learn jj Branching!",
              "",
              "Jujutsu (jj) é um sistema de controle de versão moderno, *mais simples* e *mais poderoso* que Git.",
              "",
              "### Diferenças principais do Git:",
              "",
              "* **Sem staging area** - sua cópia de trabalho É um commit",
              "* **Dois IDs por mudança** - Change ID (estável) e Commit ID (muda com o conteúdo)",
              "* **Símbolo @** - representa seu commit de cópia de trabalho",
              "* **Commit raiz** - todo repo tem um commit raiz `zzzzzzzz`",
              "",
              "jj tem um backend compatível com git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## O comando `jj new`",
              "",
              "Quando você terminar seu trabalho atual:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**É simples assim!**",
              "1. Seu trabalho atual se torna um commit salvo",
              "2. Uma nova mudança vazia é criada"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vamos ver `jj new` em ação.",
              "",
              "Clique no botão abaixo."
            ],
            "afterMarkdowns": [
              "Agora temos uma nova mudança vazia `C2`. `C1` agora é o pai."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Tente você mesmo!",
              "",
              "Use `jj new` duas vezes para completar o nível.",
              "",
              "O núcleo do fluxo de trabalho jj:",
              "1. Fazer mudanças (rastreamento automático)",
              "2. Usar `jj new`",
              "3. Repetir!"
            ]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Benvido a Learn jj Branching!",
              "",
              "Jujutsu (jj) é un sistema de control de versións moderno, *máis simple* e *máis potente* que Git.",
              "",
              "### Diferenzas clave con Git:",
              "",
              "* **Sen área de staging** - a túa copia de traballo É un commit",
              "* **Dous IDs por cambio** - Change ID (estable) e Commit ID (cambia co contido)",
              "* **Símbolo @** - representa o teu commit de copia de traballo",
              "* **Commit raíz** - cada repo ten un commit raíz `zzzzzzzz`",
              "",
              "jj ten un backend compatible con git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## O comando `jj new`",
              "",
              "Cando remates o teu traballo actual:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Así de sinxelo!**",
              "1. O teu traballo actual convértese nun commit gardado",
              "2. Créase un novo cambio baleiro"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vexamos `jj new` en acción.",
              "",
              "Preme o botón de abaixo."
            ],
            "afterMarkdowns": [
              "Agora temos un novo cambio baleiro `C2`. `C1` é agora o pai."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Próbao ti mesmo!",
              "",
              "Usa `jj new` dúas veces para completar o nivel.",
              "",
              "O núcleo do fluxo de traballo de jj:",
              "1. Facer cambios (seguimento automático)",
              "2. Usar `jj new`",
              "3. Repetir!"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 歡迎來到 Learn jj Branching！",
              "",
              "Jujutsu (jj) 是一個現代版本控制系統，它比 Git *更簡單*同時也*更強大*。",
              "",
              "### 與 Git 的關鍵區別：",
              "",
              "* **沒有暫存區** - 你的工作副本本身就是一個提交",
              "* **每個變更有兩個 ID** - Change ID（穩定的）和 Commit ID（隨內容變化）",
              "* **@ 符號** - 代表你的工作副本提交",
              "* **根提交** - 每個倉庫都有一個 `zzzzzzzz` 根提交",
              "",
              "jj 有 git 相容的後端！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj new` 命令",
              "",
              "當你完成目前工作並準備開始新工作時：",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**就是這麼簡單！**",
              "1. 你目前的工作變成一個已儲存的提交",
              "2. 建立一個新的空變更"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "讓我們看看 `jj new` 的實際效果。",
              "",
              "點擊下面的按鈕。"
            ],
            "afterMarkdowns": [
              "我們現在有了一個新的空變更 `C2`。`C1` 現在是父提交。"
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己試試！",
              "",
              "使用 `jj new` 兩次來完成這個關卡。",
              "",
              "jj 工作流的核心：",
              "1. 做更改（自動追蹤）",
              "2. 用 `jj new` 重新開始",
              "3. 重複！"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Добро пожаловать в Learn jj Branching!",
              "",
              "Jujutsu (jj) — это современная система контроля версий, которая *проще* и *мощнее* Git.",
              "",
              "### Ключевые отличия от Git:",
              "",
              "* **Нет staging area** - ваша рабочая копия И ЕСТЬ коммит",
              "* **Два ID на изменение** - Change ID (стабильный) и Commit ID (меняется с содержимым)",
              "* **Символ @** - представляет ваш коммит рабочей копии",
              "* **Корневой коммит** - каждый репозиторий имеет корневой коммит `zzzzzzzz`",
              "",
              "У jj git-совместимый бэкенд!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Команда `jj new`",
              "",
              "Когда вы закончили текущую работу:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Вот и всё!**",
              "1. Ваша текущая работа становится сохранённым коммитом",
              "2. Создаётся новое пустое изменение"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Посмотрим `jj new` в действии.",
              "",
              "Нажмите кнопку ниже."
            ],
            "afterMarkdowns": [
              "Теперь у нас есть новое пустое изменение `C2`. `C1` теперь родитель."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Попробуйте сами!",
              "",
              "Используйте `jj new` дважды, чтобы пройти уровень.",
              "",
              "Суть рабочего процесса jj:",
              "1. Вносить изменения (автоматическое отслеживание)",
              "2. Использовать `jj new`",
              "3. Повторять!"
            ]
          }
        }
      ]
    },
    "uk": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Ласкаво просимо до Learn jj Branching!",
              "",
              "Jujutsu (jj) — це сучасна система контролю версій, яка *простіша* та *потужніша* за Git.",
              "",
              "### Ключові відмінності від Git:",
              "",
              "* **Немає staging area** - ваша робоча копія І Є коміт",
              "* **Два ID на зміну** - Change ID (стабільний) та Commit ID (змінюється з вмістом)",
              "* **Символ @** - представляє ваш коміт робочої копії",
              "* **Кореневий коміт** - кожен репозиторій має кореневий коміт `zzzzzzzz`",
              "",
              "У jj git-сумісний бекенд!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Команда `jj new`",
              "",
              "Коли ви закінчили поточну роботу:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Ось і все!**",
              "1. Ваша поточна робота стає збереженим комітом",
              "2. Створюється нова порожня зміна"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Подивимось `jj new` в дії.",
              "",
              "Натисніть кнопку нижче."
            ],
            "afterMarkdowns": [
              "Тепер у нас є нова порожня зміна `C2`. `C1` тепер батько."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Спробуйте самі!",
              "",
              "Використайте `jj new` двічі, щоб пройти рівень.",
              "",
              "Суть робочого процесу jj:",
              "1. Вносити зміни (автоматичне відстеження)",
              "2. Використовувати `jj new`",
              "3. Повторювати!"
            ]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Chào mừng đến với Learn jj Branching!",
              "",
              "Jujutsu (jj) là hệ thống quản lý phiên bản hiện đại, *đơn giản hơn* và *mạnh mẽ hơn* Git.",
              "",
              "### Khác biệt chính với Git:",
              "",
              "* **Không có staging area** - bản sao làm việc của bạn LÀ một commit",
              "* **Hai ID mỗi thay đổi** - Change ID (ổn định) và Commit ID (thay đổi theo nội dung)",
              "* **Ký hiệu @** - đại diện cho commit bản sao làm việc của bạn",
              "* **Commit gốc** - mọi repo đều có commit gốc `zzzzzzzz`",
              "",
              "jj có backend tương thích với git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Lệnh `jj new`",
              "",
              "Khi bạn hoàn thành công việc hiện tại:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Đơn giản vậy thôi!**",
              "1. Công việc hiện tại của bạn trở thành commit đã lưu",
              "2. Một thay đổi trống mới được tạo"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Hãy xem `jj new` hoạt động.",
              "",
              "Nhấn nút bên dưới."
            ],
            "afterMarkdowns": [
              "Bây giờ chúng ta có thay đổi trống mới `C2`. `C1` bây giờ là cha."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Tự thử đi!",
              "",
              "Sử dụng `jj new` hai lần để hoàn thành level.",
              "",
              "Cốt lõi của quy trình jj:",
              "1. Thực hiện thay đổi (tự động theo dõi)",
              "2. Sử dụng `jj new`",
              "3. Lặp lại!"
            ]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Bine ai venit la Learn jj Branching!",
              "",
              "Jujutsu (jj) este un sistem modern de control al versiunilor, *mai simplu* și *mai puternic* decât Git.",
              "",
              "### Diferențe cheie față de Git:",
              "",
              "* **Fără staging area** - copia ta de lucru ESTE un commit",
              "* **Două ID-uri pe schimbare** - Change ID (stabil) și Commit ID (se schimbă cu conținutul)",
              "* **Simbolul @** - reprezintă commit-ul copiei tale de lucru",
              "* **Commit rădăcină** - fiecare repo are un commit rădăcină `zzzzzzzz`",
              "",
              "jj are un backend compatibil cu git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Comanda `jj new`",
              "",
              "Când ai terminat munca curentă:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Atât de simplu!**",
              "1. Munca ta curentă devine un commit salvat",
              "2. O nouă schimbare goală este creată"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Să vedem `jj new` în acțiune.",
              "",
              "Apasă butonul de mai jos."
            ],
            "afterMarkdowns": [
              "Acum avem o nouă schimbare goală `C2`. `C1` este acum părintele."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Încearcă singur!",
              "",
              "Folosește `jj new` de două ori pentru a completa nivelul.",
              "",
              "Esența fluxului de lucru jj:",
              "1. Fă schimbări (urmărire automată)",
              "2. Folosește `jj new`",
              "3. Repetă!"
            ]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Dobrodošli v Learn jj Branching!",
              "",
              "Jujutsu (jj) je sodoben sistem za nadzor različic, ki je *preprostejši* in *močnejši* od Gita.",
              "",
              "### Ključne razlike od Gita:",
              "",
              "* **Ni staging area** - tvoja delovna kopija JE commit",
              "* **Dva ID-ja na spremembo** - Change ID (stabilen) in Commit ID (se spreminja z vsebino)",
              "* **Simbol @** - predstavlja tvoj commit delovne kopije",
              "* **Korenski commit** - vsak repo ima korenski commit `zzzzzzzz`",
              "",
              "jj ima z gitom združljiv backend!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Ukaz `jj new`",
              "",
              "Ko končaš trenutno delo:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Tako preprosto!**",
              "1. Tvoje trenutno delo postane shranjen commit",
              "2. Ustvari se nova prazna sprememba"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Poglejmo `jj new` v akciji.",
              "",
              "Klikni spodnji gumb."
            ],
            "afterMarkdowns": [
              "Zdaj imamo novo prazno spremembo `C2`. `C1` je zdaj starš."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Poskusi sam!",
              "",
              "Uporabi `jj new` dvakrat za dokončanje nivoja.",
              "",
              "Jedro jj delovnega toka:",
              "1. Naredi spremembe (samodejno sledenje)",
              "2. Uporabi `jj new`",
              "3. Ponovi!"
            ]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Witaj w Learn jj Branching!",
              "",
              "Jujutsu (jj) to nowoczesny system kontroli wersji, który jest *prostszy* i *potężniejszy* niż Git.",
              "",
              "### Kluczowe różnice od Gita:",
              "",
              "* **Brak staging area** - twoja kopia robocza JEST commitem",
              "* **Dwa ID na zmianę** - Change ID (stały) i Commit ID (zmienia się z zawartością)",
              "* **Symbol @** - reprezentuje twój commit kopii roboczej",
              "* **Commit główny** - każde repo ma commit główny `zzzzzzzz`",
              "",
              "jj ma backend kompatybilny z gitem!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Polecenie `jj new`",
              "",
              "Gdy skończysz bieżącą pracę:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**To takie proste!**",
              "1. Twoja bieżąca praca staje się zapisanym commitem",
              "2. Tworzona jest nowa pusta zmiana"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Zobaczmy `jj new` w akcji.",
              "",
              "Kliknij przycisk poniżej."
            ],
            "afterMarkdowns": [
              "Teraz mamy nową pustą zmianę `C2`. `C1` jest teraz rodzicem."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Spróbuj sam!",
              "",
              "Użyj `jj new` dwa razy, aby ukończyć poziom.",
              "",
              "Istota przepływu pracy jj:",
              "1. Wprowadzaj zmiany (automatyczne śledzenie)",
              "2. Użyj `jj new`",
              "3. Powtórz!"
            ]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Benvenuto in Learn jj Branching!",
              "",
              "Jujutsu (jj) è un moderno sistema di controllo versione, *più semplice* e *più potente* di Git.",
              "",
              "### Differenze chiave da Git:",
              "",
              "* **Nessuna staging area** - la tua copia di lavoro È un commit",
              "* **Due ID per modifica** - Change ID (stabile) e Commit ID (cambia con il contenuto)",
              "* **Simbolo @** - rappresenta il tuo commit della copia di lavoro",
              "* **Commit radice** - ogni repo ha un commit radice `zzzzzzzz`",
              "",
              "jj ha un backend compatibile con git!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Il comando `jj new`",
              "",
              "Quando hai finito il lavoro attuale:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**È così semplice!**",
              "1. Il tuo lavoro attuale diventa un commit salvato",
              "2. Viene creata una nuova modifica vuota"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vediamo `jj new` in azione.",
              "",
              "Clicca il pulsante sotto."
            ],
            "afterMarkdowns": [
              "Ora abbiamo una nuova modifica vuota `C2`. `C1` ora è il genitore."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Prova tu stesso!",
              "",
              "Usa `jj new` due volte per completare il livello.",
              "",
              "Il cuore del flusso di lavoro jj:",
              "1. Fare modifiche (tracciamento automatico)",
              "2. Usare `jj new`",
              "3. Ripetere!"
            ]
          }
        }
      ]
    },
    "ta_IN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Learn jj Branching க்கு வரவேற்கிறோம்!",
              "",
              "Jujutsu (jj) என்பது Git ஐ விட *எளிமையான* மற்றும் *சக்திவாய்ந்த* நவீன பதிப்பு கட்டுப்பாட்டு அமைப்பு.",
              "",
              "### Git இலிருந்து முக்கிய வேறுபாடுகள்:",
              "",
              "* **Staging area இல்லை** - உங்கள் வேலை நகல் ஒரு commit ஆகும்",
              "* **ஒவ்வொரு மாற்றத்திற்கும் இரண்டு ID** - Change ID (நிலையான) மற்றும் Commit ID (உள்ளடக்கத்துடன் மாறும்)",
              "* **@ குறியீடு** - உங்கள் வேலை நகல் commit ஐ குறிக்கிறது",
              "* **Root commit** - ஒவ்வொரு repo வும் `zzzzzzzz` root commit ஐ கொண்டுள்ளது",
              "",
              "jj git இணக்கமான backend ஐ கொண்டுள்ளது!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj new` கட்டளை",
              "",
              "உங்கள் தற்போதைய வேலை முடிந்ததும்:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**இது மிகவும் எளிது!**",
              "1. உங்கள் தற்போதைய வேலை சேமிக்கப்பட்ட commit ஆகிறது",
              "2. புதிய வெற்று மாற்றம் உருவாக்கப்படுகிறது"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`jj new` செயல்பாட்டைப் பார்ப்போம்.",
              "",
              "கீழே உள்ள பொத்தானை அழுத்தவும்."
            ],
            "afterMarkdowns": [
              "இப்போது புதிய வெற்று மாற்றம் `C2` உள்ளது. `C1` இப்போது parent ஆகும்."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## நீங்களே முயற்சிக்கவும்!",
              "",
              "நிலையை முடிக்க `jj new` இரண்டு முறை பயன்படுத்தவும்.",
              "",
              "jj workflow இன் மையம்:",
              "1. மாற்றங்களை செய்யுங்கள் (தானியங்கி கண்காணிப்பு)",
              "2. `jj new` பயன்படுத்தவும்",
              "3. மீண்டும் செய்யுங்கள்!"
            ]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Learn jj Branching'e Hoş Geldiniz!",
              "",
              "Jujutsu (jj), Git'ten *daha basit* ve *daha güçlü* modern bir sürüm kontrol sistemidir.",
              "",
              "### Git'ten Temel Farklar:",
              "",
              "* **Staging area yok** - çalışma kopyanız bir commit'TİR",
              "* **Değişiklik başına iki ID** - Change ID (sabit) ve Commit ID (içerikle değişir)",
              "* **@ sembolü** - çalışma kopyanızın commit'ini temsil eder",
              "* **Kök commit** - her repo'nun `zzzzzzzz` kök commit'i vardır",
              "",
              "jj, git uyumlu bir backend'e sahip!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj new` Komutu",
              "",
              "Mevcut işinizi bitirdiğinizde:",
              "",
              "```",
              "$ jj new",
              "Working copy now at: puomrwxl 01a35aad (empty) (no description set)",
              "Parent commit      : yyrsmnoo ac691d85 hello world",
              "```",
              "",
              "**Bu kadar basit!**",
              "1. Mevcut işiniz kaydedilmiş bir commit olur",
              "2. Yeni boş bir değişiklik oluşturulur"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`jj new`'i çalışırken görelim.",
              "",
              "Aşağıdaki düğmeye tıklayın."
            ],
            "afterMarkdowns": [
              "Şimdi yeni boş bir değişiklik `C2` var. `C1` artık ebeveyn."
            ],
            "command": "jj new",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Kendiniz Deneyin!",
              "",
              "Seviyeyi tamamlamak için `jj new`'i iki kez kullanın.",
              "",
              "jj iş akışının özü:",
              "1. Değişiklik yapın (otomatik izleme)",
              "2. `jj new` kullanın",
              "3. Tekrarlayın!"
            ]
          }
        }
      ]
    }
  }
};
