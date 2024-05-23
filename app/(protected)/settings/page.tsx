'use client';

import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div className="p-10 rounded-xl bg-white">
      <button onClick={() => logout()} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
