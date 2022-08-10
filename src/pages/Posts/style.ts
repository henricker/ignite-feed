import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 40rem);
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 1250px) {
    width: calc(100% - 10rem);
  }

  @media screen and (max-width: 760px) {
    width: calc(100% - 2rem);
  }

  @media screen and (max-width: 670px) {
    width: calc(100% - 1rem);
  }
`;

export const AllPostsContainer = styled.div`
  margin-left: auto;
  width: 100%;

  @media screen and (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
