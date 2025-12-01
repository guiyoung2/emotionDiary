# 📔 감정 일기장

> 일기와 감정을 함께 기록하는 웹 애플리케이션

감정 일기장은 일상의 기록과 함께 당신의 감정을 함께 기록할 수 있는 서비스입니다.
React와 React Router를 활용한 SPA(Single Page Application)로 구현되어 부드러운 사용자 경험을 제공합니다.

---

## ✨ 주요 기능

- 📝 **일기 작성**: 새로운 일기를 작성하고 저장할 수 있습니다
- ✏️ **일기 수정**: 작성한 일기를 수정할 수 있습니다
- 🗑️ **일기 삭제**: 저장된 일기를 삭제할 수 있습니다
- 😊 **감정 기록**: 일기와 함께 당시의 감정을 함께 기록할 수 있습니다 (5가지 감정: 완전 좋음, 좋음, 그럭저럭, 나쁨, 끔찍함)
- 📋 **일기 목록**: 작성한 모든 일기를 월별로 조회할 수 있습니다
- 🔍 **일기 상세**: 저장된 일기를 상세히 조회할 수 있습니다
- 💾 **로컬 저장**: 브라우저의 localStorage를 활용하여 데이터를 영구 저장합니다

---

## 🛠️ 기술 스택

- **React** 19.2.0
- **React Router DOM** 7.9.6
- **Vite** 7.2.2
- **JavaScript (ES6+)**
- **Context API**: 전역 상태 관리
- **localStorage**: 데이터 영구 저장

---

## 📁 프로젝트 구조

```
emotionDiary/
├── src/
│   ├── type/               # 타입 폴더
│   │   ├── index.ts        # 타입 정리
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── Home.tsx        # 메인 페이지 (일기 목록, 월별 조회)
│   │   ├── New.tsx         # 일기 작성 페이지
│   │   ├── Diary.tsx       # 일기 상세 조회 페이지
│   │   ├── Edit.tsx        # 일기 수정 페이지
│   │   └── Notfound.tsx    # 404 페이지
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Button.tsx      # 버튼 컴포넌트
│   │   ├── Header.tsx      # 헤더 컴포넌트
│   │   ├── Editor.tsx      # 일기 작성/수정 에디터
│   │   ├── Viewer.tsx      # 일기 상세 조회 뷰어
│   │   ├── DiaryList.tsx   # 일기 목록 컴포넌트
│   │   ├── DiaryItem.tsx   # 일기 아이템 컴포넌트
│   │   └── EmotionItem.tsx # 감정 선택 아이템 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   │   ├── useDiary.tsx    # 일기 데이터 관리 훅
│   │   └── usePageTitle.tsx # 페이지 타이틀 관리 훅
│   ├── util/               # 유틸리티 함수
│   │   ├── constants.ts    # 상수 정의 (감정 목록 등)
│   │   ├── get-emotion-image.ts # 감정 이미지 가져오기
│   │   └── get-stringed-date.ts # 날짜 포맷팅
│   ├── assets/             # 이미지, 폰트 등 리소스
│   │   └── emotion*.png    # 감정 아이콘 이미지
│   ├── App.tsx             # 메인 앱 컴포넌트 (라우팅, Context)
│   ├── main.tsx            # 애플리케이션 진입점
│   └── index.css           # 전역 스타일
├── public/                 # 정적 파일
│   └── NanumPenScript-Regular.ttf # 나눔펜 폰트
├── index.html              # HTML 템플릿
├── package.json            # 프로젝트 의존성
└── vite-env.d.ts           # 이미지 파일 타입 선언
└── vite.config.ts          # Vite 설정
```

---

## 🗺️ 라우팅

| 경로         | 페이지   | 설명                                    |
| ------------ | -------- | --------------------------------------- |
| `/`          | Home     | 모든 일기를 월별로 조회하는 메인 페이지 |
| `/new`       | New      | 새로운 일기를 작성하는 페이지           |
| `/diary/:id` | Diary    | 특정 일기를 상세히 조회하는 페이지      |
| `/edit/:id`  | Edit     | 특정 일기를 수정하는 페이지             |
| `*`          | Notfound | 존재하지 않는 경로 접근 시 404 페이지   |

---

## 💡 주요 기능 설명

### 상태 관리

- **Context API**를 사용하여 전역 상태 관리
- `DiaryStateContext`: 일기 데이터 상태
- `DiaryDispatchContext`: 일기 CRUD 액션 (생성, 수정, 삭제)

### 데이터 저장

- **localStorage**를 활용하여 브라우저에 데이터 영구 저장
- 페이지 새로고침 후에도 데이터 유지

### 월별 조회

- 메인 페이지에서 월 단위로 일기 조회 가능
- 이전/다음 달로 이동하여 조회 가능
