import React from "react"
import AuthenticatedNavbar from "./Authenticated/AuthenticatedNavbar"
import NotAuthenticated from "./NotAuthenticated/NotAuthenticated"
function Navbar() {

    return <div>
        {
            localStorage.getItem('token') ? <AuthenticatedNavbar/> : <NotAuthenticated/>
        }
    </div>
}

export default Navbar
    