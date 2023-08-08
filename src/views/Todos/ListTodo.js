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
  };
  addNewTodo = (todo) => {
    this.setState({
      //setState của thằng cha là listTodo
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Create a successful account! ");
  }; //truyền sang thằng con AddTodo bên dưới render

  render() {
    let { listTodos } = this.state;
    return (
      <>
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
                    <span>
                      {/* index + 1 vì mảng aray bắt đầu  =0 */}
                      {index + 1} - {item.title}{" "}
                    </span>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
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
