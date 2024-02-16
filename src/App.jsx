// components
import Navbar from './NavBar.jsx';
import CartContainer from './CartConteiner.jsx';
import { useGlobalContext } from './context.jsx';

export default function App() {
  const {loading} = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: '6rem' }}></div>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

