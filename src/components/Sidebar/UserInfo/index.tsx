import { Avatar } from "../../ui/Avatar";
import { TransparentButton } from "../../ui/Buttons/TransparentButton";
import {
  ActionsContainer,
  AvatarContainer,
  ProfessionalTitle,
  UserInfoContainer,
  UserName,
} from "./style";
import { EditIcon } from "../../ui/icons/Edit";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";

export const UserInfo = () => {
  const auth = useContext(AuthContext);
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
