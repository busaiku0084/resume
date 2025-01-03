<details>
  <summary>
    決済システムの新インターフェース(IF)追加と運用改善・負荷試験
    <span>2022年/6ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>webサービス</span> <span>自社</span></li>
      <li><strong>担当工程:</strong> <span>設計</span> <span>コーディング</span> <span>テスト</span> <span>運用/保守</span></li>
      <li><strong>職種・役割:</strong> <span>バックエンド</span> <span>インフラ</span></li>
      <li><strong>使用技術:</strong> <span>Java</span> <span>Spring Boot</span> <span>PostgreSQL</span> <span>Docker</span> <span>Datadog</span> <span>GitHub</span> <span>AWS</span> <span>SQL</span></li>
  </div>
  <div class="markdown-content">

## プロジェクト概要

決済システムの新インターフェース(IF)追加と運用改善・負荷試験

## チーム情報

チーム人数：4名

## 開発・実装内容A

### 【概要】

決済システムにクレジットカードの再与信インターフェース(IF)を追加し、システムの幅を広げるとともに、既存機能の運用改善と不具合修正を行った。

### 【内容】

クレジットカードの再与信に対応する新しいIFを追加することで、サービスの拡張を実現。<br/>追加するクラスの設計、詳細設計、実装、テストを担当し、運用改善や軽微な不具合修正も行った。

### 【課題・問題点】

- 新IFの追加により、システムのセキュリティを確保しながら高負荷に耐えられる設計が求められた。
- 既存システムの運用改善と不具合修正も必要で、全体の品質とパフォーマンスを維持する必要があった。

### 【使用した技術】

- **設計**: 再与信インターフェースの追加に伴うクラス設計と詳細設計を実施。
- **実装**: Spring Bootを使用して新IFを実装し、必要なテストコードも作成。
- **テスト**: 詳細なテスト設計と実施を行い、機能の正確性とパフォーマンスを検証。
- **運用改善**: 軽微な不具合を修正し、運用中のシステムの安定性と効率を向上。

### 【成果】

- 新IFの追加により、決済システムのサービス範囲が拡大。
- セキュリティとパフォーマンスを両立し、高品質なシステムを提供。
- 既存機能の運用改善により、全体の安定性と効率が向上。

## 開発・実装内容B

### 【概要】

Taurusを用いて新IFの負荷試験を実施し、システムのパフォーマンスを評価・改善。

### 【内容】

負荷試験ツールを用いて新IFの負荷試験を実施し、システムの性能を評価。<br/>シナリオファイルの作成、負荷試験の実施、結果に基づく環境変数の調整とインフラの設定値変更を行った。

### 【課題・問題点】

- 新IFが高負荷に耐えられるかどうかを検証する必要があった。
- 負荷試験の結果を基に、システム全体のパフォーマンスを最適化する必要があった。

### 【使用した技術】

- **シナリオ設計**: 負荷試験のシナリオを設計し、yamlファイルで詳細を記述。
- **負荷試験**: Taurusを用いて負荷試験を実施し、システムの挙動を評価。
- **パフォーマンス最適化**: 負荷試験結果に基づき、環境変数の調整やインフラ設定値の変更を行い、システム効率を向上。

### 【成果】
- 新IFの高負荷対応を確認し、システムの信頼性を確保。
- パフォーマンス最適化により、システム全体の効率と安定性が向上。

## 使用技術（まとめ）
- **プログラミング言語**: Java, Shell Script
- **データベース**: PostgreSQL
- **インフラ**: AWS
- **フレームワーク**: Spring Boot
- **コンテナ**: Docker
- **インフラ構築ツール**: Terraform
- **負荷試験ツール**: Taurus
- **CI/CD**: GitHub Actions
- **バージョン管理**: Git, GitHub
- **監視ツール**: Mackerel, Datadog, Twilio
- **IDE**: IntelliJ
  </div>
</details>
