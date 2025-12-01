import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { EmotionItemProps } from "../types";

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}: EmotionItemProps) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
      onClick={onClick}
    >
      <img
        className="emotion_image"
        src={getEmotionImage(emotionId)!}
        alt={`emotion${emotionId}`}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
