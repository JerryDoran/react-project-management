import styled from 'styled-components';

export const AuthForm = styled.form`
  border-radius: 5px;
  max-width: 360px;
  margin: 60px auto;
  padding: 40px;
  border: 1px solid #ddd;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);

  h2 {
    font-weight: 600;
    letter-spacing: 1px;
  }

  label {
    display: block;
    margin: 20px auto;
  }

  span {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
  }

  input {
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .file {
    background: #fff;
  }
`;

export const Button = styled.button`
  background: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 1em;
  border: 1px solid var(--primary-color);

  &:hover {
    color: #fff;
    background-color: var(--primary-color);
  }
`;

