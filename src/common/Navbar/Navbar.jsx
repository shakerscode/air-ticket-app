import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark" style={{fontFamily:"Oswald"}}>
            <Link class="navbar-brand" to="/">Airline</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/ticket">Ticket</Link>
                <Link class="nav-item nav-link" to="/">Login</Link>
                <Link class="nav-item nav-link" to="/">Sign up</Link>
                </div>
            </div>
        </nav>
        <Outlet/>
        <Footer/>
        </>
    )
}