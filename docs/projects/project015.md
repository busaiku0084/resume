<details>
  <summary>
    メールマーケティングシステムのフロントエンドリプレイス
    <span>2026年/3ヶ月</span>
  </summary>
  <div>
    <ul>
      <li><strong>カテゴリ:</strong> <span>Webサービス</span> <span>受託</span> </li>
      <li><strong>担当工程:</strong> <span>要件定義</span> <span>設計</span> <span>コーディング</span> <span>テスト</span> </li>
      <li><strong>職種・役割:</strong> <span>PM</span> <span>フロントエンド</span> </li>
      <li><strong>使用技術:</strong> <span>TypeScript</span> <span>React</span> <span>Vite</span> <span>Tailwind CSS</span> <span>AWS</span> <span>GitHub Actions</span> </li>
    </ul>
  </div>
  <div class="markdown-content">

## プロジェクト概要

レガシーなAngular 5製のメールマーケティングシステム（ビジュアルメールエディタ）を、React + TypeScriptでフルリプレイスするプロジェクト。既存のバックエンドAPIはそのまま活用し、フロントエンドのみを刷新した。PMとして要件定義・設計・スケジュール管理を行いつつ、開発者として実装も担当した。


## チーム情報

チーム人数：2名（PM兼開発者1名、開発者1名）
役割：PM兼開発者（主担当）


## 開発・実装内容

#### ビジュアルメールエディタの再構築

- ブロックベースのWYSIWYGエディタをTiptap（ProseMirror）で実装
- 8種類のブロックタイプ（ヘッダー、見出し、テキスト、画像、ボタン、区切り線、フッター、分割レイアウト）に対応
- @dnd-kitによるドラッグ&amp;ドロップでのブロック並び替え
- リッチテキスト編集（フォントテーマ切り替え、インラインスタイル）
- HTML出力生成とプレビュー機能

#### テンプレート・コンテンツ管理

- メールテンプレートのCRUD・カテゴリ管理
- コンテンツの作成・編集・一覧・プレビュー
- カラーテーマ・ボタンスタイルのカスタマイズ
- 画像のアップロード・クロップ・管理機能

#### アーキテクチャ設計

- Feature-based architectureによるドメイン分離（auth, editor, template, content, image）
- OpenAPI 3.1 YAMLからTypeScript型を自動生成（openapi-typescript）
- TanStack Queryによるサーバーステート管理 + Zustandによるクライアントステート管理
- shadcn/ui + Tailwind CSS v4によるコンポーネント設計
- ADR（Architecture Decision Records）による設計判断の文書化

#### CI/CD・インフラ

- GitHub ActionsによるCI（lint、型チェック、テスト、ビルド検証）
- S3 + CloudFrontでのSPA配信基盤をAWS CDK（TypeScript）で構築
- Biome（Rust製）による高速なlint/format、Husky + lint-stagedによるpre-commitフック
- Vitestによるテスト基盤整備（カバレッジ70%以上を維持）


## 課題・問題点

- Angular 5の既存機能を正確に再現しつつ、モダンな設計に落とし込む必要があった。既存コードにドキュメントがなく、実際の動作から仕様を逆算する場面が多かった
- ビジュアルメールエディタはブロックの入れ子構造やHTML変換など複雑なロジックが多く、エッジケースの洗い出しに工数がかかった
- 2名体制での開発のため、設計・実装・レビューのバランスを取りながらスケジュールを管理する必要があった


## 工夫・思考プロセス

- 既存システムの全画面・全機能を操作して仕様書を作成し、リプレイス対象の優先順位を明確化
- ADRで技術選定の根拠を文書化し、後からの見直しや引き継ぎに備えた
- OpenAPI YAMLをSSOT（Single Source of Truth）として型を自動生成し、API連携の型安全性を担保
- エディタ部分はTiptapのヘッドレスアーキテクチャを活かし、UIとロジックを分離。ブロックタイプごとにコンポーネントを分割し、拡張性を確保
- issueベースのタスク管理で進捗を可視化し、PMとして週次で進捗確認・優先順位の調整を実施


## 成果

- Angular 5からReact 19 + TypeScriptへのフルリプレイスを約3ヶ月で完了
- テストカバレッジ70%以上を維持し、品質を担保したデリバリーを実現
- ADRによる設計判断の文書化により、今後の機能追加やメンバー増加時のオンボーディングコストを削減
- リプレイス完了後、新規機能開発フェーズへスムーズに移行。拡張性の高いアーキテクチャにより、新機能の追加が容易な状態を構築


## 使用技術（まとめ）

- **プログラミング言語**: TypeScript
- **フレームワーク**: React 19, Vite 7
- **UIライブラリ**: shadcn/ui, Tailwind CSS v4, Radix UI
- **エディタ**: Tiptap 3（ProseMirror）
- **状態管理**: TanStack Query, Zustand
- **D&amp;D**: @dnd-kit
- **テスト**: Vitest, React Testing Library, MSW
- **コード品質**: Biome, knip, Husky
- **インフラ**: AWS（S3, CloudFront）, AWS CDK
- **CI/CD**: GitHub Actions
- **API型生成**: openapi-typescript（OpenAPI 3.1）
- **バージョン管理**: Git（GitHub）

  </div>
</details>
