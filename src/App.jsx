import './App.css'
import Card from './components/Card'
import Register from './pages/Register'
import Login from './pages/Login'

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
          <button>Login</button>
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

      <Register />
      <Login />



    </>
  )
}

export default App
