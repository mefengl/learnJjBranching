// Level 8: Bookmarks (Named Branches)
// Based on:
// - steveklabnik's "named-branches.md" - bookmark create/set, bookmarks don't auto-move
// - jj-for-everyone's "more_bookmarks.md" - push with auto-generated bookmark
//
// Key concepts from tutorials:
// 1. Bookmarks (called branches before jj 0.22) are mostly for interop
// 2. jj bookmark create <name> - create a bookmark at current change
// 3. jj bookmark set <name> - move bookmark to current change
// 4. Bookmarks don't auto-move (unlike git branches)
// 5. jj git push --change @- - auto-generate bookmark name and push
// 6. Naming conventions: main, alice/feature, push-<change_id>
//
// Key insight (from steveklabnik):
// "branches do not automatically move" - check before push, not while working

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Bookmarks",
    "de_DE": "Lesezeichen",
    "es_AR": "Marcadores",
    "es_MX": "Marcadores",
    "es_ES": "Marcadores",
    "pt_BR": "Marcadores",
    "gl": "Marcadores",
    "fr_FR": "Signets",
    "ja": "ブックマーク",
    "ko": "북마크",
    "zh_CN": "书签",
    "zh_TW": "書籤",
    "ro": "Semne de carte",
    "ru_RU": "Закладки",
    "uk": "Закладки",
    "vi": "Dấu trang",
    "sl_SI": "Zaznamki",
    "pl": "Zakładki",
    "it_IT": "Segnalibri",
    "ta_IN": "புக்மார்க்குகள்",
    "tr_TR": "Yer İmleri"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"},\"feature\":{\"target\":\"C2\",\"id\":\"feature\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"C2\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj bookmark create feature",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"C2\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj bookmark create feature' to create a bookmark named 'feature' at current change",
    "de_DE": "Verwende 'jj bookmark create feature' um ein Lesezeichen namens 'feature' zu erstellen",
    "es_AR": "Usa 'jj bookmark create feature' para crear un marcador llamado 'feature'",
    "es_MX": "Usa 'jj bookmark create feature' para crear un marcador llamado 'feature'",
    "es_ES": "Usa 'jj bookmark create feature' para crear un marcador llamado 'feature'",
    "pt_BR": "Use 'jj bookmark create feature' para criar um marcador chamado 'feature'",
    "gl": "Usa 'jj bookmark create feature' para crear un marcador chamado 'feature'",
    "fr_FR": "Utilisez 'jj bookmark create feature' pour créer un signet nommé 'feature'",
    "ja": "'jj bookmark create feature' で 'feature' という名前のブックマークを作成",
    "ko": "'jj bookmark create feature'로 'feature'라는 북마크 생성",
    "zh_CN": "使用 'jj bookmark create feature' 在当前变更创建名为 'feature' 的书签",
    "zh_TW": "使用 'jj bookmark create feature' 在當前變更建立名為 'feature' 的書籤",
    "ro": "Folosește 'jj bookmark create feature' pentru a crea un semn de carte numit 'feature'",
    "ru_RU": "Используйте 'jj bookmark create feature' для создания закладки с именем 'feature'",
    "uk": "Використайте 'jj bookmark create feature' для створення закладки з назвою 'feature'",
    "vi": "Dùng 'jj bookmark create feature' để tạo dấu trang tên 'feature'",
    "sl_SI": "Uporabi 'jj bookmark create feature' za ustvarjanje zaznamka 'feature'",
    "pl": "Użyj 'jj bookmark create feature' aby stworzyć zakładkę o nazwie 'feature'",
    "it_IT": "Usa 'jj bookmark create feature' per creare un segnalibro chiamato 'feature'",
    "ta_IN": "'jj bookmark create feature' பயன்படுத்தி 'feature' புக்மார்க் உருவாக்கவும்",
    "tr_TR": "'feature' adlı yer imi oluşturmak için 'jj bookmark create feature' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Bookmarks (Named Branches)",
              "",
              "In jj, named branches are called **bookmarks** (since version 0.22). They're mostly used for interoperability with Git and tools like GitHub.",
              "",
              "Unlike Git, **you don't need named branches for everyday work!** Anonymous branches with change IDs work great. But when sharing code, bookmarks help identify what to push.",
              "",
              "Think of bookmarks as labels you attach to changes when needed, not something you constantly manage."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Creating and Moving Bookmarks",
              "",
              "```",
              "$ jj bookmark create feature",
              "$ jj log --limit 2",
              "@  povouosx ... feature f68d1623",
              "│  my new feature",
              "```",
              "",
              "To move an existing bookmark:",
              "```",
              "$ jj bookmark set feature",
              "Moved 1 bookmarks to ...",
              "```",
              "",
              "**Important:** Bookmarks don't auto-move in jj! This is different from Git. You update them explicitly when ready to share."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Auto-Generated Bookmarks",
              "",
              "Don't want to think of a name? jj can generate one:",
              "",
              "```",
              "$ jj git push --change @-",
              "```",
              "",
              "This creates a bookmark like `push-rvpkrokuqrxt` based on the change ID. Quick and easy for sharing work-in-progress!",
              "",
              "Common naming patterns:",
              "* `main` / `trunk` - primary branch",
              "* `alice/feature` - user-prefixed feature",
              "* `push-<change_id>` - auto-generated"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's create a bookmark named 'feature' at our current change:"
            ],
            "afterMarkdowns": [
              "The bookmark 'feature' now points to C2! We can use this name to push to a remote or reference this change easily."
            ],
            "command": "jj bookmark create feature",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "You're at C2 and want to create a bookmark to share your work. Create one named 'feature':",
              "",
              "```",
              "jj bookmark create feature",
              "```",
              "",
              "Remember: bookmarks are for sharing, not for everyday navigation. Change IDs are your primary way to reference changes!"
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
              "## 书签（命名分支）",
              "",
              "在 jj 中，命名分支被称为**书签**（从版本 0.22 开始）。它们主要用于与 Git 和 GitHub 等工具的互操作。",
              "",
              "与 Git 不同，**日常工作不需要命名分支！** 带有 Change ID 的匿名分支工作得很好。但在共享代码时，书签有助于标识要推送什么。",
              "",
              "把书签看作是在需要时附加到变更上的标签，而不是你需要不断管理的东西。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 创建和移动书签",
              "",
              "```",
              "$ jj bookmark create feature",
              "$ jj log --limit 2",
              "@  povouosx ... feature f68d1623",
              "│  my new feature",
              "```",
              "",
              "移动现有书签：",
              "```",
              "$ jj bookmark set feature",
              "Moved 1 bookmarks to ...",
              "```",
              "",
              "**重要：** 书签在 jj 中不会自动移动！这与 Git 不同。你在准备好共享时显式更新它们。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自动生成的书签",
              "",
              "不想想名字？jj 可以生成一个：",
              "",
              "```",
              "$ jj git push --change @-",
              "```",
              "",
              "这会基于 change ID 创建像 `push-rvpkrokuqrxt` 这样的书签。快速方便地分享进行中的工作！",
              "",
              "常见命名模式：",
              "* `main` / `trunk` - 主分支",
              "* `alice/feature` - 用户前缀的功能",
              "* `push-<change_id>` - 自动生成"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们在当前变更创建一个名为 'feature' 的书签："
            ],
            "afterMarkdowns": [
              "书签 'feature' 现在指向 C2！我们可以用这个名字推送到远程或轻松引用这个变更。"
            ],
            "command": "jj bookmark create feature",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "你在 C2，想创建一个书签来分享你的工作。创建一个名为 'feature' 的书签：",
              "",
              "```",
              "jj bookmark create feature",
              "```",
              "",
              "记住：书签是用来共享的，不是用来日常导航的。Change ID 是你引用变更的主要方式！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Lesezeichen (Benannte Branches)", "", "Lesezeichen sind hauptsächlich für Interoperabilität. `jj bookmark create <name>` erstellt ein Lesezeichen.", "", "Lesezeichen bewegen sich NICHT automatisch wie Git-Branches!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Erstellen wir ein 'feature' Lesezeichen:"], "afterMarkdowns": ["Lesezeichen erstellt!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## ブックマーク（名前付きブランチ）", "", "ブックマークは主に相互運用性のためです。`jj bookmark create <name>`でブックマークを作成。", "", "ブックマークはGitブランチのように自動的に移動しません！"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["'feature'ブックマークを作成しましょう:"], "afterMarkdowns": ["ブックマーク作成完了！"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj bookmark create feature`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 북마크 (명명된 브랜치)", "", "북마크는 주로 상호 운용성을 위한 것입니다. `jj bookmark create <name>`으로 북마크 생성.", "", "북마크는 Git 브랜치처럼 자동으로 이동하지 않습니다!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["'feature' 북마크를 만들어봅시다:"], "afterMarkdowns": ["북마크 생성 완료!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Signets (Branches nommées)", "", "Les signets servent principalement à l'interopérabilité. `jj bookmark create <name>` crée un signet.", "", "Les signets ne se déplacent PAS automatiquement comme les branches Git !"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Créons un signet 'feature' :"], "afterMarkdowns": ["Signet créé !"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj bookmark create feature`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Marcadores (Ramas con nombre)", "", "Los marcadores son principalmente para interoperabilidad. `jj bookmark create <name>` crea un marcador.", "", "¡Los marcadores NO se mueven automáticamente como las ramas de Git!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos un marcador 'feature':"], "afterMarkdowns": ["¡Marcador creado!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Marcadores", "", "`jj bookmark create <name>` crea un marcador. No se mueven automáticamente."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos 'feature':"], "afterMarkdowns": ["¡Listo!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Marcadores", "", "`jj bookmark create <name>` crea un marcador. No se mueven automáticamente."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos 'feature':"], "afterMarkdowns": ["¡Listo!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Marcadores (Branches nomeados)", "", "Marcadores são principalmente para interoperabilidade. `jj bookmark create <name>` cria um marcador.", "", "Marcadores NÃO se movem automaticamente como branches do Git!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos criar um marcador 'feature':"], "afterMarkdowns": ["Marcador criado!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Marcadores", "", "`jj bookmark create <name>` crea un marcador."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos 'feature':"], "afterMarkdowns": ["Listo!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 書籤（命名分支）", "", "書籤主要用於互操作。`jj bookmark create <name>` 建立書籤。", "", "書籤不會像 Git 分支那樣自動移動！"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["讓我們建立 'feature' 書籤："], "afterMarkdowns": ["書籤建立完成！"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj bookmark create feature`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Закладки (Именованные ветки)", "", "Закладки в основном для совместимости. `jj bookmark create <name>` создаёт закладку.", "", "Закладки НЕ перемещаются автоматически как ветки Git!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Создадим закладку 'feature':"], "afterMarkdowns": ["Закладка создана!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Закладки", "", "`jj bookmark create <name>` створює закладку."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Створимо 'feature':"], "afterMarkdowns": ["Готово!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Dấu trang", "", "`jj bookmark create <name>` tạo dấu trang."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Tạo 'feature':"], "afterMarkdowns": ["Xong!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Semne de carte", "", "`jj bookmark create <name>` creează un semn de carte."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să creăm 'feature':"], "afterMarkdowns": ["Gata!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Zaznamki", "", "`jj bookmark create <name>` ustvari zaznamek."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Ustvarimo 'feature':"], "afterMarkdowns": ["Končano!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Zakładki", "", "`jj bookmark create <name>` tworzy zakładkę."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Stwórzmy 'feature':"], "afterMarkdowns": ["Gotowe!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Segnalibri", "", "`jj bookmark create <name>` crea un segnalibro."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creiamo 'feature':"], "afterMarkdowns": ["Fatto!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## புக்மார்க்குகள்", "", "`jj bookmark create <name>` புக்மார்க் உருவாக்குகிறது."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["'feature' உருவாக்குவோம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj bookmark create feature`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Yer İmleri", "", "`jj bookmark create <name>` yer imi oluşturur."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["'feature' oluşturalım:"], "afterMarkdowns": ["Tamam!"], "command": "jj bookmark create feature", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj bookmark create feature`"]}}
      ]
    }
  }
};
