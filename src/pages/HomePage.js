import { Link } from 'react-router-dom';
const userId = 20;
export default function HomePage () {
  return (
    <div>
      <h1>Application</h1>
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  );
}
