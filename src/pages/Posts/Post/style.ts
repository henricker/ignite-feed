import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: #202024;
  margin-left: auto;
  max-width: calc(100% - 3rem);
  overflow: auto;

  @media screen and (max-width: 670px) {
    width: 100%;
    max-width: 100%;
  }

  margin-bottom: 2rem;
`;

export const PostContent = styled.div`
  max-width: calc(100% - 2.5rem);
  margin: 0 auto;

  margin-right: auto;
  margin-left: auto;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;
