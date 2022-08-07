import {
  ContentButtonContainer,
  TitleButton,
  TransparentButtonContainer,
} from "./style";

type TransparentButtonProps = {
  onClick?: () => void;
  children: string;
  iconSrc?: string;
};

export const TransparentButton = ({
  onClick,
  children,
  iconSrc,
}: TransparentButtonProps) => {
  return (
    <TransparentButtonContainer onClick={onClick}>
      <ContentButtonContainer>
        {iconSrc && <img src={iconSrc} alt="icon" />}
        <TitleButton>{children}</TitleButton>
      </ContentButtonContainer>
    </TransparentButtonContainer>
  );
};
