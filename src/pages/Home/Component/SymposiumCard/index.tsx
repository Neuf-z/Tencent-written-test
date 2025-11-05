import React, { memo, useMemo } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import AvatarList from "../AvatarList";
import "./index.less";

interface ListProps {
  src: string;
  id: string;
}

export interface SymposiumCardProps {
  title: string;
  subtitle?: string;
  // 协作者头像
  collaborator: ListProps[];
  // 创作者头像
  creator: ListProps[];
  // 讨论会所属部门
  department: string;
  // 游戏名称
  game: string;
}

const SymposiumCard: React.FC<SymposiumCardProps> = ({ title, subtitle, collaborator, creator, department, game }) => {
  const subtitleNode = useMemo(() => {
    if (!subtitle) return null;
    return (
      <span className="symposium-name-subtitle">
        <DoubleRightOutlined className="arrow-right" /> {subtitle}
      </span>
    );
  }, [subtitle]);

  return (
    <div className="symposium-card-warpper">
      <div className="symposium-header">
        <span className="department">{department}</span>
        <span className="game">{game}</span>
      </div>
      <div className="symposium-name">
        <span className="symposium-name-title">{title}</span>
        {subtitleNode}
      </div>
      <div className="symposium-footer">
        <AvatarList name="创作者" list={creator} />
        <AvatarList name="协作者" list={collaborator} />
      </div>
    </div>
  );
};

SymposiumCard.displayName = "SymposiumCard";

export default memo(SymposiumCard);
