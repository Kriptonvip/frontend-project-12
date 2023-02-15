import { useAuth } from '../context/auth';

function Logout() {
  const auth = useAuth();

  return (
    <button
      type="button"
      onClick={() => console.log(auth.logout())}
      className="btn btn-primary">
      Выйти
    </button>
  );
}

export default Logout;
