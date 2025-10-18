<details>
  <summary>
    外部向けAPIリプレイスおよびデータ配信基盤の最適化
    <span>2025年/3ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>自社</span></li>
      <li><strong>担当工程:</strong> <span>要件定義</span> <span>設計</span> <span>実装</span> <span>テスト</span> <span>運用/保守</span></li>
      <li><strong>職種・役割:</strong> <span>バックエンド</span> <span>インフラ</span></li>
      <li><strong>使用技術:</strong> <span>Python</span> <span>AWS Lambda</span> <span>AWS Step Function</span> <span>Amazon S3</span> <span>Amazon Redshift</span> <span>Git</span> <span>Glue</span> <span>Amazon Athena</span> <span>Cloud Formation</span> <span>Tableau</span></li>
    </ul>
  </div>
  <div class="markdown-content">

## プロジェクト概要

外部向けAPIリプレイスおよびデータ配信基盤の最適化

## チーム情報

チーム人数：2名（バックエンド1名、PM 1名）
役割：バックエンド

## 開発・実装内容

#### 【概要】

既存の外部向けAPIシステムにおいて、処理の複雑化やパフォーマンス低下が課題となっていたため、システム全体のリプレイスを実施。また、Athenaによるデータ提供基盤の改善も並行して行い、ファイル形式をCSVからParquetに変更し、クエリ性能とコスト効率の向上を図った。

さらに、Cognitoによる認証の設計が煩雑で保守性が低かったため、構成を見直し、セキュリティの向上と一貫性の確保を実現した。外部仕様書や構成図の整備を通じて、開発チーム内外の認識の統一も促進した。

#### 【内容】

##### 外部向けAPIのリプレイス

- APIの認証・認可設計を再構築し、Cognitoと統合
- 古いAPI仕様の整理と新仕様のドキュメント化（OpenAPI利用）

##### Athena + S3によるデータ配信改善

- これまでCSVで提供していたファイルをParquet形式に変更し、読み込み性能を改善
- 大容量データに対応するため、ファイルを日付単位やカラム単位で分割
- Glue Data Catalogと統合し、パーティション処理を導入

##### 認証基盤のリファクタ

- Amazon Cognitoユーザープール・IDプールの整理と再設計

##### ドキュメント改善

- Redoclyを用いた外部向け仕様書の自動生成
- アーキテクチャ図を作成し、認識の齟齬を防止

#### 【課題・問題点】

* 旧APIの仕様が整理されておらず、想定外のエッジケースが多数存在
* データ提供形式が古く、運用コスト・クエリコストが増加傾向
* Cognitoの構成が複雑かつ属人的で、管理負荷が高い状態

#### 【工夫・思考プロセス】

* データ提供のユースケースを整理し、最小の構成で最大の効率を得られるようS3/Athena/Glue構成を設計
* API仕様の改訂を段階的に行い、旧仕様との互換性も一部維持
* 認証情報・構成をIaC化し、構成の一貫性と再現性を担保

#### 【成果】

-  外部APIのレスポンス速度が約30%向上し、問い合わせ件数が大幅に減少
-  データ提供基盤のパフォーマンスとクエリコストを大幅に削減（Parquet導入によりスキャン量1/5）
-  API仕様の明文化とドキュメントの整備により、他部門からの問い合わせ工数が削減

### 使用技術（まとめ）

- **プログラミング言語**: Python
- **インフラ**: AWS（S3, Athena, Glue, Cognito, Lambda, API Gateway）
- **認証・認可**: Amazon Cognito
- **データ形式**: Parquet, JSON
- **CI/CD**: CodePipeline
- **ドキュメント**: OpenAPI
- **IaC**: Cloud Formation
  </div>
</details>
