import React from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";
import sampleBurgers from '../sample-burgers'
import Burger from "./Burger";
import base from "../base";

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    };

    componentDidMount() {
        /* const {params} = this.props.match; */
        this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers',
        });
    }

    addBurger = burger => {
        const burgers = { ...this.state.burgers, }; // copy of stateobject
        burger = burgers[`burger${Date.now()}`]; // add new burger to burgers
        this.setState({ burgers }); // write our new burgers in state
    };

    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers });
    };

    addToOrder = (key) => {
        const order = { ...this.state.order, }; // copy of stateobject
        order[key] = order[key] + 1 || 1; // add key to order with value 1 or update current value
        this.setState({ order }); // write our new order in state
    };


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
                                addToOrder={this.addToOrder}
                            />
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order}  />
                <MenuAdmin addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                />

            </div>
        )
    }
};

export default App;