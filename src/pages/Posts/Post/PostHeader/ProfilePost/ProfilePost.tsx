import { Avatar } from "../../../../../components/ui/Avatar";
import {
  InfoNametext,
  InfoProfilePost,
  InfoProfileText,
  ProfilePostContainer,
} from "./style";

type ProfilePostProps = {
  srcAvatar: string;
  name: string;
  profession: string;
};

export const ProfilePost = ({
  name,
  profession,
  srcAvatar,
}: ProfilePostProps) => {
  return (
    <ProfilePostContainer>
      <Avatar src={srcAvatar} />
      <InfoProfilePost>
        <InfoNametext>{name}</InfoNametext>
        <InfoProfileText>{profession}</InfoProfileText>
      </InfoProfilePost>
    </ProfilePostContainer>
  );
};
