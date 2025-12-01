// Level: Working with Remotes
// Based on:
// - jj-for-everyone's "remote.md" - push to remote
// - jj-for-everyone's "clone.md" - clone repositories
// - steveklabnik's "remotes.md" - GitHub workflow, fetch, push -c
//
// Key concepts from tutorials:
// 1. jj git clone <source> <dest> - clone a repository
// 2. jj git remote add origin <url> - add a remote
// 3. jj git push --bookmark main - push a bookmark
// 4. jj git push -c @ - create bookmark and push (for PRs)
// 5. jj git fetch - fetch updates from remote
// 6. jj bookmark track main@origin - track remote bookmark
//
// Key insight (from jj-for-everyone):
// "We can fix that by duplicating our commit at another location, a so-called remote.
// Besides providing a backup, sending commits to a remote also allows you to share
// your work more easily for collaboration."

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Push & Fetch",
    "de_DE": "Push & Fetch",
    "es_AR": "Push y Fetch",
    "es_MX": "Push y Fetch",
    "es_ES": "Push y Fetch",
    "pt_BR": "Push e Fetch",
    "gl": "Push e Fetch",
    "fr_FR": "Push & Fetch",
    "ja": "プッシュとフェッチ",
    "ko": "푸시 & 페치",
    "zh_CN": "推送与获取",
    "zh_TW": "推送與獲取",
    "ro": "Push & Fetch",
    "ru_RU": "Push и Fetch",
    "uk": "Push та Fetch",
    "vi": "Push & Fetch",
    "sl_SI": "Push & Fetch",
    "pl": "Push i Fetch",
    "it_IT": "Push & Fetch",
    "ta_IN": "Push & Fetch",
    "tr_TR": "Push & Fetch"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"},\"o/main\":{\"target\":\"C1\",\"id\":\"o/main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"C1\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj git push --bookmark main",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"C1\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj git push --bookmark main' to push to the remote",
    "de_DE": "Verwende 'jj git push --bookmark main' um zum Remote zu pushen",
    "es_AR": "Usa 'jj git push --bookmark main' para hacer push al remoto",
    "es_MX": "Usa 'jj git push --bookmark main' para hacer push al remoto",
    "es_ES": "Usa 'jj git push --bookmark main' para hacer push al remoto",
    "pt_BR": "Use 'jj git push --bookmark main' para enviar ao remoto",
    "gl": "Usa 'jj git push --bookmark main' para facer push ao remoto",
    "fr_FR": "Utilisez 'jj git push --bookmark main' pour pousser vers le distant",
    "ja": "'jj git push --bookmark main' でリモートにプッシュ",
    "ko": "'jj git push --bookmark main'로 원격에 푸시",
    "zh_CN": "使用 'jj git push --bookmark main' 推送到远程",
    "zh_TW": "使用 'jj git push --bookmark main' 推送到遠端",
    "ro": "Folosește 'jj git push --bookmark main' pentru a împinge la remote",
    "ru_RU": "Используйте 'jj git push --bookmark main' для отправки на удалённый сервер",
    "uk": "Використайте 'jj git push --bookmark main' для надсилання на віддалений сервер",
    "vi": "Dùng 'jj git push --bookmark main' để đẩy lên remote",
    "sl_SI": "Uporabi 'jj git push --bookmark main' za potiskanje na oddaljeni strežnik",
    "pl": "Użyj 'jj git push --bookmark main' aby wysłać na zdalny serwer",
    "it_IT": "Usa 'jj git push --bookmark main' per inviare al remoto",
    "ta_IN": "'jj git push --bookmark main' பயன்படுத்தி remote க்கு push செய்யவும்",
    "tr_TR": "Remote'a göndermek için 'jj git push --bookmark main' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Working with Remotes",
              "",
              "A **remote** is a copy of your repository stored elsewhere - usually on a service like GitHub, GitLab, or Bitbucket.",
              "",
              "Remotes serve two purposes:",
              "1. **Backup** - your work is safe even if your computer dies",
              "2. **Collaboration** - others can see and contribute to your work",
              "",
              "In jj, remote operations use `jj git` commands because jj uses Git's transport protocol."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Cloning a Repository",
              "",
              "To get a copy of an existing repository:",
              "",
              "jj git clone https://github.com/user/repo.git my-project",
              "",
              "This creates a local copy with the remote automatically configured as `origin`."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Pushing Your Work",
              "",
              "To send commits to the remote, you push a **bookmark**:",
              "",
              "jj git push --bookmark main",
              "",
              "For creating pull requests, you can create a bookmark automatically:",
              "",
              "jj git push -c @",
              "",
              "This creates a bookmark named `push-<change-id>` and pushes it."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Fetching Updates",
              "",
              "To get changes from the remote:",
              "",
              "jj git fetch",
              "",
              "This updates your remote-tracking bookmarks (like `main@origin`). To start working on top of the fetched changes:",
              "",
              "jj new main@origin",
              "",
              "Or simply `jj new main` if your local bookmark tracks the remote."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's push our main bookmark to the remote:"
            ],
            "afterMarkdowns": [
              "Now `o/main` (origin/main) shows where the remote's main bookmark is. The remote has our commits!"
            ],
            "command": "jj git push --bookmark main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "Push the main bookmark to the remote:",
              "",
              "jj git push --bookmark main",
              "",
              "In real life, you'd first set up a remote with:",
              "jj git remote add origin <url>",
              ""
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
              "## 使用远程仓库",
              "",
              "**远程仓库**是存储在其他地方的仓库副本 - 通常在 GitHub、GitLab 或 Bitbucket 等服务上。",
              "",
              "远程仓库有两个用途：",
              "1. **备份** - 即使你的电脑坏了，你的工作也是安全的",
              "2. **协作** - 其他人可以看到并贡献你的工作",
              "",
              "在 jj 中，远程操作使用 `jj git` 命令，因为 jj 使用 Git 的传输协议。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 克隆仓库",
              "",
              "要获取现有仓库的副本：",
              "",
              "jj git clone https://github.com/user/repo.git my-project",
              "",
              "这会创建一个本地副本，远程自动配置为 `origin`。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 推送你的工作",
              "",
              "要将提交发送到远程，你需要推送一个**书签**：",
              "",
              "jj git push --bookmark main",
              "",
              "对于创建拉取请求，你可以自动创建书签：",
              "",
              "jj git push -c @",
              "",
              "这会创建一个名为 `push-<change-id>` 的书签并推送它。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 获取更新",
              "",
              "要从远程获取更改：",
              "",
              "jj git fetch",
              "",
              "这会更新你的远程跟踪书签（如 `main@origin`）。要开始在获取的更改之上工作：",
              "",
              "jj new main@origin",
              "",
              "或者简单地 `jj new main`，如果你的本地书签跟踪远程。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们将 main 书签推送到远程："
            ],
            "afterMarkdowns": [
              "现在 `o/main`（origin/main）显示远程的 main 书签在哪里。远程有我们的提交了！"
            ],
            "command": "jj git push --bookmark main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "将 main 书签推送到远程：",
              "",
              "jj git push --bookmark main",
              "",
              "在实际使用中，你需要先设置远程：",
              "jj git remote add origin <url>",
              ""
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Mit Remotes arbeiten", "", "`jj git clone` - Repo klonen", "`jj git push --bookmark main` - Lesezeichen pushen", "`jj git fetch` - Updates holen", "`jj git push -c @` - Lesezeichen erstellen und pushen (für PRs)"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Pushen wir main:"], "afterMarkdowns": ["Der Remote hat jetzt unseren Commit!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## リモートでの作業", "", "`jj git clone` - リポジトリをクローン", "`jj git push --bookmark main` - ブックマークをプッシュ", "`jj git fetch` - 更新を取得", "`jj git push -c @` - ブックマークを作成してプッシュ（PR用）"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["mainをプッシュしましょう:"], "afterMarkdowns": ["リモートにコミットが届きました！"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 원격 작업", "", "`jj git clone` - 저장소 클론", "`jj git push --bookmark main` - 북마크 푸시", "`jj git fetch` - 업데이트 가져오기", "`jj git push -c @` - 북마크 생성 및 푸시 (PR용)"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["main을 푸시합시다:"], "afterMarkdowns": ["원격에 커밋이 도착했습니다!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Travailler avec les distants", "", "`jj git clone` - cloner un dépôt", "`jj git push --bookmark main` - pousser un signet", "`jj git fetch` - récupérer les mises à jour", "`jj git push -c @` - créer un signet et pousser (pour les PRs)"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Poussons main :"], "afterMarkdowns": ["Le distant a maintenant notre commit !"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Trabajando con remotos", "", "`jj git clone` - clonar repo", "`jj git push --bookmark main` - hacer push de marcador", "`jj git fetch` - obtener actualizaciones", "`jj git push -c @` - crear marcador y hacer push (para PRs)"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hagamos push de main:"], "afterMarkdowns": ["¡El remoto ahora tiene nuestro commit!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Trabajando con remotos", "", "`jj git push --bookmark main` hace push del marcador main."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hagamos push:"], "afterMarkdowns": ["¡Listo!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Trabajando con remotos", "", "`jj git push --bookmark main` hace push del marcador main."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hagamos push:"], "afterMarkdowns": ["¡Listo!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Trabalhando com remotos", "", "`jj git clone` - clonar repo", "`jj git push --bookmark main` - enviar marcador", "`jj git fetch` - buscar atualizações", "`jj git push -c @` - criar marcador e enviar (para PRs)"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos enviar main:"], "afterMarkdowns": ["O remoto agora tem nosso commit!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Traballando con remotos", "", "`jj git push --bookmark main` fai push."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fagamos push:"], "afterMarkdowns": ["Listo!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 使用遠端", "", "`jj git clone` - 克隆倉庫", "`jj git push --bookmark main` - 推送書籤", "`jj git fetch` - 獲取更新", "`jj git push -c @` - 建立書籤並推送（用於 PR）"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["讓我們推送 main："], "afterMarkdowns": ["遠端現在有我們的提交了！"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Работа с удалёнными серверами", "", "`jj git clone` - клонировать репозиторий", "`jj git push --bookmark main` - отправить закладку", "`jj git fetch` - получить обновления", "`jj git push -c @` - создать закладку и отправить (для PR)"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Отправим main:"], "afterMarkdowns": ["Удалённый сервер теперь имеет наш коммит!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Робота з віддаленими", "", "`jj git push --bookmark main` надсилає закладку."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Надішлемо main:"], "afterMarkdowns": ["Готово!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Làm việc với remote", "", "`jj git push --bookmark main` đẩy dấu trang."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Đẩy main:"], "afterMarkdowns": ["Xong!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Lucrul cu remote-uri", "", "`jj git push --bookmark main` împinge semnul de carte."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să împingem main:"], "afterMarkdowns": ["Gata!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Delo z oddaljenimi", "", "`jj git push --bookmark main` potisne zaznamek."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Potisnimo main:"], "afterMarkdowns": ["Končano!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Praca ze zdalnymi", "", "`jj git push --bookmark main` wysyła zakładkę."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Wyślijmy main:"], "afterMarkdowns": ["Gotowe!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Lavorare con i remoti", "", "`jj git push --bookmark main` invia il segnalibro."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Inviamo main:"], "afterMarkdowns": ["Fatto!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Remote உடன் வேலை", "", "`jj git push --bookmark main` புக்மார்க்கை push செய்கிறது."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["main ஐ push செய்வோம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj git push --bookmark main`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Remote'larla çalışma", "", "`jj git push --bookmark main` yer imini gönderir."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["main'i gönderelim:"], "afterMarkdowns": ["Tamam!"], "command": "jj git push --bookmark main", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj git push --bookmark main`"]}}
      ]
    }
  }
};
