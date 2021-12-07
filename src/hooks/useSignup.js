import { useEffect, useState } from 'react';
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // sign up user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }

      // upload user photo
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const image = await projectStorage.ref(uploadPath).put(thumbnail);
      const imageURL = await image.ref.getDownloadURL();

      // add display name to user
      await res.user.updateProfile({
        displayName: displayName,
        photoURL: imageURL,
      });

      // create user document
      await projectFirestore.collection('users').doc(res.user.uid).set({
        online: true,
        displayName: displayName,
        photoURL: imageURL,
      });

      // displatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      // update state
      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCanceled) {
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

  return {
    error,
    isPending,
    signup,
  };
};
