import React from "react";

export default function Child(props){
//export default function Child({title,onclick}){

    const {title}=props
    
    const {onclick}=props

    //const {title,onclick}=props
    return(

        <div>
            
            <h1>hello {title} from child</h1>
            <button onClick={onclick}> click to react</button>
        </div>
    )
}