import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: start;
  gap: 60px;
`;

// styles for project summary component
export const ProjectSummaryContainer = styled.div``;

export const ProjectSummaryWrapper = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;

  h2 {
    font-weight: 600;
  }

  .dueDate {
    margin: 10px 0;
    font-size: 0.75em;
    color: var(--heading-color);
  }

  .details {
    margin: 30px 0;
    color: var(--text-color);
    line-height: 1.8em;
    font-size: 1em;
  }

  h4 {
    font-weight: 400;
    font-size: 0.8em;
    color: var(--text-color);
  }

  .assignedUsers {
    display: flex;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 0.75em;
  border: 1px solid var(--primary-color);

  &:hover {
    color: #fff;
    background-color: var(--primary-color);
  }
`;

// styles for project comments component
export const CommentsContainer = styled.div`
  h4 {
    color: var(--heading-color);
  }

  li {
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin-top: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    background: #fff;
  }

  .commentAuthor {
    display: flex;
    align-items: center;
    color: var(--heading-color);
  }

  .displayName {
    font-size: 14px;
  }

  .commentDate {
    color: var(--text-color);
    font-size: 11px;
    margin-bottom: 10px;
  }

  .commentContent {
    color: var(--text-color);
    font-size: 13px;
  }
`;

export const CommentForm = styled.form`
  margin-top: 20px;

  label {
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 0.8em;
  }

  textarea {
    min-height: 40px;
    font-size: 1.2em;
    color: #777;
  }
`;
