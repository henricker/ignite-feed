import { useState } from "react";
import { SolidButton } from "../../../../components/ui/Buttons/SolidButton";
import { TextInput } from "../../../../components/ui/TextInput";
import { PostGiveFeedbackContainer, TitleFeedback } from "./style";

export const PostGiveFeedback = () => {
  const [feedBack, setFeedBack] = useState("");
  return (
    <PostGiveFeedbackContainer>
      <TitleFeedback>Deixe seu Feedback</TitleFeedback>
      <TextInput
        value={feedBack}
        onChange={(e) => setFeedBack(e.target.value)}
        height="6rem"
      />
      <div style={{ marginTop: "1rem" }}>
        <SolidButton>Publicar</SolidButton>
      </div>
    </PostGiveFeedbackContainer>
  );
};
