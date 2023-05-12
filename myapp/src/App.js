import React, { useState } from "react";
const App=()=>{
    const[num,setNum]=useState(0);
    const incNum=()=>{
setNum(num+1);
    }
    const decNum=()=>{
        setNum(num-1);
            }
    return(
        <>
        <div className="maindiv">
            <div className="centerdiv">
              <h3>Chances of getting selected in Inboundsys</h3>
                <h1>{num}</h1>
                <div className="btn">
                    <button onClick={incNum}>Increasing</button>
                    <button onClick={decNum}>Decreasing</button>
                    </div>
                    </div>
                    </div>
        </>
    )

}
export default App;