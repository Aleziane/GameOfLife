import React, {useState, useEffect} from 'react';
import './App.css';
import GameClass from "./components/GameClass";

function App() {

    const [size, setSize]= useState(10);

    const handleChange =  event =>{
        setSize(event.target.value)
    };

    return (
        <div className="App">
            <header className="App-header">
                Conway game of life
            </header>
                <input type="number" value={size} onChange={handleChange}/>

            <div style={{ margin : "auto"}}>
                <GameClass size={size} />
            </div>
        </div>
    );
}

export default App;
