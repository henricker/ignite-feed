import styled from "styled-components";

export const PostsContainer = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 20rem);
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 1000px) {
    width: calc(100% - 5rem);
  }
`;

export const AllPostsContainer = styled.div`
  margin-left: auto;
  width: 100%;

  &:not():first-child {
    margin-top: 2rem;
  }
`;
