// Level 9: Revsets
// Based on:
// - steveklabnik's "revsets.md" - symbols, operators, functions
// - jj-for-everyone's "navigate.md" - using description() to navigate
//
// Key concepts from tutorials:
// 1. Symbols: @ (working copy), change ID, commit ID
// 2. Operators: @- (parent), @+ (child), :: (ancestors/descendants), & (and), | (or)
// 3. Functions: root(), all(), mine(), heads(), parents(), ancestors(), description()
// 4. trunk() - finds main/master/trunk branch on origin/upstream
// 5. Most jj commands take -r/--revision flag, defaults to @
// 6. jj squash is short for jj squash --from @ --into @-
//
// Key insight (from steveklabnik):
// "revsets are a functional language to describe revision sets"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Revsets",
    "de_DE": "Revsets",
    "es_AR": "Revsets",
    "es_MX": "Revsets",
    "es_ES": "Revsets",
    "pt_BR": "Revsets",
    "gl": "Revsets",
    "fr_FR": "Revsets",
    "ja": "リビセット",
    "ko": "리브셋",
    "zh_CN": "修订集",
    "zh_TW": "修訂集",
    "ro": "Revsets",
    "ru_RU": "Ревизии",
    "uk": "Ревізії",
    "vi": "Revsets",
    "sl_SI": "Revsets",
    "pl": "Revsets",
    "it_IT": "Revsets",
    "ta_IN": "Revsets",
    "tr_TR": "Revsets"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"C4\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj new @--",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj new @--' to create a new change from the grandparent (C1)",
    "de_DE": "Verwende 'jj new @--' um eine neue Änderung vom Großeltern (C1) zu erstellen",
    "es_AR": "Usa 'jj new @--' para crear un nuevo cambio desde el abuelo (C1)",
    "es_MX": "Usa 'jj new @--' para crear un nuevo cambio desde el abuelo (C1)",
    "es_ES": "Usa 'jj new @--' para crear un nuevo cambio desde el abuelo (C1)",
    "pt_BR": "Use 'jj new @--' para criar uma nova mudança a partir do avô (C1)",
    "gl": "Usa 'jj new @--' para crear un novo cambio desde o avó (C1)",
    "fr_FR": "Utilisez 'jj new @--' pour créer un nouveau changement depuis le grand-parent (C1)",
    "ja": "'jj new @--' で祖父（C1）から新しい変更を作成",
    "ko": "'jj new @--'로 조부모(C1)에서 새 변경 생성",
    "zh_CN": "使用 'jj new @--' 从祖父变更 (C1) 创建新变更",
    "zh_TW": "使用 'jj new @--' 從祖父變更 (C1) 建立新變更",
    "ro": "Folosește 'jj new @--' pentru a crea o nouă schimbare de la bunic (C1)",
    "ru_RU": "Используйте 'jj new @--' для создания нового изменения от дедушки (C1)",
    "uk": "Використайте 'jj new @--' для створення нової зміни від дідуся (C1)",
    "vi": "Dùng 'jj new @--' để tạo thay đổi mới từ ông bà (C1)",
    "sl_SI": "Uporabi 'jj new @--' za ustvarjanje nove spremembe od starega starša (C1)",
    "pl": "Użyj 'jj new @--' aby stworzyć nową zmianę od dziadka (C1)",
    "it_IT": "Usa 'jj new @--' per creare una nuova modifica dal nonno (C1)",
    "ta_IN": "'jj new @--' பயன்படுத்தி பாட்டனார் (C1) இலிருந்து புதிய மாற்றம் உருவாக்கவும்",
    "tr_TR": "Büyükanne/dededen (C1) yeni değişiklik oluşturmak için 'jj new @--' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Revsets: A Powerful Query Language",
              "",
              "jj has a **functional language** called \"revsets\" to describe sets of revisions. Almost every jj command takes a `-r`/`--revision` flag.",
              "",
              "The simplest revset is `@` - the working copy. When you run `jj new`, you're actually running `jj new -r @`.",
              "",
              "Revsets have three parts:",
              "* **Symbols** - single revisions (`@`, change IDs, commit IDs)",
              "* **Operators** - relationships (`-`, `+`, `::`, `&`, `|`)",
              "* **Functions** - complex queries (`heads()`, `ancestors()`, etc.)"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Operators: Navigating Relatives",
              "",
              "The most common operators navigate relative to a revision:",
              "",
              "* `@-` - parent of @ (one step back)",
              "* `@--` - grandparent (two steps back)",
              "* `@+` - child of @ (one step forward)",
              "* `@-+` - sibling (parent's other child)",
              "",
              "You can chain these! `@---` goes back three generations.",
              "",
              "More operators:",
              "* `::x` - all ancestors of x",
              "* `x::` - all descendants of x",
              "* `x & y` - revisions in both x and y",
              "* `x | y` - revisions in either x or y"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Functions: Powerful Queries",
              "",
              "Functions allow complex selections:",
              "",
              "* `root()` - the root commit",
              "* `all()` - all visible changes",
              "* `mine()` - changes by current user",
              "* `heads(x)` - leaf commits in set x",
              "* `trunk()` - finds main/master/trunk on remote",
              "* `description(text)` - commits containing text",
              "",
              "Combine them! Find all your unshared work:",
              "jj log -r 'mine() & ::@ & ~::trunk()'",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "We're at C3 and want to create a new branch from C1 (the grandparent). Let's use `@--`:"
            ],
            "afterMarkdowns": [
              "We created C4 from C1 using `@--` to navigate two parents back! Revsets make navigation easy."
            ],
            "command": "jj new @--",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "You're at C3. Create a new change from the grandparent (C1) using relative revset syntax:",
              "",
              "jj new @--",
              "",
              "This creates a branch from C1, just like we did with anonymous branches - but now using revset syntax!"
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
              "## Revsets：强大的查询语言",
              "",
              "jj 有一种叫做 \"revsets\" 的**函数式语言**来描述修订集合。几乎每个 jj 命令都接受 `-r`/`--revision` 标志。",
              "",
              "最简单的 revset 是 `@` - 工作副本。当你运行 `jj new` 时，实际上是在运行 `jj new -r @`。",
              "",
              "Revsets 有三个部分：",
              "* **符号** - 单个修订（`@`、change ID、commit ID）",
              "* **操作符** - 关系（`-`、`+`、`::`、`&`、`|`）",
              "* **函数** - 复杂查询（`heads()`、`ancestors()` 等）"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 操作符：导航亲属关系",
              "",
              "最常见的操作符是相对于修订进行导航：",
              "",
              "* `@-` - @ 的父变更（后退一步）",
              "* `@--` - 祖父变更（后退两步）",
              "* `@+` - @ 的子变更（前进一步）",
              "* `@-+` - 兄弟变更（父变更的另一个子变更）",
              "",
              "你可以链接这些！`@---` 后退三代。",
              "",
              "更多操作符：",
              "* `::x` - x 的所有祖先",
              "* `x::` - x 的所有后代",
              "* `x & y` - 同时在 x 和 y 中的修订",
              "* `x | y` - 在 x 或 y 中的修订"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 函数：强大的查询",
              "",
              "函数允许复杂的选择：",
              "",
              "* `root()` - 根提交",
              "* `all()` - 所有可见的变更",
              "* `mine()` - 当前用户的变更",
              "* `heads(x)` - 集合 x 中的叶提交",
              "* `trunk()` - 在远程找到 main/master/trunk",
              "* `description(text)` - 包含文本的提交",
              "",
              "组合它们！找到所有未共享的工作：",
              "jj log -r 'mine() & ::@ & ~::trunk()'",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我们在 C3，想从 C1（祖父变更）创建新分支。让我们使用 `@--`："
            ],
            "afterMarkdowns": [
              "我们使用 `@--` 向后导航两个父变更，从 C1 创建了 C4！Revsets 让导航变得简单。"
            ],
            "command": "jj new @--",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "你在 C3。使用相对 revset 语法从祖父变更（C1）创建新变更：",
              "",
              "jj new @--",
              "",
              "这从 C1 创建了一个分支，就像我们用匿名分支做的一样 - 但现在使用 revset 语法！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets: Eine mächtige Abfragesprache", "", "jj hat eine **funktionale Sprache** namens \"revsets\". Die einfachste ist `@` - die Arbeitskopie.", "", "Revsets haben drei Teile:", "* **Symbole** - einzelne Revisionen (`@`, Change-IDs)", "* **Operatoren** - Beziehungen (`-`, `+`, `::`, `&`, `|`)", "* **Funktionen** - komplexe Abfragen (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Operatoren: Navigation", "", "* `@-` - Eltern von @", "* `@--` - Großeltern", "* `@+` - Kind von @"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Erstellen wir eine neue Änderung von C1 mit `@--`:"], "afterMarkdowns": ["C4 wurde von C1 erstellt!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj new @--`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets: 強力なクエリ言語", "", "jjには\"revsets\"という**関数型言語**があります。最も簡単なのは`@` - 作業コピーです。", "", "Revsetsには3つの部分があります:", "* **シンボル** - 単一のリビジョン (`@`, Change ID)", "* **演算子** - 関係 (`-`, `+`, `::`, `&`, `|`)", "* **関数** - 複雑なクエリ (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 演算子: ナビゲーション", "", "* `@-` - @の親", "* `@--` - 祖父母", "* `@+` - @の子"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["`@--`でC1から新しい変更を作成:"], "afterMarkdowns": ["C4がC1から作成されました！"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj new @--`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets: 강력한 쿼리 언어", "", "jj는 \"revsets\"라는 **함수형 언어**를 가지고 있습니다. 가장 간단한 것은 `@` - 작업 복사본입니다.", "", "Revsets는 세 부분으로 구성:", "* **심볼** - 단일 리비전 (`@`, Change ID)", "* **연산자** - 관계 (`-`, `+`, `::`, `&`, `|`)", "* **함수** - 복잡한 쿼리 (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 연산자: 탐색", "", "* `@-` - @의 부모", "* `@--` - 조부모", "* `@+` - @의 자식"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["`@--`로 C1에서 새 변경 생성:"], "afterMarkdowns": ["C4가 C1에서 생성되었습니다!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj new @--`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets : Un langage de requête puissant", "", "jj a un **langage fonctionnel** appelé \"revsets\". Le plus simple est `@` - la copie de travail.", "", "Les revsets ont trois parties :", "* **Symboles** - révisions uniques (`@`, Change IDs)", "* **Opérateurs** - relations (`-`, `+`, `::`, `&`, `|`)", "* **Fonctions** - requêtes complexes (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Opérateurs : Navigation", "", "* `@-` - parent de @", "* `@--` - grand-parent", "* `@+` - enfant de @"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Créons un nouveau changement depuis C1 avec `@--` :"], "afterMarkdowns": ["C4 a été créé depuis C1 !"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj new @--`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets: Un lenguaje de consulta poderoso", "", "jj tiene un **lenguaje funcional** llamado \"revsets\". El más simple es `@` - la copia de trabajo.", "", "Los revsets tienen tres partes:", "* **Símbolos** - revisiones únicas (`@`, Change IDs)", "* **Operadores** - relaciones (`-`, `+`, `::`, `&`, `|`)", "* **Funciones** - consultas complejas (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Operadores: Navegación", "", "* `@-` - padre de @", "* `@--` - abuelo", "* `@+` - hijo de @"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos un nuevo cambio desde C1 con `@--`:"], "afterMarkdowns": ["¡C4 fue creado desde C1!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj new @--`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` padre, `@--` abuelo, `@+` hijo"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos desde C1:"], "afterMarkdowns": ["¡Listo!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj new @--`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` padre, `@--` abuelo, `@+` hijo"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos desde C1:"], "afterMarkdowns": ["¡Listo!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj new @--`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets: Uma linguagem de consulta poderosa", "", "jj tem uma **linguagem funcional** chamada \"revsets\". O mais simples é `@` - a cópia de trabalho.", "", "Revsets têm três partes:", "* **Símbolos** - revisões únicas (`@`, Change IDs)", "* **Operadores** - relações (`-`, `+`, `::`, `&`, `|`)", "* **Funções** - consultas complexas (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Operadores: Navegação", "", "* `@-` - pai de @", "* `@--` - avô", "* `@+` - filho de @"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos criar uma nova mudança de C1 com `@--`:"], "afterMarkdowns": ["C4 foi criado de C1!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj new @--`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` pai, `@--` avó, `@+` fillo"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creemos desde C1:"], "afterMarkdowns": ["Listo!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj new @--`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets：強大的查詢語言", "", "jj 有一個叫做 \"revsets\" 的**函數式語言**。最簡單的是 `@` - 工作副本。", "", "Revsets 有三個部分：", "* **符號** - 單個修訂 (`@`, Change ID)", "* **運算符** - 關係 (`-`, `+`, `::`, `&`, `|`)", "* **函數** - 複雜查詢 (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 運算符：導航", "", "* `@-` - @ 的父變更", "* `@--` - 祖父變更", "* `@+` - @ 的子變更"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["用 `@--` 從 C1 創建新變更："], "afterMarkdowns": ["C4 從 C1 創建了！"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj new @--`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets: Мощный язык запросов", "", "jj имеет **функциональный язык** под названием \"revsets\". Самый простой - `@` - рабочая копия.", "", "Revsets состоят из трёх частей:", "* **Символы** - одиночные ревизии (`@`, Change ID)", "* **Операторы** - отношения (`-`, `+`, `::`, `&`, `|`)", "* **Функции** - сложные запросы (`heads()`, `ancestors()`)"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Операторы: Навигация", "", "* `@-` - родитель @", "* `@--` - дедушка", "* `@+` - ребёнок @"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Создадим новое изменение от C1 с `@--`:"], "afterMarkdowns": ["C4 создан от C1!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj new @--`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` батько, `@--` дідусь, `@+` дитина"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Створимо від C1:"], "afterMarkdowns": ["Готово!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj new @--`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` cha, `@--` ông bà, `@+` con"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Tạo từ C1:"], "afterMarkdowns": ["Xong!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj new @--`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` părinte, `@--` bunic, `@+` copil"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să creăm de la C1:"], "afterMarkdowns": ["Gata!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj new @--`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` starš, `@--` stari starš, `@+` otrok"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Ustvarimo od C1:"], "afterMarkdowns": ["Končano!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj new @--`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` rodzic, `@--` dziadek, `@+` dziecko"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Stwórzmy od C1:"], "afterMarkdowns": ["Gotowe!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj new @--`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` genitore, `@--` nonno, `@+` figlio"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Creiamo da C1:"], "afterMarkdowns": ["Fatto!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj new @--`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` parent, `@--` பாட்டனார், `@+` குழந்தை"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C1 இலிருந்து உருவாக்குவோம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj new @--`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Revsets", "", "`@-` ebeveyn, `@--` büyükanne/dede, `@+` çocuk"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C1'den oluşturalım:"], "afterMarkdowns": ["Tamam!"], "command": "jj new @--", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj new @--`"]}}
      ]
    }
  }
};
