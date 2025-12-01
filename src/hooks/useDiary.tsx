import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import { DiaryItem } from "../types";

const useDiary = (id: string | undefined): DiaryItem | undefined => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState<DiaryItem | undefined>();
  const nav = useNavigate();

  useEffect(() => {
    if (!data || !id) {
      return;
    }

    const currentDiary = data.find((item) => String(item.id) === String(id));

    if (!currentDiary) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      return;
    }

    setCurDiaryItem(currentDiary);
  }, [id, data, nav]);

  return curDiaryItem;
};

export default useDiary;
