import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";
import useUsers from "../../../../users/hooks/useUsers";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { Navigate, useNavigate } from "react-router-dom";

export default function Logged() {
  const { handleLogout} = useUsers();
 

  const handleEditClick =()=>{
    Navigate.push(ROUTES.EDIT_USER)
  }
  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton 
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={handleEditClick}
        >
          <Avatar alt="Bird" src="\assets\images\Image20230323204346.png" />
        </IconButton>
      </Tooltip>
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={handleLogout}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
}