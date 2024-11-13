import {  Link, Outlet } from "react-router-dom"
import "./App.css"

export const App = () => {

  return(
    <div className='container'>
      <header>
        <nav>
          <Link to="/homepage">Domů</Link>
          <span> | </span>
          <Link to="/centers">Pobočky</Link>
          <span> | </span>
          <Link to="/about">O nás</Link>
          <span> | </span>
          <Link to="/contact">Kontakt</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Dětský koutek 2024</p>
      </footer>
    </div>
  )
}