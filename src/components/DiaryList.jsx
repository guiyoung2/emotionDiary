import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"lastest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"새 일기 작성"} type={"positive"} />
      </div>
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
