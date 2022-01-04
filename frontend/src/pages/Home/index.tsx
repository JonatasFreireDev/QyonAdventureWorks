import Button from "@mui/material/Button";
import Header from "../../components/Header";
import LoadingCircle from "../../components/LoadingCircle";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header title="Dashboard" />
      <S.Container>
        <LoadingCircle></LoadingCircle>
      </S.Container>
    </>
  );
};

export default Home;
