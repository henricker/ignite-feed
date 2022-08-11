import { Sidebar } from "../../components/Sidebar";
import { Post } from "./Post";
import { AllPostsContainer, ContentContainer, PostsContainer } from "./style";
import { usePosts, UsePostsProvider } from "./hooks/usePosts";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export const Posts = () => {
  const { posts } = usePosts();

  const { width } = useWindowDimensions();

  return (
    <PostsContainer>
      <ContentContainer>
        {width >= 670 && <Sidebar />}
        <AllPostsContainer>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </AllPostsContainer>
      </ContentContainer>
    </PostsContainer>
  );
};
