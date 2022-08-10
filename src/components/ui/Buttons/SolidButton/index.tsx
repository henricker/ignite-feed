import { SolidButtonContainer } from "./style";

type SolidButtonProps = {
  children: string;
  onClick?: (...params: any) => void;
};

export const SolidButton = ({ children, onClick }: SolidButtonProps) => {
  return (
    <SolidButtonContainer onClick={onClick}>{children}</SolidButtonContainer>
  );
};
