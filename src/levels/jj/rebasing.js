// Level 5: Rebasing
// Based on:
// - steveklabnik's "merging.md" - rebase section, -r/-b/-s flags, @ doesn't move
// - jj-for-everyone's "rebase.md" - rebase for linear history, merge vs rebase tradeoff
//
// Key concepts from tutorials:
// 1. jj rebase -d <destination> - move changes to new parent
// 2. -r for single revision, -b for whole branch, -s for revision and descendants  
// 3. Rebases ALWAYS succeed - unlike git, never stops midway
// 4. jj operates on repo data structures, not working copy
// 5. @ doesn't move after rebase (different from git)
// 6. Merge vs Rebase tradeoff: true history vs linear history
// 7. "TRUTH ITSELF SHALL BEND TO YOUR WILL" - rewriting history
//
// Key insight (from steveklabnik):
// "jj commands primarily operate on the data structures stored in its repository,
// rather than on the working copy"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Rebasing",
    "de_DE": "Rebasen",
    "es_AR": "Rebase",
    "es_MX": "Rebase",
    "es_ES": "Rebase",
    "pt_BR": "Rebase",
    "gl": "Rebase",
    "fr_FR": "Rebaser",
    "ja": "リベース",
    "ko": "리베이스",
    "zh_CN": "变基",
    "zh_TW": "變基",
    "ro": "Rebase",
    "ru_RU": "Перебазирование",
    "uk": "Перебазування",
    "vi": "Rebase",
    "sl_SI": "Rebase",
    "pl": "Rebase",
    "it_IT": "Rebase",
    "ta_IN": "ரீபேஸ்",
    "tr_TR": "Rebase"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj rebase -r C3 -d C2",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj rebase -r C3 -d C2' to move C3 on top of C2",
    "de_DE": "Verwende 'jj rebase -r C3 -d C2' um C3 auf C2 zu verschieben",
    "es_AR": "Usa 'jj rebase -r C3 -d C2' para mover C3 encima de C2",
    "es_MX": "Usa 'jj rebase -r C3 -d C2' para mover C3 encima de C2",
    "es_ES": "Usa 'jj rebase -r C3 -d C2' para mover C3 encima de C2",
    "pt_BR": "Use 'jj rebase -r C3 -d C2' para mover C3 para cima de C2",
    "gl": "Usa 'jj rebase -r C3 -d C2' para mover C3 enriba de C2",
    "fr_FR": "Utilisez 'jj rebase -r C3 -d C2' pour déplacer C3 sur C2",
    "ja": "'jj rebase -r C3 -d C2' でC3をC2の上に移動",
    "ko": "'jj rebase -r C3 -d C2'로 C3를 C2 위로 이동",
    "zh_CN": "使用 'jj rebase -r C3 -d C2' 将 C3 移到 C2 上面",
    "zh_TW": "使用 'jj rebase -r C3 -d C2' 將 C3 移到 C2 上面",
    "ro": "Folosește 'jj rebase -r C3 -d C2' pentru a muta C3 deasupra lui C2",
    "ru_RU": "Используйте 'jj rebase -r C3 -d C2' чтобы переместить C3 на C2",
    "uk": "Використайте 'jj rebase -r C3 -d C2' щоб перемістити C3 на C2",
    "vi": "Dùng 'jj rebase -r C3 -d C2' để di chuyển C3 lên trên C2",
    "sl_SI": "Uporabi 'jj rebase -r C3 -d C2' za premik C3 na vrh C2",
    "pl": "Użyj 'jj rebase -r C3 -d C2' aby przenieść C3 na C2",
    "it_IT": "Usa 'jj rebase -r C3 -d C2' per spostare C3 sopra C2",
    "ta_IN": "'jj rebase -r C3 -d C2' பயன்படுத்தி C3 ஐ C2 மேல் நகர்த்தவும்",
    "tr_TR": "C3'ü C2'nin üzerine taşımak için 'jj rebase -r C3 -d C2' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Rebasing in jj",
              "",
              "Like Git, jj has a `rebase` command. It moves a change from one \"base\" (parent) to a different one.",
              "",
              "But here's something amazing about jj: **rebases always succeed!**",
              "",
              "In Git, rebase can stop midway if there are conflicts, leaving you in a confusing state. In jj, the rebase completes instantly - conflicts are recorded in the commit itself, and you can resolve them later.",
              "",
              "This is because jj operates on the repository's data structures, not the working copy."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The `jj rebase` Command",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): which change to move",
              "* `-d` (destination): where to move it to",
              "",
              "There are also:",
              "* `-b` (branch): move an entire branch",
              "* `-s` (source): move a change and all its descendants",
              "",
              "The result is a **linear history** - no merge commits, just a straight line of changes."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Merge vs Rebase",
              "",
              "Both are valid ways to combine diverged branches:",
              "",
              "| | Advantage | Disadvantage |",
              "|---|---|---|",
              "| **Merge** | Preserves history exactly as it happened | Can result in tangled, hard-to-read history |",
              "| **Rebase** | Results in easy-to-read, linear history | \"Lies\" about the order things happened |",
              "",
              "Choose based on your team's preferences. jj makes both easy!",
              "",
              "*As the tutorial says: \"TRUTH ITSELF SHALL BEND TO YOUR WILL\"*"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "We have two branches from C1: C2 and C3. Let's make them linear by rebasing C3 on top of C2:"
            ],
            "afterMarkdowns": [
              "C3 is now on top of C2! We have a nice linear history: C0 → C1 → C2 → C3"
            ],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "We have C2 and C3 both branching from C1. Create a linear history by rebasing C3 onto C2:",
              "",
              "jj rebase -r C3 -d C2",
              "",
              "After this, C3 will have C2 as its parent instead of C1!"
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
              "## jj 中的变基",
              "",
              "像 Git 一样，jj 有一个 `rebase` 命令。它将变更从一个 \"base\"（父变更）移动到另一个。",
              "",
              "但 jj 有一个惊人的特点：**变基总是成功的！**",
              "",
              "在 Git 中，如果有冲突，rebase 可能会中途停止，让你处于困惑的状态。在 jj 中，rebase 立即完成 - 冲突被记录在提交本身中，你可以稍后解决。",
              "",
              "这是因为 jj 操作的是仓库的数据结构，而不是工作副本。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj rebase` 命令",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): 要移动哪个变更",
              "* `-d` (destination): 移动到哪里",
              "",
              "还有：",
              "* `-b` (branch): 移动整个分支",
              "* `-s` (source): 移动变更及其所有后代",
              "",
              "结果是**线性历史** - 没有合并提交，只是一条直线的变更。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 合并 vs 变基",
              "",
              "两者都是合并分叉分支的有效方式：",
              "",
              "| | 优点 | 缺点 |",
              "|---|---|---|",
              "| **合并** | 完全按照发生的顺序保留历史 | 可能导致纠缠、难以阅读的历史 |",
              "| **变基** | 产生易于阅读的线性历史 | \"撒谎\"了事情发生的顺序 |",
              "",
              "根据你团队的偏好来选择。jj 让两者都很容易！",
              "",
              "*正如教程所说：\"真理本身将屈从于你的意志\"*"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我们有两个从 C1 分出的分支：C2 和 C3。让我们通过将 C3 变基到 C2 上来使它们线性化："
            ],
            "afterMarkdowns": [
              "C3 现在在 C2 上面了！我们有了漂亮的线性历史：C0 → C1 → C2 → C3"
            ],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "我们有 C2 和 C3 都从 C1 分支出来。通过将 C3 变基到 C2 来创建线性历史：",
              "",
              "jj rebase -r C3 -d C2",
              "",
              "之后，C3 将以 C2 为父变更，而不是 C1！"
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
              "## Rebasen in jj",
              "",
              "Wie Git hat jj einen `rebase`-Befehl. Er verschiebt eine Änderung von einer \"Basis\" zu einer anderen.",
              "",
              "Das Erstaunliche an jj: **Rebases sind immer erfolgreich!**",
              "",
              "In Git kann rebase bei Konflikten mitten drin stoppen. In jj wird der Rebase sofort abgeschlossen - Konflikte werden im Commit selbst aufgezeichnet."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Der `jj rebase` Befehl",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): welche Änderung verschieben",
              "* `-d` (destination): wohin verschieben",
              "* `-b` (branch): ganzen Branch verschieben",
              "* `-s` (source): Änderung und alle Nachkommen verschieben"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Wir haben zwei Branches von C1. Lass C3 auf C2 rebasen:"],
            "afterMarkdowns": ["C3 ist jetzt auf C2! Lineare Historie: C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Probiere es!", "", "Rebase C3 auf C2 mit `jj rebase -r C3 -d C2`"]
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
              "## jjでのリベース",
              "",
              "Gitと同様、jjには`rebase`コマンドがあります。変更を別の「ベース」に移動します。",
              "",
              "jjの驚くべき点：**リベースは常に成功します！**",
              "",
              "Gitではコンフリクトがあると途中で止まることがあります。jjでは即座に完了し、コンフリクトはコミット自体に記録されます。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj rebase` コマンド",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): 移動する変更",
              "* `-d` (destination): 移動先",
              "* `-b` (branch): ブランチ全体を移動",
              "* `-s` (source): 変更とその子孫を移動"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["C1から2つのブランチがあります。C3をC2の上にリベースしましょう:"],
            "afterMarkdowns": ["C3がC2の上に！線形履歴: C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## やってみよう！", "", "`jj rebase -r C3 -d C2`でC3をC2にリベース"]
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
              "## jj에서 리베이스",
              "",
              "Git처럼 jj도 `rebase` 명령이 있습니다. 변경을 다른 \"베이스\"로 이동합니다.",
              "",
              "jj의 놀라운 점: **리베이스는 항상 성공합니다!**",
              "",
              "Git에서는 충돌 시 중간에 멈출 수 있습니다. jj에서는 즉시 완료되고, 충돌은 커밋 자체에 기록됩니다."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj rebase` 명령",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): 이동할 변경",
              "* `-d` (destination): 이동 목적지",
              "* `-b` (branch): 전체 브랜치 이동",
              "* `-s` (source): 변경과 모든 후손 이동"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["C1에서 두 브랜치가 있습니다. C3를 C2 위로 리베이스합시다:"],
            "afterMarkdowns": ["C3가 C2 위에! 선형 이력: C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 해보세요!", "", "`jj rebase -r C3 -d C2`로 C3를 C2에 리베이스"]
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
              "## Rebaser dans jj",
              "",
              "Comme Git, jj a une commande `rebase`. Elle déplace un changement vers une autre \"base\".",
              "",
              "L'incroyable avec jj : **les rebases réussissent toujours !**",
              "",
              "Dans Git, rebase peut s'arrêter en plein milieu en cas de conflits. Dans jj, le rebase se termine instantanément - les conflits sont enregistrés dans le commit."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## La commande `jj rebase`",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision) : quel changement déplacer",
              "* `-d` (destination) : où le déplacer",
              "* `-b` (branch) : déplacer toute une branche",
              "* `-s` (source) : déplacer un changement et ses descendants"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Nous avons deux branches depuis C1. Rebaseons C3 sur C2 :"],
            "afterMarkdowns": ["C3 est maintenant sur C2 ! Historique linéaire : C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Essayez !", "", "Rebasez C3 sur C2 avec `jj rebase -r C3 -d C2`"]
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
              "## Rebase en jj",
              "",
              "Como Git, jj tiene un comando `rebase`. Mueve un cambio a otra \"base\".",
              "",
              "Lo increíble de jj: **¡los rebases siempre tienen éxito!**",
              "",
              "En Git, rebase puede detenerse a mitad de camino si hay conflictos. En jj, el rebase se completa al instante - los conflictos se registran en el commit."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## El comando `jj rebase`",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): qué cambio mover",
              "* `-d` (destination): a dónde moverlo",
              "* `-b` (branch): mover una rama entera",
              "* `-s` (source): mover un cambio y sus descendientes"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Tenemos dos ramas desde C1. Hagamos rebase de C3 sobre C2:"],
            "afterMarkdowns": ["¡C3 está ahora sobre C2! Historia lineal: C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "Haz rebase de C3 sobre C2 con `jj rebase -r C3 -d C2`"]
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
              "## Rebase en jj",
              "",
              "Como Git, jj tiene un comando `rebase`. Lo increíble: **¡los rebases siempre tienen éxito!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## El comando `jj rebase`", "", "* `-r`: qué cambio mover", "* `-d`: a dónde moverlo"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Hagamos rebase de C3 sobre C2:"],
            "afterMarkdowns": ["¡C3 está ahora sobre C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Probalo!", "", "`jj rebase -r C3 -d C2`"]
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
              "## Rebase en jj",
              "",
              "Como Git, jj tiene un comando `rebase`. Lo increíble: **¡los rebases siempre tienen éxito!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## El comando `jj rebase`", "", "* `-r`: qué cambio mover", "* `-d`: a dónde moverlo"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Hagamos rebase de C3 sobre C2:"],
            "afterMarkdowns": ["¡C3 está ahora sobre C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## ¡Inténtalo!", "", "`jj rebase -r C3 -d C2`"]
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
              "## Rebase no jj",
              "",
              "Como Git, jj tem um comando `rebase`. Ele move uma mudança para outra \"base\".",
              "",
              "O incrível no jj: **rebases sempre funcionam!**",
              "",
              "No Git, rebase pode parar no meio se houver conflitos. No jj, o rebase completa instantaneamente - conflitos são registrados no commit."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## O comando `jj rebase`",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): qual mudança mover",
              "* `-d` (destination): para onde mover",
              "* `-b` (branch): mover um branch inteiro",
              "* `-s` (source): mover uma mudança e seus descendentes"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Temos dois branches de C1. Vamos fazer rebase de C3 em C2:"],
            "afterMarkdowns": ["C3 agora está em C2! História linear: C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Tente!", "", "Faça rebase de C3 em C2 com `jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Rebase en jj", "", "En jj, **os rebases sempre teñen éxito!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Fagamos rebase de C3 sobre C2:"],
            "afterMarkdowns": ["C3 está agora sobre C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Próbao!", "", "`jj rebase -r C3 -d C2`"]
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
              "## jj 中的變基",
              "",
              "像 Git 一樣，jj 有一個 `rebase` 命令。它將變更從一個「base」移動到另一個。",
              "",
              "jj 的驚人特點：**變基總是成功的！**",
              "",
              "在 Git 中，如果有衝突，rebase 可能會中途停止。在 jj 中，rebase 立即完成 - 衝突被記錄在提交本身中。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj rebase` 命令",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): 要移動哪個變更",
              "* `-d` (destination): 移動到哪裡",
              "* `-b` (branch): 移動整個分支",
              "* `-s` (source): 移動變更及其所有後代"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["我們有兩個從 C1 分出的分支。讓我們將 C3 變基到 C2："],
            "afterMarkdowns": ["C3 現在在 C2 上面了！線性歷史：C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## 試試看！", "", "用 `jj rebase -r C3 -d C2` 將 C3 變基到 C2"]
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
              "## Перебазирование в jj",
              "",
              "Как и Git, jj имеет команду `rebase`. Она перемещает изменение на другую \"базу\".",
              "",
              "Удивительное в jj: **перебазирования всегда успешны!**",
              "",
              "В Git rebase может остановиться посередине при конфликтах. В jj rebase завершается мгновенно - конфликты записываются в сам коммит."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Команда `jj rebase`",
              "",
              "$ jj rebase -r C3 -d C2",
              "",
              "* `-r` (revision): какое изменение перемещать",
              "* `-d` (destination): куда перемещать",
              "* `-b` (branch): переместить всю ветку",
              "* `-s` (source): переместить изменение и всех потомков"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["У нас две ветки от C1. Перебазируем C3 на C2:"],
            "afterMarkdowns": ["C3 теперь на C2! Линейная история: C0 → C1 → C2 → C3"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Попробуйте!", "", "Перебазируйте C3 на C2 с помощью `jj rebase -r C3 -d C2`"]
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
              "## Перебазування в jj",
              "",
              "Як і Git, jj має команду `rebase`. Вона переміщує зміну на іншу \"базу\".",
              "",
              "Дивовижне в jj: **перебазування завжди успішні!**"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Команда `jj rebase`", "", "* `-r`: яку зміну переміщувати", "* `-d`: куди переміщувати"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Перебазуємо C3 на C2:"],
            "afterMarkdowns": ["C3 тепер на C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Спробуйте!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Rebase trong jj", "", "Điều tuyệt vời: **rebase luôn thành công!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Rebase C3 lên C2:"],
            "afterMarkdowns": ["C3 giờ ở trên C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Thử đi!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Rebase în jj", "", "Uimitor: **rebase-urile întotdeauna reușesc!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Să facem rebase C3 pe C2:"],
            "afterMarkdowns": ["C3 e acum pe C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Încearcă!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Rebase v jj", "", "Neverjetno: **rebase vedno uspe!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Naredimo rebase C3 na C2:"],
            "afterMarkdowns": ["C3 je zdaj na C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Poskusi!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Rebase w jj", "", "Niesamowite: **rebase zawsze się udaje!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Zróbmy rebase C3 na C2:"],
            "afterMarkdowns": ["C3 jest teraz na C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Spróbuj!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Rebase in jj", "", "L'incredibile: **i rebase hanno sempre successo!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["Facciamo rebase di C3 su C2:"],
            "afterMarkdowns": ["C3 è ora su C2!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Prova!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "ta_IN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## jj இல் Rebase", "", "அற்புதம்: **rebase எப்போதும் வெற்றி!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["C3 ஐ C2 மேல் rebase செய்வோம்:"],
            "afterMarkdowns": ["C3 இப்போது C2 மேல்!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## முயற்சிக்கவும்!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## jj'de Rebase", "", "İnanılmaz: **rebase'ler her zaman başarılı!**"]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": ["C3'ü C2'ye rebase yapalım:"],
            "afterMarkdowns": ["C3 şimdi C2'nin üzerinde!"],
            "command": "jj rebase -r C3 -d C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": ["## Deneyin!", "", "`jj rebase -r C3 -d C2`"]
          }
        }
      ]
    }
  }
};
