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
};

//rootReducers nhận 2 giá trị là state và action
//state là trạng thái của thằng redux(chỉ là trùng tên vs state của react thui)
//state này là nơi lưu trữ data của redux
//action tức là cái react của we truyền action lên như thế nào
// rootReducer đc coi như là công nhân => tức là khi we chạy vào trong cái reducer thì cuối cùng nó sẽ return 1 cái state
const rootReducer = (state = initState, action) => {
  // gán state= inintState thì khi khởi động lên mặc định nó sẽ có giá trị là initState
  return state;
};

export default rootReducer;
