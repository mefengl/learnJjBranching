// Level 6: The Squash Workflow
// Based on:
// - steveklabnik's "the-squash-workflow.md" - complete squash workflow
// - steveklabnik's "intro.md" in real-world-workflows - squash vs edit intro
//
// Key concepts from tutorials:
// 1. Workflow: describe work → create empty change → squash changes into parent
// 2. jj squash - moves changes from @ into parent change
// 3. Like git's index/staging area, but simpler (all on commits)
// 4. jj squash -i - interactive TUI for selective squashing
// 5. jj squash <file> - squash specific file only
// 6. jj abandon - throw away unwanted changes
// 7. More powerful than git add - works on ANY change and its parent
//
// Key insight (from steveklabnik):
// "same power, but less concepts" - index tools work on commits now
// "Simpler, but *more* powerful, thanks to orthogonality"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "The Squash Workflow",
    "de_DE": "Der Squash-Workflow",
    "es_AR": "Flujo de trabajo Squash",
    "es_MX": "Flujo de trabajo Squash",
    "es_ES": "Flujo de trabajo Squash",
    "pt_BR": "Fluxo de trabalho Squash",
    "gl": "Fluxo de traballo Squash",
    "fr_FR": "Le workflow Squash",
    "ja": "Squash ワークフロー",
    "ko": "Squash 워크플로우",
    "zh_CN": "Squash 工作流",
    "zh_TW": "Squash 工作流",
    "ro": "Workflow-ul Squash",
    "ru_RU": "Рабочий процесс Squash",
    "uk": "Робочий процес Squash",
    "vi": "Quy trình Squash",
    "sl_SI": "Squash Potek Dela",
    "pl": "Przepływ pracy Squash",
    "it_IT": "Flusso di lavoro Squash",
    "ta_IN": "Squash பணிப்பாய்வு",
    "tr_TR": "Squash İş Akışı"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj squash",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj squash' to move changes from @ into its parent",
    "de_DE": "Verwende 'jj squash' um Änderungen von @ in den Eltern zu verschieben",
    "es_AR": "Usa 'jj squash' para mover cambios de @ a su padre",
    "es_MX": "Usa 'jj squash' para mover cambios de @ a su padre",
    "es_ES": "Usa 'jj squash' para mover cambios de @ a su padre",
    "pt_BR": "Use 'jj squash' para mover mudanças de @ para seu pai",
    "gl": "Usa 'jj squash' para mover cambios de @ ao seu pai",
    "fr_FR": "Utilisez 'jj squash' pour déplacer les changements de @ vers son parent",
    "ja": "'jj squash' で @ の変更を親に移動",
    "ko": "'jj squash'로 @의 변경을 부모로 이동",
    "zh_CN": "使用 'jj squash' 将 @ 的更改移入其父变更",
    "zh_TW": "使用 'jj squash' 將 @ 的更改移入其父變更",
    "ro": "Folosește 'jj squash' pentru a muta schimbările din @ în părintele său",
    "ru_RU": "Используйте 'jj squash' для переноса изменений из @ в родителя",
    "uk": "Використайте 'jj squash' для переносу змін з @ до батька",
    "vi": "Dùng 'jj squash' để di chuyển thay đổi từ @ vào cha",
    "sl_SI": "Uporabi 'jj squash' za premik sprememb iz @ v starša",
    "pl": "Użyj 'jj squash' aby przenieść zmiany z @ do rodzica",
    "it_IT": "Usa 'jj squash' per spostare le modifiche da @ al genitore",
    "ta_IN": "'jj squash' பயன்படுத்தி @ இலிருந்து parent க்கு மாற்றங்களை நகர்த்தவும்",
    "tr_TR": "@ değişikliklerini ebeveynine taşımak için 'jj squash' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The Squash Workflow",
              "",
              "This is the workflow preferred by Martin, jj's creator. It's called the \"squash workflow\" because it uses `jj squash`.",
              "",
              "The workflow goes like this:",
              "1. **Describe** the work you want to do",
              "2. **Create** a new empty change on top",
              "3. **Squash** your changes into the parent when ready",
              "",
              "This is similar to Git's staging area - your working change is like the index, and you \"commit\" by squashing into the parent."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The `jj squash` Command",
              "",
              "",
              "`jj squash` moves all changes from `@` into its parent. After squashing:",
              "* `@` becomes empty again",
              "* Parent now contains your changes",
              "",
              "It's like `git commit -a --amend` but more flexible!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## More Squash Power",
              "",
              "You can also squash selectively:",
              "",
              "* `jj squash <file>` - squash only specific files",
              "* `jj squash -i` - interactive mode with a TUI to choose exactly what to squash",
              "",
              "This is like `git add <file>` or `git add -p`, but working on commits!",
              "",
              "As the tutorial says:",
              "> *\"Simpler, but more powerful, thanks to orthogonality\"*",
              "",
              "The squash command can work on **any** change and its parent, not just the working copy."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "We have C3 with some changes. Let's squash them into C2 (the parent):"
            ],
            "afterMarkdowns": [
              "The changes from C3 are now in C2! C3 is now empty, ready for new work."
            ],
            "command": "jj squash",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "You're at C3 with some changes. Squash them into the parent (C2):",
              "",
              "jj squash",
              "",
              "This is the core of the squash workflow - work in @, then squash when ready!"
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
              "## Squash 工作流",
              "",
              "这是 jj 创造者 Martin 偏好的工作流。它被称为 \"squash 工作流\" 因为它使用 `jj squash`。",
              "",
              "工作流程如下：",
              "1. **描述**你要做的工作",
              "2. **创建**一个新的空变更在上面",
              "3. 准备好后**压缩**你的更改到父变更",
              "",
              "这类似于 Git 的暂存区 - 你的工作变更像是索引，通过压缩到父变更来 \"提交\"。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj squash` 命令",
              "",
              "",
              "`jj squash` 将所有更改从 `@` 移入其父变更。压缩后：",
              "* `@` 再次变为空",
              "* 父变更现在包含你的更改",
              "",
              "就像 `git commit -a --amend` 但更灵活！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 更多 Squash 能力",
              "",
              "你也可以选择性地压缩：",
              "",
              "* `jj squash <file>` - 只压缩特定文件",
              "* `jj squash -i` - 交互模式，用 TUI 精确选择要压缩什么",
              "",
              "这就像 `git add <file>` 或 `git add -p`，但作用于提交！",
              "",
              "正如教程所说：",
              "> *\"更简单，但更强大，这要归功于正交性\"*",
              "",
              "squash 命令可以在**任何**变更和其父变更之间工作，不仅仅是工作副本。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我们在 C3 有一些更改。让我们把它们压缩到 C2（父变更）："
            ],
            "afterMarkdowns": [
              "C3 的更改现在在 C2 中了！C3 现在是空的，准备好做新工作。"
            ],
            "command": "jj squash",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "你在 C3，有一些更改。把它们压缩到父变更（C2）：",
              "",
              "jj squash",
              "",
              "这是 squash 工作流的核心 - 在 @ 中工作，然后准备好时压缩！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Der Squash-Workflow", "", "1. Beschreibe die Arbeit", "2. Erstelle eine leere Änderung darüber", "3. Squashe die Änderungen in den Eltern"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Der `jj squash` Befehl", "", "`jj squash` verschiebt alle Änderungen von `@` in den Eltern."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Squashen wir C3 in C2:"], "afterMarkdowns": ["C3 ist jetzt leer!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj squash`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Squashワークフロー", "", "1. 作業を説明", "2. 上に空の変更を作成", "3. 準備ができたら親にsquash"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## `jj squash` コマンド", "", "`jj squash` は `@` のすべての変更を親に移動します。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3をC2にsquashしましょう:"], "afterMarkdowns": ["C3が空になりました！"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj squash`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Squash 워크플로우", "", "1. 작업 설명", "2. 위에 빈 변경 생성", "3. 준비되면 부모로 squash"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## `jj squash` 명령", "", "`jj squash`는 `@`의 모든 변경을 부모로 이동합니다."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3를 C2로 squash합시다:"], "afterMarkdowns": ["C3가 비었습니다!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj squash`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Le workflow Squash", "", "1. Décrivez le travail", "2. Créez un nouveau changement vide au-dessus", "3. Squashez dans le parent quand prêt"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## La commande `jj squash`", "", "`jj squash` déplace tous les changements de `@` vers le parent."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Squashons C3 dans C2 :"], "afterMarkdowns": ["C3 est maintenant vide !"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj squash`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## El flujo Squash", "", "1. Describe el trabajo", "2. Crea un cambio vacío encima", "3. Haz squash al padre cuando esté listo"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## El comando `jj squash`", "", "`jj squash` mueve todos los cambios de `@` al padre."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hagamos squash de C3 a C2:"], "afterMarkdowns": ["¡C3 está vacío ahora!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj squash`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## El flujo Squash", "", "`jj squash` mueve cambios de `@` al padre."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hagamos squash:"], "afterMarkdowns": ["¡Listo!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj squash`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## El flujo Squash", "", "`jj squash` mueve cambios de `@` al padre."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hagamos squash:"], "afterMarkdowns": ["¡Listo!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj squash`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## O fluxo Squash", "", "1. Descreva o trabalho", "2. Crie uma mudança vazia acima", "3. Squash no pai quando pronto"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## O comando `jj squash`", "", "`jj squash` move todas as mudanças de `@` para o pai."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos fazer squash de C3 em C2:"], "afterMarkdowns": ["C3 está vazio agora!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj squash`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## O fluxo Squash", "", "`jj squash` move cambios de `@` ao pai."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fagamos squash:"], "afterMarkdowns": ["Listo!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj squash`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Squash 工作流", "", "1. 描述工作", "2. 在上面建立空變更", "3. 準備好時壓縮到父變更"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## `jj squash` 命令", "", "`jj squash` 將 `@` 的所有更改移入父變更。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["將 C3 壓縮到 C2："], "afterMarkdowns": ["C3 現在是空的！"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj squash`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Рабочий процесс Squash", "", "1. Опишите работу", "2. Создайте пустое изменение сверху", "3. Squash в родителя когда готово"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Команда `jj squash`", "", "`jj squash` перемещает все изменения из `@` в родителя."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Сделаем squash C3 в C2:"], "afterMarkdowns": ["C3 теперь пуст!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj squash`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Процес Squash", "", "`jj squash` переміщує зміни з `@` до батька."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Зробимо squash:"], "afterMarkdowns": ["Готово!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj squash`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Quy trình Squash", "", "`jj squash` di chuyển thay đổi từ `@` vào cha."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Squash nào:"], "afterMarkdowns": ["Xong!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj squash`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Workflow Squash", "", "`jj squash` mută schimbările din `@` în părinte."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să facem squash:"], "afterMarkdowns": ["Gata!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj squash`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Squash potek dela", "", "`jj squash` premakne spremembe iz `@` v starša."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Naredimo squash:"], "afterMarkdowns": ["Končano!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj squash`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Przepływ Squash", "", "`jj squash` przenosi zmiany z `@` do rodzica."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Zróbmy squash:"], "afterMarkdowns": ["Gotowe!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj squash`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Flusso Squash", "", "`jj squash` sposta le modifiche da `@` al genitore."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Facciamo squash:"], "afterMarkdowns": ["Fatto!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj squash`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Squash பணிப்பாய்வு", "", "`jj squash` `@` இலிருந்து parent க்கு மாற்றங்களை நகர்த்துகிறது."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Squash செய்வோம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj squash`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Squash İş Akışı", "", "`jj squash` değişiklikleri `@`'dan ebeveyne taşır."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Squash yapalım:"], "afterMarkdowns": ["Tamam!"], "command": "jj squash", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj squash`"]}}
      ]
    }
  }
};
