import React, { useState } from 'react'
import Child from './Child';

function Parent(){

    
    const [name,setName]=useState('world')

    
    const changeName=()=>{
        setName('React World')
    }
    

    return (
        <div>
            <h1>Hello From parent</h1>

            <Child 
            //1. pass state variables  
            title={name} 
            
            //2. pass functions
            onclick= {changeName} />
        </div>
    )
}

export default Parent;