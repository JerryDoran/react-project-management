import styled from 'styled-components';

export const CreateContainer = styled.div`
  max-width: 600px;
`;

export const ProjectForm = styled.form`
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

  input,
  textarea {
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
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

// export const DashboardContainer = styled.div``

// export const DashboardContainer = styled.div``
