import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Colorizer extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            color:"",
            bgColor:"white"
        };
        this.colorValue = this.colorValue.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
    }
    colorValue(e){
        this.setState({
            color:e.target.value
        });
    }
    setNewColor(e){
        this.setState({
            bgColor:this.state.color
        });

        this.input.value ="";
        e.preventDefault();
    }
    render(){
        var squareStyle = {
            backgroundColor:this.state.bgColor
        };

        if(squareStyle.backgroundColor!=='white'){
            console.log(squareStyle)
        }

        return(
            <div className="colorArea">
              <div style={squareStyle} className="colorSquare"></div>
                <form onSubmit={this.setNewColor}>
                    <input onChange={this.colorValue}
                           ref={
                               (e)=>this.input = e
                           }
                        placeholder="Значение цвета">
                    </input>
                    <button type="submit">ok</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Colorizer/>
    </div>,
    document.getElementById('container')
);