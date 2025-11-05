import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import "./index.less";
import SymposiumItem, {
  type SymposiumItemProps,
} from "./Component/SymposiumItem";
import { fetchMockData } from "./api";
import { Skeleton } from "antd";
import type { MockData } from "./mockData";

const Home: React.FC = () => {
  const [data, setData] = useState<MockData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchMockData(600).then((res) => {
      if (!mounted) return;
      setData(res);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="home-warpper">
      <div className="home-header">
        <div>我的座谈会 (999)</div>
        <Input
          style={{ width: 220 }}
          placeholder="请输入关键词"
          prefix={<SearchOutlined />}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="home-content">
        {loading ? (
          <Skeleton active paragraph={{ rows: 6 }} />
        ) : (
          <>
            <SymposiumItem {...data!.inProgress} />
            <SymposiumItem {...data!.paused} />
            <SymposiumItem {...data!.upcoming} />
            {data!.history?.map((item: SymposiumItemProps, index: number) => (
              <SymposiumItem {...item} key={item.id} hideTitle={index > 0} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
