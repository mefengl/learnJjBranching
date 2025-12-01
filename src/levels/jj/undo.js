// Level 10: Undo and Redo
// Based on:
// - jj-for-everyone's "undo.md" - complete undo/redo workflow
// - steveklabnik's "merging.md" - jj undo examples
//
// Key concepts from tutorials:
// 1. jj undo - undo the last operation
// 2. jj redo - redo an undone operation
// 3. jj stores operation log - history of repo operations, not just commits
// 4. Can undo multiple times to go further back
// 5. File changes are also snapshotted and can be undone
// 6. DON'T undo push operations - causes problems
// 7. Operation log is local only, not backed up to remote
//
// Key insight (from jj-for-everyone):
// "Jujutsu stores not only a version history of our project in the form of commits,
// but it also keeps a log of all operations that were performed on the repository itself"

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Undo & Redo",
    "de_DE": "Rückgängig & Wiederholen",
    "es_AR": "Deshacer y Rehacer",
    "es_MX": "Deshacer y Rehacer",
    "es_ES": "Deshacer y Rehacer",
    "pt_BR": "Desfazer e Refazer",
    "gl": "Desfacer e Refacer",
    "fr_FR": "Annuler & Rétablir",
    "ja": "元に戻す・やり直し",
    "ko": "실행 취소 & 다시 실행",
    "zh_CN": "撤销与重做",
    "zh_TW": "撤銷與重做",
    "ro": "Anulare & Refacere",
    "ru_RU": "Отмена и повтор",
    "uk": "Скасувати та повторити",
    "vi": "Hoàn tác & Làm lại",
    "sl_SI": "Razveljavi & Ponovi",
    "pl": "Cofnij i Ponów",
    "it_IT": "Annulla & Ripristina",
    "ta_IN": "செயல்தவிர் & மீண்டும்",
    "tr_TR": "Geri Al & Yinele"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"C2\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj undo",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj undo' to undo the last operation (creating C3)",
    "de_DE": "Verwende 'jj undo' um die letzte Operation rückgängig zu machen (Erstellung von C3)",
    "es_AR": "Usa 'jj undo' para deshacer la última operación (crear C3)",
    "es_MX": "Usa 'jj undo' para deshacer la última operación (crear C3)",
    "es_ES": "Usa 'jj undo' para deshacer la última operación (crear C3)",
    "pt_BR": "Use 'jj undo' para desfazer a última operação (criar C3)",
    "gl": "Usa 'jj undo' para desfacer a última operación (crear C3)",
    "fr_FR": "Utilisez 'jj undo' pour annuler la dernière opération (création de C3)",
    "ja": "'jj undo' で最後の操作（C3の作成）を取り消す",
    "ko": "'jj undo'로 마지막 작업(C3 생성) 취소",
    "zh_CN": "使用 'jj undo' 撤销上一个操作（创建 C3）",
    "zh_TW": "使用 'jj undo' 撤銷上一個操作（建立 C3）",
    "ro": "Folosește 'jj undo' pentru a anula ultima operație (crearea lui C3)",
    "ru_RU": "Используйте 'jj undo' для отмены последней операции (создание C3)",
    "uk": "Використайте 'jj undo' для скасування останньої операції (створення C3)",
    "vi": "Dùng 'jj undo' để hoàn tác thao tác cuối (tạo C3)",
    "sl_SI": "Uporabi 'jj undo' za razveljavitev zadnje operacije (ustvarjanje C3)",
    "pl": "Użyj 'jj undo' aby cofnąć ostatnią operację (tworzenie C3)",
    "it_IT": "Usa 'jj undo' per annullare l'ultima operazione (creazione di C3)",
    "ta_IN": "'jj undo' பயன்படுத்தி கடைசி செயல்பாட்டை (C3 உருவாக்கம்) செயல்தவிர்க்கவும்",
    "tr_TR": "Son işlemi (C3 oluşturma) geri almak için 'jj undo' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The Operation Log",
              "",
              "jj has a superpower that Git doesn't: an **operation log**.",
              "",
              "jj stores not only your commit history, but also a history of every operation you've performed on the repository. This means you can travel back in time!",
              "",
              "Made a mistake? Just `jj undo`. Changed your mind? `jj redo`.",
              "",
              "It works just like Ctrl+Z in your favorite editor!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj undo` and `jj redo`",
              "",
              "```",
              "$ jj undo",
              "Working copy now at: pzoqtwuv 9353442b (empty) (no description set)",
              "```",
              "",
              "Each `jj undo` takes one step back. You can undo multiple times to go further back!",
              "",
              "```",
              "$ jj redo",
              "```",
              "",
              "Changed your mind? `jj redo` restores what you undid. Just like Ctrl+Shift+Z!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## What Gets Recorded?",
              "",
              "Almost everything:",
              "* Creating/modifying commits",
              "* Rebasing, merging, squashing",
              "* Even **file changes** are snapshotted before each jj command",
              "",
              "**Warning:** Don't undo `jj git push` operations! It only forgets locally that you pushed, but the remote still has your commits. This causes sync problems.",
              "",
              "The operation log is **local only** - it doesn't sync to remotes."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Oops, we created C3 by mistake. Let's undo that:"
            ],
            "afterMarkdowns": [
              "C3 is gone! We're back to C2. If we change our mind, we can `jj redo` to get C3 back."
            ],
            "command": "jj undo",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "You just created C3 but realized it was a mistake. Undo it:",
              "",
              "```",
              "jj undo",
              "```",
              "",
              "The operation log is your safety net - experiment freely, knowing you can always go back!"
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
              "## 操作日志",
              "",
              "jj 有一个 Git 没有的超能力：**操作日志**。",
              "",
              "jj 不仅存储你的提交历史，还存储你对仓库执行的每个操作的历史。这意味着你可以时间旅行！",
              "",
              "犯了错误？只需 `jj undo`。改变主意了？`jj redo`。",
              "",
              "就像你最喜欢的编辑器中的 Ctrl+Z 一样！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `jj undo` 和 `jj redo`",
              "",
              "```",
              "$ jj undo",
              "Working copy now at: pzoqtwuv 9353442b (empty) (no description set)",
              "```",
              "",
              "每次 `jj undo` 后退一步。你可以多次撤销以回到更早的状态！",
              "",
              "```",
              "$ jj redo",
              "```",
              "",
              "改变主意了？`jj redo` 恢复你撤销的内容。就像 Ctrl+Shift+Z！"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 什么会被记录？",
              "",
              "几乎所有东西：",
              "* 创建/修改提交",
              "* 变基、合并、压缩",
              "* 甚至**文件更改**在每个 jj 命令前都会被快照",
              "",
              "**警告：** 不要撤销 `jj git push` 操作！它只是在本地忘记你推送过，但远程仍然有你的提交。这会导致同步问题。",
              "",
              "操作日志是**仅本地的** - 它不会同步到远程。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "糟糕，我们错误地创建了 C3。让我们撤销它："
            ],
            "afterMarkdowns": [
              "C3 不见了！我们回到了 C2。如果我们改变主意，可以用 `jj redo` 把 C3 找回来。"
            ],
            "command": "jj undo",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "你刚创建了 C3 但意识到这是个错误。撤销它：",
              "",
              "```",
              "jj undo",
              "```",
              "",
              "操作日志是你的安全网 - 放心实验，知道你随时可以回去！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Rückgängig und Wiederherstellen", "", "`jj undo` - letzte Operation rückgängig machen", "`jj redo` - rückgängig gemachte Operation wiederherstellen", "", "jj speichert ein Operationsprotokoll - nicht nur Commits, sondern alle Repo-Operationen!"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Wichtige Hinweise", "", "* Kann mehrfach undo ausführen um weiter zurückzugehen", "* Dateiänderungen werden auch gespeichert und können rückgängig gemacht werden", "* NICHT push-Operationen rückgängig machen - verursacht Probleme"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Machen wir das Erstellen von C3 rückgängig:"], "afterMarkdowns": ["C3 ist weg! Wir können `jj redo` verwenden um es zurückzuholen."], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj undo`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 元に戻す・やり直し", "", "`jj undo` - 最後の操作を取り消す", "`jj redo` - 取り消した操作をやり直す", "", "jjは操作ログを保存します - コミットだけでなく、すべてのリポジトリ操作を！"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 重要な注意", "", "* 複数回undoできます", "* ファイルの変更も保存され、取り消せます", "* push操作は取り消さないでください - 問題が発生します"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3の作成を取り消しましょう:"], "afterMarkdowns": ["C3がなくなりました！`jj redo`で戻せます。"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj undo`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 실행 취소 & 다시 실행", "", "`jj undo` - 마지막 작업 취소", "`jj redo` - 취소한 작업 다시 실행", "", "jj는 작업 로그를 저장합니다 - 커밋뿐만 아니라 모든 저장소 작업을!"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 중요 참고", "", "* 여러 번 undo 가능", "* 파일 변경도 저장되어 취소 가능", "* push 작업은 취소하지 마세요 - 문제가 발생합니다"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3 생성을 취소합시다:"], "afterMarkdowns": ["C3가 사라졌습니다! `jj redo`로 복구 가능."], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj undo`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Annuler et Rétablir", "", "`jj undo` - annule la dernière opération", "`jj redo` - rétablit une opération annulée", "", "jj sauvegarde un journal des opérations - pas seulement les commits, toutes les opérations du dépôt !"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Notes importantes", "", "* Peut annuler plusieurs fois", "* Les modifications de fichiers sont aussi sauvegardées", "* NE PAS annuler les opérations push - cause des problèmes"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Annulons la création de C3 :"], "afterMarkdowns": ["C3 a disparu ! On peut utiliser `jj redo` pour le récupérer."], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj undo`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Deshacer y Rehacer", "", "`jj undo` - deshace la última operación", "`jj redo` - rehace una operación deshecha", "", "¡jj guarda un registro de operaciones - no solo commits, todas las operaciones del repo!"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Notas importantes", "", "* Puede deshacer varias veces", "* Los cambios de archivos también se guardan", "* NO deshacer operaciones push - causa problemas"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Deshagamos la creación de C3:"], "afterMarkdowns": ["¡C3 desapareció! Podemos usar `jj redo` para recuperarlo."], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj undo`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Deshacer y Rehacer", "", "`jj undo` deshace, `jj redo` rehace. ¡No deshagas push!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Deshagamos C3:"], "afterMarkdowns": ["¡Listo!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj undo`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Deshacer y Rehacer", "", "`jj undo` deshace, `jj redo` rehace. ¡No deshagas push!"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Deshagamos C3:"], "afterMarkdowns": ["¡Listo!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj undo`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Desfazer e Refazer", "", "`jj undo` - desfaz a última operação", "`jj redo` - refaz uma operação desfeita", "", "jj salva um log de operações - não só commits, todas as operações do repo!"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Notas importantes", "", "* Pode desfazer várias vezes", "* Mudanças de arquivos também são salvas", "* NÃO desfaça operações push - causa problemas"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos desfazer a criação de C3:"], "afterMarkdowns": ["C3 sumiu! Podemos usar `jj redo` para recuperá-lo."], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj undo`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Desfacer e Refacer", "", "`jj undo` desfai, `jj redo` refai."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Desfagamos C3:"], "afterMarkdowns": ["Listo!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj undo`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 撤銷與重做", "", "`jj undo` - 撤銷上一個操作", "`jj redo` - 重做被撤銷的操作", "", "jj 保存操作日誌 - 不只是提交，還有所有倉庫操作！"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 重要提示", "", "* 可以多次撤銷", "* 檔案更改也會被保存並可撤銷", "* 不要撤銷 push 操作 - 會導致問題"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["讓我們撤銷 C3 的建立："], "afterMarkdowns": ["C3 不見了！可以用 `jj redo` 恢復。"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj undo`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Отмена и повтор", "", "`jj undo` - отменяет последнюю операцию", "`jj redo` - повторяет отменённую операцию", "", "jj сохраняет журнал операций - не только коммиты, все операции над репозиторием!"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Важные заметки", "", "* Можно отменять несколько раз", "* Изменения файлов тоже сохраняются", "* НЕ отменяйте операции push - вызывает проблемы"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Отменим создание C3:"], "afterMarkdowns": ["C3 исчез! Можно использовать `jj redo` для восстановления."], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj undo`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Скасувати та повторити", "", "`jj undo` скасовує, `jj redo` повторює."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Скасуємо C3:"], "afterMarkdowns": ["Готово!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj undo`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Hoàn tác & Làm lại", "", "`jj undo` hoàn tác, `jj redo` làm lại."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hoàn tác C3:"], "afterMarkdowns": ["Xong!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj undo`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Anulare & Refacere", "", "`jj undo` anulează, `jj redo` reface."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să anulăm C3:"], "afterMarkdowns": ["Gata!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj undo`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Razveljavi & Ponovi", "", "`jj undo` razveljavi, `jj redo` ponovi."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Razveljavimo C3:"], "afterMarkdowns": ["Končano!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj undo`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Cofnij & Ponów", "", "`jj undo` cofa, `jj redo` ponawia."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Cofnijmy C3:"], "afterMarkdowns": ["Gotowe!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj undo`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Annulla & Ripristina", "", "`jj undo` annulla, `jj redo` ripristina."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Annulliamo C3:"], "afterMarkdowns": ["Fatto!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj undo`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## செயல்தவிர் & மீண்டும்", "", "`jj undo` செயல்தவிர்க்கிறது, `jj redo` மீண்டும் செய்கிறது."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3 ஐ செயல்தவிர்ப்போம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj undo`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Geri Al & Yinele", "", "`jj undo` geri alır, `jj redo` yineler."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3'ü geri alalım:"], "afterMarkdowns": ["Tamam!"], "command": "jj undo", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj undo`"]}}
      ]
    }
  }
};
