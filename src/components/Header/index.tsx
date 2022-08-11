import { HeaderContainer } from "./style";
import logo from "../../assets/logo.svg";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};
