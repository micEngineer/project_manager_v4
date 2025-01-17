import type { Category, Prompt } from '../types';

export const sampleCategories: Category[] = [
  { id: '1', name: 'ビジネス', color: '#FF6B6B' },
  { id: '2', name: 'クリエイティブ', color: '#4ECDC4' },
  { id: '3', name: '技術', color: '#45B7D1' },
  { id: '4', name: '教育', color: '#96CEB4' },
  { id: '5', name: 'マーケティング', color: '#FFEEAD' }
];

export const samplePrompts: Prompt[] = [
  {
    id: '1',
    title: 'ブログ記事作成プロンプト',
    content: 'あなたは優秀なブログライターです。以下のトピックについて、SEOを意識した魅力的な記事を作成してください。記事は読者を引き付ける導入から始め、明確な構造を持ち、actionableな結論で締めくくってください。',
    category: '1',
    tags: ['ブログ', 'SEO', 'コンテンツ作成'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'コードレビュープロンプト',
    content: '経験豊富なシニアエンジニアとして、以下のコードをレビューしてください。特に以下の観点から分析と改善案を提示してください：\n1. コードの品質とベストプラクティス\n2. パフォーマンスの最適化\n3. セキュリティの考慮事項\n4. 保守性と可読性',
    category: '3',
    tags: ['プログラミング', 'コードレビュー', '技術'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'イラスト作成プロンプト',
    content: 'プロのイラストレーターとして、以下の要素を含む魅力的なイラストを生成してください。構図、色使い、光の当たり方、質感などの詳細な指示を含めることで、より意図に近い作品を生成できます。',
    category: '2',
    tags: ['イラスト', 'アート', 'デザイン'],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
  },
  {
    id: '4',
    title: 'プレゼン資料作成プロンプト',
    content: 'プレゼンテーションの専門家として、以下のトピックについて説得力のあるプレゼン資料を作成してください。各スライドは明確なメッセージを持ち、データや事例を効果的に活用し、視覚的な要素も取り入れてください。',
    category: '1',
    tags: ['プレゼン', 'ビジネス', 'コミュニケーション'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: '5',
    title: 'バグ分析プロンプト',
    content: 'デバッグの専門家として、以下のエラーログとコードを分析し、問題の原因と解決策を提案してください。考えられる副作用も含めて包括的な分析を行ってください。',
    category: '3',
    tags: ['デバッグ', 'トラブルシューティング', '技術'],
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05'),
  },
  {
    id: '6',
    title: 'マーケティング戦略プロンプト',
    content: 'マーケティングストラテジストとして、以下の製品/サービスの効果的なマーケティング戦略を立案してください。ターゲット層の分析、競合分析、チャネル戦略、KPIの設定を含めた包括的な提案をお願いします。',
    category: '5',
    tags: ['マーケティング', '戦略', 'ビジネス'],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: '7',
    title: '教育コンテンツ作成プロンプト',
    content: '教育専門家として、以下のトピックについて効果的な学習教材を作成してください。学習者の理解度に応じた説明、具体例、演習問題を含め、段階的な学習が可能な構成にしてください。',
    category: '4',
    tags: ['教育', 'コンテンツ', '学習'],
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
  },
  {
    id: '8',
    title: 'UI/UXレビュープロンプト',
    content: 'UI/UXデザインの専門家として、以下のデザインをレビューし、改善点を指摘してください。ユーザビリティ、アクセシビリティ、視覚的一貫性、インタラクションデザインの観点から分析をお願いします。',
    category: '2',
    tags: ['UI', 'UX', 'デザイン'],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20'),
  },
  {
    id: '9',
    title: 'データ分析プロンプト',
    content: 'データアナリストとして、以下のデータセットを分析し、重要なインサイトを抽出してください。統計的な分析、トレンドの特定、予測モデルの提案を含めた包括的な分析レポートを作成してください。',
    category: '3',
    tags: ['データ分析', 'BI', '統計'],
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-02-25'),
  },
  {
    id: '10',
    title: 'カスタマーサポート応答プロンプト',
    content: 'カスタマーサポートの専門家として、以下の顧客問い合わせに対する適切な返答を作成してください。共感的な態度を示しながら、問題解決に向けた具体的なステップを提案してください。',
    category: '1',
    tags: ['カスタマーサポート', 'コミュニケーション', 'サービス'],
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
  }
];