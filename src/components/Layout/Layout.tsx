import "./style.scss";
import ThuVienIcon from "assets/layout/ThuVienIcon";
import RadioIcon from "assets/layout/RadioIcon";
import ZingChartIcon from "assets/layout/ZingChartIcon";
import KhamPhaIcon from "assets/layout/KhamPhaIcon";
import LogoDark from "assets/layout/logo-dark.svg";
import LogoDarkMobie from "assets/layout/icon_zing_mp3_60.f6b51045.svg";
import Avt from "assets/layout/avt.png";
import React, { ReactElement, useMemo, useState } from "react";
import NhacMoi from "assets/layout/NhacMoi";
import ChuDe from "assets/layout/ChuDe";
import Top100 from "assets/layout/Top100";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Button from "components/commons/Button/Button";
import MacDown from "assets/layout/MacDown";
import useMobile from "ultis/useMobile";

type TMenu = {
  title: string;
  img: ReactElement;
  tag?: string;
  href?: string;
};

const Layout = () => {
  const [show, setShow] = useState(useMobile(1150));

  const MENU: TMenu[] = useMemo(() => {
    return [
      {
        title: "Thư viện",
        img: <ThuVienIcon />,
        href: "/thu-vien",
      },
      {
        title: "Khám phá",
        img: <KhamPhaIcon />,
        href: "/",
      },
      {
        title: "#zingchart",
        img: <ZingChartIcon />,
        href: "/zingchart",
      },
      {
        title: "Radio",
        img: <RadioIcon />,
        tag: "LIVE",
        href: "/radio",
      },
    ];
  }, []);

  const RANK: TMenu[] = useMemo(() => {
    return [
      {
        title: "BXH Nhạc Mới",
        img: <NhacMoi />,
      },
      {
        title: "Chủ Đề & Thể Loại",
        img: <ChuDe />,
      },
      {
        title: "Top 100",
        img: <Top100 />,
      },
    ];
  }, []);

  console.log("show", show);

  return (
    <div className="wrapper-layout">
      <div
        className={`left-menu ${show ? "show" : "close"}`}
        style={{ minWidth: show ? 240 : 70 }}
      >
        <div className="show-hidden" onClick={() => setShow(!show)}>
          {show ? <LeftOutlined /> : <RightOutlined />}
        </div>
        <div
          className="logo"
          style={{
            justifyContent: show ? "start" : "center",
          }}
        >
          {show ? (
            <img
              src={LogoDark}
              alt=""
              className="logo-desktop"
              style={{
                display: "block",
                padding: "0px 28px",
              }}
            />
          ) : (
            <img
              src={LogoDarkMobie}
              alt=""
              className="logo-mobile"
              style={{ display: "block" }}
            />
          )}
        </div>
        <div className="menu">
          {MENU.map(({ title, img }) => {
            return (
              <div key={title} className="item-menu">
                {React.cloneElement(img, { className: "icon-menu" })}
                <span style={{ width: show ? "fit-content" : "0px" }}>
                  {title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="divide" />
        <div className="rank">
          {RANK.map(({ title, img }) => {
            return (
              <div key={title} className="item-menu">
                {React.cloneElement(img, { className: "icon-menu" })}
                <span>{title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="zm-header">
        <div className="zm-header-left">
          <div className="next-pre">
            <button className="button-pre">
              <ArrowLeftOutlined />
            </button>
            <button className="button-next">
              <ArrowRightOutlined />
            </button>
          </div>
          <div className="search">
            <Input
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              prefix={<SearchOutlined width={"20px"} height={"20px"} />}
              height={40}
            />
          </div>
        </div>
        <div className="zm-header-right">
          <Button
            title={"Nâng cấp tài khoản"}
            style={{ width: 172, height: 40 }}
          />
          <Button
            outlet
            title="Tải bản macOS"
            prefix={<MacDown />}
            style={{ width: 172, height: 40 }}
          />
          <div className="setting">
            <SettingOutlined />
          </div>
          <div className="avt">
            <img src={Avt} />
          </div>
        </div>
      </div>
      <div className="right-menu">
        <div className="tab">
          <div className="list-play">Danh sách phát</div>
          <div className="listen">Nghe gần đây</div>
        </div>
        <div className="clock"></div>
        <div className="menu-icon"></div>
      </div>
    </div>
  );
};

export default Layout;
