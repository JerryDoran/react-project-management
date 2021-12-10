import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';

// styles
import { ProjectContainer } from './ProjectList.styled';

export default function ProjectList({ projects }) {
  return (
    <ProjectContainer>
      {projects.length === 0 && <p>No projects</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className='assignedTo'>
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} width='30px' height='30px' />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </ProjectContainer>
  );
}
