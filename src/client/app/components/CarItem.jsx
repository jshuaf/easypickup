import React from 'react';
import ReactInterval from 'react-interval';

const faker = require('faker');
const greenToYellow = 30000;
const yellowToRed = 30000;
const redToGone = 30000;

class CarItem extends React.Component {

  constructor(props) {
    super(props);

    this.carItemStyle = {
      height: '12vw',
      marginLeft: '2.5vw',
      marginTop: '1vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    };

    this.timeIndicatorStyle = {
      height: '10vw',
    };

    this.studentInfoStyle = {
      width: '18vw',
      height: '3vw',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    this.studentName = faker.name.findName();
    this.randomGrade = Math.floor(Math.random() * 12) + 1;
    this.studentGrade = `Grade ${this.randomGrade}`;
    this.homeroomTeacher = faker.name.firstName();

    this.state = {
      lightColor: 'green',
      lightIndicator: <img src="public/assets/green-light.png" alt="Light"
        style={this.timeIndicatorStyle}
      />,
      currentTimeout: greenToYellow,
      inParkingLot: true,
    };

    this.updateLightIndicator = this.updateLightIndicator.bind(this);
  }

  updateLightIndicator() {
    if (this.state.lightColor === 'green') {
      this.setState({
        lightColor: 'yellow',
        lightIndicator: <img src="public/assets/yellow-light.png" alt="Light"
          style={this.timeIndicatorStyle}
        />,
        currentTimeout: yellowToRed,
      });
    } else if (this.state.lightColor === 'yellow') {
      this.setState({
        lightColor: 'red',
        lightIndicator: <img src="public/assets/red-light.png" alt="Light"
          style={this.timeIndicatorStyle}
        />,
        currentTimeout: redToGone,
      });
    } else if (this.state.lightColor === 'red') {
      this.setState({
        inParkingLot: false,
      });
    }
  }
  render() {
    if (this.props.alternate) {
      this.studentNameContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '52.5vw',
        height: '10vw',
        backgroundColor: 'rgb(242, 224, 192)',
      };
      this.studentInfoContainerStyle = {
        width: '20vw',
        height: '10vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(242, 224, 192)',
      };
    } else {
      this.studentNameContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '52.5vw',
        height: '10vw',
        backgroundColor: 'rgb(255, 245, 230)',
      };
      this.studentInfoContainerStyle = {
        width: '20vw',
        height: '10vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(255, 245, 230)',
      };
    }
    if (this.state.inParkingLot) {
      return (
        <div style={this.carItemStyle}>
          <ReactInterval timeout={this.state.currentTimeout}
            callback={() => this.updateLightIndicator()} enabled
          />
          <div style={this.timeIndicatorContainerStyle}>
            {this.state.lightIndicator}
          </div>
          <div style={this.studentNameContainerStyle}>
            <h2 style={this.studentNameStyle}>{this.studentName}</h2>
          </div>
          <div style={this.studentInfoContainerStyle}>
            <div style={this.studentInfoStyle}>
              <h3>{this.studentGrade}</h3>
            </div>
            <div style={this.studentInfoStyle}>
              <h3>{this.homeroomTeacher}</h3>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

CarItem.propTypes = {
  alternate: React.PropTypes.bool.required,
};

export default CarItem;
