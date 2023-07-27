import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
    return  <>
                <div className="nav">
                    <Link to="/" className="nav__element">home</Link>
                    <Link to="/todo" className="nav__element">todo</Link>
                </div>

                <div className="wrapper">
                    <h1 className="wrapper__title">Welcome!</h1>
                    <h5 className="wrapper__description">You can use the navbar to switch to the todo-app. Feel free to create, delete, or edit any task you want!</h5>
                </div>
            </>
}


export default HomePage;
