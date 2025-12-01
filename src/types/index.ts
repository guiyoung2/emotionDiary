// 일기 아이템 타입
export interface DiaryItem {
  id: number;
  createdDate: string;
  emotionId: number;
  content: string;
}

// 감정 아이템 타입
export interface EmotionItem {
  emotionId: number;
  emotionName: string;
}

// Editor의 input 상태 타입
export interface EditorInput {
  createdDate: Date;
  emotionId: number;
  content: string;
}

// Reducer Action 타입
export type ReducerAction =
  | { type: "INIT"; data: DiaryItem[] }
  | { type: "CREATE"; data: DiaryItem }
  | { type: "UPDATE"; data: DiaryItem }
  | { type: "DELETE"; data: { id: number | string } };

// Dispatch 함수들 타입
export interface DiaryDispatch {
  onCreate: (createdDate: number, emotionId: number, content: string) => void;
  onUpdate: (
    id: number | string,
    createdDate: number,
    emotionId: number,
    content: string
  ) => void;
  onDelete: (id: number | string) => void;
}

// 컴포넌트 Props 타입들
export interface ButtonProps {
  text: string;
  type?: string;
  onClick: () => void;
}

export interface HeaderProps {
  title: string;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
}

export interface DiaryItemProps {
  id: number;
  createdDate: string;
  emotionId: number;
  content: string;
}

export interface DiaryListProps {
  data: DiaryItem[];
}

export interface EmotionItemProps {
  emotionId: number;
  emotionName: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface EditorProps {
  initData?: DiaryItem;
  onSubmit: (input: EditorInput) => void;
}

export interface ViewerProps {
  emotionId: number;
  content: string;
}

// 정렬 타입
export type SortType = "latest" | "oldest";
