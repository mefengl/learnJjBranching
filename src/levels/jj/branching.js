exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Anonymous Branches",
    "de_DE": "Anonyme Branches",
    "es_AR": "Ramas Anónimas",
    "es_MX": "Ramas Anónimas",
    "es_ES": "Ramas Anónimas",
    "pt_BR": "Branches Anônimos",
    "gl": "Ramas Anónimas",
    "fr_FR": "Branches Anonymes",
    "ja": "匿名ブランチ",
    "ko": "익명 브랜치",
    "zh_CN": "匿名分支",
    "zh_TW": "匿名分支",
    "ro": "Ramuri Anonime",
    "ru_RU": "Анонимные ветки",
    "uk": "Анонімні гілки",
    "vi": "Nhánh Ẩn Danh",
    "sl_SI": "Anonimne Veje",
    "pl": "Anonimowe Gałęzie",
    "it_IT": "Branch Anonimi",
    "ta_IN": "அநாமதேய கிளைகள்",
    "tr_TR": "Anonim Dallar"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj new;jj new main",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj new' then 'jj new main' to create a fork",
    "de_DE": "Benutze 'jj new' dann 'jj new main' um eine Gabelung zu erstellen",
    "es_AR": "Usa 'jj new' luego 'jj new main' para crear una bifurcación",
    "es_MX": "Usa 'jj new' luego 'jj new main' para crear una bifurcación",
    "es_ES": "Usa 'jj new' luego 'jj new main' para crear una bifurcación",
    "pt_BR": "Use 'jj new' depois 'jj new main' para criar uma bifurcação",
    "gl": "Usa 'jj new' logo 'jj new main' para crear unha bifurcación",
    "fr_FR": "Utilisez 'jj new' puis 'jj new main' pour créer une bifurcation",
    "ja": "'jj new' してから 'jj new main' でフォークを作成",
    "ko": "'jj new' 다음 'jj new main'으로 포크 생성",
    "zh_CN": "使用 'jj new' 然后 'jj new main' 创建分叉",
    "zh_TW": "使用 'jj new' 然後 'jj new main' 建立分叉",
    "ro": "Folosește 'jj new' apoi 'jj new main' pentru a crea o bifurcație",
    "ru_RU": "Используйте 'jj new' затем 'jj new main' для создания ответвления",
    "uk": "Використайте 'jj new' потім 'jj new main' для створення розгалуження",
    "vi": "Dùng 'jj new' rồi 'jj new main' để tạo nhánh",
    "sl_SI": "Uporabi 'jj new' nato 'jj new main' za ustvarjanje vejitve",
    "pl": "Użyj 'jj new' potem 'jj new main' aby stworzyć rozgałęzienie",
    "it_IT": "Usa 'jj new' poi 'jj new main' per creare una biforcazione",
    "ta_IN": "'jj new' பின் 'jj new main' பயன்படுத்தி கிளை உருவாக்கவும்",
    "tr_TR": "Çatal oluşturmak için 'jj new' sonra 'jj new main' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Anonymous Branches",
              "",
              "In Git, you must create and name a branch before working on it. In jj, branches happen naturally - **no names required!**",
              "",
              "### What is a branch, conceptually?",
              "",
              "When two changes share the same parent, they form a branch:",
              "",
              "       C2  (your work)",
              "      /",
              "C0--C1",
              "      \\",
              "       C3  (other work)",
              "",
              "At Meta, where a similar tool is used, almost nobody bothers to name their branches. You only add names when they provide value."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Creating a Branch",
              "",
              "To create a branch, simply create a new change from a specific parent:",
              "",
              "$ jj new main",
              "",
              "This creates a new change with `main` as its parent. If you already have work on `main`, this creates a fork!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's create a fork. First we'll make one change, then go back to main to create another."
            ],
            "afterMarkdowns": [
              "Look! We now have two changes with the same parent - that's a branch, no naming needed."
            ],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It!",
              "",
              "Create a fork:",
              "1. `jj new` - create C2 from current position",
              "2. `jj new main` - create C3 from main (same parent as C2)",
              "",
              "You'll see the branch structure in the visualization!"
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
              "## 匿名分支",
              "",
              "在 Git 中，你必须先创建并命名一个分支才能在上面工作。在 jj 中，分支自然发生 - **不需要名字！**",
              "",
              "### 从概念上讲，什么是分支？",
              "",
              "当两个变更共享同一个父变更时，它们就形成了一个分支：",
              "",
              "       C2  (你的工作)",
              "      /",
              "C0--C1",
              "      \\",
              "       C3  (其他工作)",
              "",
              "在 Meta，使用类似工具的人几乎没人费心给分支命名。只有当名字能提供价值时才添加。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 创建分支",
              "",
              "要创建分支，只需从特定父变更创建一个新变更：",
              "",
              "$ jj new main",
              "",
              "这将创建一个以 `main` 为父变更的新变更。如果你在 `main` 上已经有工作，这就创建了一个分叉！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们创建一个分叉。首先做一个变更，然后回到 main 创建另一个。"
            ],
            "afterMarkdowns": [
              "看！我们现在有两个具有相同父变更的变更 - 这就是分支，不需要命名。"
            ],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 试试看！",
              "",
              "创建一个分叉：",
              "1. `jj new` - 从当前位置创建 C2",
              "2. `jj new main` - 从 main 创建 C3（与 C2 相同的父变更）",
              "",
              "你会在可视化中看到分支结构！"
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
              "## Anonyme Branches",
              "",
              "In Git musst du einen Branch erstellen und benennen, bevor du daran arbeiten kannst. In jj entstehen Branches natürlich - **keine Namen erforderlich!**",
              "",
              "### Was ist konzeptionell ein Branch?",
              "",
              "Wenn zwei Änderungen denselben Eltern-Commit teilen, bilden sie einen Branch.",
              "",
              "Bei Meta, wo ein ähnliches Tool verwendet wird, benennt fast niemand seine Branches."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Einen Branch erstellen",
              "",
              "Um einen Branch zu erstellen, erstelle einfach eine neue Änderung von einem bestimmten Eltern-Commit:",
              "",
              "$ jj new main",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Lass uns eine Gabelung erstellen."
            ],
            "afterMarkdowns": [
              "Schau! Wir haben jetzt zwei Änderungen mit demselben Eltern-Commit - das ist ein Branch."
            ],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Probiere es!",
              "",
              "1. `jj new` - erstelle C2",
              "2. `jj new main` - erstelle C3 von main"
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
              "## 匿名ブランチ",
              "",
              "Gitではブランチを作成して名前をつけてから作業する必要があります。jjでは、ブランチは自然に発生します - **名前は不要です！**",
              "",
              "### 概念的にブランチとは？",
              "",
              "2つの変更が同じ親を共有するとき、ブランチを形成します。",
              "",
              "Metaでは、似たようなツールを使っていますが、ほとんど誰もブランチに名前をつけません。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ブランチを作成する",
              "",
              "特定の親から新しい変更を作成するだけです：",
              "",
              "$ jj new main",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "フォークを作成してみましょう。"
            ],
            "afterMarkdowns": [
              "見てください！同じ親を持つ2つの変更ができました - これがブランチです。"
            ],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## やってみよう！",
              "",
              "1. `jj new` - C2を作成",
              "2. `jj new main` - mainからC3を作成"
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
              "## 익명 브랜치",
              "",
              "Git에서는 작업하기 전에 브랜치를 만들고 이름을 지어야 합니다. jj에서는 브랜치가 자연스럽게 생깁니다 - **이름이 필요 없습니다!**",
              "",
              "### 개념적으로 브랜치란?",
              "",
              "두 변경이 같은 부모를 공유하면 브랜치가 됩니다.",
              "",
              "Meta에서는 비슷한 도구를 사용하는데, 거의 아무도 브랜치에 이름을 붙이지 않습니다."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 브랜치 만들기",
              "",
              "특정 부모에서 새 변경을 만들기만 하면 됩니다:",
              "",
              "$ jj new main",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "포크를 만들어 봅시다."
            ],
            "afterMarkdowns": [
              "보세요! 같은 부모를 가진 두 변경이 생겼습니다 - 이것이 브랜치입니다."
            ],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 해보세요!",
              "",
              "1. `jj new` - C2 생성",
              "2. `jj new main` - main에서 C3 생성"
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
              "## Branches Anonymes",
              "",
              "Dans Git, vous devez créer et nommer une branche avant d'y travailler. Dans jj, les branches se créent naturellement - **pas de nom requis !**",
              "",
              "### Qu'est-ce qu'une branche conceptuellement ?",
              "",
              "Quand deux changements partagent le même parent, ils forment une branche."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Créer une branche",
              "",
              "Créez simplement un nouveau changement à partir d'un parent spécifique :",
              "",
              "$ jj new main",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Créons une bifurcation."
            ],
            "afterMarkdowns": [
              "Regardez ! Nous avons maintenant deux changements avec le même parent - c'est une branche."
            ],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Essayez !",
              "",
              "1. `jj new` - créer C2",
              "2. `jj new main` - créer C3 depuis main"
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
              "## Ramas Anónimas",
              "",
              "En Git, debes crear y nombrar una rama antes de trabajar en ella. En jj, las ramas ocurren naturalmente - **¡no se necesitan nombres!**",
              "",
              "Cuando dos cambios comparten el mismo padre, forman una rama."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Crear una rama",
              "",
              "Simplemente crea un nuevo cambio desde un padre específico:",
              "",
              "$ jj new main",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Creemos una bifurcación."],
            "afterMarkdowns": ["¡Mira! Ahora tenemos dos cambios con el mismo padre - eso es una rama."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "1. `jj new` - crear C2", "2. `jj new main` - crear C3 desde main"]
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
              "## Ramas Anónimas",
              "",
              "En Git, tenés que crear y nombrar una rama antes de trabajar en ella. En jj, las ramas ocurren naturalmente - **¡no se necesitan nombres!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Crear una rama", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Creemos una bifurcación."],
            "afterMarkdowns": ["¡Mirá! Ahora tenemos dos cambios con el mismo padre."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Probalo!", "", "1. `jj new`", "2. `jj new main`"]
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
              "## Ramas Anónimas",
              "",
              "En Git, debes crear y nombrar una rama antes de trabajar en ella. En jj, las ramas ocurren naturalmente - **¡no se necesitan nombres!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Crear una rama", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Creemos una bifurcación."],
            "afterMarkdowns": ["¡Mira! Ahora tenemos dos cambios con el mismo padre."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "1. `jj new`", "2. `jj new main`"]
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
              "## Branches Anônimos",
              "",
              "No Git, você precisa criar e nomear um branch antes de trabalhar nele. No jj, branches acontecem naturalmente - **não precisa de nomes!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Criar um branch", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Vamos criar uma bifurcação."],
            "afterMarkdowns": ["Olha! Agora temos duas mudanças com o mesmo pai - isso é um branch."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Tente!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Ramas Anónimas", "", "En jj, as ramas ocorren naturalmente - **non se necesitan nomes!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Crear unha rama", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Creemos unha bifurcación."],
            "afterMarkdowns": ["Mira! Agora temos dous cambios co mesmo pai."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Próbao!", "", "1. `jj new`", "2. `jj new main`"]
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
              "## 匿名分支",
              "",
              "在 Git 中，你必須先建立並命名一個分支才能在上面工作。在 jj 中，分支自然發生 - **不需要名字！**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 建立分支", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["讓我們建立一個分叉。"],
            "afterMarkdowns": ["看！我們現在有兩個具有相同父變更的變更 - 這就是分支。"],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 試試看！", "", "1. `jj new`", "2. `jj new main`"]
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
              "## Анонимные ветки",
              "",
              "В Git нужно создать и назвать ветку перед работой. В jj ветки возникают естественно - **имена не нужны!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Создание ветки", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Создадим ответвление."],
            "afterMarkdowns": ["Смотрите! Теперь у нас два изменения с одним родителем - это ветка."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Попробуйте!", "", "1. `jj new`", "2. `jj new main`"]
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
              "## Анонімні гілки",
              "",
              "У Git потрібно створити та назвати гілку перед роботою. У jj гілки виникають природно - **імена не потрібні!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Створення гілки", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Створимо розгалуження."],
            "afterMarkdowns": ["Дивіться! Тепер у нас дві зміни з одним батьком - це гілка."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Спробуйте!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Nhánh Ẩn Danh", "", "Trong jj, nhánh xảy ra tự nhiên - **không cần tên!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Tạo nhánh", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Hãy tạo một nhánh."],
            "afterMarkdowns": ["Xem! Bây giờ chúng ta có hai thay đổi với cùng cha - đó là nhánh."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Thử đi!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Ramuri Anonime", "", "În jj, ramurile apar natural - **nu e nevoie de nume!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Crearea unei ramuri", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Să creăm o bifurcație."],
            "afterMarkdowns": ["Uite! Acum avem două schimbări cu același părinte - asta e o ramură."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Încearcă!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Anonimne Veje", "", "V jj veje nastanejo naravno - **imena niso potrebna!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Ustvarjanje veje", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Ustvarimo vejitev."],
            "afterMarkdowns": ["Poglej! Zdaj imamo dve spremembi z istim staršem - to je veja."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Poskusi!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Anonimowe Gałęzie", "", "W jj gałęzie powstają naturalnie - **nie potrzeba nazw!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Tworzenie gałęzi", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Stwórzmy rozgałęzienie."],
            "afterMarkdowns": ["Patrz! Teraz mamy dwie zmiany z tym samym rodzicem - to gałąź."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Spróbuj!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Branch Anonimi", "", "In jj, i branch avvengono naturalmente - **non servono nomi!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Creare un branch", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Creiamo una biforcazione."],
            "afterMarkdowns": ["Guarda! Ora abbiamo due modifiche con lo stesso genitore - questo è un branch."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Prova!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "ta_IN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## அநாமதேய கிளைகள்", "", "jj இல், கிளைகள் இயற்கையாக நிகழ்கின்றன - **பெயர்கள் தேவையில்லை!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## கிளை உருவாக்குதல்", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["ஒரு கிளையை உருவாக்குவோம்."],
            "afterMarkdowns": ["பாருங்கள்! இப்போது ஒரே parent கொண்ட இரண்டு மாற்றங்கள் உள்ளன."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## முயற்சிக்கவும்!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Anonim Dallar", "", "jj'de dallar doğal olarak oluşur - **isimlere gerek yok!**"]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Dal oluşturma", "", "$ jj new main", ""]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Bir çatal oluşturalım."],
            "afterMarkdowns": ["Bakın! Şimdi aynı ebeveyne sahip iki değişiklik var - bu bir dal."],
            "command": "jj new;jj new main",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Deneyin!", "", "1. `jj new`", "2. `jj new main`"]
          }
        }
      ]
    }
  }
};
