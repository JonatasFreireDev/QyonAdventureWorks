import React from "react";

import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import MapIcon from "@mui/icons-material/Map";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Menu: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <div>
          <Link to="/">
            <DashboardIcon fontSize="large" />
          </Link>
          <Link to="/competitors">
            <GroupIcon fontSize="large" />
          </Link>
          <Link to="/speedway">
            <MapIcon fontSize="large" />
          </Link>
          <Link to="/history">
            <HistoryIcon fontSize="large" />
          </Link>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Menu;
