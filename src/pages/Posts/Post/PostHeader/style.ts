import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 365px) {
    flex-direction: column;
  }
`;

export const LastPublishedCounterTimeContainer = styled.p`
  color: #8d8d99;
  font-size: 0.875rem;
  font-weight: 400;

  @media screen and (max-width: 365px) {
    margin-top: 0.6rem;
  }
`;
