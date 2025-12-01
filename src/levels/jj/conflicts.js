// Level 11: Conflicts
// Based on:
// - steveklabnik's "conflicts.md" - conflict markers, resolution, auto-rebase propagation
// - jj-for-everyone's "conflict.md" - reading conflict markers, resolution strategies
//
// Key concepts from tutorials:
// 1. Conflicts are recorded IN the commit - rebase doesn't stop
// 2. Auto-rebase propagates fixes - descendants auto-rebase after resolution
// 3. Conflict markers: <<<<<<< (start), %%%%%%% (diff), +++++++ (snapshot), >>>>>>> (end)
// 4. Resolution methods: manual edit, jj resolve --tool :ours/:theirs, external tools
// 5. No mechanical solution - must understand code meaning
// 6. jj's unique feature: can continue working, handle conflicts later
//
// Key insight (from steveklabnik):
// "rebases always succeed in jj: if there's a conflict, it doesn't make you stop and fix it,
// it records that there's a conflict and still performs the rest of the rebase"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Dealing with Conflicts",
    "de_DE": "Umgang mit Konflikten",
    "es_AR": "Manejando Conflictos",
    "es_MX": "Manejando Conflictos",
    "es_ES": "Manejando Conflictos",
    "pt_BR": "Lidando com Conflitos",
    "gl": "Xestionando Conflitos",
    "fr_FR": "Gérer les Conflits",
    "ja": "コンフリクトの処理",
    "ko": "충돌 처리",
    "zh_CN": "处理冲突",
    "zh_TW": "處理衝突",
    "ro": "Gestionarea Conflictelor",
    "ru_RU": "Работа с конфликтами",
    "uk": "Робота з конфліктами",
    "vi": "Xử lý Xung đột",
    "sl_SI": "Obravnava Konfliktov",
    "pl": "Radzenie sobie z Konfliktami",
    "it_IT": "Gestione dei Conflitti",
    "ta_IN": "முரண்பாடுகளை கையாளுதல்",
    "tr_TR": "Çakışmalarla Başa Çıkma"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"C4\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj new C2 C3",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj new C2 C3' to create a merge - even if there's a conflict, it will succeed!",
    "de_DE": "Verwende 'jj new C2 C3' um einen Merge zu erstellen - selbst bei Konflikten wird es erfolgreich sein!",
    "es_AR": "Usa 'jj new C2 C3' para crear un merge - ¡incluso si hay conflicto, tendrá éxito!",
    "es_MX": "Usa 'jj new C2 C3' para crear un merge - ¡incluso si hay conflicto, tendrá éxito!",
    "es_ES": "Usa 'jj new C2 C3' para crear un merge - ¡incluso si hay conflicto, tendrá éxito!",
    "pt_BR": "Use 'jj new C2 C3' para criar um merge - mesmo com conflito, vai funcionar!",
    "gl": "Usa 'jj new C2 C3' para crear un merge - ¡mesmo se hai conflito, terá éxito!",
    "fr_FR": "Utilisez 'jj new C2 C3' pour créer un merge - même en cas de conflit, ça réussira !",
    "ja": "'jj new C2 C3' でマージを作成 - コンフリクトがあっても成功します！",
    "ko": "'jj new C2 C3'로 병합 생성 - 충돌이 있어도 성공합니다!",
    "zh_CN": "使用 'jj new C2 C3' 创建合并 - 即使有冲突，也会成功！",
    "zh_TW": "使用 'jj new C2 C3' 建立合併 - 即使有衝突，也會成功！",
    "ro": "Folosește 'jj new C2 C3' pentru a crea un merge - chiar dacă există conflict, va reuși!",
    "ru_RU": "Используйте 'jj new C2 C3' для создания слияния - даже при конфликте это сработает!",
    "uk": "Використайте 'jj new C2 C3' для створення злиття - навіть при конфлікті це спрацює!",
    "vi": "Dùng 'jj new C2 C3' để tạo merge - dù có xung đột cũng sẽ thành công!",
    "sl_SI": "Uporabi 'jj new C2 C3' za ustvarjanje merge - tudi ob konfliktu bo uspelo!",
    "pl": "Użyj 'jj new C2 C3' aby stworzyć merge - nawet przy konflikcie się powiedzie!",
    "it_IT": "Usa 'jj new C2 C3' per creare un merge - anche con conflitto, avrà successo!",
    "ta_IN": "'jj new C2 C3' பயன்படுத்தி merge உருவாக்கவும் - முரண்பாடு இருந்தாலும் வெற்றியாகும்!",
    "tr_TR": "Birleştirme oluşturmak için 'jj new C2 C3' kullanın - çakışma olsa bile başarılı olacak!"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Conflicts: jj's Superpower",
              "",
              "In Git, when you merge or rebase with conflicts, you're **forced to stop** and resolve them immediately. This can be stressful and interrupt your flow.",
              "",
              "In jj, **conflicts are recorded in the commit itself**. The operation always succeeds! You can:",
              "* Continue working on other things",
              "* Fix the conflict when you're ready",
              "* Even make more changes and let them auto-rebase",
              "",
              "This is incredibly powerful for complex workflows."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Conflict Markers in jj",
              "",
              "jj uses richer conflict markers than Git:",
              "",
              "```",
              "<<<<<<< Conflict 1 of 1",
              "%%%%%%% Changes from base to side #1",
              " unchanged line",
              "+added line",
              "+++++++ Contents of side #2",
              "completely different content",
              ">>>>>>> Conflict 1 of 1 ends",
              "```",
              "",
              "* `%%%%%%%` shows a **diff** from base",
              "* `+++++++` shows a **snapshot** of the other side",
              "",
              "This makes it easier to understand what each side changed."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Resolving Conflicts",
              "",
              "Options for resolution:",
              "",
              "1. **Manual**: Edit the file, remove markers, keep what you want",
              "2. **Built-in tools**: `jj resolve --tool :ours` or `:theirs`",
              "3. **External tools**: `jj resolve --tool mergiraf`",
              "",
              "**Important:** There's no mechanical solution! You must understand what the code means to resolve correctly.",
              "",
              "Once resolved, descendants are **automatically rebased** and may have their conflicts fixed too!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's merge C2 and C3. Even if they conflict, jj will create the merge commit:"
            ],
            "afterMarkdowns": [
              "Merge created! Even if C4 has a conflict, it exists. You can work on the resolution when ready, not when jj demands it."
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
              "Create a merge of C2 and C3:",
              "",
              "```",
              "jj new C2 C3",
              "```",
              "",
              "In real use, if there's a conflict, you'd see `(conflict)` in jj log. You can then:",
              "1. Edit the file to resolve",
              "2. Use `jj resolve --tool :ours` to pick one side",
              "3. Or just keep working and fix it later!"
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
              "## 冲突：jj 的超能力",
              "",
              "在 Git 中，当你合并或变基遇到冲突时，你被**强制停下来**立即解决它们。这可能很有压力，会打断你的工作流。",
              "",
              "在 jj 中，**冲突被记录在提交本身中**。操作总是成功的！你可以：",
              "* 继续处理其他事情",
              "* 在准备好时修复冲突",
              "* 甚至做更多更改并让它们自动变基",
              "",
              "这对复杂工作流来说非常强大。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## jj 中的冲突标记",
              "",
              "jj 使用比 Git 更丰富的冲突标记：",
              "",
              "```",
              "<<<<<<< Conflict 1 of 1",
              "%%%%%%% Changes from base to side #1",
              " unchanged line",
              "+added line",
              "+++++++ Contents of side #2",
              "completely different content",
              ">>>>>>> Conflict 1 of 1 ends",
              "```",
              "",
              "* `%%%%%%%` 显示从基础的**差异**",
              "* `+++++++` 显示另一边的**快照**",
              "",
              "这使得更容易理解每一边改变了什么。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 解决冲突",
              "",
              "解决选项：",
              "",
              "1. **手动**：编辑文件，删除标记，保留你想要的",
              "2. **内置工具**：`jj resolve --tool :ours` 或 `:theirs`",
              "3. **外部工具**：`jj resolve --tool mergiraf`",
              "",
              "**重要：** 没有机械的解决方案！你必须理解代码的含义才能正确解决。",
              "",
              "一旦解决，后代会**自动变基**，它们的冲突也可能被修复！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们合并 C2 和 C3。即使它们冲突，jj 也会创建合并提交："
            ],
            "afterMarkdowns": [
              "合并创建了！即使 C4 有冲突，它也存在。你可以在准备好时处理解决方案，而不是 jj 要求时。"
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
              "创建 C2 和 C3 的合并：",
              "",
              "```",
              "jj new C2 C3",
              "```",
              "",
              "在实际使用中，如果有冲突，你会在 jj log 中看到 `(conflict)`。然后你可以：",
              "1. 编辑文件来解决",
              "2. 使用 `jj resolve --tool :ours` 选择一边",
              "3. 或者继续工作，稍后修复！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Konflikte in jj", "", "Konflikte werden IM Commit aufgezeichnet - Rebase stoppt nicht!", "", "Dies ist einzigartig in jj: **Rebases sind immer erfolgreich**. Konflikte werden gespeichert und du kannst sie später lösen."]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Konflikte lösen", "", "1. Datei manuell bearbeiten", "2. `jj resolve --tool :ours` oder `:theirs`", "3. Oder einfach weiterarbeiten und später lösen!", "", "Auto-Rebase propagiert Fixes - Nachkommen werden automatisch rebaset."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Mergen wir C2 und C3 - auch bei Konflikten erfolgreich:"], "afterMarkdowns": ["Merge erstellt! Konflikte können später gelöst werden."], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj new C2 C3`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## jjでのコンフリクト", "", "コンフリクトはコミットに記録されます - rebaseは止まりません！", "", "jjの独自機能：**rebaseは常に成功します**。コンフリクトは保存され、後で解決できます。"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## コンフリクトの解決", "", "1. ファイルを手動編集", "2. `jj resolve --tool :ours`または`:theirs`", "3. または作業を続けて後で解決！", "", "自動rebaseが修正を伝播 - 子孫は自動的にrebaseされます。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C2とC3をマージ - コンフリクトがあっても成功:"], "afterMarkdowns": ["マージ作成完了！コンフリクトは後で解決できます。"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj new C2 C3`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## jj에서 충돌", "", "충돌이 커밋에 기록됩니다 - rebase가 멈추지 않습니다!", "", "jj의 독특한 기능: **rebase는 항상 성공합니다**. 충돌은 저장되고 나중에 해결할 수 있습니다."]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 충돌 해결", "", "1. 파일을 수동 편집", "2. `jj resolve --tool :ours` 또는 `:theirs`", "3. 또는 작업을 계속하고 나중에 해결!", "", "자동 rebase가 수정을 전파 - 후손이 자동으로 rebase됩니다."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C2와 C3를 병합 - 충돌이 있어도 성공:"], "afterMarkdowns": ["병합 완료! 충돌은 나중에 해결할 수 있습니다."], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj new C2 C3`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflits dans jj", "", "Les conflits sont enregistrés DANS le commit - rebase ne s'arrête pas !", "", "C'est unique à jj : **les rebases réussissent toujours**. Les conflits sont sauvegardés et vous pouvez les résoudre plus tard."]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Résoudre les conflits", "", "1. Éditer manuellement le fichier", "2. `jj resolve --tool :ours` ou `:theirs`", "3. Ou continuer à travailler et résoudre plus tard !", "", "Le rebase automatique propage les corrections."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fusionnons C2 et C3 - réussit même avec des conflits :"], "afterMarkdowns": ["Merge créé ! Les conflits peuvent être résolus plus tard."], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj new C2 C3`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflictos en jj", "", "¡Los conflictos se registran EN el commit - rebase no se detiene!", "", "Esto es único de jj: **los rebases siempre tienen éxito**. Los conflictos se guardan y puedes resolverlos más tarde."]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Resolver conflictos", "", "1. Editar archivo manualmente", "2. `jj resolve --tool :ours` o `:theirs`", "3. ¡O seguir trabajando y resolver luego!", "", "El rebase automático propaga las correcciones."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fusionemos C2 y C3 - tiene éxito incluso con conflictos:"], "afterMarkdowns": ["¡Merge creado! Los conflictos se pueden resolver después."], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj new C2 C3`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflictos en jj", "", "¡Los conflictos se registran EN el commit - rebase no se detiene! Podés resolverlos después."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fusionemos C2 y C3:"], "afterMarkdowns": ["¡Listo!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj new C2 C3`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflictos en jj", "", "¡Los conflictos se registran EN el commit - rebase no se detiene! Puedes resolverlos después."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fusionemos C2 y C3:"], "afterMarkdowns": ["¡Listo!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj new C2 C3`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflitos no jj", "", "Conflitos são registrados NO commit - rebase não para!", "", "Isso é único do jj: **rebases sempre têm sucesso**. Conflitos são salvos e você pode resolvê-los depois."]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Resolver conflitos", "", "1. Editar arquivo manualmente", "2. `jj resolve --tool :ours` ou `:theirs`", "3. Ou continuar trabalhando e resolver depois!", "", "O rebase automático propaga as correções."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos mesclar C2 e C3 - funciona mesmo com conflitos:"], "afterMarkdowns": ["Merge criado! Conflitos podem ser resolvidos depois."], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj new C2 C3`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflitos en jj", "", "Os conflitos rexístranse NO commit - rebase non para!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Fusionemos C2 e C3:"], "afterMarkdowns": ["Listo!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj new C2 C3`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## jj 中的衝突", "", "衝突被記錄在提交中 - rebase 不會停止！", "", "這是 jj 的獨特之處：**rebase 總是成功**。衝突被保存，你可以稍後解決。"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 解決衝突", "", "1. 手動編輯檔案", "2. `jj resolve --tool :ours` 或 `:theirs`", "3. 或者繼續工作，稍後解決！", "", "自動 rebase 傳播修復 - 後代會自動 rebase。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["合併 C2 和 C3 - 即使有衝突也會成功："], "afterMarkdowns": ["合併建立完成！衝突可以稍後解決。"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj new C2 C3`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Конфликты в jj", "", "Конфликты записываются В коммит - rebase не останавливается!", "", "Уникальная особенность jj: **rebases всегда успешны**. Конфликты сохраняются, и вы можете решить их позже."]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Разрешение конфликтов", "", "1. Редактировать файл вручную", "2. `jj resolve --tool :ours` или `:theirs`", "3. Или продолжать работать и решить позже!", "", "Авто-rebase распространяет исправления."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Сольём C2 и C3 - успешно даже при конфликтах:"], "afterMarkdowns": ["Слияние создано! Конфликты можно решить позже."], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj new C2 C3`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Конфлікти в jj", "", "Конфлікти записуються В коміт - rebase не зупиняється! Можна вирішити пізніше."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Зіллємо C2 і C3:"], "afterMarkdowns": ["Готово!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj new C2 C3`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Xung đột trong jj", "", "Xung đột được ghi vào commit - rebase không dừng! Có thể giải quyết sau."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Gộp C2 và C3:"], "afterMarkdowns": ["Xong!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj new C2 C3`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflicte în jj", "", "Conflictele sunt înregistrate ÎN commit - rebase nu se oprește! Poți rezolva mai târziu."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să combinăm C2 și C3:"], "afterMarkdowns": ["Gata!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj new C2 C3`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Konflikti v jj", "", "Konflikti se zabeležijo V commit - rebase se ne ustavi! Lahko rešiš kasneje."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Združimo C2 in C3:"], "afterMarkdowns": ["Končano!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj new C2 C3`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Konflikty w jj", "", "Konflikty są zapisywane W commit - rebase się nie zatrzymuje! Można rozwiązać później."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Połączmy C2 i C3:"], "afterMarkdowns": ["Gotowe!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj new C2 C3`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Conflitti in jj", "", "I conflitti vengono registrati NEL commit - rebase non si ferma! Puoi risolvere dopo."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Uniamo C2 e C3:"], "afterMarkdowns": ["Fatto!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj new C2 C3`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## jj இல் முரண்பாடுகள்", "", "முரண்பாடுகள் commit இல் பதிவாகின்றன - rebase நிற்காது! பின்னர் தீர்க்கலாம்."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C2 மற்றும் C3 ஐ இணைப்போம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj new C2 C3`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## jj'de Çakışmalar", "", "Çakışmalar commit'te kaydedilir - rebase durmaz! Sonra çözebilirsin."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C2 ve C3'ü birleştirelim:"], "afterMarkdowns": ["Tamam!"], "command": "jj new C2 C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj new C2 C3`"]}}
      ]
    }
  }
};
