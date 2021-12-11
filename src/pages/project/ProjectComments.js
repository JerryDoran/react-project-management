import { useState } from 'react';
import Avatar from '../../components/avatar/Avatar';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { Button, CommentForm, CommentsContainer } from './Project.styled';

export default function ProjectComments({ project }) {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (!response.error) {
      setNewComment('');
    }
  };

  return (
    <CommentsContainer>
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className='commentAuthor'>
                <Avatar src={comment.photoURL} width='30px' height='30px' />
                <p className='displayName'>{comment.displayName}</p>
              </div>
              <div className='commentDate'>
                <p>date here</p>
              </div>
              <div className='commentContent'>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
      <CommentForm onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <Button>Add Comment</Button>
      </CommentForm>
    </CommentsContainer>
  );
}
