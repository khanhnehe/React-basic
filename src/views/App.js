import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify"; // định nghĩa thêm bên listTodo và addtodo
import "react-toastify/dist/ReactToastify.css";

// 2 components: class component / function component ( function, arrow)
// JSX

const App = () => {
  return (
    <div className="App">
      {/* inject = nhúng */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TODO apps with Khanh</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <MyComponent /> */}
        <ListTodo />
      </header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
