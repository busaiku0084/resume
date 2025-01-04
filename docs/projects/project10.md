<details>
  <summary>
    コーポレートサイト（WordPress）のEC2からFargate移行
    <span>2024年/3ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>webサービス</span> <span>自社</span></li>
      <li><strong>担当工程:</strong> <span>要件定義</span> <span>設計</span> <span>コーディング</span> <span>テスト</span> <span>運用/保守</span></li>
      <li><strong>職種・役割:</strong> <span>バックエンド</span> <span>フロントエンド</span> <span>インフラ</span></li>
      <li><strong>使用技術:</strong> <span>AWS</span> <span>CI/CD</span> <span>Docker</span> <span>Git</span> <span>PHP</span> <span>WordPress</span></li>
  </div>
  <div class="markdown-content">
  
## プロジェクト概要

コーポレートサイト（WordPress）のEC2からFargate移行

## チーム情報

チーム人数：1名

## 開発・実装内容

### 【概要】

AWS EC2上で運用されていたWordPressサイトをFargateに移行。<br/>インフラ設計から実装、コンテナ化、CI/CD構築、メディア管理の改善までを一貫して対応。

### 【内容】

- **メディア管理の改善**
  - メディアファイルの差分がGitに多く含まれており、運用負荷が高かったため、S3へ永続化。
  - Amazon CloudFrontを使用してメディア配信を最適化。
- **CI/CDパイプラインの構築**
  - AWS CodePipelineとCodeBuildを使用して、Fargateへの自動デプロイを実現。
  - 各環境（開発・本番）でのスムーズなデプロイを可能に。
- **WordPressプラグインとコアの管理の効率化**
  - Composerを導入し、プラグインやWordPressコアのバージョン管理を自動化。
  - 商用プラグインも含めた構成を再設計し、Git管理は必要最小限に削減。
- **Dockerコンテナ化**
  - WordPressの公式イメージをベースにDockerfileを設計。PHPモジュールの追加やBedrockディレクトリ構成の適用。
  - ローカル環境の再現性を確保しつつ、ECS上でのパフォーマンスを最適化。

### 【課題・問題点】

- **Git運用の課題**
  - Git管理されていたファイルが膨大で、差分の確認や運用が困難な状態に。必要なリソースを最小限に絞り、運用負荷を削減。
- **メディアファイルの永続化**
  - 既存環境ではインスタンス内に保存されており、デプロイ時にデータが失われるリスクがあった。S3の導入で解決。
- **プラグインの依存性管理**
  - プラグインのインストールや更新が手動で行われており、管理が煩雑だった。Composerの導入により自動化を実現。

### 【工夫・思考プロセス】

- **運用負荷を最小限に抑える設計**
  - 永続化や管理方法の見直しにより、デプロイのスムーズさと保守性を向上。
- **環境間の一貫性の確保**
  - DockerとBedrockを活用して、本番環境と開発環境を可能な限り同期。
  - ECSタスク定義の変数で環境設定を統一。
- **メディア管理の改善とパフォーマンス向上**
  - S3とCloudFrontを組み合わせ、運用コスト削減と配信速度向上を同時に実現。

### 【成果】

- Fargate移行により、インフラ運用の負担が軽減し、スケーラビリティが向上。
- S3永続化により、メディアファイル管理の効率化を達成。
- CI/CDパイプラインにより、デプロイ時間を大幅に短縮し、エラーリスクを軽減。
- Composer導入により、プラグイン管理が効率化され、バージョン管理の正確性を向上。

## 使用技術（まとめ）

- **プログラミング言語**: PHP, ShellScript
- **フレームワーク**: Bedrock
- **インフラ**: AWS（Fargate, S3, CloudFront, RDS）
- **コンテナ**: Docker, Docker Compose
- **CI/CD**: AWS CodePipeline, CodeBuild
- **バージョン管理**: Git, CodeCommit
- **その他ツール**: Composer
  </div>
</details>
