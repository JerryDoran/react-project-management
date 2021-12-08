import { useCollection } from '../../hooks/useCollection';
import Avatar from '../avatar/Avatar';

// stules
import { ListItem, UsersContainer } from './Users.styled';

export default function Users() {
  const { documents, error } = useCollection('users');

  return (
    <UsersContainer>
      <h2>All Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents &&
        documents.map((user) => {
          return (
            <ListItem key={user.id}>
              {user.online && <span className='online'></span>}
              <span>{user.displayName}</span>
              <Avatar src={user.photoURL} width='40px' height='40px' />
            </ListItem>
          );
        })}
    </UsersContainer>
  );
}
