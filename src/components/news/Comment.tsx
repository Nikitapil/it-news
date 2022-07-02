import React, { FC, useEffect, useState } from "react";
import { IComment } from "../../domain/newsTypes";
import { NewsService } from "../../services/NewsService";
import { formatTimeStampToDate } from "../../utils/dates";

interface CommentProps {
    comment: IComment
}

export const Comment:FC<CommentProps> = ({comment}) => {
    const [innerComment, setInnerComment] = useState(comment)
    const [showComments, setShowComments] = useState(false)

    const loadReplies = async () => {
        if(showComments) {
            setShowComments(false)
            return
        }
        const comments = await NewsService.fetchComments(innerComment.kids!)
        setInnerComment({...innerComment, comments})
        setShowComments(true)
    }

  return (
    <div className="comment" data-testid='comment'>
      <div className="comment__top">
        <h4 className="comment__author">{innerComment.by}</h4>
        <p>{formatTimeStampToDate(innerComment.time)}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: innerComment.text }}></p>
      {innerComment.kids && <button className="comment-replies-btn" onClick={loadReplies} data-testid='reply-btn'>Replies {innerComment.kids?.length}</button>}
      {showComments && <div className="comment__comments" data-testid='comment-comments'>{innerComment.comments?.map(comm => <Comment key={comm.id} comment={comm} />)}</div>}
    </div>
  );
};
