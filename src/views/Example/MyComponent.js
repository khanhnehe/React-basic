import React from "react";
import ChildComponents from "./ChildComponents";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "2000141", title: "Developers", salary: "100000" },
      { id: "2000142", title: "Testers", salary: "300000" },
      { id: "2000143", title: "Project managers", salary: "700000" },
    ],
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
    console.log("check call render: ", this.state);
    return (
      <>
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangLastName(event)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>{" "}
        <ChildComponents
          name={this.state.firstName}
          age={"23"}
          address={"CanTho"}
          arrJobs={this.state.arrJobs}
        />
        {/* đây là 1 child của nesting */}
      </>
    );
  }
}

export default MyComponent; // chỉ trả ra 1 thứ
