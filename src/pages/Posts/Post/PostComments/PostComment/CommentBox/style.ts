import styled from "styled-components";

type CommentBoxHeaderProps = {
  isMe: boolean;
};

export const CommentBoxContainer = styled.div`
  background-color: #29292e;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 7.5rem;

  border-radius: 0.5rem;
`;

export const CommentBoxContent = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
`;

export const CommentBoxHeader = styled.div<CommentBoxHeaderProps>`
  display: flex;
  justify-content: ${(props) => (props.isMe ? "space-between" : "flex-start")};
  align-items: center;
`;

export const MetaInfoComment = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const NameMetaInfoComment = styled.h2`
  font-size: 0.875rem;
  color: #e1e1e6;
  font-weight: bold;
`;

export const IsMeMetaInfoComment = styled.span`
  color: #8d8d99;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const MetaInfoPublishTime = styled.p`
  color: #8d8d99;
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.4rem;
`;

export const CommentBoxContentText = styled.p`
  color: #c4c4cc;
  text-align: justify;
  margin-top: 1rem;
  padding-bottom: 1.5rem;
`;
