# CLAUDE.md - 職務経歴書リポジトリ

## プロジェクト概要

職務経歴書をデータ駆動で管理するリポジトリ。
プロジェクト情報をYAMLで一元管理し、ビルドスクリプトでMarkdown/HTMLを自動生成する。

## リファクタリングの目的

1. **データとテンプレートの分離**: プロジェクト情報をYAMLで管理し、MDはビルドで自動生成する
2. **プロジェクト項目の統一**: 全プロジェクトで同じフィールド構成を保証する
3. **resume2リポジトリとの統合**: `/Users/s.ohashi/Documents/resume2` の詳細なプロジェクト内容をこのリポジトリに取り込む
4. **PDF変換機能の追加**: 提出用PDFを生成できるようにする（デザインはresume2を参考）
5. **ブラウザ表示の維持**: 現行のmarked.jsベースのMD描画はそのまま活用する

## アーキテクチャ

```
resume/
├── CLAUDE.md
├── package.json
├── data/                          # データ層（YAML）
│   ├── profile.yaml               # 基本情報
│   ├── career.yaml                # 職歴
│   ├── skills.yaml                # スキルセット
│   ├── education.yaml             # 学歴
│   ├── pr.yaml                    # 自己PR
│   ├── draft.yaml                 # 転職ドラフト固有項目
│   └── projects/                  # 各プロジェクト（1ファイル=1プロジェクト）
│       ├── project001.yaml
│       ├── project002.yaml
│       └── ...
├── templates/                     # テンプレート（EJS or Handlebars）
│   ├── resume.md.ejs              # ブラウザ表示用MDテンプレート
│   ├── project.md.ejs             # 個別プロジェクトMDテンプレート
│   ├── pdf/                       # PDF用テンプレート
│   │   └── resume-pdf.md.ejs      # 提出用PDF向けテンプレート（resume2のデザイン準拠）
│   └── draft/                     # 転職ドラフト用テンプレート
│       ├── project.md.ejs         # プロジェクト個別MD（コピペ用）
│       └── profile.md.ejs         # 固有項目MD
├── scripts/                       # ビルドスクリプト
│   ├── build.js                   # YAML → MD 生成（ブラウザ用）
│   ├── build-pdf.js               # YAML → PDF 生成（提出用）
│   └── build-draft.js             # YAML → 転職ドラフト用MD生成
├── docs/                          # 生成物（GitHub Pages公開用）※git管理する
│   ├── index.html
│   ├── style.css
│   ├── markdown-style.css
│   ├── script.js
│   ├── resume.md                  # ← 自動生成
│   └── projects/                  # ← 自動生成
│       ├── project001.md
│       └── ...
└── output/                        # 出力先（.gitignore対象）
    ├── resume.pdf
    └── draft/                     # 転職ドラフト用MD
        ├── profile.md             # 固有項目（コピペ用）
        └── projects/              # プロジェクト別MD（コピペ用）
```

## プロジェクトYAMLの統一フィールド

各 `data/projects/projectXXX.yaml` は以下のフィールドを持つ：

```yaml
id: "014"                              # プロジェクト番号（3桁ゼロ埋め）
name: "採用管理システム（ATS）開発"        # プロジェクト名
company: "業務委託"                      # 所属区分（会社名 or 業務委託）
period: "2025年"                        # 開始年
duration: "6ヶ月"                       # 期間
category:                               # カテゴリ（配列）
  - "Webサービス"
phases:                                 # 担当工程（配列）
  - "設計"
  - "コーディング"
  - "テスト"
roles:                                  # 職種・役割（配列）
  - "バックエンド"
technologies:                           # 使用技術（配列）
  - "PHP"
  - "CakePHP"
  - "AWS"
team:                                   # チーム情報
  size: 4
  details: "バックエンド3名、PdM 1名"
  role: "バックエンドエンジニア（主担当）"

# --- 以下は自由記述セクション（Markdown形式） ---
overview: |
  概要テキスト...

details: |
  詳細な開発・実装内容（Markdown）...

challenges: |
  課題・問題点（Markdown）...

approach: |
  工夫・思考プロセス（Markdown）...

results: |
  成果（Markdown）...

tech_summary: |                         # 使用技術まとめ
  - **プログラミング言語**: PHP, JavaScript
  - **フレームワーク**: CakePHP 5
```

## ビルドコマンド

```bash
npm run build              # YAML → docs/ にMD生成（公開用、会社名非表示）
npm run build:private      # YAML → docs/ にMD生成（会社名表示）
npm run build:pdf          # YAML → output/resume.pdf 生成（提出用、会社名表示）
npm run build:pdf:public   # YAML → output/resume-public.pdf 生成（会社名非表示）
npm run build:draft        # YAML → output/draft/ に転職ドラフト用MD生成（会社名表示）
npm run build:draft:public # YAML → output/draft/ に転職ドラフト用MD生成（会社名非表示）
npm run dev                # build + browser-sync でローカルプレビュー
```

## 技術スタック

- **ランタイム**: Node.js
- **データ形式**: YAML（js-yaml）
- **テンプレート**: EJS（軽量でMD生成に適する）
- **PDF変換**: md-to-pdf または Puppeteer（resume2のデザインを再現）
- **ローカルプレビュー**: browser-sync（既存）
- **Markdown整形**: Prettier（既存）

## ブラウザ表示について

- `docs/` 配下がGitHub Pagesで公開される
- `index.html` が `resume.md` をfetchし、`marked.js` でHTMLに変換して描画
- `script.js` が各プロジェクトMDも動的にfetchして埋め込む
- **生成されたMDファイルはgit管理する**（GitHub Pagesに必要なため）

## PDF生成について

- resume2のデザイン（テーブル形式のメタ情報 + 構造化された本文）を踏襲
- resume2では `![](./docs/xxx.md)` によるインクルード構文でMDを結合していた
- PDFテンプレートではプロジェクト一覧表 + 各プロジェクト詳細を1つのMDにまとめて変換

## 作業時の注意

- `data/` のYAMLを編集したら `npm run build` で再生成すること
- `docs/` 配下のMDファイルを直接編集しないこと（ビルドで上書きされる）
- プロジェクト追加時は `data/projects/` にYAMLを追加し、ビルドするだけでOK
- resume2（`/Users/s.ohashi/Documents/resume2`）はプロジェクト内容の参照元として利用
