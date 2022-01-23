import React from "react";
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
  state = {
    display: false,
    title: "",
    url: "",
  }

  displayList = () => {
    this
  }

  render() {
    return (
      <div className='restaurant_select'>

        <div className='restaurant_select_top'>
          <div onClick={this.displayList} className='restaurant_select_top_header font-effect-outline'>Выбери ресторан</div>
          <div className='arrow_picker'>
            <div className='arrow_picker_up'></div>
            <div className='arrow_picker_down'></div>
          </div>
        </div>

        <div className='restaurant_select_bottom'>
          <ul>
            {restaurants.map(restaurants => {
              return <li key={restaurants.id}>{restaurants.title}</li>
            })}
          </ul>
        </div>

        <button>Перейти в ресторан</button>

      </div>
    );
  }
}

export default Landing;
