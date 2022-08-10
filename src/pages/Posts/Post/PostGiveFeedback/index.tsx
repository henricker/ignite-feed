import { useState } from "react";
import { SolidButton } from "../../../../components/ui/Buttons/SolidButton";
import { TextInput } from "../../../../components/ui/TextInput";
import { CommentPostType } from "../../../../interfaces/posts";
import { authMock } from "../../../../mock/auth-mock";
import { PostGiveFeedbackContainer, TitleFeedback } from "./style";
import { v4 as uuid } from "uuid";

type PostGiveFeedbackProps = {
  handleAddComment: (comment: CommentPostType) => void;
  post_id: number;
};

export const PostGiveFeedback = ({
  handleAddComment,
  post_id,
}: PostGiveFeedbackProps) => {
  const [feedBack, setFeedBack] = useState<string>("");

  const authData = authMock;
  return (
    <PostGiveFeedbackContainer>
      <TitleFeedback>Deixe seu Feedback</TitleFeedback>
      <TextInput
        value={feedBack}
        onChange={(e) => setFeedBack(e.target.value)}
        height="6rem"
      />
      <div style={{ marginTop: "1rem" }}>
        <SolidButton
          onClick={() => {
            if (!feedBack.trim()) return;

            handleAddComment({
              comment: feedBack.trim(),
              id: uuid(),
              isMe: true,
              likes: 0,
              publishedAt: new Date(),
              post_id,
              profile: {
                name: authData.profile.name,
                profession: authData.profile.profession,
                srcAvatar: authData.profile.srcAvatar,
              },
            });
            setFeedBack("");
          }}
        >
          Publicar
        </SolidButton>
      </div>
    </PostGiveFeedbackContainer>
  );
};
