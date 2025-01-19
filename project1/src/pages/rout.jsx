import { useState } from 'react';

function useActionState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const performAction = async (actionFn) => {
    setIsLoading(true); // Start loading
    setError(null); // Clear any previous errors
    setSuccess(false); // Clear any previous success state
    try {
      await actionFn(); // Perform the action
      setSuccess(true); // Set success if action succeeds
    } catch (err) {
      setError(err.message || 'Something went wrong'); // Set error if action fails
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return {
    isLoading,
    error,
    success,
    performAction,
  };
}

export default useActionState;
