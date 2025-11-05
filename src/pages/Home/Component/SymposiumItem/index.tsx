import React, { useCallback, useMemo, useState } from "react";
import { CaretRightOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import SymposiumCard, { type SymposiumCardProps } from "../SymposiumCard";
import clsx from "clsx";
import "./index.less";
import { CustomListItem, type listProps } from "../CustomListItem";

export interface SymposiumItemProps {
  id: string;
  title: string;
  type: "upcoming" | "history" | "paused" | "inProgress";
  startTime: string;
  endTime: string;
  data: SymposiumCardProps;
  place: string;
  hideTitle?: boolean;
  list?: listProps[];
}
const SymposiumItem: React.FC<SymposiumItemProps> = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const { title, hideTitle, startTime, endTime, type, data, list, place } =
    props;

  const toggleDetails = useCallback(() => {
    setShowDetails((s) => !s);
  }, []);

  const containerClass = useMemo(
    () => clsx("symposium-item-container", type),
    [type]
  );

  const expandIconClass = useMemo(
    () => clsx("expand-icon", { "open-icon": showDetails }),
    [showDetails]
  );

  const timeClass = useMemo(
    () =>
      clsx("symposium-time", { "symposium-time-normal": type !== "history" }),
    [type]
  );

  const renderListItem = useCallback(
    (item: listProps) => <CustomListItem {...item} />,
    []
  );
  const handleNav = useCallback((type: SymposiumItemProps["type"]) => {
    console.log(type);
  },[])
  return (
    <div className={"symposium-item-warpper"}>
      {title && !hideTitle && <h3 className="item-title">{title}</h3>}
      <div className={containerClass}>
        <div className={`symposium-item-content`}>
          {type === "history" && (
            <div
              className={expandIconClass}
              onClick={toggleDetails}
              role="button"
              aria-expanded={showDetails}
            >
              <CaretRightOutlined />
            </div>
          )}
          <SymposiumCard {...data} />
          <div className={timeClass}>
            <span>{startTime}</span>
            <span className="symposium-time-symbol">
              {type === "history" ? "to" : "|"}
            </span>
            <span>{endTime}</span>
          </div>
          <div className="symposium-place">{place}</div>
          <div className="symposium-action">
            {type === "inProgress" && (
              <Button type="primary" onClick={() => handleNav(type)}>
                进入直播
              </Button>
            )}
            {["upcoming", "paused"].includes(type) && (
              <Button color="default" variant="outlined" onClick={() => handleNav(type)}>
                {type === "paused" ? "继续直播" : "开始直播"}
              </Button>
            )}
            <div className="more-action">
              <MoreOutlined />
            </div>
          </div>
        </div>
        {showDetails && !!list?.length && (
          <List
            className="history-list"
            dataSource={list}
            renderItem={renderListItem}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(SymposiumItem);
