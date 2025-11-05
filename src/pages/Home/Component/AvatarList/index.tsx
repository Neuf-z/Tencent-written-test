import React, { memo, useMemo } from "react";
import { Avatar } from "antd";
import "./index.less";

export interface AvatarListProps {
  name: string;
  list?: { src: string; id: string }[];
}

const DEFAULT_AVATAR_SIZE = 18;
const DEFAULT_MAX = { count: 4, style: { color: "#999", backgroundColor: "#DDD" } };

const AvatarList: React.FC<AvatarListProps> = ({ name, list = [] }) => {
  const avatars = useMemo(
    () => list.map((item) => <Avatar size={DEFAULT_AVATAR_SIZE} key={item.id} src={item.src} />),
    [list]
  );

  return (
    <div className="avatar-list-warpper">
      <span className="avatar-list-title">{name}</span>
      <Avatar.Group size={DEFAULT_AVATAR_SIZE} max={DEFAULT_MAX}>
        {avatars}
      </Avatar.Group>
    </div>
  );
};

AvatarList.displayName = "AvatarList";

export default memo(AvatarList);
