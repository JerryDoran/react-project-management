// styles & images
import {
  Button,
  List,
  ListItem,
  LogoContainer,
  LogoIcon,
  Nav,
} from './Navbar.styled';
import temple from '../../assets/temple.svg';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

export default function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <Nav>
      <LogoContainer>
        <Link to='/'>
          <LogoIcon src={temple} alt='dojo logo' />
          <span className='siteTitle'>The Dojo</span>
        </Link>
      </LogoContainer>

      <List>
        <ListItem>
          <Link to='/login'>Login</Link>
        </ListItem>
        <ListItem>
          <Link to='/signup'>Signup</Link>
        </ListItem>
        <ListItem>
          {!isPending && <Button onClick={logout}>Logout</Button>}
          {isPending && <Button disabled>Logging out...</Button>}
        </ListItem>
      </List>
    </Nav>
  );
}
