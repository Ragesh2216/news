

const Navbar =({setcategory})=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar w/ text</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link"  onClick={()=>setcategory("technology")}>technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setcategory("business")}>business</a>
        </li>
          <li className="nav-item">
          <a className="nav-link" onClick={()=>setcategory("health")}>health</a>
        </li><li className="nav-item">
          <a className="nav-link" onClick={()=>setcategory("sports")}>sports</a>
        </li><li className="nav-item">
          <a className="nav-link" onClick={()=>setcategory("entertainment")}>entertainment</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar