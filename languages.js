const translations = {
  zh: {
    home: "LoopHarbor，返回顶部", navigation: "主导航", language: "语言",
    navHow: "工作原理", navWorkspace: "工作台", navStart: "开始使用", navFaq: "常见问题",
    heroTitle1: "继续对话，", heroTitle2: "记住上下文。",
    heroText: "LoopHarbor 是开源 Agent 工作台，支持异步任务、多轮记忆，以及可查看的工具调用。",
    heroCta: "在 GitHub 上查看", heroLink: "了解工作原理",
    workspaceAlt: "中文 LoopHarbor 工作台，展示对话、计算工具调用和会话详情",
    heroCaption: "真实工作台界面 · 使用合成数据的示例会话", heroFoot: "为持续的对话而构建。", heroTags: "问答 · 审查 · 记忆",
    introTitle1: "不止一次", introTitle2: "提问。",
    introText: "继续追问。LoopHarbor 将每一轮关联到同一个会话，让 Agent 使用已有上下文，而不必每次从头开始。",
    introDetail: "每次请求都有独立的任务 ID。使用同一个会话 ID 继续对话：同一会话的轮次按顺序执行，不同会话可以并行。",
    loopTitle: "一段对话的旅程", loopRequest: "请求", loopRequestText: "FastAPI 创建任务并返回任务 ID",
    loopQueue: "队列", loopQueueText: "Redis 和 Celery 将任务分发给 Worker",
    loopAgent: "Agent", loopAgentText: "LangGraph 协调模型与工具",
    loopMemory: "记忆", loopMemoryText: "PostgreSQL 保存状态，供下一轮使用",
    workspaceTitle1: "看见过程，", workspaceTitle2: "理解上下文。",
    workspaceText: "对话、任务状态、记忆与工具事件集中在一个工作台。定位长对话中的信息，折叠不需要的内容，让重要内容更突出。",
    toolAlt: "中文工作台中的示例对话，计算工具事件已展开", toolCaption: "在对话旁查看工具输入与输出。",
    readTitle: "舒适阅读。", readText: "对话支持 Markdown、代码、表格和数学公式，也可以按消息、轮次或标题查找定位。",
    trailTitle: "查看执行。", trailText: "展开工具调用、查看任务状态，或将消息和记忆折叠为便于浏览的预览。",
    spaceTitle: "专注对话。", spaceText: "隐藏两侧面板，扩大对话空间；在小屏幕上，面板会以抽屉形式打开。",
    memoryTitle1: "记忆伴随", memoryTitle2: "每次对话。",
    memoryText: "返回原有会话，从上次的地方继续。同一会话的轮次按顺序处理，记忆摘要帮助后续对话延续上下文。",
    memoryDetail: "默认每五个成功轮次由模型生成摘要。会话、检查点与任务记录保存在 PostgreSQL；失败的轮次不会加入记忆。",
    memoryAlt: "中文会话详情面板，显示示例记忆摘要和任务队列", memoryCaption: "会话详情，一目了然。",
    reviewTitle1: "问答、审查，", reviewTitle2: "持续探索。",
    reviewText: "提出通用问题，或创建合同审查会话。两种模式都支持多轮追问和可查看的工具活动。",
    agentQuestion: "Agent 能使用哪些工具？", agentAnswer: "它可以调用四则计算和 Worker 本地日期时间工具，再继续生成回答。需要配置支持工具调用的 OpenAI 兼容模型。",
    legalQuestion: "关于合同审查", legalAnswer: "审查结果仅供参考，不构成法律意见。重要结论请交由合格的专业人士核实。",
    contractAlt: "中文合同审查示例，展示付款条款和风险提示", contractCaption: "合同审查示例会话。",
    startTitle1: "从代码", startTitle2: "到对话。",
    startText: "在本机启动服务、连接模型，然后打开工作台。项目仓库提供完整的各平台启动命令和多轮 API 示例。",
    startLink: "阅读部署指南", setup1: "启动基础设施",
    setup1Text: "使用 Docker Compose 启动 Redis 和 PostgreSQL，并在 Python 3.12 环境中安装依赖。",
    setup2: "配置模型", setup2Text: "在本地 .env 中填写服务商地址、模型名称和 API 密钥。模型须支持工具调用。",
    setup3: "启动 API 和 Worker", setup3Text: "启动 FastAPI 和 Celery Worker。macOS 下 README 推荐使用 solo 进程池。",
    setup4: "继续对话", setup4Text: "打开本地工作台或调用 API，使用同一个会话 ID 进行多轮追问。",
    faqTitle: "使用须知。", faq1: "运行需要什么？",
    faq1Text: "需要 Python 3.12、Docker 和 Docker Compose，以及支持 tools 和 tool_calls 的 OpenAI 兼容模型服务。具体步骤见仓库。",
    faq2: "是否完全离线？", faq2Text: "不是。工作台在本机运行，但模型输入会发送给配置的服务商。提交敏感信息前，请先了解其隐私和数据使用条款。",
    faq3: "可以直接公开到互联网吗？", faq3Text: "目前不可以。API 和界面没有身份认证，仅供本机使用；其他本地进程仍可能访问它们。",
    faq4: "工作台使用什么语言？", faq4Text: "当前工作台、系统提示词、错误消息和记忆摘要为中文。文档提供中文、英文、日文和德文版本。",
    faq5: "任务失败后会怎样？", faq5Text: "模型配置错误或请求失败会将任务标记为失败，不会静默切换到本地兜底。后续轮次可以继续，但失败轮次不会加入记忆。",
    closingTitle: "继续你的对话。", closingText: "探索代码，运行自己的工作台，看看下一段对话会通向哪里。",
    closingCta: "前往 GitHub 开始", footer: "LoopHarbor · 开源 Agent 工作台",
    description: "LoopHarbor 是支持异步任务、多轮记忆和可查看工具调用的开源 Agent 工作台。"
  },
  ja: {
    home: "LoopHarbor、ページ先頭へ", navigation: "メインナビゲーション", language: "言語",
    navHow: "仕組み", navWorkspace: "ワークスペース", navStart: "はじめる", navFaq: "よくある質問",
    heroTitle1: "会話を続ける。", heroTitle2: "文脈をつなぐ。",
    heroText: "LoopHarbor は、非同期タスク、複数ターンの記憶、確認できるツール呼び出しを備えたオープンソースの Agent ワークスペースです。",
    heroCta: "GitHub で見る", heroLink: "仕組みを見る",
    workspaceAlt: "会話、計算ツールの呼び出し、セッション詳細を表示する中国語の LoopHarbor 画面",
    heroCaption: "実際の画面 · 合成データによるセッション例", heroFoot: "会話を続けるために。", heroTags: "質問 · レビュー · 記憶",
    introTitle1: "一度きりの", introTitle2: "質問ではなく。",
    introText: "続けて質問できます。各ターンを同じセッションに結び付けることで、Agent は最初からやり直さずに文脈を利用できます。",
    introDetail: "リクエストごとにタスク ID が発行されます。同じスレッド ID で会話を続けると、セッション内のターンは順番に、別のセッションは並行して実行できます。",
    loopTitle: "会話がたどる道", loopRequest: "リクエスト", loopRequestText: "FastAPI がタスクを作成し ID を返す",
    loopQueue: "キュー", loopQueueText: "Redis と Celery が Worker にタスクを渡す",
    loopAgent: "Agent", loopAgentText: "LangGraph がモデルとツールを調整する",
    loopMemory: "記憶", loopMemoryText: "PostgreSQL が次のターンの状態を保存する",
    workspaceTitle1: "過程を見る。", workspaceTitle2: "文脈がわかる。",
    workspaceText: "会話、タスクの状態、記憶、ツールイベントを一つの画面に。長い会話から必要な情報を探し、不要な部分を折りたためます。",
    toolAlt: "計算ツールのイベントを展開した中国語の会話例", toolCaption: "会話とともにツールの入力と出力を確認できます。",
    readTitle: "読みやすく。", readText: "Markdown、コード、表、数式を表示。メッセージ、ターン、見出しから検索できます。",
    trailTitle: "実行を追う。", trailText: "ツール呼び出しを展開し、タスク状態を確認。メッセージや記憶をプレビューに折りたためます。",
    spaceTitle: "会話に集中。", spaceText: "両側のパネルを隠して会話を広く表示。小さな画面ではパネルがドロワーとして開きます。",
    memoryTitle1: "会話とともに", memoryTitle2: "記憶をつなぐ。",
    memoryText: "セッションに戻り、前回の続きから始められます。ターンはセッションごとに順番に処理され、記憶の要約が文脈を引き継ぎます。",
    memoryDetail: "既定では成功した５ターンごとにモデルが要約します。セッション、チェックポイント、タスク記録は PostgreSQL に保存され、失敗したターンは記憶に追加されません。",
    memoryAlt: "記憶の要約とタスクキューを表示する中国語のセッション詳細", memoryCaption: "セッションの詳細をひと目で。",
    reviewTitle1: "質問と審査。", reviewTitle2: "続ける。",
    reviewText: "一般的な質問にも、契約レビューにも対応。どちらのモードでも追加の質問とツールの実行状況を確認できます。",
    agentQuestion: "Agent にできることは？", agentAnswer: "四則演算と Worker のローカル日時ツールを使い、その結果を基に回答を続けられます。ツール呼び出しに対応した OpenAI 互換モデルの設定が必要です。",
    legalQuestion: "契約レビューについて", legalAnswer: "レビュー結果は参考情報であり、法的助言ではありません。重要な結論は有資格の専門家に確認してください。",
    contractAlt: "支払条項とリスクを表示する中国語の契約レビュー例", contractCaption: "契約レビューのセッション例。",
    startTitle1: "コードから", startTitle2: "会話へ。",
    startText: "ローカルでサービスを起動し、モデルを接続してワークスペースを開きます。リポジトリには各環境向けの手順と複数ターンの API 例があります。",
    startLink: "セットアップガイドを読む", setup1: "インフラを起動",
    setup1Text: "Docker Compose で Redis と PostgreSQL を起動し、Python 3.12 環境に依存関係をインストールします。",
    setup2: "モデルを設定", setup2Text: "ローカルの .env にプロバイダーの URL、モデル名、API キーを設定します。ツール呼び出しへの対応が必要です。",
    setup3: "API と Worker を起動", setup3Text: "FastAPI と Celery Worker を起動します。macOS では README が solo プールを推奨しています。",
    setup4: "会話を続ける", setup4Text: "ローカルの画面または API を使い、同じスレッド ID で追加の質問を送ります。",
    faqTitle: "知っておきたいこと。", faq1: "実行に必要なものは？",
    faq1Text: "Python 3.12、Docker、Docker Compose、および tools と tool_calls に対応する OpenAI 互換モデルが必要です。詳細はリポジトリをご覧ください。",
    faq2: "完全にオフラインですか？", faq2Text: "いいえ。画面はローカルで動作しますが、モデルへの入力は設定したプロバイダーに送信されます。機密情報の送信前に利用規約を確認してください。",
    faq3: "インターネットに公開できますか？", faq3Text: "現状のままではできません。API と画面に認証機能はなく、ローカル使用専用です。他のローカルプロセスからアクセスされる可能性もあります。",
    faq4: "画面の言語は？", faq4Text: "現在の画面、システムプロンプト、エラー、記憶の要約は中国語です。ドキュメントは中国語、英語、日本語、ドイツ語で提供しています。",
    faq5: "タスクが失敗した場合は？", faq5Text: "モデルの設定エラーやリクエスト失敗時はタスクが失敗となり、ローカルの代替処理に自動で切り替わりません。次のターンは続行できますが、失敗したターンは記憶に追加されません。",
    closingTitle: "会話の続きを。", closingText: "コードを探索し、自分のワークスペースを動かして、次の会話を始めましょう。",
    closingCta: "GitHub ではじめる", footer: "LoopHarbor · オープンソース Agent ワークスペース",
    description: "LoopHarbor は非同期タスク、複数ターンの記憶、確認可能なツール呼び出しを備えたオープンソースの Agent ワークスペースです。"
  },
  de: {
    home: "LoopHarbor, zum Seitenanfang", navigation: "Hauptnavigation", language: "Sprache",
    navHow: "So funktioniert es", navWorkspace: "Arbeitsbereich", navStart: "Erste Schritte", navFaq: "FAQ",
    heroTitle1: "Weiter reden.", heroTitle2: "Kontext behalten.",
    heroText: "LoopHarbor ist ein Open-Source-Agentenarbeitsbereich für asynchrone Aufgaben, Gesprächsspeicher und nachvollziehbare Werkzeugaufrufe.",
    heroCta: "Auf GitHub ansehen", heroLink: "So funktioniert es",
    workspaceAlt: "Chinesischer LoopHarbor-Arbeitsbereich mit Gespräch, Rechneraufruf und Sitzungsdetails",
    heroCaption: "Echte Oberfläche · Beispielsitzung mit synthetischen Daten", heroFoot: "Für Gespräche, die weitergehen.", heroTags: "Fragen · Prüfen · Erinnern",
    introTitle1: "Mehr als", introTitle2: "eine Frage.",
    introText: "Fragen Sie weiter. LoopHarbor verknüpft jede Runde mit derselben Sitzung, damit der Agent den Kontext nutzen kann, statt jedes Mal neu zu beginnen.",
    introDetail: "Jede Anfrage erhält eine eigene Aufgaben-ID. Mit derselben Thread-ID wird das Gespräch fortgesetzt: Runden einer Sitzung laufen der Reihe nach, unterschiedliche Sitzungen können parallel laufen.",
    loopTitle: "Der Weg einer Unterhaltung", loopRequest: "Anfrage", loopRequestText: "FastAPI erstellt eine Aufgabe und liefert ihre ID",
    loopQueue: "Warteschlange", loopQueueText: "Redis und Celery verteilen die Arbeit an einen Worker",
    loopAgent: "Agent", loopAgentText: "LangGraph koordiniert Modell und Werkzeuge",
    loopMemory: "Speicher", loopMemoryText: "PostgreSQL hält den Zustand für die nächste Runde",
    workspaceTitle1: "Arbeit sehen.", workspaceTitle2: "Kontext sehen.",
    workspaceText: "Gespräche, Aufgabenstatus, Speicher und Werkzeugereignisse an einem Ort. Finden Sie sich in langen Threads zurecht und klappen Sie Unwichtiges ein.",
    toolAlt: "Beispielgespräch im chinesischen Arbeitsbereich mit aufgeklapptem Rechneraufruf", toolCaption: "Ein- und Ausgaben der Werkzeuge stehen neben dem Gespräch.",
    readTitle: "Angenehm lesen.", readText: "Markdown, Code, Tabellen und mathematische Ausdrücke werden angezeigt. Suchen Sie nach Nachricht, Runde oder Überschrift.",
    trailTitle: "Abläufe verfolgen.", trailText: "Werkzeugaufrufe öffnen, Aufgabenstatus prüfen und Nachrichten oder Speicher zu einer Vorschau einklappen.",
    spaceTitle: "Platz schaffen.", spaceText: "Blenden Sie die Seitenleisten für mehr Gesprächsfläche aus. Auf kleinen Bildschirmen öffnen sie sich als Schubladen.",
    memoryTitle1: "Speicher für", memoryTitle2: "das Gespräch.",
    memoryText: "Kehren Sie zu einer Sitzung zurück und machen Sie dort weiter, wo Sie aufgehört haben. Runden laufen je Sitzung der Reihe nach; Zusammenfassungen tragen den Kontext weiter.",
    memoryDetail: "Standardmäßig fasst das Modell nach fünf erfolgreichen Runden zusammen. Sitzungen, Checkpoints und Aufgaben werden in PostgreSQL gespeichert; fehlgeschlagene Runden gelangen nicht in den Speicher.",
    memoryAlt: "Chinesische Sitzungsdetails mit Beispielspeicher und Aufgabenwarteschlange", memoryCaption: "Sitzungsdetails auf einen Blick.",
    reviewTitle1: "Fragen. Prüfen.", reviewTitle2: "Weiterdenken.",
    reviewText: "Stellen Sie allgemeine Fragen oder beginnen Sie eine Vertragsprüfung. Beide Modi unterstützen Folgefragen und sichtbare Werkzeugaktivitäten.",
    agentQuestion: "Was kann der Agent tun?", agentAnswer: "Er kann Grundrechenarten und lokale Datums- und Zeitwerkzeuge des Workers nutzen und danach weiter antworten. Ein OpenAI-kompatibles Modell mit Werkzeugaufrufen muss konfiguriert sein.",
    legalQuestion: "Hinweis zur Vertragsprüfung", legalAnswer: "Die Ergebnisse dienen nur zur Orientierung und sind keine Rechtsberatung. Lassen Sie wichtige Schlussfolgerungen von einer qualifizierten Fachperson prüfen.",
    contractAlt: "Chinesisches Beispiel einer Vertragsprüfung mit Zahlungsklausel und Risikohinweis", contractCaption: "Beispiel einer Vertragsprüfung.",
    startTitle1: "Vom Code", startTitle2: "zum Gespräch.",
    startText: "Starten Sie die Dienste lokal, verbinden Sie Ihr Modell und öffnen Sie den Arbeitsbereich. Das Repository enthält vollständige Anleitungen und API-Beispiele für mehrere Runden.",
    startLink: "Einrichtung ansehen", setup1: "Infrastruktur starten",
    setup1Text: "Starten Sie Redis und PostgreSQL mit Docker Compose und installieren Sie die Abhängigkeiten in einer Python-3.12-Umgebung.",
    setup2: "Modell konfigurieren", setup2Text: "Tragen Sie Anbieter-URL, Modellnamen und API-Schlüssel in die lokale .env ein. Das Modell muss Werkzeugaufrufe unterstützen.",
    setup3: "API und Worker starten", setup3Text: "Starten Sie FastAPI und einen Celery-Worker. Unter macOS empfiehlt die README den Solo-Pool.",
    setup4: "Gespräch fortsetzen", setup4Text: "Öffnen Sie den lokalen Arbeitsbereich oder nutzen Sie die API. Verwenden Sie für Folgefragen dieselbe Thread-ID.",
    faqTitle: "Gut zu wissen.", faq1: "Was wird benötigt?",
    faq1Text: "Python 3.12, Docker und Docker Compose sowie ein konfigurierter OpenAI-kompatibler Modellanbieter mit Unterstützung für tools und tool_calls. Die Anleitung steht im Repository.",
    faq2: "Ist alles offline?", faq2Text: "Nein. Der Arbeitsbereich läuft lokal, aber Modelleingaben werden an den konfigurierten Anbieter gesendet. Prüfen Sie vor der Eingabe sensibler Daten dessen Datenschutzbedingungen.",
    faq3: "Kann ich den Dienst öffentlich bereitstellen?", faq3Text: "Nicht in der aktuellen Form. API und Oberfläche haben keine Authentifizierung und sind nur für die lokale Nutzung gedacht. Andere lokale Prozesse können ebenfalls zugreifen.",
    faq4: "Welche Sprache hat die Oberfläche?", faq4Text: "Arbeitsbereich, Systemprompts, Fehlermeldungen und Speicherzusammenfassungen sind derzeit auf Chinesisch. Die Dokumentation gibt es auf Chinesisch, Englisch, Japanisch und Deutsch.",
    faq5: "Was passiert bei einem Fehler?", faq5Text: "Ein Konfigurations- oder Anfragefehler markiert die Aufgabe als fehlgeschlagen, ohne still auf eine lokale Ersatzlösung umzuschalten. Spätere Runden können fortfahren; die fehlgeschlagene Runde wird nicht gespeichert.",
    closingTitle: "Den Faden aufnehmen.", closingText: "Entdecken Sie den Code, starten Sie Ihren eigenen Arbeitsbereich und führen Sie das Gespräch weiter.",
    closingCta: "Auf GitHub starten", footer: "LoopHarbor · ein Open-Source-Agentenarbeitsbereich",
    description: "LoopHarbor ist ein Open-Source-Agentenarbeitsbereich mit asynchronen Aufgaben, Gesprächsspeicher und nachvollziehbaren Werkzeugaufrufen."
  }
};

