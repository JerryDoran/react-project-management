import { useReducer, useEffect, useState } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {
        document: null,
        success: false,
        error: null,
        isPending: true,
      };
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'DELETED_DOCUMENT':
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    case 'ERROR':
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCanceled, setIsCanceled] = useState(false);

  // only dispatch is not canceled
  const dispatchIfNotCanceled = (action) => {
    if (!isCanceled) {
      dispatch(action);
    }
  };

  // colection ref
  const ref = projectFirestore.collection(collection);

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCanceled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    } catch (error) {
      dispatchIfNotCanceled({ type: 'ERROR', payload: error.message });
    }
  };

  // delete document
  const deleteDocument = async (id) => {
    dispatch({ action: 'IS_PENDING' });

    try {
      const deletedDocument = await ref.doc(id).delete();
      dispatchIfNotCanceled({
        type: 'DELETED_DOCUMENT',
      });
    } catch (error) {
      dispatchIfNotCanceled({
        type: 'ERROR',
        payload: 'Could not delete transaction',
      });
    }
  };

  useEffect(() => {
    return () => {
      setIsCanceled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
