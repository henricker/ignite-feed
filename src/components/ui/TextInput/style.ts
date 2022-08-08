import styled from "styled-components";

type InputTextContainer = {
  height: number | string;
};

export const InputTextContainer = styled.textarea<InputTextContainer>`
  width: 100%;
  border: 1px solid #00b37e;
  background-color: #121214;
  height: ${(props) => props.height ?? "auto"};
  resize: none;
  color: #c4c4cc;
  font-size: 1rem;

  font-weight: 400;

  padding-left: 1rem;
  padding-right: 1rem;

  padding-top: 0.8125rem;
  padding-bottom: 0.8125rem;
  border-radius: 1rem;
`;
