//Muốn nó lưu trữ dữa liệu gì ta init cho 1 cái State
//như react ta lưu trữ state của redux  là 1 Object

const initState = {
  users: [
    {
      id: 1,
      name: "khanh",
    },
    {
      id: 2,
      name: "dep",
    },
    {
      id: 3,
      name: "thêm cái thứ 3 check thử",
    },
  ],
  post: [],
};

//rootReducers nhận 2 giá trị là state và action
//state là trạng thái của thằng redux(chỉ là trùng tên vs state của react thui)
//state này là nơi lưu trữ data của redux
//action tức là cái react của we truyền action lên như thế nào
// rootReducer đc coi như là công nhân => tức là khi we chạy vào trong cái reducer thì cuối cùng nó sẽ return 1 cái state
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">> run into delete user: ", action);

      let users = state.users; // như vậy đã lấy đc biến users của we ra
      //gán lại users chính =
      users = users.filter((item) => item.id !== action.payload.id);

      // dùng break hay  return state đều đc ;
      return { ...state, users };

    case "CREATE_USER":
      //dùng Math.floor(Math.random() *1000) để random id
      let id = Math.floor(Math.random() * 1000);
      //dung dấu `` để nói chuỗi
      let user = { id: id, name: `random - ${id}` };

      return {
        // thăng users sẽ bằng đóng users hiện tại của we(vì vậy ta copy ...state lại)
        // và cuối cùng là thằng user mới ta sẽ push nó vào
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }

  // gán state= inintState thì khi khởi động lên mặc định nó sẽ có giá trị là initState
};

export default rootReducer;
