import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

// styles
import { AuthForm, Button } from './Login.styled';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <Button>Login</Button>}
      {isPending && <Button disabled>Loading</Button>}
      {error && <div className='error'>{error}</div>}
    </AuthForm>
  );
}
