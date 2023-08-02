import React from "react";
// nhơ qua MyComponent định nghĩa vì đó là nơi ta muốn làm con của nó
class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleChangTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };
  handleChangSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">> check data input: ", this.state);
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">titleJob:</label>
        <br />
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => this.handleChangTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangSalary(event)}
        />
        <br />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}
export default AddComponent; // chỉ trả ra 1 thứ
