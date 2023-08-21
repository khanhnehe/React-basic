import React from "react";

//giúp lấy đc các hàm các tham số trên đg link URL
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    user: {},
  };

  //live cycler của react
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`); // dùng dấu``và $ để nối chuỗi

      this.setState({
        //tại sao phải in ra res.data.data nhiều như vậy vì kq trả ra của we trong phần data có phần data nhỏ ở trong nữa
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log(">> check res user: ", res);
    }
  }
  handleBackButton = () => {
    this.props.history.push("/user");
  };

  render() {
    //lấy user
    let { user } = this.state;
    //check xem biến của we có rỗng hay ko
    let isEmptyObj = Object.keys(user).length === 0;

    console.log(">>>check props: ", this.props);
    return (
      <>
        <div>Hello DetailUser with id: {this.props.match.params.id}</div>
        {/* isEmptyObj === false tức ko rỗng  phải cho nó 1 cái <></>*/}
        {isEmptyObj === false && (
          <>
            <div>
              User's Name: {user.first_name} - {user.last_name}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              {" "}
              <button type="button" onClick={() => this.handleBackButton()}>
                {" "}
                back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

//bọc lại DetailUser
export default withRouter(DetailUser);
