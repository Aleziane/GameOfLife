import React from "react";
import Cell from "./Cell";
import {nextStep} from "./utils"

class GameClass extends React.Component {

    constructor(props){
        super(props);
        this.eventOnclick = this.eventOnclick.bind(this);
        this.toggleGame=this.toggleGame.bind(this);
        this.state = {
            isRunning: false,
            gameState : Array(props.size).fill(Array(props.size).fill(false))
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.isRunning && !prevState.isRunning){
            this.interval = setInterval(()=>{
                this.setState(state => ({
                    gameState : nextStep(state.gameState)
                }));
            }, 500)
        }

        if(!this.state.isRunning && prevState.isRunning){
            clearInterval(this.interval);
            this.interval = undefined;
        }


    }
    static getDerivedStateFromProps(nextProps, prevState){

        if(prevState.gameState.length !==nextProps.size-0){
            return {
                isRunning: false,
                gameState : Array(nextProps.size-0).fill(Array(nextProps.size-0).fill(false))
            }
        }
        else {
            return prevState;
        }
    }

    componentWillUnmount() {
        if(this.interval){
            clearInterval(this.interval);
        }
    }


    eventOnclick (rowIndex, colIndex) {
        const newState = this.state.gameState.map((row => {
            return [...row];
        }));
        newState[rowIndex][colIndex] = !this.state.gameState[rowIndex][colIndex];
        this.setState({gameState : newState});
    } ;

    toggleGame(){
        this.setState(state=> {
            return {isRunning: !state.isRunning}
        });
    }


    render() {
        return (
            <>
                <button
                    onClick={this.toggleGame}
                    key={"button"}
                    style={{ marginBottom : "10px"}}
                >
                    {this.state.isRunning? "Stop" : "Start"}

                </button>
                {this.state.gameState.map((row, rowIndex)=>{
                    return(
                        <div style={{ display : "flex", flexDirection :"row", justifyContent : "center"}} key={rowIndex}>
                            {row.map((val, colIndex)=>{
                                return(
                                    <Cell isAlive ={val} row={rowIndex} col={colIndex} onClick={this.eventOnclick} key={rowIndex+""+colIndex}/>
                                )
                            })}
                        </div>
                    );
                })}
            </>

        )
    }


};

export default GameClass;
