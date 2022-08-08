import styled from "styled-components";
import { SolidButtonContainer } from "./style";

type SolidButtonProps = {
  children: string;
};

export const SolidButton = ({ children }: SolidButtonProps) => {
  return <SolidButtonContainer>{children}</SolidButtonContainer>;
};
