import { countDiffTime } from "../../../../util/count-diff-time";
import { ProfilePost } from "./ProfilePost/ProfilePost";

import {
  LastPublishedCounterTimeContainer,
  PostHeaderContainer,
} from "./style";

type PostHeaderProps = {
  name: string;
  profession: string;
  publishedAt: Date;
  srcAvatar: string;
};

export const PostHeader = ({
  name,
  profession,
  publishedAt,
  srcAvatar,
}: PostHeaderProps) => {
  return (
    <PostHeaderContainer>
      <ProfilePost name={name} profession={profession} srcAvatar={srcAvatar} />
      <LastPublishedCounterTimeContainer>
        Publicado há {countDiffTime(publishedAt)}
      </LastPublishedCounterTimeContainer>
    </PostHeaderContainer>
  );
};
