import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';

// styles
import { ProjectContainer } from './Project.styled';
import ProjectComments from './ProjectComments';
import ProjectSummary from './ProjectSummary';

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  if (error) {
    return <div className='error'>{error}</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectContainer>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </ProjectContainer>
  );
}
