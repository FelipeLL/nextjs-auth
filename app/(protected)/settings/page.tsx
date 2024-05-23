'use client';

import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
      <button onClick={() => logout()} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
