import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import gojo from "../../assets/images/gojo.png";

import { connect } from "react-redux"; // nhớ xuống dưới bọc lại
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
  handleDeleteUser = (user) => {
    console.log(">>> check delete user", user);
    this.props.deleteUserRedux(user);
  };

  handleCreteUser = () => {
    this.props.addUserRedux();
  };

  render() {
    console.log(">> check props redux: ", this.props.dataRedux);

    let litUsers = this.props.dataRedux;

    return (
      <>
        <div>Hello Home đây hãy coi ta như là 1 trang chủ</div>
        <div>
          <img src={gojo} style={{ width: "200px", marginTop: "10px" }} />
        </div>
        <div>
          {/* litUsers && litUsers.length > 0 đk check xem litUsers có tòn tại ko */}
          {litUsers &&
            litUsers.length > 0 &&
            litUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  <span onClick={() => this.handleDeleteUser(item)}> x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreteUser()}>Add new</button>
        </div>
      </>
    );
  }
}

// muốn lấy dữ liệu ta cần đặt tên data => data của we tên "dataRedux" muốn đặt j cx đc
const mapStateToProps = (state) => {
  //state sẽ bằng cái inintState mà ta làm trước đó => vì vậy muốn lấy biến users đơn giản chỉ cần state.users
  return { dataRedux: state.users };
};

//lúc nào cx return là 1 Object nhé
const mapDispatchToProps = (dispatch) => {
  return {
    //nhớ rằng action là 1 Object
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDelete, //payload là hàm đàu vào của cái deleteUserRedux là userDelete
      }),

    //--add new user
    addUserRedux: (userCreate) =>
      dispatch({
        type: "CREATE_USER",
        payload: userCreate,
      }),
  };
};

//---
// export default withRouter(Home);
///truyền mapStateToProps vào hàm connect, connect là sợi dây là liên kết
///giúp 2 ứng dụng react và redux kiểu như nó bắt tay vs nhau
///Nó chỉ bắt tay vs nhau trong component Home này thui s
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
