import {
  CommentBoxContainer,
  CommentBoxContent,
  CommentBoxContentText,
  CommentBoxHeader,
  IsMeMetaInfoComment,
  MetaInfoComment,
  MetaInfoPublishTime,
  NameMetaInfoComment,
} from "./style";
import TrashIcon from "../../../../../../assets/icons/trash-icon.svg";
import { countDiffTime } from "../../../../../../util/count-diff-time";

type CommentBoxProps = {
  id: number | string;
  name: string;
  publishedAt: Date;
  comment: string;
  isMe: boolean;
  post_id: number | string;

  handleDeleteComment: (data: {
    post_id: number | string;
    comment_id: number | string;
  }) => void;
};

export const CommentBox = ({
  comment,
  isMe,
  name,
  publishedAt,
  id,
  post_id,
  handleDeleteComment,
}: CommentBoxProps) => {
  return (
    <CommentBoxContainer>
      <CommentBoxContent>
        <CommentBoxHeader isMe={isMe}>
          <MetaInfoComment>
            <NameMetaInfoComment>
              {name} {isMe && <IsMeMetaInfoComment>(Você)</IsMeMetaInfoComment>}
            </NameMetaInfoComment>
            <MetaInfoPublishTime>
              Cerca de {countDiffTime(publishedAt)}
            </MetaInfoPublishTime>
          </MetaInfoComment>
          {isMe && (
            <img
              src={TrashIcon}
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleDeleteComment({ post_id: post_id, comment_id: id })
              }
            />
          )}
        </CommentBoxHeader>
        <CommentBoxContentText>{comment}</CommentBoxContentText>
      </CommentBoxContent>
    </CommentBoxContainer>
  );
};
