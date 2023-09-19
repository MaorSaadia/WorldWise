import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>

      <Link to="/app">Go To App</Link>
    </div>
  );
}

export default Homepage;
