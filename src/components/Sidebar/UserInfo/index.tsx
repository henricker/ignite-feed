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
import { authMock } from "../../../mock/auth-mock";

export const UserInfo = () => {
  const auth = authMock;
  return (
    <UserInfoContainer>
      <AvatarContainer>
        <Avatar src={auth.profile.srcAvatar} />
      </AvatarContainer>
      <UserName>{auth.profile.name}</UserName>
      <ProfessionalTitle>{auth.profile.profession}</ProfessionalTitle>
      <ActionsContainer>
        <TransparentButton iconSrc={IconEdit}>
          Editar seu perfil
        </TransparentButton>
      </ActionsContainer>
    </UserInfoContainer>
  );
};
