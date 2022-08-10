import {
  ContentButtonContainer,
  TitleButton,
  TransparentButtonContainer,
} from "./style";

type TransparentButtonProps = {
  children: JSX.Element | string;
  icon?: JSX.Element;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TransparentButton = ({
  children,
  icon,
  onClick,
}: TransparentButtonProps) => {
  return (
    <TransparentButtonContainer onClick={onClick}>
      <ContentButtonContainer>
        {icon && icon}
        <TitleButton>{children}</TitleButton>
      </ContentButtonContainer>
    </TransparentButtonContainer>
  );
};
