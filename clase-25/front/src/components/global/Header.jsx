import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/projects'} className="nav-link text-capitalize">projects</Link>
        </li>
      </ul>
    </header>
  )
}
export default Header