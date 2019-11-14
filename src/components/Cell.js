import React from "react";


const Cell = React.memo((props)=>{

    return(
        <>
            {console.log("render")}
            <button style={{ width : "10px", height :"10px", backgroundColor: (props.isAlive)? "black" : "white", margin: "3px", border : "solid 1px red"}}
                    onClick={()=>props.onClick(props.row, props.col)}/>
        </>
    )

});


export default Cell;
