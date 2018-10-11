import React, { Component } from 'react';
import data from './emojiList.json'
import './emojies.css'
import cat1 from '../images/cat2.png'
import cat2 from '../images/cat.jpeg'



class Emojies extends Component {
  constructor(props){
		super()
		this.state={
      inputVal:'',
      data,
		}
  }
  
  //this function is for targeting input value while doing this people were able
  //to write in input because input is control input
	inOnChange=(e)=>{
    this.setState({inputVal:e.target.value});
  }
  
  //filtering API
  render=()=>{
    var libraries,
    libraries = data,
    inputVal = this.state.inputVal.trim().toLowerCase();
    if(inputVal.length > 0){
        libraries = libraries.filter(l => {
            return l.title.toLowerCase().match(inputVal) || l.keywords.toLowerCase().match(inputVal);
        });
    }
  
//rendering all html tags and used map function for taking a new array function
    return (
      <div className="emoji">
      <div>
        <h1 className="heading"><img src={cat1} className="setheadEmoji"/> Emoji Search <img src={cat2} className="setheadEmoji"/></h1>
      </div>
      <div className="searchDiv">
         <input className="inpsty" type="text" name="searchInput" onChange={this.inOnChange} value={this.state.inputVal}/>
	    </div>
          {
	          libraries.slice(0, 20).map(function(libraries, index){
	            return <div key={index} className="lists">
                  <span className="symbols">{libraries.symbol}</span>
                  <span className="title">{libraries.title}</span>
                </div>;
	          })
	        }
      </div>
    );
  }
}

export default Emojies;