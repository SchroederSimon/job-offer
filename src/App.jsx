import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
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
          <button type="submit">Buscar</button>
        </div>
      </form>
      
      <main>
        <Card></Card>
      </main>
    </>

  )
}

export default App
