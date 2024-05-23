import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const useCurrentUser = () => {
  const session = useSession();

  useEffect(() => {
    if (!session.data) {
      // ? This fix is needed because of a bug in next-auth that doesn't update the session after sign in
      location.reload();
    }
  }, [session]);

  return session.data?.user;
};
