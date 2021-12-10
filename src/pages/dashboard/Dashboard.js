// styles
import { DashboardContainer } from './Dashboard.styled';
import { useCollection } from '../../hooks/useCollection';
import ProjectList from '../../components/projectList/ProjectList';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectList projects={documents}/>}
    </DashboardContainer>
  );
}
