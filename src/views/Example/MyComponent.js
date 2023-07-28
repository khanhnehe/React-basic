import React from "react";

// để 1 class javascript hiểu rằng đâylà 1 react Component cần khai báo như  bên dưới => nó extends lại thức là kế thừa lại cái React.Component
class MyComponent extends React.Component {
  state = {
    name: "Khanhne",
    address: "CanTho",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    // let name = "Khanh";
    // //dùng {} để sử dụng javascritp trong JSX html

    return (
      <>
        <div className="firstName">
          {/* {/* {console.log("My name is: ", name)} */}
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          hello kanh ne he {this.state.name}
        </div>
        <div className="second">My address: {this.state.address}</div>
      </>
    );
  }
}

export default MyComponent; // chỉ trả ra 1 thứ
