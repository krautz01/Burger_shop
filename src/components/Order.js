import React from "react";

class Order extends React.Component {

    renderOrder = (key) => {
        const burger = this.props.burgers[key];
        const count = this.props.order[key];
        const isAvailable = burger && burger.status === 'available';
        if (!isAvailable) {
            return <li className="unavailable" key={key}>
                Извините, {burger ? burger.name : 'бургер'} временно недоступен
            </li>
        }

        return <li key={key}>
            <span>
                <span>{count}</span>
                шт. {burger.name}
                <span>{count * burger.price} ₽</span>
                <button className="cancellItem">&times;</button>
            </span>
        </li>;
    }

    render() {
        const orderIDs = Object.keys(this.props.order)
        const total = orderIDs.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];
            const isAvailable = burger && burger.status === 'available';
            if (isAvailable) {
                return prevTotal + burger.price * count;
            }
            return prevTotal;

        }, 0);

        return (
            <div className="order-wrap">
                <h2>Ваш заказ</h2>
                <ul className="order">
                    {orderIDs.map(this.renderOrder)}
                </ul>

                <div className="toral">
                    <div className="total_wrap">
                        <div className="total_wrap-final">
                            Итого: {total} ₽
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;