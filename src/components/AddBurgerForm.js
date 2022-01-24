import React from "react";

class AddBurgerForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createBurger = (event) => {
        event.preventDefault();
        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addBurger(burger);
        event.currentTarget.reset(); // update of form
    };

    render() {
        return (
            <form className="burger-edit" onSubmit={this.createBurger}>
                <input ref={this.nameRef} name='name' type='text' placeholder='Name' autoComplete="oft" />
                <input ref={this.priceRef} name='price' type='text' placeholder='Price' autoComplete="oft" />
                <select ref={this.statusRef} name='status' className="status">
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Убрать из меню</option>
                </select>
                <textarea ref={this.descRef} name='desc' placeholder='Desc'/>
                <input ref={this.imageRef} name='image' type='text' placeholder='image' autoComplete="oft" />
            <button type="submit">+Добавить в Меню</button>
            </form>
        )
    }
}

export default AddBurgerForm;