<details>
  <summary>
    リダイレクタ管理ツールのリプレイス
    <span>2023年/6ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>webサービス</span> <span>自社</span></li>
      <li><strong>担当工程:</strong> <span>設計</span> <span>コーディング</span> <span>テスト</span> <span>運用/保守</span></li>
      <li><strong>職種・役割:</strong> <span>バックエンド</span> <span>フロントエンド</span> <span>インフラ</span></li>
      <li><strong>使用技術:</strong> <span>Python</span> <span>Flask</span> <span>TypeScript</span> <span>React</span> <span>AWS</span> <span>Docker</span> <span>GitHub</span> <span>GitHub Actions</span> <span>Datadog</span> <span>CI/CD</span> <span>API</span> <span>PostgreSQL</span></li>
  </div>
  <div class="markdown-content">

## プロジェクト概要

リダイレクタ管理ツールのリプレイス

## チーム情報

チーム人数：2名<br/>※ 上長がコードレビューを担当

## 開発・実装内容

### 【概要】

PerlとPHPでフルスクラッチ実装された既存システムをPython（Flask）とReact（TypeScript）にリプレイス。<br/>システムの設計から実装、インフラ構築、CI/CDパイプラインの構築、アプリケーションの監視までを一貫して行った。

### 【内容】

サービス品質向上のため、バックエンドとフロントエンドの全面的なリプレイスを行い、インフラも刷新。<br/>API仕様書の作成、クラス設計、ログ設計、例外設計、AWS構成の設計を実施し、CI/CDパイプラインと監視システムを構築。

### 【課題・問題点】

既存システムは保守性が低く、新機能追加やバグ修正が困難だった。<br/>また、監視機能が不十分で、サービス障害発生時の対応が遅れる可能性があった。不要な機能も多く含まれていた。

### 【使用した技術】

- **設計**
  - **API仕様書**: OpenAPIを使用して詳細なAPI仕様書を作成。
  - **クラス設計**: 再利用性と保守性を高めるためのクラス設計を実施。
  - **ログ設計**: 問題発生時の迅速な対応を可能にするための詳細なログ設計を行う。
  - **例外設計**: 予期しないエラー発生時の安定性を確保するための例外処理設計を実施。
  - **AWS構成の設計**: 可用性とスケーラビリティを考慮したAWSインフラの設計を行う。
- **開発**
  - **バックエンド**: Python（Flask）を用いて構築。
  - **フロントエンド**: React（TypeScript）を用いて実装。
- **インフラ**: Dockerを用いて環境構築を行い、AWSでインフラを構築。
- **CI/CD**: GitHub Actionsを使用してCI/CDパイプラインを構築。
- **監視**: MackerelとDatadogを利用して、アプリケーションとインフラの監視を実装。

### 【成果】

- システム保守の効率化と品質向上を達成。
- 自動化されたデプロイによりリリースサイクルを短縮。
- 不要な機能を削減し、システムのシンプル化と効率化を実現。
- リアルタイムの監視体制により、将来の障害発生時の対応時間を大幅に短縮できる見込み。

## 使用技術（まとめ）

- **プログラミング言語**: Python, TypeScript
- **フレームワーク**: Flask, React
- **データベース**: PostgreSQL
- **インフラ**: AWS
- **コンテナ**: Docker
- **CI/CD**: GitHub Actions
- **バージョン管理**: Git, GitHub
- **監視ツール**: Mackerel, Datadog
- **その他ツール**: Twilio
  </div>
</details>
