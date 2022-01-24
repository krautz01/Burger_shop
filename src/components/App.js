import React from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";
import sampleBurgers from '../sample-burgers'
import Burger from "./Burger";

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    }

    addBurger = burger => {
        const burgers = { ...this.state.burgers, }; // copy of stateobject
        burger = burgers[`burger${Date.now()}`]; // add new burger to burgers
        this.setState({ burgers }); // write our new burgers in state
    }

    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers });
    }

    render() {
        return (
            <div className="burger-paradise">

                <div className="menu">
                    <Header title='Hot Burgers' />
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger key={key}
                                index={key}
                                details={this.state.burgers[key]}
                            />
                        })}
                    </ul>
                </div>
                <Order />
                <MenuAdmin addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                />

            </div>
        )
    }
}

export default App;