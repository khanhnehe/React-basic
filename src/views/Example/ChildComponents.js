import React from "react";

class ChildComponents extends React.Component {
  // #QUANG TRỌNG
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      // dùng "!" để phủ định nếu showJobs=false =>  thành true và ngược lại
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    // let age = this.props.age; thay bằng cái ở dưới
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // điều kiện "?" so sánh showJobs-> nếu phần tử này đúng nó sẽ lấy cái đầu tiên, sai thì lấy cái thứ 2
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>check conditional: ", check);
    return (
      <>
        {/* dùng điều kiện false=> khi mà nó bằn false thì ta in ra cái div show */}
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lits">
              {/* dùng vòng lặp */}
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} {item.salary}
                  </div>
                );
              })}{" "}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponents = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="job-lits">
//         {/* dùng vòng lặp */}
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500000) {
//             return (
//               <div key={item.id}>
//                 {item.title} {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponents; // chỉ trả ra 1 thứ
