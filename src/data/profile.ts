export const services = [
  {
    title: '業務 Web システム開発',
    body: '管理画面・ワークフロー・帳票出力など、社内で毎日使うシステムを設計から作ります。',
    stack: 'Django REST Framework / Vue 3 / PostgreSQL',
  },
  {
    title: 'Windows デスクトップアプリ',
    body: 'タスクトレイ常駐ツールやオフラインで動くビューア、自動アップデート付きの配布まで対応します。',
    stack: 'Tauri v2 + Rust / C# .NET (WPF)',
  },
  {
    title: '予約・決済付きサイト',
    body: '静的に配信する高速な公開ページと、在庫管理つきの予約・オンライン決済を組み合わせます。',
    stack: 'Astro / Cloudflare Workers / Stripe',
  },
  {
    title: 'データ取込・業務の自動化',
    body: 'CSV / PDF の明細取込、Excel 出力、定型作業の自動化で手作業を減らします。',
    stack: 'Python / TypeScript',
  },
  {
    title: '開発環境・デプロイ整備',
    body: 'Docker での環境統一、GitHub Actions による自動ビルド、本番サーバーへのデプロイ手順を整えます。',
    stack: 'Docker / nginx / GitHub Actions',
  },
];

export const skills = [
  { group: '言語', items: ['Python', 'TypeScript', 'JavaScript', 'Rust', 'C#', 'PHP', 'Ruby'] },
  { group: 'フロントエンド', items: ['Vue 3', 'React', 'Astro', 'Vite', 'Tailwind CSS'] },
  { group: 'バックエンド', items: ['Django', 'Django REST Framework', 'FastAPI', 'Laravel'] },
  { group: 'デスクトップ', items: ['Tauri v2', '.NET (WPF)', 'WebView2'] },
  { group: 'DB・インフラ', items: ['PostgreSQL', 'SQLite', 'Cloudflare Workers / D1', 'Docker', 'nginx', 'gunicorn'] },
  { group: 'その他', items: ['Stripe', 'pytest', 'GitHub Actions', 'Claude Code'] },
];

export type Project = {
  name: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: 'PDM システム',
    kind: '業務 Web システム',
    summary: '製品を構成する品番・版・構成表 (BOM) を管理し、変更申請と承認を経てリリースする製品データ管理システム。',
    points: ['構成ツリー / フラット BOM の表示と Excel 出力', '変更申請 → 承認のワークフロー', 'PostgreSQL 上での並行更新テスト'],
    stack: ['Django 6', 'DRF', 'Vue 3', 'TypeScript', 'PostgreSQL', 'pytest', 'Docker'],
  },
  {
    name: '家計管理アプリ',
    kind: 'Web アプリ (スマホ向け)',
    summary: '2 人で共有できる家計簿。固定費の管理、割り勘の精算、カード明細の一括取込までできます。株の収支管理アプリも同じ基盤で動いています。',
    points: ['カード明細 CSV / PDF をブラウザ内で解析して一括登録', '共有支出の精算額を自動計算', '株価・権利確定日の自動取得'],
    stack: ['Vue 3', 'Django REST Framework', 'Docker', 'nginx'],
  },
  {
    name: '施設予約サイト',
    kind: '予約・決済サイト',
    summary: '宿泊施設向けの公式サイト。公開ページは静的生成し、予約・決済・管理画面はサーバー側で処理します。',
    points: ['区画タイプ × 泊数の在庫管理', 'Stripe Checkout による決済', '管理画面で予約状況を確認'],
    stack: ['Astro', 'Cloudflare Workers', 'D1', 'Stripe'],
  },
  {
    name: 'Suguni',
    kind: 'Windows デスクトップアプリ',
    summary: '会議コードを共有するだけで参加できる、2〜5 人向けの P2P 会議ツール。',
    points: ['サーバーを介さない P2P 通信', '自動アップデート'],
    stack: ['Tauri v2', 'Rust', 'tokio', 'TypeScript'],
  },
  {
    name: 'Markdown Viewer',
    kind: 'Windows デスクトップアプリ',
    summary: '外部と一切通信せずに動く Markdown プレビュー / エディタ。',
    points: ['Mermaid・Graphviz・WaveDrom の図をオフライン描画', '外部エディタの保存に追従して自動更新', 'PDF 出力・画像貼り付け'],
    stack: ['Tauri v2', 'TypeScript', 'Vite'],
  },
  {
    name: 'AI 利用ログ監査ツール',
    kind: 'CLI + Web ダッシュボード',
    summary: 'AI アシスタントの会話ログを集計し、誰がいつ何に使ったか・利用量を可視化する監査ツール。',
    points: ['秘密情報の自動マスク', 'トピック分類とリスクのフラグ付け', '全文検索ダッシュボード'],
    stack: ['Rust'],
  },
  {
    name: 'Git Graph',
    kind: 'Windows デスクトップアプリ',
    summary: 'Git のコミットグラフ・ブランチ・ワークツリーを一覧できる読み取り専用のビューア。',
    points: ['放置ブランチが分かる ahead / behind 表示', '任意の 2 コミット間の差分', 'タスクトレイ常駐'],
    stack: ['Tauri v2', 'React', 'TypeScript', 'Rust'],
    url: 'https://github.com/JUGOM0130/Git-Graph',
  },
  {
    name: 'TaskTray-Investment',
    kind: 'Windows デスクトップアプリ',
    summary: 'タスクトレイに常駐して株価・FX を監視するアプリ。トレイアイコン自体が値動きのチャートになります。',
    points: ['テクニカル指標による売買シグナル通知', 'タスクバー直上のミニパネル'],
    stack: ['C#', '.NET 10', 'WPF'],
    url: 'https://github.com/JUGOM0130/TaskTray-Investment',
  },
];
