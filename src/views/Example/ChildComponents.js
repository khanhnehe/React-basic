import React from "react";

class ChildComponents extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">> check data input: ", this.state);
  };

  render() {
    console.log("check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age; thay bằng cái ở dưới
    let { name, age } = this.props;
    return (
      <>
        <div>
          child component name: {name} - {age}
        </div>
      </>
    );
  }
}

export default ChildComponents; // chỉ trả ra 1 thứ
