// viết theo kiêu function component
import React from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//thường thì ta truyền vào của 1 function  là 1 biến
//nhưng bây giờ ta truyền thẳng 1 cái componten lun WrappedComponent
const Color = (WrappedComponent) => {
  const colorRandom = getRandomColor();

  //Biến props ở đây để khi return cho react nó hiểu là ta đang viết 1 component
  //Bắt buộc truyền props vào nó, nhận đâu vào thề nào nhả đầu ra thế đó
  return (props) => (
    <div style={{ color: colorRandom }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
