import React, { Component } from "react";

// create div 1

class Div1 extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <Div4 onDasher={this.props.onDasher} tartar={this.props.tartar} />
        </div> */}
        <Div2
          changeIt={this.props.changeIt}
          tardis={this.props.tardis}
          onDasher={this.props.onDasher}
          tartar={this.props.tartar}
        />
        {/* <div>
          <Div3 changeIt={this.props.changeIt} tardis={this.props.tardis} />
        </div> */}
      </div>
    );
  }
}

// create div 2

class Div2 extends Component {
  render() {
    return (
      <div>
        <Div3 changeIt={this.props.changeIt} tardis={this.props.tardis} />
        <Div4 onDasher={this.props.onDasher} tartar={this.props.tartar} />
      </div>
    );
  }
}

// make div 3 and move h3 there 
// show it in div 2

class Div3 extends Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.changeIt}> {this.props.tardis.name} </h3>
      </div>
    );
  }
}

//make div 4 and put in div 2

class Div4 extends Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.onDasher}> {this.props.tartar.name} </h3>
      </div>
    );
  }
}


// make app level

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false
      },

      tartar: {
        name: "Time and Relative Dimension in Space",
        caps: true
      }
    };
  }

  changeIt = text => {
    console.log(text);
    let word = this.state.tardis.name;
    console.log(this.state.tardis.caps);
    console.log(word);
    console.log(this.prop);

    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: word.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: word.toUpperCase(),
          caps: true
        }
      });
    }
  };

  onDasher = text => {
    let wordd = this.state.tartar.name;

    if (this.state.tartar.caps) {
      this.setState({
        tartar: {
          name: wordd.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tartar: {
          name: wordd.toUpperCase(),
          caps: true
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Div1
          changeIt={this.changeIt}
          tardis={this.state.tardis}
          onDasher={this.onDasher}
          tartar={this.state.tartar}
        />
      </div>
    );
  }
}