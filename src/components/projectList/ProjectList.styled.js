import styled from 'styled-components';

export const ProjectContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;

  a {
    background-color: #fff;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: inherit;
  }

  h4 {
    font-size: 0.9em;
    color: var(--heading-color);
  }

  p {
    color: var(--text-color);
    font-size: 0.9em;
  }

  .assignedTo {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }

  ul {
    margin: 10px 0;
    display: flex;
  }

  li {
    margin-right: 10px;
  }

  .avatar {
    width: 30px;
    height: 30px;
  }
`;
