import React from "react";

// function clickLove() {
//   document.getElementById(id).style.color = "#000";
// }

const SpacePic = ({ item }) => {
  return (
    <div className="card">
      <img src={item.url} alt="Astronomy pic of the day from the NASA Api" />
      <div className="card-text">
      <h4>{item.date}</h4>
      <h2 className="title">{item.title}</h2>
      {/* <h4 className="blurb">{item.explanation}</h4> */}
      {/* <button id="love" onClick={clickLove(love)}> &#10084;</button> */}
      <button id="love" className="like-button"> &#10084;</button>
      </div>
    </div>
  );
};

export default SpacePic;


// ******************************************************************
//Below would replace the entire contents above but it is not working
// ******************************************************************

// import React, {useState} from "react";

// const SpacePic = ({ item }) => {

//   // this.state = { isToggleOn: true };
//   const [toggle, isToggleOn] = useState(true);
   
//   handleClick = () => {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }))
//   }

//     return (
//       <div className="card">
//         <img src={item.url} alt="Astronomy pic of the day from the NASA Api" />
//         <div className="card-text">
//           <h4>{item.date}</h4>
//           <h2 className="title">{item.title}</h2>
//           <button id="love" className="like-button" onClick={this.handleClick}>
//           {this.state.isToggleOn ? "LOVE IT" : "" }</button>
//           {/* <button className="like-button" id="love" > &#10084;</button> */}
//         </div>
//       </div>
//     );
//   };


// export default SpacePic;
