import Button from "./Button";
import DiaryItemComponent from "./DiaryItem";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DiaryListProps, DiaryItem, SortType } from "../types";

const DiaryList = ({ data }: DiaryListProps) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState<SortType>("latest");

  const onChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as SortType);
  };

  const getSortedData = (): DiaryItem[] => {
    return [...data].sort((a: DiaryItem, b: DiaryItem) => {
      if (sortType === "latest") {
        return Number(b.createdDate) - Number(a.createdDate);
      } else {
        return Number(a.createdDate) - Number(b.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType} value={sortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 작성"}
          type={"positive"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItemComponent key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
