import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "watching TV" },
      { id: "todo3", title: "Fixing bugs" },
    ],

    // khi we nhấn vào nút edit nó sẽ gắn trị của nó chính bằng cái todo mà we muốn sửa
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      //setState của thằng cha là listTodo
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Create a successful account! ");
  }; //truyền sang thằng con AddTodo bên dưới render

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    //dùng như này cái hàm filter của javascript sẽ trả ra 1 cái array mới
    //aray mới này sẽ bỏ đi cái todo mà we đã xóa
    //check theo đk nó chỉ trả ra cái todo có id khác vs cái todo mà ta bấm delete

    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete successful! ");
  };

  handleEditTodo = (todo) => {
    // giải thíc trong word trang 48
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //Svae
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }
    //edit
    this.setState({
      //chính bằng cái todo mà we truyền vào
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    // dùng {} vì đây là 1 obj
    // dùng "..." để coppy lại thằng editTodo
    let editTodoCopyNew = { ...this.state.editTodo };
    //sau khi copy thực hiện như sau
    editTodoCopyNew.title = event.target.value;
    this.setState({
      //set ngược lại editTodo
      editTodo: editTodoCopyNew,
    });
  };

  render() {
    // sau khi xác định được mk muốn sửa cái todo nào rồi
    // thêm đk editTodo tại đây cho nó render ra lun
    let { listTodos, editTodo } = this.state;
    // nếu editTodo.length === 0 => isEmptyObj == true
    // nếu editTodo.length !== 0 => isEmptyObj == false
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">> check empty obj ", isEmptyObj);
    return (
      <>
        <p>Simple TODO apps with Khanh</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          {/* truyền sang thằng con AddTodo */}

          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  //cần thuộc tính key để toói ưu hóa hiệu năng
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? ( //isEmptyObj === true - rỗng chưa edit thì chạy ra đống này
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      // nếu == false => ko rỗng tức bấm nút edit thì chạy ra đống này
                      <>
                        {editTodo.id === item.id ? ( //khi id của 2 cái này giống nhau in ra đống này
                          <span>
                            {index + 1} -
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          // id của 2 cái bày khác nhau thì ko in ra input để edit
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {/* check đk để nút'edit' thành 'save' */}
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                      {/* Edit */}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
