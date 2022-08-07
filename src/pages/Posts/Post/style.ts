import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: #202024;
  margin-left: auto;
  max-width: calc(100% - 3rem);
  overflow: auto;
`;

export const PostContent = styled.div`
  max-width: calc(100% - 2.5rem);
  margin: 0 auto;

  margin-right: auto;
  margin-left: auto;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const PostText = styled.p`
  color: #c4c4cc;
  font-size: 1rem;
  font-weight: 400;

  margin-top: 1.5rem;
  width: 80%;
`;

export const PostHeader = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LastPublishedCounterTime = styled.p`
  color: #8d8d99;
  font-size: 0.875rem;
  font-weight: 400;
`;
