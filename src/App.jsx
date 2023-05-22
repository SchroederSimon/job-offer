import './App.css'
import Card from './components/Card'
import { Link } from "react-router-dom";


function App() {


  return (
    <>
      <div className='page-container'>
        <nav className='navigation-bar'>
          <h1>Jobless</h1>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
          </ul>
          <div className="nav-buttons">
            <Link to={`/login`}><button>Login</button></Link>
            <Link to={`/register`}><button>Register</button></Link>
          </div>
        </nav>

        <form className='search-bar' action="/buscar" method="GET">
          <h1>Search candidates</h1>
          <div className='search-bar-input'>
            <input type="text" name="q" placeholder="Trainee, front-end, react, JavaScript..." />
            <button type="submit">Search</button>
          </div>
        </form>

        <main>
          <Card></Card>
        </main>
      </div>
    </>
  )
}

export default App
