import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  InputHTMLAttributes,
} from "react";

import { useField } from "@unform/core";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; //Nome do input
  label: string; //Nome Do label
}

const Input: React.FC<InputProps> = ({ label, name, ...attrs }) => {
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField, error]);

  const onBlurHandle = useCallback(() => {
    if (inputRef.current?.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  }, []);

  return (
    <S.Container hasValue={hasValue} hasError={!!error}>
      <label htmlFor={label}>{label}</label>
      <input
        onBlur={onBlurHandle}
        ref={inputRef}
        name={name}
        id={label}
        placeholder={label}
        {...attrs}
      />
      {error && <small>{error}</small>}
    </S.Container>
  );
};

export default Input;
