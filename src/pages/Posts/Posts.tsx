import { Sidebar } from "../../components/Sidebar";
import { Post } from "./Post";
import { AllPostsContainer, ContentContainer, PostsContainer } from "./style";
import AvatarMocked2 from "../../assets/mock/avatar2.svg";

const dateMocked = new Date("2022-08-07 00:00:00");

export const Posts = () => {
  return (
    <PostsContainer>
      <ContentContainer>
        <Sidebar />
        <AllPostsContainer>
          <Post
            profile={{
              name: "Jane Cooper",
              profession: "Dev Front-End",
              publishedAt: dateMocked,
              srcAvatar: AvatarMocked2,
            }}
            portfolioLink="https://www.google.com"
            text={`Fala galeraa 👋. Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`}
          />
        </AllPostsContainer>
      </ContentContainer>
    </PostsContainer>
  );
};
