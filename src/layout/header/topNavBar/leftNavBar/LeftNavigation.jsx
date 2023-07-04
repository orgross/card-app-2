import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavigation() {
  const {user}= useUser(); 
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.ABOUT} label="About" />
      {user && (<NavItem to={ROUTES.FAV_CARDS} label="Fav Cards"/>)}
      {user && user.isBusiness && (<NavItem to={ROUTES.MY_CARDS} label="my cards"/>)}
      {user && user.isAdmin && (<NavItem to={ROUTES.MY_CARDS} label="my cards"/>)&& (<NavItem to={ROUTES.SANDBOX} label="sandbox"/>)}
    </Box>
  );
}
