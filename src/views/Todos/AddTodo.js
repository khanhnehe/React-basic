import React from "react";
import { ToastContainer, toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleClickAddTodo = () => {
    if (!this.state.title) {
      //check title  =>if (undefind/null/empty) => false
      toast.error("missing input ! ");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001), //dùng hàm làm tròng của javascript để random 1 id
      title: this.state.title,
    };
    this.props.addNewTodo(todo); // gọi ngược lên thằng cha để thêm thằng todo
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleClickAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
