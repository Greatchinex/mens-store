import React from 'react'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#" style={{fontWeight: "bold"}}>AMAA AWARDS 2018</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-md-auto">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Best Actors</a>
                    <a className="nav-item nav-link" href="#">Best Actresses</a>
                    <a className="nav-item nav-link" href="#">Best Movies</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
