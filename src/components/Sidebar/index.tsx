import { Banner, SidebarContainer } from "./style";
import BannerMocked from "../../assets/banner.svg";
import { UserInfo } from "./UserInfo";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Banner src={BannerMocked} />
      <UserInfo />
    </SidebarContainer>
  );
};
