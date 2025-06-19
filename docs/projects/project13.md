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

チーム人数：3名（エンジニア2名、BIエンジニア1名）
役割：データパイプライン全体の設計・開発

## 開発・実装内容

### 【概要】

新規に収集した外部データを基に、BIツール（Tableau）での可視化を目的としたデータパイプラインを構築。<br>データの取得元はWebページやPDFファイルが中心であり、スクレイピングやPDF解析を行いながら、GlueとRedshiftを組み合わせて加工・蓄積。<br>分析用データはParquet形式で管理し、パフォーマンスを重視した構成とした。

### 【内容】

#### スクレイピング・PDF処理

- Webサイトからの定期的なデータ取得処理をPythonで実装
- PDFファイルからのデータ抽出も組み込み、複数形式のデータを統合

#### データ加工処理（Glue）

- 収集したデータをParquetに変換し、パーティションを付けて最適化
- Glueジョブで列の整形やNull処理などの前処理を実施

#### Redshiftへの投入

- Glue経由でParquetデータをRedshiftにロード
- データの構造に応じて分散キー・ソートキーを適切に設計

#### Tableauとの連携

- RedshiftとTableauを連携し、ビジュアライズのためのテーブル・ビューを整備
- 分析モデル（別部署作成）の出力結果も取り込み、統合ダッシュボードを実現

### 【課題・問題点】

- PDF解析の難易度が高く、データ構造の不安定さにより処理が複雑化
- データの更新頻度が不定期で、スケジューリングとバージョン管理が難しかった
- 分析モデルとの整合性維持に課題があり、データの前処理仕様を調整する必要があった

### 【工夫・思考プロセス】

- スクレイピング処理にRetry制御や差分検出を導入し、安定性と効率を両立
- Glueスクリプトは再利用可能なモジュールとして設計し、他データソースへの展開を想定
- Tableau向けデータはビューで抽象化し、構造変更に強い構成とした

### 【成果】

- 外部データの収集から可視化までの自動パイプラインを構築
- Parquet利用とRedshift最適化により、データ取得の速度とクエリコストを大幅削減
- 分析チームやビジネス部門との連携を強化し、意思決定のスピードを向上

## 使用技術（まとめ）

- **プログラミング言語**: Python
- **データ処理**: AWS Glue, pandas, PyPDF
- **データ基盤**: AWS S3, AWS Redshift
- **データ形式**: Parquet, CSV, PDF
- **BIツール**: Tableau
- **その他**: BeautifulSoup, Requests, cron, Redshift VIEW
  </div>
</details>
