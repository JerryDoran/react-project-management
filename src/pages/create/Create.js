import { useState, useEffect } from 'react';
import Select from 'react-select';
import { timestamp } from '../../firebase/config';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useHistory } from 'react-router-dom';

// styles
import { CreateContainer, ProjectForm, Button } from './Create.styled';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

export default function Create() {
  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState({});
  const [users, setUsers] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const { documents } = useCollection('users');
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore('projects');
  const history = useHistory();

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError('Please select a project category.');
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError('Please assign the project to at least one user.');
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((assignedUser) => {
      return {
        displayName: assignedUser.value.displayName,
        photoURL: assignedUser.value.photoURL,
        id: assignedUser.value.id,
      };
    });

    const project = {
      name: name,
      details: details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy: createdBy,
      assignedUsersList: assignedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      history.push('/');
    }
  };

  return (
    <CreateContainer>
      <h2>Create a new project</h2>
      <ProjectForm onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            rows={8}
            type='text'
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Set due date:</span>
          <input
            type='date'
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <Button>Add Project</Button>

        {formError && <p className='error'>{formError}</p>}
      </ProjectForm>
    </CreateContainer>
  );
}
