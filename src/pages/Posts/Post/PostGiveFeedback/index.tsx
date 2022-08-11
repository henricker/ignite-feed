import { useContext, useState } from "react";
import { SolidButton } from "../../../../components/ui/Buttons/SolidButton";
import { TextInput } from "../../../../components/ui/TextInput";
import { CommentPostType } from "../../../../interfaces/posts";
import { PostGiveFeedbackContainer, TitleFeedback } from "./style";
import { v4 as uuid } from "uuid";
import { PlusMinusButton } from "../../../../components/ui/Buttons/PlusMinusButton";
import { AuthContext } from "../../../../contexts/auth";
import { usePosts } from "../../hooks/usePosts";

type PostGiveFeedbackProps = {
  post_id: number;
  showComments: boolean;
  setShowComments: (showComments: boolean) => void;
};

export const PostGiveFeedback = ({
  post_id,
  setShowComments,
  showComments,
}: PostGiveFeedbackProps) => {
  const [feedBack, setFeedBack] = useState<string>("");
  const { handleAddComment } = usePosts();

  const authData = useContext(AuthContext);
  return (
    <PostGiveFeedbackContainer>
      <TitleFeedback>Deixe seu Feedback</TitleFeedback>
      <TextInput
        value={feedBack}
        onChange={(e) => setFeedBack(e.target.value)}
        height="6rem"
      />
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SolidButton
          onClick={() => {
            if (!feedBack.trim()) return;
            setShowComments(true);
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
        <PlusMinusButton
          OnPlusMessage="Comentários"
          OnMinusMessage="Comentários"
          isActive={showComments}
          setIsActive={setShowComments}
        />
      </div>
    </PostGiveFeedbackContainer>
  );
};
