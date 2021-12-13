import Avatar from '../../components/avatar/Avatar';
import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

// styles
import {
  Button,
  ProjectSummaryContainer,
  ProjectSummaryWrapper,
} from './Project.styled';

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects');
  const { user } = useAuthContext();
  const history = useHistory();

  const handleClick = (e) => {
    deleteDocument(project.id);
    history.push('/');
  };

  return (
    <ProjectSummaryContainer>
      <ProjectSummaryWrapper>
        <h2>{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className='dueDate'>
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className='details'>{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className='assignedUsers'>
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} width='40px' height='40px' />
            </div>
          ))}
        </div>
      </ProjectSummaryWrapper>
      {/* {user.uid === project.createdBy.id && ( */}
      <Button onClick={handleClick}>Mark as Complete</Button>
      {/* )} */}
    </ProjectSummaryContainer>
  );
}
