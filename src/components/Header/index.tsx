import { HeaderContainer } from "./style";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};
