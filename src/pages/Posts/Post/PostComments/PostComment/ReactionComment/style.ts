import styled from "styled-components";

type ReactionCommentContainerProps = {
  isSelected: boolean;
};

export const ReactionCommentContainer = styled.div<ReactionCommentContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  color: ${(props) => (props.isSelected ? "#00B37E" : "#8d8d99")};
`;

export const ApplaudText = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  margin-left: 0.625rem;
`;
