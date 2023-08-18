import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
  //componentDiMount là 1 live cycle (vòng đời) của thằng react
  //thằng home đầu tiên là nó chạy render ra trước rồi mới tới DiMount
  componentDidMount() {
    // setTimeout(() => {
    //   //setTimeout nhận 2 thâm số đầu tiên là function mà ta muốn thục thi,
    //   //thứ 2 là cái time mà ta muốn nó thực thi
    //   // this.props.history.push("/todo"); // Home sẽ chuyển qua Todos trong 3s
    // }, 3000);
  }

  render() {
    console.log(">> check props: ", this.props);

    return (
      <>
        <div>Hello Home đây hãy coi ta như là 1 trang chủ</div>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
