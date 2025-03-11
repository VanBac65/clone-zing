import "./style.scss";
import LogoDark from "assets/layout/logo-dark.svg";
import LogoDarkMobie from "assets/layout/icon_zing_mp3_60.f6b51045.svg";

import React, { ReactElement, useCallback, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box, IconButton, Divider } from "@mui/material";
import Avatar from "components/Avatar";
import { Outlet, useNavigate } from "react-router-dom";

type TMenu = {
  title: string;
  img: ReactElement;
  tag?: string;
  href?: string;
};

const Layout = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(window.location.pathname || "/");

  const MENU: TMenu[] = useMemo(() => {
    return [
      {
        title: "User Management",
        img: <ManageAccountsIcon />,
        href: "/user-management",
      },
    ];
  }, []);

  const handleActive = useCallback(
    (link?: string) => {
      if (!link) return;
      navigate(link);
      setActive(link);
    },
    [navigate]
  );

  return (
    <div className="wrapper-layout">
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
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
            onClick={() => handleActive("/")}
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
            {MENU.map(({ title, img, href }) => {
              return (
                <Box
                  key={title}
                  className="item-menu"
                  onClick={() => handleActive(href)}
                  sx={{
                    background: active === href ? "#4a404038" : "transparent",
                  }}
                >
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
        <Box className="content">
          <Outlet />
        </Box>
      </Box>
      <Box className="zm-header">
        <Avatar />
      </Box>
    </div>
  );
};

export default Layout;
