import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { DiaryItem, ReducerAction, DiaryDispatch } from "./types";

function reducer(state: DiaryItem[], action: ReducerAction): DiaryItem[] {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
      break;
    }
    default: {
      return state;
    }
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext<DiaryItem[] | undefined>(
  undefined
);
export const DiaryDispatchContext = createContext<DiaryDispatch | undefined>(
  undefined
);

const tempDiaryData: DiaryItem[] = [
  {
    id: 1,
    createdDate: String(new Date(2026, 1, 19).getTime()),
    emotionId: 4,
    content: "매달 결제되는 ott, 카드값 지출이 마음이 아프다",
  },
  {
    id: 2,
    createdDate: String(new Date(2026, 1, 24).getTime()),
    emotionId: 3,
    content:
      "넥스트, 리액트를 잘 하려면 근본인 자바스크립트부터 꼼꼼히 공부해야겠다",
  },
  {
    id: 3,
    createdDate: String(new Date(2026, 1, 26).getTime()),
    emotionId: 1,
    content: "오늘 새로운 회사에서 면접 제의가 왔다!",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      idRef.current = tempDiaryData.length + 1;
      localStorage.setItem("diary", JSON.stringify(tempDiaryData));
      dispatch({
        type: "INIT",
        data: tempDiaryData,
      });
      setIsLoading(false);
      return;
    }

    const parsedData: DiaryItem[] = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;

    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);
  // 새로운 일기 추가
  const onCreate = (
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate: String(createdDate),
        emotionId,
        content,
      },
    });
  };
  // 새로운 일기 수정
  const onUpdate = (
    id: number | string,
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: Number(id),
        createdDate: String(createdDate),
        emotionId,
        content,
      },
    });
  };
  // 새로운 일기 삭제
  const onDelete = (id: number | string) => {
    dispatch({
      type: "DELETE",
      data: { id: Number(id) },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
