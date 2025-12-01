import { defineConfig } from 'vite';

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const base = process.env.GITHUB_ACTIONS ? '/learnJjBranching/' : '/';
  
  if (command === 'serve') {
    return {
      base,
    }
  } else {
    // command === 'build'
    return {
      base,
    }
  }
})


