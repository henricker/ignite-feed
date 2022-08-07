import { Sidebar } from "../../components/Sidebar";
import { ContentContainer, PostsContainer } from "./style";

export const Posts = () => {
  return (
    <PostsContainer>
      <ContentContainer>
        <Sidebar />
      </ContentContainer>
    </PostsContainer>
  );
};
