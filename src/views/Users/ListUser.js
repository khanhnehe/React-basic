import React from "react";
import axios from "axios";
import "./ListUser.scss";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  //Dùng live cycle  của thằng react là componentDidMount
  async componentDidMount() {
    let res = await axios.get(`https://reqres.in/api/users?page=1`);
    this.setState({
      // nếu có những tham số này res && res.data && res.data.data
      //thì sau dấu "?" là res.data.data không thì rỗng
      // việc dùng đk "&&" thì đãm bảo chắc chắn biến này của we nó tồn tại
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    //lấy listUsers ra từ trong cái state của thằng react của we ra
    let { listUsers } = this.state;
    return (
      <>
        <div className="list-user-container">
          <div className="title">Fetch all list user</div>
          <div className="list-user-content">
            {/* đk listUsers && listUsers.length => đầu tiên dùng để check xem nó có tồn tại hay ko
            Sau đó check xem chiều dài của nó nghĩa là nó có data hay ko */}
            {/* Check có data hay ko vì => hàm map() nếu ko truyền 1 aray(nghĩa là listUsers ko là 1 aray) nó sẽ bị error
            vì vậy cần đk kiện check như vậy */}
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <div className="child" key={item.id}>
                    <span>
                      {index + 1} - {item.first_name} {item.last_name}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListUser;
