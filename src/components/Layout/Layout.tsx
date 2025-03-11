import "./style.scss";
import LogoDark from "assets/layout/logo-dark.svg";
import LogoDarkMobie from "assets/layout/icon_zing_mp3_60.f6b51045.svg";

import React, { ReactElement, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box, IconButton, Divider } from "@mui/material";
import Avatar from "components/Avatar";

type TMenu = {
  title: string;
  img: ReactElement;
  tag?: string;
  href?: string;
};

const Layout = () => {
  const [show, setShow] = useState(true);

  const MENU: TMenu[] = useMemo(() => {
    return [
      {
        title: "User Management",
        img: <ManageAccountsIcon />,
        href: "/user-management",
      },
    ];
  }, []);

  return (
    <div className="wrapper-layout">
      <Box
        className={`left-menu ${show ? "show" : "close"}`}
        sx={{ minWidth: show ? 240 : 70 }}
      >
        <Box className="show-hidden" onClick={() => setShow(!show)}>
          <IconButton>{show ? <ChevronLeft /> : <ChevronRight />}</IconButton>
        </Box>
        <Box
          className="logo"
          sx={{
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
        </Box>
        <Box className="menu">
          {MENU.map(({ title, img }) => {
            return (
              <Box key={title} className="item-menu">
                {React.createElement(img.type, {
                  ...img.props,
                  className: `icon-menu ${img.props.className || ""}`,
                })}
                <span style={{ width: show ? "fit-content" : "0px" }}>
                  {title}
                </span>
              </Box>
            );
          })}
        </Box>
        <Divider className="divide" />
      </Box>
      <Box className="zm-header">
        <Avatar />
      </Box>
    </div>
  );
};

export default Layout;
