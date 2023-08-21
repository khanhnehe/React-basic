import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify"; // định nghĩa thêm bên listTodo và addtodo
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

// 2 components: class component / function component ( function, arrow)
// JSX

//Import thư viện vào
//keyworld "as Router", giống như định nghĩa 1 biến vs tên gọi khác của nó
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* inject = nhúng */}

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            {/* Khi vào router Home sẽ render ra component Home */}
            {/* Keyword exact giúp render chính xác đường link của componemts */}
            <Route path="/" exact>
              <Home />
              {/* Khi vào router todo sẽ render ra component ListTodo */}
            </Route>
            <Route path="/todo">
              <ListTodo />
              {/* Khi vào router about sẽ render ra component MyComponent */}
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            {/* muốn chính xác thêm exact tại về 2 cái user của we nó giống nahu cân ~theem excat*/}
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
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
    </BrowserRouter>
  );
};

export default App;
