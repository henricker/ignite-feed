import mockedImage from "../../../assets/avatar.png";
import { ContainerAvatar, ImageAvatar } from "./style";

type AvatarProps = {
  src?: string;
};

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <ContainerAvatar>
      <ImageAvatar width={60} src={src ?? mockedImage} alt="Avatar" />
    </ContainerAvatar>
  );
};
