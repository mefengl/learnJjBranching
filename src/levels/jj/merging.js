// Level 4: Merging with jj new
// Based on:
// - steveklabnik's "merging.md" - jj new with multiple parents, no special merge command
// - jj-for-everyone's "branch.md" - merge to combine Alice and Bob's work
//
// Key concepts from tutorials:
// 1. jj new A B - creates merge commit with two parents
// 2. Can merge 3+ branches at once: jj new A B C
// 3. No special merge command needed - jj new handles it all
// 4. Theme: "simpler can also be more powerful" - fewer commands, more functionality
// 5. jj merge is deprecated since 0.14.0
//
// Key insight (from steveklabnik):
// "jj has eliminated the need for an entire command but not lost any functionality"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Merging Changes",
    "de_DE": "Änderungen zusammenführen",
    "es_AR": "Fusionando Cambios",
    "es_MX": "Fusionando Cambios",
    "es_ES": "Fusionando Cambios",
    "pt_BR": "Mesclando Mudanças",
    "gl": "Fusionando Cambios",
    "fr_FR": "Fusionner les Changements",
    "ja": "変更をマージする",
    "ko": "변경 병합하기",
    "zh_CN": "合并变更",
    "zh_TW": "合併變更",
    "ro": "Combinarea Schimbărilor",
    "ru_RU": "Слияние изменений",
    "uk": "Злиття змін",
    "vi": "Gộp Thay Đổi",
    "sl_SI": "Združevanje Sprememb",
    "pl": "Łączenie Zmian",
    "it_IT": "Unione delle Modifiche",
    "ta_IN": "மாற்றங்களை இணைத்தல்",
    "tr_TR": "Değişiklikleri Birleştirme"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"C4\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj new C2 C3",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj new C2 C3' to create a merge commit with both as parents",
    "de_DE": "Verwende 'jj new C2 C3' um einen Merge-Commit mit beiden als Eltern zu erstellen",
    "es_AR": "Usa 'jj new C2 C3' para crear un commit de fusión con ambos como padres",
    "es_MX": "Usa 'jj new C2 C3' para crear un commit de fusión con ambos como padres",
    "es_ES": "Usa 'jj new C2 C3' para crear un commit de fusión con ambos como padres",
    "pt_BR": "Use 'jj new C2 C3' para criar um commit de merge com ambos como pais",
    "gl": "Usa 'jj new C2 C3' para crear un commit de fusión con ambos como pais",
    "fr_FR": "Utilisez 'jj new C2 C3' pour créer un commit de fusion avec les deux comme parents",
    "ja": "'jj new C2 C3' で両方を親とするマージコミットを作成",
    "ko": "'jj new C2 C3'로 둘 다 부모로 하는 병합 커밋 생성",
    "zh_CN": "使用 'jj new C2 C3' 创建一个以两者为父变更的合并提交",
    "zh_TW": "使用 'jj new C2 C3' 建立一個以兩者為父變更的合併提交",
    "ro": "Folosește 'jj new C2 C3' pentru a crea un commit de merge cu ambele ca părinți",
    "ru_RU": "Используйте 'jj new C2 C3' для создания коммита слияния с обоими как родителями",
    "uk": "Використайте 'jj new C2 C3' для створення коміту злиття з обома як батьками",
    "vi": "Dùng 'jj new C2 C3' để tạo commit merge với cả hai làm cha",
    "sl_SI": "Uporabi 'jj new C2 C3' za ustvarjanje merge commita z obema kot staršema",
    "pl": "Użyj 'jj new C2 C3' aby stworzyć commit merge z oboma jako rodzicami",
    "it_IT": "Usa 'jj new C2 C3' per creare un commit di merge con entrambi come genitori",
    "ta_IN": "'jj new C2 C3' பயன்படுத்தி இரண்டையும் parent ஆக கொண்ட merge commit உருவாக்கவும்",
    "tr_TR": "Her ikisini de ebeveyn olarak alan bir merge commit oluşturmak için 'jj new C2 C3' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Merging in jj",
              "",
              "In Git, you use `git merge` to combine branches. But wait - jj doesn't have a merge command! How do we merge?",
              "",
              "Think about it: **what is a merge?** It's simply a new change that has more than one parent.",
              "",
              "And how do we make new changes? With `jj new`!",
              "",
              "```",
              "$ jj new C2 C3 -m \"merge both features\"",
              "Working copy now at: rxzyvnkx f1c1bde8 (empty) merge both features",
              "Parent commit      : pzoqtwuv 9353442b (empty) feature one",
              "Parent commit      : yykpmnuq 210283e8 (empty) feature two",
              "```",
              "",
              "Just pass multiple parents to `jj new`. That's it!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Simpler AND More Powerful",
              "",
              "This is a recurring theme in jj: **fewer commands, but each is more flexible**.",
              "",
              "With `jj new`, you can even merge 3 or more branches at once:",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```",
              "",
              "Try doing that easily in Git!",
              "",
              "As Steve Klabnik notes:",
              "> *\"jj has eliminated the need for an entire command but not lost any functionality.\"*"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "We have two branches (C2 and C3) from the same parent. Let's merge them by creating a new change with both as parents:"
            ],
            "afterMarkdowns": [
              "A merge commit! Notice C4 has two parent lines connecting to both C2 and C3. The branches are now combined."
            ],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "We have two branches: C2 and C3, both from C1.",
              "",
              "Merge them by creating a new change with both as parents:",
              "",
              "```",
              "jj new C2 C3",
              "```",
              "",
              "No special merge command needed - just create a new change with multiple parents!"
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
              "## jj 中的合并",
              "",
              "在 Git 中，你使用 `git merge` 来合并分支。但等等 - jj 没有 merge 命令！我们怎么合并？",
              "",
              "想想看：**什么是合并？** 它只是一个有多个父变更的新变更。",
              "",
              "我们如何创建新变更？用 `jj new`！",
              "",
              "```",
              "$ jj new C2 C3 -m \"merge both features\"",
              "Working copy now at: rxzyvnkx f1c1bde8 (empty) merge both features",
              "Parent commit      : pzoqtwuv 9353442b (empty) feature one",
              "Parent commit      : yykpmnuq 210283e8 (empty) feature two",
              "```",
              "",
              "只需给 `jj new` 传递多个父变更。就这样！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 更简单且更强大",
              "",
              "这是 jj 反复出现的主题：**更少的命令，但每个都更灵活**。",
              "",
              "使用 `jj new`，你甚至可以一次合并 3 个或更多分支：",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```",
              "",
              "试试在 Git 中轻松做到这一点！",
              "",
              "正如 Steve Klabnik 所说：",
              "> *\"jj 消除了对整个命令的需求，但没有丢失任何功能。\"*"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我们有两个分支（C2 和 C3）来自同一父变更。让我们通过创建一个以两者为父变更的新变更来合并它们："
            ],
            "afterMarkdowns": [
              "一个合并提交！注意 C4 有两条父变更线分别连接到 C2 和 C3。分支现在合并了。"
            ],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "我们有两个分支：C2 和 C3，都来自 C1。",
              "",
              "通过创建一个以两者为父变更的新变更来合并它们：",
              "",
              "```",
              "jj new C2 C3",
              "```",
              "",
              "不需要专门的 merge 命令 - 只需创建一个有多个父变更的新变更！"
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
              "## Zusammenführen in jj",
              "",
              "In Git verwendest du `git merge` um Branches zusammenzuführen. Aber jj hat keinen merge-Befehl!",
              "",
              "Denk darüber nach: **Was ist ein Merge?** Es ist einfach eine neue Änderung mit mehr als einem Eltern.",
              "",
              "Übergib einfach mehrere Eltern an `jj new`. Das war's!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Einfacher UND mächtiger",
              "",
              "Mit `jj new` kannst du sogar 3 oder mehr Branches auf einmal zusammenführen:",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Wir haben zwei Branches (C2 und C3). Lass sie uns zusammenführen:"],
            "afterMarkdowns": ["Ein Merge-Commit! C4 hat zwei Eltern-Linien."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Probiere es!", "", "Führe C2 und C3 zusammen mit `jj new C2 C3`"]
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
              "## jjでのマージ",
              "",
              "Gitでは`git merge`でブランチを結合します。でもjjにはmergeコマンドがありません！",
              "",
              "考えてみてください：**マージとは何？** 複数の親を持つ新しい変更です。",
              "",
              "`jj new`に複数の親を渡すだけです。それだけ！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## シンプルかつパワフル",
              "",
              "`jj new`で3つ以上のブランチを一度にマージできます：",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["C2とC3の2つのブランチがあります。マージしましょう："],
            "afterMarkdowns": ["マージコミット！C4には2本の親ラインがあります。"],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## やってみよう！", "", "`jj new C2 C3`でC2とC3をマージしてください"]
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
              "## jj에서 병합하기",
              "",
              "Git에서는 `git merge`로 브랜치를 합칩니다. 하지만 jj에는 merge 명령이 없습니다!",
              "",
              "생각해보세요: **병합이란 무엇인가?** 단순히 여러 부모를 가진 새 변경입니다.",
              "",
              "`jj new`에 여러 부모를 전달하면 됩니다. 그게 다예요!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 더 간단하고 더 강력하게",
              "",
              "`jj new`로 3개 이상의 브랜치를 한 번에 병합할 수 있습니다:",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["C2와 C3 두 브랜치가 있습니다. 병합해봅시다:"],
            "afterMarkdowns": ["병합 커밋! C4에는 두 개의 부모 라인이 있습니다."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 해보세요!", "", "`jj new C2 C3`로 C2와 C3를 병합하세요"]
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
              "## Fusionner dans jj",
              "",
              "Dans Git, on utilise `git merge`. Mais jj n'a pas de commande merge !",
              "",
              "Réfléchissez : **qu'est-ce qu'un merge ?** C'est simplement un nouveau changement avec plusieurs parents.",
              "",
              "Passez plusieurs parents à `jj new`. C'est tout !"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Plus simple ET plus puissant",
              "",
              "Avec `jj new`, vous pouvez fusionner 3 branches ou plus en une fois :",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Nous avons deux branches (C2 et C3). Fusionnons-les :"],
            "afterMarkdowns": ["Un commit de fusion ! C4 a deux lignes de parents."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Essayez !", "", "Fusionnez C2 et C3 avec `jj new C2 C3`"]
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
              "## Fusionando en jj",
              "",
              "En Git, usas `git merge`. ¡Pero jj no tiene comando merge!",
              "",
              "Piénsalo: **¿qué es un merge?** Simplemente un nuevo cambio con más de un padre.",
              "",
              "Pasa múltiples padres a `jj new`. ¡Eso es todo!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Más simple Y más potente",
              "",
              "Con `jj new`, puedes fusionar 3 o más ramas a la vez:",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Tenemos dos ramas (C2 y C3). Fusionémoslas:"],
            "afterMarkdowns": ["¡Un commit de fusión! C4 tiene dos líneas de padres."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "Fusiona C2 y C3 con `jj new C2 C3`"]
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
              "## Fusionando en jj",
              "",
              "En Git, usás `git merge`. ¡Pero jj no tiene comando merge!",
              "",
              "Pensalo: **¿qué es un merge?** Simplemente un nuevo cambio con más de un padre."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Más simple Y más potente", "", "Con `jj new`, podés fusionar 3 o más ramas a la vez."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Tenemos dos ramas. Fusionémoslas:"],
            "afterMarkdowns": ["¡Un commit de fusión!"],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Probalo!", "", "Fusioná C2 y C3 con `jj new C2 C3`"]
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
              "## Fusionando en jj",
              "",
              "En Git, usas `git merge`. ¡Pero jj no tiene comando merge!",
              "",
              "Piénsalo: **¿qué es un merge?** Simplemente un nuevo cambio con más de un padre."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Más simple Y más potente", "", "Con `jj new`, puedes fusionar 3 o más ramas a la vez."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Tenemos dos ramas. Fusionémoslas:"],
            "afterMarkdowns": ["¡Un commit de fusión!"],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "Fusiona C2 y C3 con `jj new C2 C3`"]
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
              "## Mesclando no jj",
              "",
              "No Git, você usa `git merge`. Mas jj não tem comando merge!",
              "",
              "Pense nisso: **o que é um merge?** Simplesmente uma nova mudança com mais de um pai.",
              "",
              "Passe múltiplos pais para `jj new`. É só isso!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Mais simples E mais poderoso", "", "Com `jj new`, você pode mesclar 3 ou mais branches de uma vez."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Temos dois branches (C2 e C3). Vamos mesclá-los:"],
            "afterMarkdowns": ["Um commit de merge! C4 tem duas linhas de pais."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Tente!", "", "Mescle C2 e C3 com `jj new C2 C3`"]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Fusionando en jj", "", "En jj, pasa múltiples pais a `jj new`. Iso é todo!"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Temos dúas ramas. Fusionémolas:"],
            "afterMarkdowns": ["Un commit de fusión!"],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Próbao!", "", "Fusiona C2 e C3 con `jj new C2 C3`"]
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
              "## 在 jj 中合併",
              "",
              "在 Git 中，你使用 `git merge` 來合併分支。但 jj 沒有 merge 命令！",
              "",
              "想想看：**什麼是合併？** 它只是一個有多個父變更的新變更。",
              "",
              "只需給 `jj new` 傳遞多個父變更。就這樣！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 更簡單且更強大",
              "",
              "使用 `jj new`，你甚至可以一次合併 3 個或更多分支：",
              "",
              "```",
              "$ jj new A B C -m \"merge three features\"",
              "```"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["我們有兩個分支（C2 和 C3）。讓我們合併它們："],
            "afterMarkdowns": ["一個合併提交！C4 有兩條父變更線。"],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 試試看！", "", "用 `jj new C2 C3` 合併 C2 和 C3"]
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
              "## Слияние в jj",
              "",
              "В Git вы используете `git merge`. Но в jj нет команды merge!",
              "",
              "Подумайте: **что такое слияние?** Это просто новое изменение с несколькими родителями.",
              "",
              "Просто передайте несколько родителей в `jj new`. Вот и всё!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Проще И мощнее", "", "С `jj new` можно слить 3 и более веток сразу."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["У нас две ветки (C2 и C3). Сольём их:"],
            "afterMarkdowns": ["Коммит слияния! У C4 две родительские линии."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Попробуйте!", "", "Слейте C2 и C3 с помощью `jj new C2 C3`"]
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
              "## Злиття в jj",
              "",
              "У Git ви використовуєте `git merge`. Але в jj немає команди merge!",
              "",
              "Подумайте: **що таке злиття?** Це просто нова зміна з кількома батьками."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Простіше І потужніше", "", "З `jj new` можна злити 3 і більше гілок одразу."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["У нас дві гілки (C2 і C3). Зіллємо їх:"],
            "afterMarkdowns": ["Коміт злиття! У C4 дві батьківські лінії."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Спробуйте!", "", "Злийте C2 і C3 за допомогою `jj new C2 C3`"]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Gộp trong jj", "", "jj không có lệnh merge! Chỉ cần truyền nhiều cha cho `jj new`."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Chúng ta có hai nhánh. Hãy gộp chúng:"],
            "afterMarkdowns": ["Một commit merge! C4 có hai dòng cha."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Thử đi!", "", "Gộp C2 và C3 với `jj new C2 C3`"]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Combinarea în jj", "", "jj nu are comandă merge! Doar transmite mai mulți părinți la `jj new`."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Avem două ramuri. Să le combinăm:"],
            "afterMarkdowns": ["Un commit de merge! C4 are două linii de părinți."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Încearcă!", "", "Combină C2 și C3 cu `jj new C2 C3`"]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Združevanje v jj", "", "jj nima ukaza merge! Samo podaj več staršev ukazu `jj new`."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Imamo dve veji. Združimo jih:"],
            "afterMarkdowns": ["Merge commit! C4 ima dve starševski liniji."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Poskusi!", "", "Združi C2 in C3 z `jj new C2 C3`"]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Łączenie w jj", "", "jj nie ma polecenia merge! Po prostu przekaż wielu rodziców do `jj new`."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Mamy dwie gałęzie. Połączmy je:"],
            "afterMarkdowns": ["Commit merge! C4 ma dwie linie rodziców."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Spróbuj!", "", "Połącz C2 i C3 za pomocą `jj new C2 C3`"]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Unione in jj", "", "jj non ha il comando merge! Basta passare più genitori a `jj new`."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Abbiamo due branch. Uniamoli:"],
            "afterMarkdowns": ["Un commit di merge! C4 ha due linee di genitori."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Prova!", "", "Unisci C2 e C3 con `jj new C2 C3`"]
          }
        }
      ]
    },
    "ta_IN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## jj இல் இணைத்தல்", "", "jj இல் merge கட்டளை இல்லை! `jj new` க்கு பல parent கொடுங்கள்."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["இரண்டு கிளைகள் உள்ளன. அவற்றை இணைப்போம்:"],
            "afterMarkdowns": ["ஒரு merge commit! C4 இரண்டு parent கோடுகள் உள்ளன."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## முயற்சிக்கவும்!", "", "`jj new C2 C3` மூலம் C2 மற்றும் C3 ஐ இணைக்கவும்"]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## jj'de Birleştirme", "", "jj'de merge komutu yok! Sadece `jj new`'e birden fazla ebeveyn verin."]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["İki dalımız var. Birleştirelim:"],
            "afterMarkdowns": ["Bir merge commit! C4'ün iki ebeveyn çizgisi var."],
            "command": "jj new C2 C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Deneyin!", "", "`jj new C2 C3` ile C2 ve C3'ü birleştirin"]
          }
        }
      ]
    }
  }
};
