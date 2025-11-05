import React from "react";
import "./index.less";
import { items } from "./mockData";

const Symposium: React.FC = () => {
  return (
    <div className="symposium-page">
      <section className="section">
        <h3 className="section-title">暂停中</h3>
        {items.pause.map((it) => (
          <div className="row card" key={it.id}>
            <div className="left">
              <div className="label">{it.tags.join(" · ")}</div>
              <div className="title">{it.title}</div>
              <div className="small">{it.meta}</div>
            </div>
            <div className="middle">
              <div className="time">
                {it.start} — {it.end}
              </div>
              <div className="place">{it.place}</div>
            </div>
            <div className="right">
              <button className="btn primary">继续直播</button>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h3 className="section-title">未开始</h3>
        {items.upcoming.map((it) => (
          <div className="row card" key={it.id}>
            <div className="left">
              <div className="label">{it.tags.join(" · ")}</div>
              <div className="title">{it.title}</div>
              <div className="small">{it.meta}</div>
            </div>
            <div className="middle">
              <div className="time">
                {it.start} — {it.end}
              </div>
              <div className="place">{it.place}</div>
            </div>
            <div className="right">
              <button className="btn">开始直播</button>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h3 className="section-title">历史数据</h3>
        {/* <div className="history-card">
          {items.history.map((group) => (
            <div className="history-group" key={group.id}>
              <div className="group-header">
                <div className="group-title">{group.title}</div>
                <div className="group-range">{group.range}</div>
                <div className="group-place">{group.place}</div>
              </div>

              <div className="group-list">
                {group.list.map((it: any) => (
                  <div className="history-item" key={it.id}>
                    <a className="history-link">{it.title}</a>
                    <div className="history-time">
                      {it.start} — {it.end}
                    </div>
                    <div className="history-place">{it.place}</div>
                    <div className="history-author">{it.author}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Symposium;
