import { useRef } from "react";

import Input from "../../Input";
import { Form } from "@unform/web";
import * as S from "./styles";

const NewCompetitor: React.FC = () => {
  const formRef = useRef(null);

  return (
    <S.Container>
      {/* <Form
        ref={formRef}
        onSubmit={() => {
          alert("foi");
        }}
      >
        <Input label="Nome" name="name" />
      </Form> */}
      ..
    </S.Container>
  );
};

export default NewCompetitor;
