import { List } from "antd";
import "./index.less";

export interface listProps {
  id: string;
  title: string;
  start: string;
  end: string;
  place: string;
  author: string;
}

export const CustomListItem = (props: listProps) => {
  const { title, start, end, place, author } = props;
  return (
    <List.Item className="custom-Item-warpper">
      <span className="custom-Item-title">{title}</span>
      <div className="custom-Item-time">
        <span>时间：</span>
        <div className="custom-icon-time" />
        <span>{start}</span>
        <span className="custom-icon-sign">-</span>
        <div className="custom-icon-time" />
        <span> {end}</span>
      </div>
      <span className="custom-Item-place">{place}</span>
      <span className="custom-Item-author">{author}</span>
      <div className="custom-icon-delete" />
    </List.Item>
  );
};
