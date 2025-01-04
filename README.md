# resume
このリポジトリは、職務経歴書を管理するためのものです。以下の手順でローカル環境での表示やフォーマットを確認できます。

## デプロイ先
GitHub Pagesで公開されています。以下のURLからアクセス可能です。<br/>
**URL**: [https://busaiku0084.github.io/resume](https://busaiku0084.github.io/resume)

## ローカル環境でのプレビュー
`browser-sync`を使用してローカルでプレビューできます。

### 必要なツール
- **Node.js**（`npm`が含まれています）

### 手順
#### 1. ローカルサーバーの起動
以下のコマンドを実行して、ローカルサーバーを起動します。

```bash
cd ./docs
browser-sync start --server --files "**/*"
```

#### 2. ブラウザで確認
自動的にブラウザが開き、`index.html`が表示されます。<br/>
ファイルを保存すると、ブラウザが自動でリロードされます。

## PrettierによるMarkdown整形
Markdownファイルを整形するためにPrettierを使用します。

### 手順
#### 1. 整形の実行
以下のコマンドで指定したMarkdownファイルを整形します。

```bash
prettier --write README.md
```

複数のファイルを対象とする場合:

```bash
prettier --write "**/*.md"
```

#### 2. 設定ファイル
カスタマイズする場合、プロジェクトのルートに `.prettierrc`を作成してください。
