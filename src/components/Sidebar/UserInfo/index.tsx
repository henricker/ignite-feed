import { Avatar } from "../../ui/Avatar";
import { TransparentButton } from "../../ui/Buttons/TransparentButton";
import {
  ActionsContainer,
  AvatarContainer,
  ProfessionalTitle,
  UserInfoContainer,
  UserName,
} from "./style";
import IconEdit from "../../../assets/icons/edit-icon.svg";

export const UserInfo = () => {
  return (
    <UserInfoContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <UserName>Henrique Vieira</UserName>
      <ProfessionalTitle>Software Enginner</ProfessionalTitle>
      <ActionsContainer>
        <TransparentButton iconSrc={IconEdit}>
          Editar seu perfil
        </TransparentButton>
      </ActionsContainer>
    </UserInfoContainer>
  );
};
