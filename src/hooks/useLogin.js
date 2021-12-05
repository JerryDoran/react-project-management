import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // log user in
    try {
      const { user } = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: 'LOGIN', payload: user });

      // update state
      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCanceled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    // cleanup
    return () => {
      setIsCanceled(true);
    };
  }, []);

  return { login, error, isPending };
};
