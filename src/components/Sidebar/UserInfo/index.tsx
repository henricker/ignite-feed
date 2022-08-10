import { Avatar } from "../../ui/Avatar";
import { TransparentButton } from "../../ui/Buttons/TransparentButton";
import {
  ActionsContainer,
  AvatarContainer,
  ProfessionalTitle,
  UserInfoContainer,
  UserName,
} from "./style";
import { authMock } from "../../../mock/auth-mock";
import { EditIcon } from "../../ui/icons/Edit";

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
        <TransparentButton icon={<EditIcon />}>
          Editar seu perfil
        </TransparentButton>
      </ActionsContainer>
    </UserInfoContainer>
  );
};
