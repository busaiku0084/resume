<details>
  <summary>
    画像変換サーバのリプレイス
    <span>2023年/12ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>Webサービス</span> <span>自社プロダクト</span> </li>
      <li><strong>担当工程:</strong> <span>コーディング</span> <span>テスト</span> <span>運用・保守</span> </li>
      <li><strong>職種・役割:</strong> <span>バックエンド</span> <span>インフラ</span> </li>
      <li><strong>使用技術:</strong> <span>Java</span> <span>Spring Boot</span> <span>PostgreSQL</span> <span>Docker</span> <span>Datadog</span> <span>GitHub</span> <span>GitHub Actions</span> <span>Terraform</span> <span>CI/CD</span> <span>AWS</span> <span>E2E</span> </li>
    </ul>
  </div>
  <div class="markdown-content">

## プロジェクト概要

サービス品質向上を目的として、既存のJavaフルスクラッチシステムをSpring Bootを使用したシステムにリプレイス。
詳細設計を基に実装を担当し、CI/CDパイプラインの構築とE2Eテストを実施。


## チーム情報

チーム人数：3名（チーム人数：3名）


## 開発・実装内容

### 開発・実装内容A

ローカル開発環境の改善、インフラ構築、テストコードの実装を行い、画像変換機能の安定性とパフォーマンスを向上させた。

### 開発・実装内容B

サービスの継続運用と品質向上を目的として、DBのアップグレード対応やCDNの導入などを行った。

PostgreSQLのアップグレードやAWS構成の改修、CDNの導入などを行い、システムの安定性とパフォーマンスを向上させた。


## 課題・問題点

- 既存システムはデプロイ方法が不明瞭で、バグが発生すると対応が困難だった。
- ローカル開発環境が貧弱で、開発効率が低かった。
- インフラの構築や修正が手間であった。
- データベースのバージョンアップが必要で、手順の確立が求められた。
- CDNを導入してキャッシュを効率的に行う必要があった。


## 工夫・思考プロセス

- **ローカル開発環境の改善**: DockerとMinIOを導入し、ローカル開発環境を充実させ、開発効率を向上。
- **インフラ構築**: Terraformを用いてAWS環境を構築し、簡単にインフラの構築や修正が可能な環境を実現。
- **実装**: Spring Bootを使用して詳細設計に基づく実装とJUnit5を用いたテストコードを作成。
- **CI/CD構築**: GitHub Actionsを使用してCI/CDパイプラインを構築。
- **E2Eテスト**: エンドツーエンドのテストを実施し、システム全体の動作確認を行った。
- **DBのアップグレード**: PostgreSQLのバージョンアップ対応を行い、手順書を作成。
- **AWS構成の改修**: Terraformを用いてAWS環境を再構築し、最適化。
- **CDNの導入**: Edgioを使用して画像のキャッシュを効率化し、レスポンス速度を向上。


## 成果

- 開発効率が向上し、余裕を持った開発が可能となった。
- インフラの構築と修正が容易になり、システムの運用性が向上。
- 画像の容量が小さくなり、レスポンス速度が向上。
- システムが他社でも使用されるようになり、利用者が増加。
- PostgreSQLのバージョンアップにより、データベースのパフォーマンスとセキュリティが向上。
- AWS環境の再構築と最適化により、システムの安定性が向上。
- CDNの導入により、画像の配信速度が向上し、ユーザー体験が向上。


## 使用技術（まとめ）

- **プログラミング言語**: Java
- **データベース**: PostgreSQL
- **インフラ**: AWS
- **フレームワーク**: Spring Boot
- **コンテナ**: Docker
- **CI/CD**: GitHub Actions
- **バージョン管理**: Git, GitHub
- **監視ツール**: Mackerel, Datadog
- **その他ツール**: Twilio, draw.io
- **IDE**: IntelliJ

  </div>
</details>
