import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 300px;
  min-width: 300px;
  background-color: var(--primary-color);
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  color: #fff;
`;

export const SidebarContent = styled.div`
  position: fixed;
  width: inherit;
`;

export const User = styled.div`
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  padding: 40px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Nav = styled.nav`
  margin-top: 80px;
  margin-left: 20px;

  .active img {
    filter: invert(50%);
  }
`;

export const List = styled.ul`
  li {
    margin-top: 10px;
  }

  a {
    display: flex;
    padding: 10px;
    text-decoration: none;
    width: 100%;
    color: #fff;
    box-sizing: border-box;

    &.active {
      color: #555;
      background: var(--bg-color);
      border-radius: 20px 0 0 20px;
    }
  }

  img {
    margin-right: 10px;
    filter: invert(100%);
  }
`;

// export const Sidebar = styled.div``;
