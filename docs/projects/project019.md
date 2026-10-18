<details>
  <summary>
    社内向け生成AIチャットボットの機能追加・LLM基盤移行
    <span>2026年/3ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>Webサービス</span> <span>受託</span> </li>
      <li><strong>担当工程:</strong> <span>要件定義</span> <span>設計</span> <span>コーディング</span> <span>テスト</span> </li>
      <li><strong>職種・役割:</strong> <span>フロントエンド</span> <span>バックエンド</span> </li>
      <li><strong>使用技術:</strong> <span>TypeScript</span> <span>React</span> <span>Vite</span> <span>Hono</span> <span>Prisma</span> <span>SQL Server</span> <span>Azure</span> <span>Azure OpenAI</span> <span>AWS Bedrock</span> <span>Vertex AI</span> <span>Claude API</span> <span>GitHub Actions</span> </li>
    </ul>
  </div>
  <div class="markdown-content">

## プロジェクト概要

大手生命保険会社の社員向けに提供している社内生成AIアシスタント（チャットボット）のWebアプリケーションに、運用フェーズの途中から参画。RAGによる社内文書回答、ファイル検索、Web検索、カスタムGPT、画像生成などを備えた既存システムに対し、新機能の追加とLLM基盤の移行を担当した（システムの立ち上げは別メンバーが担当）。

各機能について、仕様書の作成から設計・実装（フロントエンド/バックエンド）・単体テスト・実機での疎通検証・QA指摘対応・リリースブランチの調整までを一貫して担当した。


## チーム情報

チーム人数：6名（開発6名程度）
役割：フルスタックエンジニア（機能追加・改修担当）


## 開発・実装内容

#### チャット回答内のHTML描画とCSP導入

- LLMの回答に含まれるHTMLのコードブロックを、回答内にインラインで描画する機能を追加
- DOMPurifyによる許可リスト方式のサニタイズ（要素・属性・CSSプロパティを完全一致で列挙）、描画規模の上限（要素数・ネスト深さ・文字数）を設け、超過時はコードブロック表示にフォールバック
- 「見た目ごとコピー」（Excel貼り付け用に罫線・背景色を付与したHTMLを生成）と「HTMLをコピー」の2種類のコピー機能
- アプリ全体にContent Security Policyを段階導入（off / report-only / enforce を環境変数で切替）。違反は認証付きの自前APIで収集し、利用者ごとの日次上限・保存期間・定期削除を設けた
- サニタイズで除去した内容は種類と件数のみを記録し、本文は残さないプライバシーに配慮した監視設計
- CSPで外部スクリプトを許可せずに済むよう、PDFプレビューのWorker・フォントを自作Viteプラグインで自ドメイン配信に変更

#### LLMモデルの移行・呼び出し基盤の切替

- 提供終了予定のモデルを後継モデル（GPT-5.5、Gemini 3.7 Flash など）へ移行。旧モデル名をエイリアス表で読み替え、過去の会話やカスタムGPTの設定を壊さずに自動で後継モデルへ切り替え
- メインチャット、Vision、クエリプランニング、リランキング、Code Interpreterなど10以上の呼び出し経路を移行し、その過程で潜在バグ2件を修正
- GPT-5系のパラメータ非互換（max_tokens / temperature）により聞き返し機能が無言で停止していた不具合を修正
- Claudeの呼び出し基盤をGCP Vertex AIからAWS Bedrockへ切り替え、Claude Opus 4.7へ更新。thinkingの仕様変更（adaptive）などAPIの変更に追従
- 画像生成モデルをgpt-image-2（Azure OpenAI）に切り替え。環境変数だけで旧モデルへ切り戻せる構成とした

#### その他の機能追加・改善

- 数式（LaTeX）表示：システムプロンプトで数式の記法を統一させ、自作のremarkプラグイン + KaTeXで描画（通貨表記との誤認識やコードブロックへの誤適用を防止）
- クリップボード画像のペースト添付：テキストと画像が混在する場合の判定、ファイル名の自動付与、既存の添付バリデーションとの統合
- メモリ一覧のページネーションの重複・欠落、無限スクロール停止の不具合を修正
- Frontend CIがリリースブランチで動作していなかった設定漏れの修正、環境変数定義の棚卸し、Claude Codeのスキル・サブエージェントのチーム共通化


## 課題・問題点

- 顧客側のクラウド環境（AWS）の準備状況に合わせて、Claudeの接続先がVertex AIとAWS Bedrockの間で複数回切り替わり、そのたびに全呼び出し経路を漏れなく切り替える必要があった
- モデル移行に伴い、新モデルのAPI非互換（パラメータ仕様の変更、リージョン提供の制約）が発生する中で、過去の会話・設定との互換性を維持する必要があった
- LLMが出力したHTMLを描画することによるXSSリスクがあり、さらにCSPが未導入でサニタイズが唯一の防御手段だった
- 複数のリリースバージョンを並行開発し、変更が自動で後続バージョンへマージされる運用の中で、バージョン間の機能差を調整する必要があった


## 工夫・思考プロセス

- 接続先の切替時は疎通検証スクリプトでモデルIDやAPIの挙動を実機で確定させてから適用。設定不足はアプリ起動を止めずに初回呼び出し時に明示的なエラーとし、障害が黙って握りつぶされないようにした
- 旧モデル名の正規化をフロントエンド・バックエンドの両方の入口で行い、既存データの互換性を保った
- HTML描画は許可リスト方式のサニタイズ・描画規模の上限・CSPの段階導入（検知モード→遮断モード）・除去記録の監視を組み合わせた多層防御で設計した
- モデルや接続先を設定だけで切り戻せる構成にし、障害時や将来のモデル更新に改修なしで対応できるようにした
- 自作のViteプラグインやSDKの型補完で対応し、追加の依存パッケージを増やさないことを意識した


## 成果

- 提供終了予定モデルからの移行とClaude Opus 4.7への更新を、既存の会話・設定を壊さずに完了
- 移行の過程で、潜在バグ2件と聞き返し機能が無言で停止していた不具合を是正
- HTML描画・数式表示・画像ペーストなど、回答の視認性と入力の操作性を高める機能をリリースし、QA指摘事項もすべて解消
- 機能追加と同時にユニットテストを整備し、継続的なリリースでも品質を保てる状態を維持


## 使用技術（まとめ）

- **プログラミング言語**: TypeScript
- **フロントエンド**: React 18, Vite, PandaCSS, React Query, react-markdown（自作remarkプラグイン）, KaTeX, DOMPurify, pdf.js
- **バックエンド**: Hono, Zod, Prisma
- **DB**: SQL Server（Azure SQL）
- **LLM**: Azure OpenAI（GPT-5.5, gpt-image-2）, Claude（AWS Bedrock）, Gemini（GCP Vertex AI）
- **インフラ**: Azure App Service, Docker
- **テスト・品質**: Vitest, Testing Library, Biome
- **CI/CD**: GitHub Actions
- **開発支援**: Claude Code（スキル・サブエージェント）
- **バージョン管理**: Git（GitHub）

  </div>
</details>
