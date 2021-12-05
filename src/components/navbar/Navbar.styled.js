import styled from 'styled-components';

export const Navbar = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 80px;

  a {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    margin-right: 20px;
  }
`;

export const LogoContainer = styled.div`
  font-weight: bold;
  color: var(--heading-color);
  letter-spacing: 1px;
  margin-top: 6px;
`;

export const LogoIcon = styled.img`
  margin-right: 10px;
  filter: invert(50%);
  width: 36px;
  margin-top: -8px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ListItem = styled.li`
  .siteTitle {
    margin-top: -30px;
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
