// styles & images
import {
  List,
  Nav,
  SidebarContainer,
  SidebarContent,
  User,
} from './Sidebar.styled';
import DashboardIcon from '../../assets/dashboard_icon.svg';
import AddIcon from '../../assets/add_icon.svg';
import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <SidebarContainer>
      <SidebarContent>
        <User>
          <Avatar src={user.photoURL} width='60px' height='60px' />
          <p>Hey {user.displayName}</p>
        </User>
        <Nav>
          <List>
            <li>
              <NavLink exact to='/'>
                <img src={DashboardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='add project icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </List>
        </Nav>
      </SidebarContent>
    </SidebarContainer>
  );
}
