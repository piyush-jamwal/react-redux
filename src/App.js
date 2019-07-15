import React, { Component } from 'react';
import List from './js/components/List';
import './App.css';



// const list=[{a:"abcd",
// b:"abcd",
// c:"abcd",
// d:"abcd",
// e:"abcd",
// f:"abcd",
// },
// {a:"abcd",
// b:"abcd",
// c:"abcd",
// d:"abcd",
// e:"abcd",
// f:"abcd",
// },{a:"abcd",
// b:"abcd",
// c:"abcd",
// d:"abcd",
// e:"abcd",
// f:"abcd",
// }];







// class application extends Component{

// constructor(props){
// 		super(props);
// 		this.state ={li : list,
// 			event: ''};
//         this.func= this.func.bind(this);
//         this.inpu= this.inpu.bind(this);
// //this.inpu=this.inpu.bind(this);

         
// 	}
// 	func(){
//        return (console.log(this.state.li.map((b)=>b.c)))
//     };
// inpu(obj){
    	
//     		this.setState({event: obj.target.value})
//     		//console.log(obj.target.value),
//     		console.log(this.state.event)
  


//     };

    
// render(){
// 	return (<div>
// 		<h1>Piyush Singh Jamwal</h1>
// 		<button onClick={()=>this.func()} type="button">
// 				button
// 				</button>

// 				<Text onC={this.inpu}/>
//              </div>)
//              };
// };



// class Text extends Component{

// render(){
// 	const {onC}= this.props;
// 	return(
// 	<form>
// 				<input type="text" onChange={onC}/>
//                  </form>)
// };


// };


class Board extends Component{
	constructor(props){
		super(props);
		this.state={player: 'true',
		board: Array(9).fill(null)}
		this.click= this.click.bind(this);
		this.but= this.but.bind(this);
	}
click(i){
	const board = this.state.board.slice();
board[i]= this.state.player ? 'X' : 'O';
this.setState({board:board,
player: !this.state.player});
console.log(this.state.board);
this.calculateWinner(this.state.board);
}
but(i){
	return(
		
	<Button val={this.state.board[i]} onClick={()=>this.click(i)}/>
	
	);
}
calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    console.log(lines[i]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return (console.log("winner is" + squares[a])
      	)
    }
  }
  return console.log("not ");
}

	render(){
		return(<div>
			<div>{this.but(0)}
			{this.but(1)}
			{this.but(2)}

			</div>
			<div>
			{this.but(3)}
			{this.but(4)}
			{this.but(5)}
			</div>
			<div>{this.but(6)}
			{this.but(7)}
			{this.but(8)}
			gghgjhghj
			<List />
			</div>
				</div>


			)
	}
};


class Button extends Component{render(){
		return(<button value={this.props.val} onClick={this.props.onClick}>{this.props.val}
			</button>)
	}
};
class Game extends Component{render(){
		return(<button>
			</button>)
	}
};







export default Board;
