# resume

職務経歴書をYAMLデータ駆動で管理するリポジトリです。
プロジェクト情報をYAMLで一元管理し、ビルドスクリプトでMarkdown/PDFを自動生成します。

## デプロイ先

GitHub Pagesで公開されています。
**URL**: [https://busaiku0084.github.io/resume](https://busaiku0084.github.io/resume)

## プロジェクト構成

```
data/                  # データ層（YAML）
├── profile.yaml       # 基本情報
├── pr.yaml            # 自己PR
├── career.yaml        # 職歴
├── skills.yaml        # スキルセット
├── education.yaml     # 学歴
└── projects/          # 各プロジェクト（1ファイル=1プロジェクト）
    ├── project001.yaml
    └── ...
templates/             # テンプレート（EJS）
├── resume.md.ejs      # ブラウザ表示用
├── project.md.ejs     # 個別プロジェクト用
└── pdf/
    └── resume-pdf.md.ejs  # PDF用
scripts/               # ビルドスクリプト
├── build.js           # YAML → MD 生成
└── build-pdf.js       # YAML → PDF 生成
docs/                  # 生成物（GitHub Pages公開用）
output/                # PDF出力先（.gitignore対象）
```

## セットアップ

```bash
npm install
```

## 使い方

### ビルドコマンド一覧

| コマンド | 会社名 | 用途 |
|---------|--------|------|
| `npm run build` | 非表示（A社/B社） | GitHub Pages公開用のMD生成 |
| `npm run build:private` | 表示 | 会社名入りのMD生成（確認用） |
| `npm run build:pdf` | 表示 | 提出用PDF生成（`output/resume.pdf`） |
| `npm run build:pdf:public` | 非表示（A社/B社） | 公開用PDF生成（`output/resume-public.pdf`） |
| `npm run dev` | 非表示 | ローカルプレビュー（build + browser-sync） |
| `npm run dev:private` | 表示 | 会社名入りでローカルプレビュー |

### 会社名の表示/非表示について

GitHub Pagesでの公開時は会社名を非表示にします（`npm run build` がデフォルト）。
公開用の会社名は `data/career.yaml` の `public_name` フィールドで管理しています。

### ローカルプレビュー

```bash
npm run dev
```

MDを生成後、`browser-sync` でローカルサーバーを起動します。
ファイル変更時に自動リロードされます。

## プロジェクトの追加方法

1. `data/projects/` に新しいYAMLファイルを追加（例: `project015.yaml`）
2. `npm run build` を実行

YAMLのフィールド構成については `CLAUDE.md` を参照してください。

## 注意事項

- `docs/` 配下のMDファイルは自動生成されます。直接編集しないでください
- データの編集は `data/` のYAMLファイルに対して行ってください
- `npm run build` 後にコミットしてください
