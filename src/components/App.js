import React from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    }

    addBurger = burger => {
        const burgers = { ...this.state.burgers, }; // copy of stateobject
        burger = burgers[`burger${Date.now()}`]; // add new burger to burgers
        this.setState({burgers}); // write our new burgers in state
    } 

    render() {
        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header />
                </div>
                {/* <Burger/> */}
                <Order />
                <MenuAdmin addBurger={this.addBurger}/>

            </div>
        )
    }
}

export default App;