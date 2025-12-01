// Level 2: Describing Changes with jj describe
// Based on:
// - steveklabnik's "describing-commits.md" - core jj describe usage
// - steveklabnik's "creating-new-changes.md" - describe before making changes
// - jj-for-everyone's "commit.md" - jj commit = describe + new, message structure
// - official tutorial.md - describe then edit workflow
//
// Key concepts from tutorials:
// 1. jj describe -m "message" - simple inline description
// 2. jj describe - opens editor for longer descriptions
// 3. Change ID stays same, Commit ID changes - core value of dual ID system
// 4. Can describe at ANY time - before, during, or after making changes
// 5. Description structure: subject + blank line + body
// 6. JJ: lines are comments and ignored
// 7. jj commit = jj describe + jj new (shortcut)
//
// Workflow insight (from steveklabnik):
// "I'm going to describe things first, before I make any changes"
// This is more flexible than git's "write message when committing"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Describing Changes",
    "de_DE": "Änderungen beschreiben",
    "es_AR": "Describir Cambios",
    "es_MX": "Describir Cambios",
    "es_ES": "Describir Cambios",
    "pt_BR": "Descrevendo Mudanças",
    "gl": "Describir Cambios",
    "fr_FR": "Décrire les Changements",
    "ja": "変更を説明する",
    "ko": "변경 설명하기",
    "zh_CN": "描述变更",
    "zh_TW": "描述變更",
    "ro": "Descrierea Schimbărilor",
    "ru_RU": "Описание изменений",
    "uk": "Опис змін",
    "vi": "Mô Tả Thay Đổi",
    "sl_SI": "Opisovanje Sprememb",
    "pl": "Opisywanie Zmian",
    "it_IT": "Descrivere le Modifiche",
    "ta_IN": "மாற்றங்களை விவரித்தல்",
    "tr_TR": "Değişiklikleri Açıklama"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C2\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj describe -m \"my change\";jj new",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj describe -m \"message\"' to add a description, then 'jj new' to start fresh",
    "de_DE": "Verwende 'jj describe -m \"message\"' um eine Beschreibung hinzuzufügen, dann 'jj new' um neu zu starten",
    "es_AR": "Usa 'jj describe -m \"message\"' para agregar una descripción, luego 'jj new' para empezar de nuevo",
    "es_MX": "Usa 'jj describe -m \"message\"' para agregar una descripción, luego 'jj new' para empezar de nuevo",
    "es_ES": "Usa 'jj describe -m \"message\"' para añadir una descripción, luego 'jj new' para empezar de nuevo",
    "pt_BR": "Use 'jj describe -m \"message\"' para adicionar uma descrição, depois 'jj new' para começar do zero",
    "gl": "Usa 'jj describe -m \"message\"' para engadir unha descrición, logo 'jj new' para comezar de novo",
    "fr_FR": "Utilisez 'jj describe -m \"message\"' pour ajouter une description, puis 'jj new' pour repartir à zéro",
    "ja": "'jj describe -m \"message\"' で説明を追加し、'jj new' で新しく始める",
    "ko": "'jj describe -m \"message\"'로 설명 추가, 그다음 'jj new'로 새로 시작",
    "zh_CN": "使用 'jj describe -m \"message\"' 添加描述，然后 'jj new' 开始新工作",
    "zh_TW": "使用 'jj describe -m \"message\"' 添加描述，然後 'jj new' 開始新工作",
    "ro": "Folosește 'jj describe -m \"message\"' pentru a adăuga o descriere, apoi 'jj new' pentru a începe din nou",
    "ru_RU": "Используйте 'jj describe -m \"message\"' для добавления описания, затем 'jj new' для нового начала",
    "uk": "Використайте 'jj describe -m \"message\"' для опису, потім 'jj new' для нового початку",
    "vi": "Dùng 'jj describe -m \"message\"' để thêm mô tả, rồi 'jj new' để bắt đầu mới",
    "sl_SI": "Uporabi 'jj describe -m \"message\"' za opis, nato 'jj new' za nov začetek",
    "pl": "Użyj 'jj describe -m \"message\"' aby dodać opis, potem 'jj new' aby zacząć od nowa",
    "it_IT": "Usa 'jj describe -m \"message\"' per aggiungere una descrizione, poi 'jj new' per ricominciare",
    "ta_IN": "'jj describe -m \"message\"' விளக்கம் சேர்க்க, பின் 'jj new' புதிதாக தொடங்க",
    "tr_TR": "Açıklama eklemek için 'jj describe -m \"message\"', yeni başlamak için 'jj new' kullanın"
  },
  "disabledMap": {
    "git commit": true
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Describing Your Changes",
              "",
              "While we can refer to changes by their change ID, that's not always great for humans. We need descriptions!",
              "",
              "In jj, you use `jj describe` to give your change a human-readable description.",
              "",
              "The simplest way is with the `-m` flag:",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "Working copy now at: kntqzsqt e427edcf (empty) Say goodbye",
              "```",
              "",
              "Notice something important: the **Change ID** (`kntqzsqt`) stayed the same, but the **Commit ID** changed! This is the power of jj's dual ID system - you can evolve your commit while keeping a stable reference."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Describe Anytime!",
              "",
              "One of jj's most flexible features: you can describe your change **at any time**.",
              "",
              "* **Before** making changes: plan what you'll do",
              "* **During** changes: update as you work",  
              "* **After** changes: summarize what you did",
              "",
              "From steveklabnik's tutorial:",
              "> *\"I'm going to describe things first, before I make any changes\"*",
              "",
              "This is different from Git, where you write your message only when committing. In jj, descriptions are completely decoupled from the act of creating changes."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The `jj commit` Shortcut",
              "",
              "There's a convenient command that combines describe and new:",
              "",
              "```",
              "jj commit -m \"my message\"",
              "```",
              "",
              "This is equivalent to:",
              "```",
              "jj describe -m \"my message\"",
              "jj new",
              "```",
              "",
              "Use whichever feels more natural to you!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see `jj describe` in action. We'll describe our current change:"
            ],
            "afterMarkdowns": [
              "Our change now has a description! The Change ID is the same, but the Commit ID updated to reflect the new content."
            ],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "To complete this level:",
              "",
              "1. Describe your current change with `jj describe -m \"my change\"`",
              "2. Start a new change with `jj new`",
              "",
              "Or use the shortcut: `jj commit -m \"my change\"`",
              "",
              "Remember: good descriptions help you and others understand the project's evolution!"
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
              "## 描述你的变更",
              "",
              "虽然我们可以用 Change ID 来引用变更，但这对人类来说不太友好。我们需要描述！",
              "",
              "在 jj 中，你使用 `jj describe` 来给变更添加人类可读的描述。",
              "",
              "最简单的方式是使用 `-m` 标志：",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "Working copy now at: kntqzsqt e427edcf (empty) Say goodbye",
              "```",
              "",
              "注意一个重要的事情：**Change ID** (`kntqzsqt`) 保持不变，但 **Commit ID** 改变了！这就是 jj 双 ID 系统的威力 - 你可以演进你的提交，同时保持一个稳定的引用。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 随时描述！",
              "",
              "jj 最灵活的特性之一：你可以在**任何时候**描述你的变更。",
              "",
              "* **之前**做更改：计划你要做什么",
              "* **期间**做更改：随着工作更新描述",
              "* **之后**做更改：总结你做了什么",
              "",
              "来自 steveklabnik 的教程：",
              "> *\"我打算先描述，然后再做任何更改\"*",
              "",
              "这与 Git 不同，在 Git 中你只在提交时写消息。在 jj 中，描述与创建变更的行为完全解耦。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj commit` 快捷方式",
              "",
              "有一个方便的命令结合了 describe 和 new：",
              "",
              "```",
              "jj commit -m \"my message\"",
              "```",
              "",
              "这等价于：",
              "```",
              "jj describe -m \"my message\"",
              "jj new",
              "```",
              "",
              "使用你觉得更自然的那个！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们看看 `jj describe` 的实际效果。我们来描述当前的变更："
            ],
            "afterMarkdowns": [
              "我们的变更现在有描述了！Change ID 保持不变，但 Commit ID 更新以反映新内容。"
            ],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "要完成这个关卡：",
              "",
              "1. 用 `jj describe -m \"my change\"` 描述你当前的变更",
              "2. 用 `jj new` 开始一个新变更",
              "",
              "或者使用快捷方式：`jj commit -m \"my change\"`",
              "",
              "记住：好的描述能帮助你和其他人理解项目的演进！"
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
              "## Änderungen beschreiben",
              "",
              "In jj verwendest du `jj describe` um deiner Änderung eine menschenlesbare Beschreibung zu geben.",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "Wichtig: Die **Change ID** bleibt gleich, aber die **Commit ID** ändert sich!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Jederzeit beschreiben!",
              "",
              "Du kannst deine Änderung **jederzeit** beschreiben:",
              "* **Vor** Änderungen: plane was du tun wirst",
              "* **Während** Änderungen: aktualisiere während der Arbeit",
              "* **Nach** Änderungen: fasse zusammen was du getan hast"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Die `jj commit` Abkürzung",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Beschreiben wir unsere aktuelle Änderung:"],
            "afterMarkdowns": ["Unsere Änderung hat jetzt eine Beschreibung!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Probiere es!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## 変更を説明する",
              "",
              "jjでは`jj describe`を使って変更に説明を追加します。",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "重要：**Change ID**は同じままですが、**Commit ID**は変わります！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## いつでも説明可能！",
              "",
              "変更を**いつでも**説明できます：",
              "* 変更**前**：計画を立てる",
              "* 変更**中**：作業しながら更新",
              "* 変更**後**：やったことをまとめる"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj commit` ショートカット",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["現在の変更を説明しましょう:"],
            "afterMarkdowns": ["変更に説明がつきました！"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## やってみよう！", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## 변경 설명하기",
              "",
              "jj에서는 `jj describe`로 변경에 설명을 추가합니다.",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "중요: **Change ID**는 그대로지만, **Commit ID**는 바뀝니다!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 언제든 설명 가능!",
              "",
              "변경을 **언제든** 설명할 수 있습니다:",
              "* 변경 **전**: 계획 세우기",
              "* 변경 **중**: 작업하면서 업데이트",
              "* 변경 **후**: 한 일 요약"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj commit` 단축키",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["현재 변경을 설명해봅시다:"],
            "afterMarkdowns": ["변경에 설명이 추가되었습니다!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 해보세요!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## Décrire vos changements",
              "",
              "Dans jj, utilisez `jj describe` pour donner une description lisible à votre changement.",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "Important : le **Change ID** reste le même, mais le **Commit ID** change !"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Décrivez à tout moment !",
              "",
              "Vous pouvez décrire votre changement **à tout moment** :",
              "* **Avant** : planifier ce que vous ferez",
              "* **Pendant** : mettre à jour en travaillant",
              "* **Après** : résumer ce que vous avez fait"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Le raccourci `jj commit`",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Décrivons notre changement actuel :"],
            "afterMarkdowns": ["Notre changement a maintenant une description !"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Essayez !", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## Describiendo tus cambios",
              "",
              "En jj, usas `jj describe` para dar a tu cambio una descripción legible.",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "Importante: el **Change ID** se mantiene igual, ¡pero el **Commit ID** cambia!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¡Describe en cualquier momento!",
              "",
              "Puedes describir tu cambio **en cualquier momento**:",
              "* **Antes**: planifica lo que harás",
              "* **Durante**: actualiza mientras trabajas",
              "* **Después**: resume lo que hiciste"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## El atajo `jj commit`",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Describamos nuestro cambio actual:"],
            "afterMarkdowns": ["¡Nuestro cambio ahora tiene una descripción!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Describiendo cambios", "", "En jj, usás `jj describe` para dar una descripción."]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## El atajo `jj commit`", "", "`jj commit -m \"message\"` = describe + new"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Describamos nuestro cambio:"],
            "afterMarkdowns": ["¡Listo!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Probalo!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "es_MX": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Describiendo cambios", "", "En jj, usas `jj describe` para dar una descripción."]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## El atajo `jj commit`", "", "`jj commit -m \"message\"` = describe + new"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Describamos nuestro cambio:"],
            "afterMarkdowns": ["¡Listo!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## Descrevendo suas mudanças",
              "",
              "No jj, você usa `jj describe` para dar uma descrição legível à sua mudança.",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "Importante: o **Change ID** permanece o mesmo, mas o **Commit ID** muda!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Descreva a qualquer momento!",
              "",
              "Você pode descrever sua mudança **a qualquer momento**:",
              "* **Antes**: planeje o que fará",
              "* **Durante**: atualize enquanto trabalha",
              "* **Depois**: resuma o que fez"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## O atalho `jj commit`",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Vamos descrever nossa mudança atual:"],
            "afterMarkdowns": ["Nossa mudança agora tem uma descrição!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Tente!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Describindo cambios", "", "En jj, usa `jj describe` para dar unha descrición."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Describamos o noso cambio:"],
            "afterMarkdowns": ["Listo!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Próbao!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## 描述你的變更",
              "",
              "在 jj 中，你使用 `jj describe` 來給變更添加人類可讀的描述。",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "重要：**Change ID** 保持不變，但 **Commit ID** 改變了！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 隨時描述！",
              "",
              "你可以在**任何時候**描述你的變更：",
              "* **之前**：計劃你要做什麼",
              "* **期間**：隨著工作更新描述",
              "* **之後**：總結你做了什麼"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj commit` 快捷方式",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["讓我們描述當前的變更："],
            "afterMarkdowns": ["變更現在有描述了！"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 試試看！", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
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
              "## Описание изменений",
              "",
              "В jj используйте `jj describe` для добавления читаемого описания.",
              "",
              "```",
              "$ jj describe -m \"Say goodbye\"",
              "```",
              "",
              "Важно: **Change ID** остаётся прежним, но **Commit ID** меняется!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Описывайте в любое время!",
              "",
              "Вы можете описать изменение **в любой момент**:",
              "* **До**: планируйте что будете делать",
              "* **Во время**: обновляйте по ходу работы",
              "* **После**: подведите итог"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Сокращение `jj commit`",
              "",
              "`jj commit -m \"message\"` = `jj describe -m \"message\"` + `jj new`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Опишем наше текущее изменение:"],
            "afterMarkdowns": ["Теперь у изменения есть описание!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Попробуйте!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "uk": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Опис змін", "", "В jj використовуйте `jj describe` для опису."]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Скорочення `jj commit`", "", "`jj commit -m \"message\"` = describe + new"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Опишемо нашу зміну:"],
            "afterMarkdowns": ["Готово!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Спробуйте!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Mô tả thay đổi", "", "Dùng `jj describe` để thêm mô tả."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Mô tả thay đổi của chúng ta:"],
            "afterMarkdowns": ["Xong!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Thử đi!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Descrierea schimbărilor", "", "Folosește `jj describe` pentru a adăuga o descriere."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Să descriem schimbarea noastră:"],
            "afterMarkdowns": ["Gata!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Încearcă!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Opisovanje sprememb", "", "Uporabi `jj describe` za dodajanje opisa."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Opišimo našo spremembo:"],
            "afterMarkdowns": ["Končano!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Poskusi!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Opisywanie zmian", "", "Użyj `jj describe` aby dodać opis."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Opiszmy naszą zmianę:"],
            "afterMarkdowns": ["Gotowe!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Spróbuj!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Descrivere le modifiche", "", "Usa `jj describe` per aggiungere una descrizione."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Descriviamo la nostra modifica:"],
            "afterMarkdowns": ["Fatto!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Prova!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "ta_IN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## மாற்றங்களை விவரித்தல்", "", "`jj describe` பயன்படுத்தி விளக்கம் சேர்க்கவும்."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["நமது மாற்றத்தை விவரிப்போம்:"],
            "afterMarkdowns": ["முடிந்தது!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## முயற்சிக்கவும்!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Değişiklikleri açıklama", "", "Açıklama eklemek için `jj describe` kullanın."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Değişikliğimizi açıklayalım:"],
            "afterMarkdowns": ["Tamam!"],
            "command": "jj describe -m \"hello world\"",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Deneyin!", "", "1. `jj describe -m \"my change\"`", "2. `jj new`"]
          }
        }
      ]
    }
  }
};
