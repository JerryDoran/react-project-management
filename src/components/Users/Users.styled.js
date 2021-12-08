import styled from 'styled-components';

export const UsersContainer = styled.div`
  width: 250px;
  min-width: 250px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fbfbfb;
  color: var(--heading-color);

  h2 {
    text-align: right;
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 1.2em;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px auto;

  .online {
    display: inline-block;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0ebb50;
    margin-top: 2px;
  }

  span {
    margin-right: 10px;
    font-size: 1rem;
  }
`;
