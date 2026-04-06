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

### ブラウザ表示用のMD生成

```bash
npm run build
```

`data/` のYAMLからMarkdownを生成し、`docs/` に出力します。

### 提出用PDF生成

```bash
npm run build:pdf
```

`output/resume.pdf` にPDFを出力します。

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
