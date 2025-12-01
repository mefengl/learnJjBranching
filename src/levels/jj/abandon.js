// Level: Abandon and Restore
// Based on:
// - jj-for-everyone's "abandon.md" - jj abandon, immutable commits
// - jj-for-everyone's "restore.md" - jj restore files
//
// Key concepts from tutorials:
// 1. jj abandon <change-id> - delete a commit
// 2. Can use revset: jj abandon 'description("...")'
// 3. Abandoning also deletes bookmarks pointing to the commit
// 4. Immutable commits (◆) - protected, cannot be modified
// 5. Mutable commits (○) - can be modified
// 6. jj restore <file> - restore file to parent state
// 7. jj restore --from <rev> <file> - restore from any commit
//
// Key insight (from jj-for-everyone):
// "Jujutsu enforces these rules by default! Protected commits are called immutable
// and represented with a diamond (◆) symbol."

exports.level = {
  "mode": "jj",
  "name": {
    "en_US": "Abandon & Restore",
    "de_DE": "Verwerfen & Wiederherstellen",
    "es_AR": "Abandonar y Restaurar",
    "es_MX": "Abandonar y Restaurar",
    "es_ES": "Abandonar y Restaurar",
    "pt_BR": "Abandonar e Restaurar",
    "gl": "Abandonar e Restaurar",
    "fr_FR": "Abandonner & Restaurer",
    "ja": "放棄と復元",
    "ko": "폐기 & 복원",
    "zh_CN": "放弃与恢复",
    "zh_TW": "放棄與恢復",
    "ro": "Abandonare & Restaurare",
    "ru_RU": "Отмена и восстановление",
    "uk": "Відмова та відновлення",
    "vi": "Hủy bỏ & Khôi phục",
    "sl_SI": "Opusti & Obnovi",
    "pl": "Porzuć i Przywróć",
    "it_IT": "Abbandona & Ripristina",
    "ta_IN": "கைவிடு & மீட்டமை",
    "tr_TR": "Bırak & Geri Yükle"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"C2\",\"id\":\"HEAD\"}}",
  "solutionCommand": "jj abandon C3",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Use 'jj abandon C3' to delete the unwanted commit",
    "de_DE": "Verwende 'jj abandon C3' um den unerwünschten Commit zu löschen",
    "es_AR": "Usa 'jj abandon C3' para eliminar el commit no deseado",
    "es_MX": "Usa 'jj abandon C3' para eliminar el commit no deseado",
    "es_ES": "Usa 'jj abandon C3' para eliminar el commit no deseado",
    "pt_BR": "Use 'jj abandon C3' para deletar o commit indesejado",
    "gl": "Usa 'jj abandon C3' para eliminar o commit non desexado",
    "fr_FR": "Utilisez 'jj abandon C3' pour supprimer le commit indésirable",
    "ja": "'jj abandon C3' で不要なコミットを削除",
    "ko": "'jj abandon C3'로 원치 않는 커밋 삭제",
    "zh_CN": "使用 'jj abandon C3' 删除不需要的提交",
    "zh_TW": "使用 'jj abandon C3' 刪除不需要的提交",
    "ro": "Folosește 'jj abandon C3' pentru a șterge commit-ul nedorit",
    "ru_RU": "Используйте 'jj abandon C3' для удаления ненужного коммита",
    "uk": "Використайте 'jj abandon C3' для видалення непотрібного коміту",
    "vi": "Dùng 'jj abandon C3' để xóa commit không mong muốn",
    "sl_SI": "Uporabi 'jj abandon C3' za brisanje nezaželene potrditve",
    "pl": "Użyj 'jj abandon C3' aby usunąć niechciany commit",
    "it_IT": "Usa 'jj abandon C3' per eliminare il commit indesiderato",
    "ta_IN": "'jj abandon C3' பயன்படுத்தி தேவையற்ற commit ஐ நீக்கவும்",
    "tr_TR": "İstenmeyen commit'i silmek için 'jj abandon C3' kullanın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Deleting Commits with `jj abandon`",
              "",
              "Sometimes you create a commit that you don't want anymore. Maybe it was an experiment that didn't work out, or you made a mistake.",
              "",
              "In jj, you delete commits with `jj abandon`:",
              "",
              "```",
              "jj abandon <change-id>",
              "```",
              "",
              "You can also use revsets:",
              "```",
              "jj abandon 'description(\"Experiment\")'",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Immutable vs Mutable Commits",
              "",
              "In `jj log`, you'll see two types of symbols:",
              "",
              "* **◆ (diamond)** - **Immutable** commits - protected, cannot be modified",
              "* **○ (circle)** - **Mutable** commits - can be freely modified",
              "",
              "By default, commits on `main` and commits that have been pushed are immutable. This prevents you from accidentally rewriting shared history!",
              "",
              "```",
              "$ jj abandon main",
              "Error: Commit is immutable",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Restoring Files with `jj restore`",
              "",
              "Made changes to a file that you want to undo? Use `jj restore`:",
              "",
              "```",
              "jj restore <file>           # restore to parent state",
              "jj restore                  # restore ALL files",
              "jj restore --from <rev> <file>  # restore from any commit",
              "```",
              "",
              "This is more precise than `jj undo` - it only affects the files you specify, not the entire operation."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's abandon C3, an experiment we don't need anymore:"
            ],
            "afterMarkdowns": [
              "C3 is gone! Note that @ moved to C2 since we were on C3."
            ],
            "command": "jj abandon C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Try It Yourself!",
              "",
              "You have an unwanted commit C3. Abandon it:",
              "",
              "```",
              "jj abandon C3",
              "```",
              "",
              "Remember: you can always `jj undo` if you abandon something by mistake!"
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
              "## 使用 `jj abandon` 删除提交",
              "",
              "有时你创建了一个不再需要的提交。也许是一个没有成功的实验，或者你犯了一个错误。",
              "",
              "在 jj 中，你用 `jj abandon` 删除提交：",
              "",
              "```",
              "jj abandon <change-id>",
              "```",
              "",
              "你也可以使用修订集：",
              "```",
              "jj abandon 'description(\"实验\")'",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 不可变 vs 可变提交",
              "",
              "在 `jj log` 中，你会看到两种符号：",
              "",
              "* **◆ (菱形)** - **不可变**提交 - 受保护，不能修改",
              "* **○ (圆形)** - **可变**提交 - 可以自由修改",
              "",
              "默认情况下，`main` 上的提交和已推送的提交是不可变的。这可以防止你意外改写共享历史！",
              "",
              "```",
              "$ jj abandon main",
              "Error: Commit is immutable",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 使用 `jj restore` 恢复文件",
              "",
              "对文件做了想撤销的更改？使用 `jj restore`：",
              "",
              "```",
              "jj restore <file>           # 恢复到父提交状态",
              "jj restore                  # 恢复所有文件",
              "jj restore --from <rev> <file>  # 从任意提交恢复",
              "```",
              "",
              "这比 `jj undo` 更精确 - 它只影响你指定的文件，而不是整个操作。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "让我们放弃 C3，一个我们不再需要的实验："
            ],
            "afterMarkdowns": [
              "C3 不见了！注意 @ 移动到了 C2，因为我们之前在 C3 上。"
            ],
            "command": "jj abandon C3",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 自己试试！",
              "",
              "你有一个不需要的提交 C3。放弃它：",
              "",
              "```",
              "jj abandon C3",
              "```",
              "",
              "记住：如果你错误地放弃了什么，你总是可以 `jj undo`！"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Änderungen verwerfen", "", "`jj abandon <rev>` - löscht eine Änderung", "`jj restore <file>` - stellt Datei auf Elternzustand zurück"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Unveränderliche Commits", "", "Geschützte Commits (◆) können nicht geändert werden."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Verwerfen wir C3:"], "afterMarkdowns": ["C3 ist weg!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Probiere es!", "", "`jj abandon C3`"]}}
      ]
    },
    "ja": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 変更を放棄", "", "`jj abandon <rev>` - 変更を削除", "`jj restore <file>` - ファイルを親の状態に復元"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 不変コミット", "", "保護されたコミット（◆）は変更できません。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3を放棄しましょう:"], "afterMarkdowns": ["C3がなくなりました！"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## やってみよう！", "", "`jj abandon C3`"]}}
      ]
    },
    "ko": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 변경 폐기", "", "`jj abandon <rev>` - 변경 삭제", "`jj restore <file>` - 파일을 부모 상태로 복원"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 불변 커밋", "", "보호된 커밋（◆）은 수정할 수 없습니다."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3를 폐기합시다:"], "afterMarkdowns": ["C3가 사라졌습니다!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 해보세요!", "", "`jj abandon C3`"]}}
      ]
    },
    "fr_FR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonner des changements", "", "`jj abandon <rev>` - supprime un changement", "`jj restore <file>` - restaure un fichier à l'état du parent"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Commits immuables", "", "Les commits protégés (◆) ne peuvent pas être modifiés."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Abandonnons C3 :"], "afterMarkdowns": ["C3 a disparu !"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Essayez !", "", "`jj abandon C3`"]}}
      ]
    },
    "es_ES": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonar cambios", "", "`jj abandon <rev>` - elimina un cambio", "`jj restore <file>` - restaura archivo al estado del padre"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Commits inmutables", "", "Los commits protegidos (◆) no se pueden modificar."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Abandonemos C3:"], "afterMarkdowns": ["¡C3 desapareció!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj abandon C3`"]}}
      ]
    },
    "es_AR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonar cambios", "", "`jj abandon <rev>` elimina, `jj restore <file>` restaura"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Abandonemos C3:"], "afterMarkdowns": ["¡Listo!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Probalo!", "", "`jj abandon C3`"]}}
      ]
    },
    "es_MX": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonar cambios", "", "`jj abandon <rev>` elimina, `jj restore <file>` restaura"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Abandonemos C3:"], "afterMarkdowns": ["¡Listo!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## ¡Inténtalo!", "", "`jj abandon C3`"]}}
      ]
    },
    "pt_BR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonar mudanças", "", "`jj abandon <rev>` - deleta uma mudança", "`jj restore <file>` - restaura arquivo ao estado do pai"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Commits imutáveis", "", "Commits protegidos (◆) não podem ser modificados."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Vamos abandonar C3:"], "afterMarkdowns": ["C3 sumiu!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Tente!", "", "`jj abandon C3`"]}}
      ]
    },
    "gl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonar cambios", "", "`jj abandon` elimina, `jj restore` restaura"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Abandonemos C3:"], "afterMarkdowns": ["Listo!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Próbao!", "", "`jj abandon C3`"]}}
      ]
    },
    "zh_TW": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## 放棄變更", "", "`jj abandon <rev>` - 刪除變更", "`jj restore <file>` - 將檔案恢復到父變更狀態"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 不可變提交", "", "受保護的提交（◆）不能被修改。"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["讓我們放棄 C3："], "afterMarkdowns": ["C3 不見了！"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## 試試看！", "", "`jj abandon C3`"]}}
      ]
    },
    "ru_RU": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Отмена изменений", "", "`jj abandon <rev>` - удаляет изменение", "`jj restore <file>` - восстанавливает файл до состояния родителя"]}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Неизменяемые коммиты", "", "Защищённые коммиты (◆) нельзя изменять."]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Отменим C3:"], "afterMarkdowns": ["C3 исчез!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Попробуйте!", "", "`jj abandon C3`"]}}
      ]
    },
    "uk": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Відмова від змін", "", "`jj abandon` видаляє, `jj restore` відновлює"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Відмовимось від C3:"], "afterMarkdowns": ["Готово!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Спробуйте!", "", "`jj abandon C3`"]}}
      ]
    },
    "vi": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Hủy bỏ thay đổi", "", "`jj abandon` xóa, `jj restore` khôi phục"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Hủy bỏ C3:"], "afterMarkdowns": ["Xong!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Thử đi!", "", "`jj abandon C3`"]}}
      ]
    },
    "ro": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abandonarea schimbărilor", "", "`jj abandon` șterge, `jj restore` restaurează"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Să abandonăm C3:"], "afterMarkdowns": ["Gata!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Încearcă!", "", "`jj abandon C3`"]}}
      ]
    },
    "sl_SI": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Opuščanje sprememb", "", "`jj abandon` briše, `jj restore` obnovi"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Opustimo C3:"], "afterMarkdowns": ["Končano!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Poskusi!", "", "`jj abandon C3`"]}}
      ]
    },
    "pl": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Porzucanie zmian", "", "`jj abandon` usuwa, `jj restore` przywraca"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Porzućmy C3:"], "afterMarkdowns": ["Gotowe!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Spróbuj!", "", "`jj abandon C3`"]}}
      ]
    },
    "it_IT": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Abbandonare modifiche", "", "`jj abandon` elimina, `jj restore` ripristina"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["Abbandoniamo C3:"], "afterMarkdowns": ["Fatto!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Prova!", "", "`jj abandon C3`"]}}
      ]
    },
    "ta_IN": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## மாற்றங்களை கைவிடுதல்", "", "`jj abandon` நீக்குகிறது, `jj restore` மீட்டமைக்கிறது"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3 ஐ கைவிடுவோம்:"], "afterMarkdowns": ["முடிந்தது!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## முயற்சிக்கவும்!", "", "`jj abandon C3`"]}}
      ]
    },
    "tr_TR": {
      "childViews": [
        {"type": "ModalAlert", "options": {"markdowns": ["## Değişiklikleri bırakma", "", "`jj abandon` siler, `jj restore` geri yükler"]}},
        {"type": "GitDemonstrationView", "options": {"beforeMarkdowns": ["C3'ü bırakalım:"], "afterMarkdowns": ["Tamam!"], "command": "jj abandon C3", "beforeCommand": ""}},
        {"type": "ModalAlert", "options": {"markdowns": ["## Deneyin!", "", "`jj abandon C3`"]}}
      ]
    }
  }
};
