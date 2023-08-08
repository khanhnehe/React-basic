import React from "react";
// nhơ qua MyComponent định nghĩa vì đó là nơi ta muốn làm con của nó
import "./demo.scss";
class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return; // nếu title hoặc salary ko đc điền vào sẽ in ra dong ""Missing required params"
    }
    console.log(">> check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "", // trả về trông nếu điều kiện ở trên khia xét xong
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname"> title: </label> <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangTitleJob(event)}
        />
        <br />
        <label htmlFor="lname"> salary: </label> <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangSalary(event)}
        />
        <br />
        <br />
        <input
          className="btn-submit"
          type="submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    );
  }
}
export default AddComponent; // chỉ trả ra 1 thứ
