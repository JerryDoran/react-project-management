// styles & images
import {
  Button,
  List,
  ListItem,
  LogoContainer,
  LogoIcon,
  Navbar,
} from './Navbar.styled';
import temple from '../../assets/temple.svg';
import { Link } from 'react-router-dom';

export default function Create() {
  return (
    <Navbar>
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
          <Button>Logout</Button>
        </ListItem>
      </List>
    </Navbar>
  );
}
