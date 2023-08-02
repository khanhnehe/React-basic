import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    // firstName: "",
    // lastName: "",
    arrJobs: [
      { id: "2000141", title: "Developers", salary: "100000" },
      { id: "2000142", title: "Testers", salary: "300000" },
      { id: "2000143", title: "Project managers", salary: "700000" },
    ],
  };

  render() {
    console.log("check call render: ", this.state);
    return (
      <>
        <AddComponent />

        <ChildComponents arrJobs={this.state.arrJobs} />
        {/* đây là 1 child của nesting */}
      </>
    );
  }
}

export default MyComponent; // chỉ trả ra 1 thứ
