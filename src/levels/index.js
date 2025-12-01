// Each level is part of a "sequence;" levels within
// a sequence proceed in the order listed here
exports.levelSequences = {
  intro: [
    require('./jj/new').level,
    require('./jj/branching').level,
    require('./jj/merging').level,
    require('./jj/rebasing').level
  ],
  rampup: [
    require('./jj/revsets').level,
    require('./jj/abandon').level
  ],
  workflows: [
    require('./jj/describe').level,
    require('./jj/squash').level,
    require('./jj/edit').level
  ],
  advanced: [
    require('./jj/undo').level,
    require('./jj/conflicts').level
  ],
  remote: [
    require('./jj/bookmark').level,
    require('./jj/remote').level
  ]
};

// there are also cute names and such for sequences
var sequenceInfo = exports.sequenceInfo = {
  intro: {
    displayName: {
      'en_US': 'Introduction Sequence',
      'de_DE': 'Einführung',
      'ja'   : 'まずはここから',
      'fr_FR': 'Séquence d\'introduction',
      'es_AR': 'Secuencia introductoria',
      'es_MX': 'Secuencia introductoria',
      'es_ES': 'Secuencia introductoria',
      'pt_BR': 'Sequência introdutória',
      'gl'   : 'Secuencia introductoria',
      'zh_CN': '基础篇',
      'zh_TW': '基礎篇',
      'ko'   : 'jj 기본',
      'ro': "Introducere",
      'ru_RU': 'Введение',
      'uk'   : 'Вступ',
      'vi'   : 'Giới Thiệu Chuỗi Luyện Tập',
      'sl_SI': 'Uvodno Zaporedje',
      'pl'   : 'Wprowadzenie',
      'it_IT': "Sequenza introduttiva",
      'ta_IN': 'அறிமுக தொடர் வரிசை',
      'tr_TR': 'Giriş bölümü'
    },
    about: {
      'en_US': 'A nicely paced introduction to the majority of jj commands',
      'de_DE': 'Eine gut abgestimmte Einführung in die wichtigsten jj-Befehle',
      'ja'   : 'jjの基本的なコマンド群をほどよいペースで学ぶ',
      'fr_FR': 'Une introduction en douceur à la majorité des commandes jj',
      'es_AR': 'Una breve introducción a la mayoría de los comandos de jj',
      'es_MX': 'Una breve introducción a la mayoría de los comandos de jj',
      'es_ES': 'Una breve introducción a la mayoría de los comandos de jj',
      'pt_BR': 'Uma breve introdução à maioria dos comandos do jj',
      'gl'   : 'Unha breve introducción á maioría dos comandos de jj',
      'zh_CN': '循序渐进地介绍 jj 主要命令',
      'zh_TW': '循序漸進地介紹 jj 主要命令',
      'ko'   : 'jj의 주요 명령어를 깔끔하게 알려드립니다',
      'ro': "Un bun început pentru majoritatea comenzilor jj",
      'ru_RU': 'Хорошо подобранное введение в основные команды jj',
      'uk'   : 'Гарно підібране введення в основні команди jj',
      'vi'   : 'Từng bước làm quen với phần lớn lệnh điều khiển jj',
      'sl_SI': 'Prijeten uvod v jj ukaze',
      'pl'   : 'Krótkie wprowadzenie do większości poleceń jj',
      'it_IT': "Un'introduzione graduale ai principali comandi jj",
      'ta_IN': 'பெரும்பாலான jj கட்டளைகளுக்கு ஒரு நல்ல அறிமுகம்',
      'tr_TR': 'jj komutlarının çoğunun yüksek tempolu bir tanıtımı'
    }
  },
  rampup: {
    displayName: {
      'en_US': 'Ramping Up',
      'de_DE': 'Eine Stufe höher',
      'ja'   : '次のレベルに進もう',
      'fr_FR': 'Montée en puissance',
      'es_AR': 'Acelerando',
      'es_MX': 'Acelerando',
      'es_ES': 'Acelerando',
      'pt_BR': 'Acelerando',
      'gl'   : 'Alixeirando',
      'zh_CN': '进阶篇',
      'zh_TW': '進階篇',
      'ro': "În continuare",
      'ru_RU': 'Едем дальше',
      'uk'   : 'Їдемо далі',
      'ko'   : '다음 단계로',
      'vi'   : 'Tăng Tốc',
      'sl_SI': 'Prva Stopnička',
      'pl'   : 'Rozkręcenie',
      'it_IT': "Diamoci dentro",
      'ta_IN': 'சற்று அதிகப்படுத்த',
      'tr_TR': 'Hızlanma'
    },
    about: {
      'en_US': 'Revsets and reverting changes',
      'de_DE': 'Revsets und Änderungen rückgängig machen',
      'ja'   : 'Revsetsと変更の取り消し',
      'fr_FR': 'Revsets et annulation des modifications',
      'es_AR': 'Revsets y deshacer cambios',
      'es_MX': 'Revsets y deshacer cambios',
      'es_ES': 'Revsets y deshacer cambios',
      'pt_BR': 'Revsets e desfazer mudanças',
      'gl'   : 'Revsets e desfacer cambios',
      'zh_CN': 'Revsets 和撤销变更',
      'zh_TW': 'Revsets 和撤銷變更',
      'ro': "Revsets și anularea modificărilor",
      'ru_RU': 'Revsets и отмена изменений',
      'uk'   : 'Revsets і скасування змін',
      'ko'   : 'Revsets와 변경 취소',
      'vi'   : 'Revsets và hoàn tác thay đổi',
      'sl_SI': 'Revsets in razveljavitev sprememb',
      'pl'   : 'Revsets i cofanie zmian',
      'it_IT': "Revsets e annullare le modifiche",
      'ta_IN': 'Revsets மற்றும் மாற்றங்களை திரும்பப்பெறுதல்',
      'tr_TR': 'Revsets ve değişiklikleri geri alma'
    }
  },
  workflows: {
    displayName: {
      'en_US': 'Workflows',
      'de_DE': 'Arbeitsabläufe',
      'ja'   : 'ワークフロー',
      'fr_FR': 'Flux de travail',
      'es_AR': 'Flujos de trabajo',
      'es_MX': 'Flujos de trabajo',
      'es_ES': 'Flujos de trabajo',
      'pt_BR': 'Fluxos de trabalho',
      'gl'   : 'Fluxos de traballo',
      'zh_CN': '工作流',
      'zh_TW': '工作流',
      'ro': "Fluxuri de lucru",
      'ru_RU': 'Рабочие процессы',
      'uk'   : 'Робочі процеси',
      'ko'   : '워크플로우',
      'vi'   : 'Quy trình làm việc',
      'sl_SI': 'Delovni tokovi',
      'pl'   : 'Przepływy pracy',
      'it_IT': "Flussi di lavoro",
      'ta_IN': 'வேலை ஓட்டங்கள்',
      'tr_TR': 'İş akışları'
    },
    about: {
      'en_US': 'Squash and edit workflows - the jj way of working',
      'de_DE': 'Squash- und Edit-Workflows - die jj-Arbeitsweise',
      'ja'   : 'SquashとEditのワークフロー - jjの作業方法',
      'fr_FR': 'Flux de travail squash et edit - la méthode jj',
      'es_AR': 'Flujos de trabajo squash y edit - la forma jj de trabajar',
      'es_MX': 'Flujos de trabajo squash y edit - la forma jj de trabajar',
      'es_ES': 'Flujos de trabajo squash y edit - la forma jj de trabajar',
      'pt_BR': 'Fluxos de trabalho squash e edit - o jeito jj de trabalhar',
      'gl'   : 'Fluxos de traballo squash e edit - a forma jj de traballar',
      'zh_CN': 'Squash 和 edit 工作流 - jj 的工作方式',
      'zh_TW': 'Squash 和 edit 工作流 - jj 的工作方式',
      'ro': "Fluxuri de lucru squash și edit - modul jj de a lucra",
      'ru_RU': 'Рабочие процессы squash и edit - способ работы jj',
      'uk'   : 'Робочі процеси squash і edit - спосіб роботи jj',
      'ko'   : 'Squash와 edit 워크플로우 - jj 작업 방식',
      'vi'   : 'Quy trình squash và edit - cách làm việc của jj',
      'sl_SI': 'Delovni tokovi squash in edit - način dela jj',
      'pl'   : 'Przepływy pracy squash i edit - sposób pracy jj',
      'it_IT': "Flussi di lavoro squash ed edit - il modo jj di lavorare",
      'ta_IN': 'Squash மற்றும் edit வேலை ஓட்டங்கள் - jj வேலை செய்யும் முறை',
      'tr_TR': 'Squash ve edit iş akışları - jj çalışma yöntemi'
    }
  },
  advanced: {
    displayName: {
      'en_US': 'Advanced Topics',
      'de_DE': 'Themen für Fortgeschrittene',
      'ja'   : '上級トピック',
      'fr_FR': 'Sujets avancés',
      'es_AR': 'Temas avanzados',
      'es_MX': 'Temas avanzados',
      'es_ES': 'Temas avanzados',
      'pt_BR': 'Temas avançados',
      'gl'   : 'Temas avanzados',
      'zh_CN': '高级话题',
      'zh_TW': '進階主題',
      'ro': "Subiecte avansate",
      'ru_RU': 'Продвинутый уровень',
      'uk'   : 'Досвідчений рівень',
      'ko'   : '고급 문제',
      'vi'   : 'Các Chủ Đề Nâng Cao',
      'sl_SI': 'Napredne Teme',
      'pl'   : 'Tematy zaawansowane',
      'it_IT': "Argomenti avanzati",
      'ta_IN': 'மேம்பட்ட தலைப்புகள்',
      'tr_TR': 'İleri Seviye Konular'
    },
    about: {
      'en_US': 'Undo, redo, and conflict resolution',
      'de_DE': 'Rückgängig, Wiederholen und Konfliktlösung',
      'ja'   : 'アンドゥ、リドゥ、コンフリクト解決',
      'fr_FR': 'Annuler, refaire et résolution de conflits',
      'es_AR': 'Deshacer, rehacer y resolución de conflictos',
      'es_MX': 'Deshacer, rehacer y resolución de conflictos',
      'es_ES': 'Deshacer, rehacer y resolución de conflictos',
      'pt_BR': 'Desfazer, refazer e resolução de conflitos',
      'gl'   : 'Desfacer, refacer e resolución de conflitos',
      'zh_CN': '撤销、重做和冲突解决',
      'zh_TW': '撤銷、重做和衝突解決',
      'ro': "Anulare, refacere și rezolvarea conflictelor",
      'ru_RU': 'Отмена, повтор и разрешение конфликтов',
      'uk'   : 'Скасування, повтор і вирішення конфліктів',
      'ko'   : '실행 취소, 다시 실행 및 충돌 해결',
      'vi'   : 'Hoàn tác, làm lại và giải quyết xung đột',
      'sl_SI': 'Razveljavi, ponovi in reševanje konfliktov',
      'pl'   : 'Cofnij, ponów i rozwiązywanie konfliktów',
      'it_IT': "Annulla, ripeti e risoluzione dei conflitti",
      'ta_IN': 'செயல்தவிர், மீண்டும்செய் மற்றும் மோதல் தீர்வு',
      'tr_TR': 'Geri al, yinele ve çakışma çözümü'
    }
  },
  remote: {
    tab: 'remote',
    displayName: {
      'en_US': 'Working with Remotes',
      'de_DE': 'Mit Remotes arbeiten',
      'ja'   : 'リモートでの作業',
      'fr_FR': 'Travailler avec les dépôts distants',
      'es_AR': 'Trabajando con remotos',
      'es_MX': 'Trabajando con remotos',
      'es_ES': 'Trabajando con remotos',
      'pt_BR': 'Trabalhando com remotos',
      'gl'   : 'Traballando con remotos',
      'zh_CN': '使用远程仓库',
      'zh_TW': '使用遠端倉庫',
      'ro': "Lucrul cu remote-uri",
      'ru_RU': 'Работа с удалёнными репозиториями',
      'uk'   : 'Робота з віддаленими репозиторіями',
      'ko'   : '원격 저장소 사용',
      'vi'   : 'Làm việc với Remote',
      'sl_SI': 'Delo z oddaljenimi',
      'pl'   : 'Praca ze zdalnymi repozytoriami',
      'it_IT': "Lavorare con i remoti",
      'ta_IN': 'Remote களுடன் வேலை செய்தல்',
      'tr_TR': 'Uzak depolarla çalışma'
    },
    about: {
      'en_US': 'Bookmarks and pushing to remotes with jj git commands',
      'de_DE': 'Lesezeichen und Pushen zu Remotes mit jj git Befehlen',
      'ja'   : 'ブックマークとjj gitコマンドでリモートにプッシュ',
      'fr_FR': 'Signets et push vers les distants avec les commandes jj git',
      'es_AR': 'Marcadores y push a remotos con comandos jj git',
      'es_MX': 'Marcadores y push a remotos con comandos jj git',
      'es_ES': 'Marcadores y push a remotos con comandos jj git',
      'pt_BR': 'Marcadores e push para remotos com comandos jj git',
      'gl'   : 'Marcadores e push a remotos con comandos jj git',
      'zh_CN': '使用 jj git 命令的书签和推送到远程',
      'zh_TW': '使用 jj git 命令的書籤和推送到遠端',
      'ro': "Semne de carte și push la remote cu comenzi jj git",
      'ru_RU': 'Закладки и отправка на удалённые серверы с командами jj git',
      'uk'   : 'Закладки і надсилання на віддалені сервери з командами jj git',
      'ko'   : 'jj git 명령으로 북마크와 원격에 푸시',
      'vi'   : 'Dấu trang và đẩy lên remote với lệnh jj git',
      'sl_SI': 'Zaznamki in potiskanje na oddaljene z ukazi jj git',
      'pl'   : 'Zakładki i wypychanie do zdalnych z poleceniami jj git',
      'it_IT': "Segnalibri e push ai remoti con comandi jj git",
      'ta_IN': 'jj git கட்டளைகளுடன் புக்மார்க்குகள் மற்றும் remote க்கு push',
      'tr_TR': 'jj git komutlarıyla yer imleri ve uzak depolara gönderme'
    }
  }
};

exports.getTabForSequence = function(sequenceName) {
  var info = sequenceInfo[sequenceName];
  return (info.tab) ?
    info.tab :
    'main';
};
