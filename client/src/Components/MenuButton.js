import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const primaryOpen = Boolean(anchorEl);
  const handlePrimaryMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePrimaryMenuClose = () => {
    setAnchorEl(null);
  };

  const pages = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
  ];

  const renderPrimaryMenu = (
    <Menu
      anchorEl={anchorEl}
      id="primaryButton"
      keepMounted
      open={primaryOpen}
      onClose={handlePrimaryMenuClose}
      MenuListProps={{
        "aria-labelledby": "primary-menu-button",
      }}
    >
      {pages.map((page, idx) => {
        return (
          <MenuItem
            component={Link}
            to={page.link}
            key={idx}
            onClick={handlePrimaryMenuClose}
          >
            {page.title}
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <>
      <IconButton
        id="primary-menu-button"
        aria-controls={primaryOpen ? "primaryButton" : undefined}
        aria-haspopup="true"
        aria-expanded={primaryOpen ? "true" : undefined}
        onClick={handlePrimaryMenuOpen}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      {renderPrimaryMenu}
    </>
  );
};
