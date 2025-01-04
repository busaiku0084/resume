<details>
  <summary>
    リダイレクタの運用・既存改修
    <span>2023年/12ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>webサービス</span> <span>自社</span></li>
      <li><strong>担当工程:</strong> <span>設計</span> <span>コーディング</span> <span>テスト</span> <span>運用/保守</span></li>
      <li><strong>職種・役割:</strong> <span>バックエンド</span> <span>フロントエンド</span> <span>インフラ</span></li>
      <li><strong>使用技術:</strong> <span>PHP</span> <span>Perl</span> <span>AWS</span> <span>Apache</span> <span>GitHub</span> <span>PostgreSQL</span></li>
  </div>
  <div class="markdown-content">

## プロジェクト概要

リダイレクタの運用・既存改修

## チーム情報

チーム人数：1名

## 開発・実装内容A

### 【概要】

廃止予定だったレガシーシステムの継続運用と既存改修を担当。<br/>管理画面の不具合改修、システム設計図の記述、インフラやミドルウェアの改修を行った。

### 【内容】

システムの安定運用と機能改善を目的とし、管理画面の不具合修正とAWSの不要リソース削除を行った。<br/>また、draw.ioの導入によりドキュメント管理を効率化。

### 【課題・問題点】

- 既存の引き継ぎ資料がなく、システムの全貌が把握できなかった。
- 廃止予定だったため、保守性が低い状態で運用されていた。
- 検証環境が動作していない問題があった。

### 【使用した技術】

- **システム設計図の記述**: ER図、シーケンス図、画面遷移図、インフラ構成図を作成し、システム全体の把握を実施。
- **管理画面の不具合改修**: PerlとPHPを使用してバグを修正。
- **インフラの改修**: 不要なリソースの削除とApacheの設定変更を行い、検証環境を復旧。
- **ドキュメント管理**: draw.ioを導入し、ドキュメント管理の効率化を実現。

### 【成果】

- システムの全体像を把握し、安定運用が可能となった。
- 管理画面の不具合を修正し、ユーザー体験を向上。
- 不要リソースの削減により、運用コストを削減。
- draw.ioの導入により、ドキュメント管理のコストを低減。

## 開発・実装内容B

### 【概要】

DBのアップグレード対応やミドルウェア（Apache）の設定変更などの運用業務を実施。

### 【内容】

サービスの継続運用のため、PostgreSQLのアップグレードやApacheの設定変更を行い、システムの安定性とパフォーマンスを向上させた。

### 【課題・問題点】

- システムの継続運用に伴い、DBのバージョンアップが必要だった。
- Apacheの設定が適切でなく、検証環境が動作していなかった。

### 【使用した技術】

- **DBのアップグレード**: PostgreSQLのバージョンアップを実施し、その手順書を作成。
- **Apacheの設定変更**: 検証環境が正しく動作するよう、Apacheの設定を見直し、最適化。
- **インフラ改修**: AWS上でインフラ構成の見直しと改修を実施。

### 【成果】

- PostgreSQLのバージョンアップにより、データベースのパフォーマンスとセキュリティを向上。
- 検証環境を復旧し、開発およびテストの効率を改善。
- AWS上のインフラ改修により、システムの安定性を向上。

## 使用技術（まとめ）

- **プログラミング言語**: Perl, PHP
- **データベース**: PostgreSQL
- **インフラ**: AWS
- **ウェブサーバー**: Apache
- **バージョン管理**: Git, GitHub
- **監視ツール**: Mackerel, Twilio
- **ドキュメント管理ツール**: draw.io
  </div>
</details>