const elements = [...document.querySelectorAll("[data-i18n]")];
const ariaElements = [...document.querySelectorAll("[data-i18n-aria]")];
const altElements = [...document.querySelectorAll("[data-i18n-alt]")];
const english = Object.fromEntries([
  ...elements.map((element) => [element.dataset.i18n, element.textContent]),
  ...ariaElements.map((element) => [element.dataset.i18nAria, element.getAttribute("aria-label")]),
  ...altElements.map((element) => [element.dataset.i18nAlt, element.getAttribute("alt")]),
  ["description", document.querySelector('meta[name="description"]').content]
]);
const languages = { en: english, ...translations };
const picker = document.querySelector("#language");
const docs = { en: "README.en.md", zh: "README.md", ja: "README.ja.md", de: "README.de.md" };

function setLanguage(language) {
  const strings = languages[language];
  if (!strings) return;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : language;
  document.title = `LoopHarbor — ${strings.heroTitle1} ${strings.heroTitle2}`;
  elements.forEach((element) => { element.textContent = strings[element.dataset.i18n]; });
  ariaElements.forEach((element) => { element.setAttribute("aria-label", strings[element.dataset.i18nAria]); });
  altElements.forEach((element) => { element.alt = strings[element.dataset.i18nAlt]; });
  document.querySelector('meta[name="description"]').content = strings.description;
  document.querySelector(".text-link").href = `https://github.com/jimmyken/LoopHarbor/blob/main/${docs[language]}`;
  picker.value = language;
}

const requested = new URL(window.location.href).searchParams.get("lang");
setLanguage(Object.hasOwn(languages, requested) ? requested : "en");
picker.disabled = false;
picker.removeAttribute("title");
picker.addEventListener("change", () => {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", picker.value);
  history.replaceState(null, "", url);
  setLanguage(picker.value);
});
