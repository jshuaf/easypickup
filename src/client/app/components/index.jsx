import CarItem from './CarItem.jsx';
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carItemCount: 0,
    };
    this.addCar = this.addCar.bind(this);
    this.carItems = [];
  }

  addCar() {
    const newCarItemCount = this.state.carItemCount + 1;
    this.setState({ carItemCount: newCarItemCount });
  }

  render() {
    this.carItemsStyle = {
      width: '90vw',
      marginLeft: '3.5vw',
    };

    if (this.carItems.length !== this.state.carItemCount) {
      const carsToAdd = this.state.carItemCount - this.carItems.length;
      let i;
      if (this.carItems.length % 2 === 0) {
        for (i = 0; i < carsToAdd; i++) {
          if (i % 2 === 0) {
            this.carItems.push(<CarItem alternate={false} />);
          } else {
            this.carItems.push(<CarItem alternate />);
          }
        }
      } else {
        for (i = 0; i < carsToAdd; i++) {
          if (i % 2 === 0) {
            this.carItems.push(<CarItem alternate />);
          } else {
            this.carItems.push(<CarItem alternate={false} />);
          }
        }
      }
    }

    return (
      <div>
        <div>
          <button onClick={this.addCar}>Add Car</button>
        </div>
        <div style={this.carItemsStyle}>
          {this.carItems}
        </div>
      </div>
    );
  }
}

render(<App id="app" />, document.getElementById('app-container'));
