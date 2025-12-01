// Level 7: The Edit Workflow
// Based on:
// - steveklabnik's "the-edit-workflow.md" - complete edit workflow
//
// Key concepts from tutorials:
// 1. Workflow: create change → work → if need to split, insert change before
// 2. jj new -B @ - create new change BEFORE current one (auto rebases descendants)
// 3. jj edit <rev> - set working copy to edit a specific change
// 4. jj next --edit - move to child change and edit it
// 5. jj prev - move to parent change
// 6. Auto-rebase: "this operation will *always* succeed"
// 7. Change ID stays stable even when rebased, commit ID changes
//
// Key insight (from steveklabnik):
// "A nice thing about the flexibility of these tools is you can work with them how you'd like!"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "The Edit Workflow",
    "de_DE": "Der Edit-Workflow",
    "es_AR": "Flujo de trabajo Edit",
    "es_MX": "Flujo de trabajo Edit",
    "es_ES": "Flujo de trabajo Edit",
    "pt_BR": "Fluxo de trabalho Edit",
    "gl": "Fluxo de traballo Edit",
    "fr_FR": "Le workflow Edit",
    "ja": "Edit ワークフロー",
    "ko": "Edit 워크플로우",
    "zh_CN": "Edit 工作流",
    "zh_TW": "Edit 工作流",
    "ro": "Workflow-ul Edit",
    "ru_RU": "Рабочий процесс Edit",
    "uk": "Робочий процес Edit",
    "vi": "Quy trình Edit",
    "sl_SI": "Edit Potek Dela",
    "pl": "Przepływ pracy Edit",
    "it_IT": "Flusso di lavoro Edit",
    "ta_IN": "Edit பணிப்பாய்வு",
    "tr_TR": "Edit İş Akışı"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"C2\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj edit C2",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj edit C2' to switch to editing C2",
    "de_DE": "Verwende 'jj edit C2' um zur Bearbeitung von C2 zu wechseln",
    "es_AR": "Usa 'jj edit C2' para cambiar a editar C2",
    "es_MX": "Usa 'jj edit C2' para cambiar a editar C2",
    "es_ES": "Usa 'jj edit C2' para cambiar a editar C2",
    "pt_BR": "Use 'jj edit C2' para mudar para editar C2",
    "gl": "Usa 'jj edit C2' para cambiar a editar C2",
    "fr_FR": "Utilisez 'jj edit C2' pour passer à l'édition de C2",
    "ja": "'jj edit C2' でC2の編集に切り替え",
    "ko": "'jj edit C2'로 C2 편집으로 전환",
    "zh_CN": "使用 'jj edit C2' 切换到编辑 C2",
    "zh_TW": "使用 'jj edit C2' 切換到編輯 C2",
    "ro": "Folosește 'jj edit C2' pentru a trece la editarea lui C2",
    "ru_RU": "Используйте 'jj edit C2' для переключения на редактирование C2",
    "uk": "Використайте 'jj edit C2' для переходу до редагування C2",
    "vi": "Dùng 'jj edit C2' để chuyển sang chỉnh sửa C2",
    "sl_SI": "Uporabi 'jj edit C2' za preklop na urejanje C2",
    "pl": "Użyj 'jj edit C2' aby przełączyć na edycję C2",
    "it_IT": "Usa 'jj edit C2' per passare alla modifica di C2",
    "ta_IN": "'jj edit C2' பயன்படுத்தி C2 ஐ திருத்த மாறவும்",
    "tr_TR": "C2'yi düzenlemeye geçmek için 'jj edit C2' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The Edit Workflow",
              "",
              "Some people prefer an alternative to the squash workflow. The \"edit workflow\" uses `jj edit` to directly modify any change in history.",
              "",
              "The workflow goes like this:",
              "1. Create a new change with `jj new -m \"...\"`",
              "2. Work normally",
              "3. If you need to split work, insert a change before with `jj new -B @`",
              "4. Return to your main change with `jj edit` or `jj next --edit`"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The `jj edit` Command",
              "",
              "```",
              "$ jj edit C2",
              "Working copy now at: ootnlvpt e13b2585 my feature",
              "```",
              "",
              "`jj edit` sets your working copy to edit a specific change. Any file changes you make will modify that change directly.",
              "",
              "This is different from `jj new` which creates a *new* change. With `jj edit`, you're modifying an *existing* one."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Inserting Changes with `jj new -B`",
              "",
              "Need to split your work? Insert a change before the current one:",
              "",
              "```",
              "$ jj new -B @ -m \"refactor first\"",
              "Rebased 1 descendant commits",
              "```",
              "",
              "The `-B` flag means \"before\". jj automatically rebases all descendants - and **this always succeeds!**",
              "",
              "The Change ID stays stable even after rebase, only the Commit ID changes."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Navigation Commands",
              "",
              "* `jj next --edit` - move to child and edit it",
              "* `jj prev` - move to parent",
              "* `jj edit <rev>` - jump to any change",
              "",
              "These make it easy to move around and edit any change in your history!",
              "",
              "Choose the workflow that fits your brain - jj is flexible!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "We're at C3 but want to edit C2. Let's use `jj edit`:"
            ],
            "afterMarkdowns": [
              "Now we're editing C2! Any changes we make will modify C2 directly, not create a new commit."
            ],
            "command": "jj edit C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "You're at C3 but need to edit C2. Switch to editing it:",
              "",
              "```",
              "jj edit C2",
              "```",
              "",
              "This is the core of the edit workflow - jump around and edit any change directly!"
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
              "## Edit 工作流",
              "",
              "有些人更喜欢 squash 工作流的替代方案。\"edit 工作流\" 使用 `jj edit` 直接修改历史中的任何变更。",
              "",
              "工作流程如下：",
              "1. 用 `jj new -m \"...\"` 创建新变更",
              "2. 正常工作",
              "3. 如果需要拆分工作，用 `jj new -B @` 在之前插入变更",
              "4. 用 `jj edit` 或 `jj next --edit` 返回主变更"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj edit` 命令",
              "",
              "```",
              "$ jj edit C2",
              "Working copy now at: ootnlvpt e13b2585 my feature",
              "```",
              "",
              "`jj edit` 设置你的工作副本来编辑特定变更。你做的任何文件更改都会直接修改那个变更。",
              "",
              "这与 `jj new` 不同，后者创建*新*变更。用 `jj edit`，你是在修改*现有*的变更。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 用 `jj new -B` 插入变更",
              "",
              "需要拆分你的工作？在当前变更之前插入一个：",
              "",
              "```",
              "$ jj new -B @ -m \"refactor first\"",
              "Rebased 1 descendant commits",
              "```",
              "",
              "`-B` 标志意思是 \"之前\"。jj 自动变基所有后代 - 而且**这总是成功的！**",
              "",
              "Change ID 在变基后保持稳定，只有 Commit ID 改变。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 导航命令",
              "",
              "* `jj next --edit` - 移动到子变更并编辑它",
              "* `jj prev` - 移动到父变更",
              "* `jj edit <rev>` - 跳转到任何变更",
              "",
              "这些让你可以轻松地在历史中移动和编辑任何变更！",
              "",
              "选择适合你思维方式的工作流 - jj 是灵活的！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我们在 C3 但想编辑 C2。让我们使用 `jj edit`："
            ],
            "afterMarkdowns": [
              "现在我们在编辑 C2！我们做的任何更改都会直接修改 C2，而不是创建新提交。"
            ],
            "command": "jj edit C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "你在 C3 但需要编辑 C2。切换到编辑它：",
              "",
              "```",
              "jj edit C2",
              "```",
              "",
              "这是 edit 工作流的核心 - 跳转并直接编辑任何变更！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Der Edit-Workflow", "", "1. Erstelle eine neue Änderung mit `jj new -m \"...\"`", "2. Arbeite normal", "3. Bei Bedarf: teile mit `jj new -B @`", "4. Kehre zurück mit `jj edit` oder `jj next --edit`"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Der `jj edit` Befehl", "", "`jj edit` setzt deine Arbeitskopie auf eine bestimmte Änderung."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Wir sind bei C3, wollen aber C2 bearbeiten:"], "afterMarkdowns": ["Jetzt bearbeiten wir C2!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj edit C2`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Editワークフロー", "", "1. `jj new -m \"...\"`で新しい変更を作成", "2. 通常通り作業", "3. 必要なら`jj new -B @`で分割", "4. `jj edit`または`jj next --edit`で戻る"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## `jj edit` コマンド", "", "`jj edit`は特定の変更を編集するよう作業コピーを設定します。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3にいますがC2を編集したい:"], "afterMarkdowns": ["C2を編集中！"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj edit C2`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Edit 워크플로우", "", "1. `jj new -m \"...\"`로 새 변경 생성", "2. 평소처럼 작업", "3. 필요시 `jj new -B @`로 분할", "4. `jj edit` 또는 `jj next --edit`로 돌아가기"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## `jj edit` 명령", "", "`jj edit`는 특정 변경을 편집하도록 작업 복사본을 설정합니다."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3에 있지만 C2를 편집하고 싶습니다:"], "afterMarkdowns": ["이제 C2를 편집 중!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj edit C2`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Le workflow Edit", "", "1. Créez un changement avec `jj new -m \"...\"`", "2. Travaillez normalement", "3. Si besoin, divisez avec `jj new -B @`", "4. Revenez avec `jj edit` ou `jj next --edit`"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## La commande `jj edit`", "", "`jj edit` configure votre copie de travail pour éditer un changement spécifique."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Nous sommes à C3 mais voulons éditer C2 :"], "afterMarkdowns": ["Maintenant nous éditons C2 !"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj edit C2`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## El flujo Edit", "", "1. Crea un cambio con `jj new -m \"...\"`", "2. Trabaja normalmente", "3. Si es necesario, divide con `jj new -B @`", "4. Vuelve con `jj edit` o `jj next --edit`"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## El comando `jj edit`", "", "`jj edit` configura tu copia de trabajo para editar un cambio específico."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Estamos en C3 pero queremos editar C2:"], "afterMarkdowns": ["¡Ahora estamos editando C2!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj edit C2`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## El flujo Edit", "", "`jj edit` te permite editar cualquier cambio directamente."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Editemos C2:"], "afterMarkdowns": ["¡Listo!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj edit C2`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## El flujo Edit", "", "`jj edit` te permite editar cualquier cambio directamente."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Editemos C2:"], "afterMarkdowns": ["¡Listo!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj edit C2`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## O fluxo Edit", "", "1. Crie uma mudança com `jj new -m \"...\"`", "2. Trabalhe normalmente", "3. Se precisar, divida com `jj new -B @`", "4. Volte com `jj edit` ou `jj next --edit`"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## O comando `jj edit`", "", "`jj edit` configura sua cópia de trabalho para editar uma mudança específica."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Estamos em C3 mas queremos editar C2:"], "afterMarkdowns": ["Agora estamos editando C2!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj edit C2`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## O fluxo Edit", "", "`jj edit` permíteche editar calquera cambio directamente."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Editemos C2:"], "afterMarkdowns": ["Listo!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj edit C2`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Edit 工作流", "", "1. 用 `jj new -m \"...\"` 建立新變更", "2. 正常工作", "3. 需要時用 `jj new -B @` 拆分", "4. 用 `jj edit` 或 `jj next --edit` 返回"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## `jj edit` 命令", "", "`jj edit` 設定工作副本以編輯特定變更。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["我們在 C3 但想編輯 C2："], "afterMarkdowns": ["現在在編輯 C2！"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj edit C2`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Рабочий процесс Edit", "", "1. Создайте изменение с `jj new -m \"...\"`", "2. Работайте как обычно", "3. При необходимости разделите с `jj new -B @`", "4. Вернитесь с `jj edit` или `jj next --edit`"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Команда `jj edit`", "", "`jj edit` устанавливает рабочую копию для редактирования конкретного изменения."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Мы на C3, но хотим редактировать C2:"], "afterMarkdowns": ["Теперь редактируем C2!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj edit C2`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Процес Edit", "", "`jj edit` дозволяє редагувати будь-яку зміну напряму."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Відредагуємо C2:"], "afterMarkdowns": ["Готово!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj edit C2`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Quy trình Edit", "", "`jj edit` cho phép chỉnh sửa trực tiếp bất kỳ thay đổi nào."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Chỉnh sửa C2:"], "afterMarkdowns": ["Xong!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj edit C2`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Workflow Edit", "", "`jj edit` îți permite să editezi direct orice schimbare."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să edităm C2:"], "afterMarkdowns": ["Gata!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj edit C2`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Edit potek dela", "", "`jj edit` omogoča neposredno urejanje katere koli spremembe."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Uredimo C2:"], "afterMarkdowns": ["Končano!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj edit C2`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Przepływ Edit", "", "`jj edit` pozwala bezpośrednio edytować dowolną zmianę."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Edytujmy C2:"], "afterMarkdowns": ["Gotowe!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj edit C2`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Flusso Edit", "", "`jj edit` permette di modificare direttamente qualsiasi modifica."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Modifichiamo C2:"], "afterMarkdowns": ["Fatto!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj edit C2`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Edit பணிப்பாய்வு", "", "`jj edit` எந்த மாற்றத்தையும் நேரடியாக திருத்த அனுமதிக்கிறது."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C2 ஐ திருத்துவோம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj edit C2`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Edit İş Akışı", "", "`jj edit` herhangi bir değişikliği doğrudan düzenlemenizi sağlar."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C2'yi düzenleyelim:"], "afterMarkdowns": ["Tamam!"], "command": "jj edit C2", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj edit C2`"]}}
      ]
    }
  }
};
