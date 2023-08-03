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

  addNewJob = (job) => {
    console.log(
      "check job from parent , coi thử con truyền đc lên cha chưa: ",
      job
    );
    // let currenJob = this.state.arrJobs; //cách viết dài hơn
    // currenJob.push(job); //cách viết dài hơn
    this.setState({ arrJobs: [...this.state.arrJobs, job] });

    // this.setState({
    //   arrJobs: currenJob,
    // }); //cách viết dài hơn
  };

  deleteAJob = (job) => {
    // cách dễ trước
    let currenJob = this.state.arrJobs;
    currenJob = currenJob.filter((item) => item.id !== job.id);
    // điều kiện lọc all các phần tư trong ((item) và trả lại => phần tử nào có id khác với job mà ta trả lên
    this.setState({
      arrJobs: currenJob,
    });
  };

  render() {
    console.log("check call render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponents
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />

        {/* đây là 1 child của nesting */}
      </>
    );
  }
}

export default MyComponent; // chỉ trả ra 1 thứ
