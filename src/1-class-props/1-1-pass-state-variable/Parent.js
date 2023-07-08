import React, { useState } from 'react'
import Child from './Child';
import PassComponent from './PassComponent';

function Parent(){

    
    const [name,setName]=useState('world')

    
    const changeName=()=>{
        setName('React World')
    }
    

    return (
        <div>
            <h1>Hello From parent</h1>

            <PassComponent>
                <Child 
                //1. pass state variables  
                title={name} 
                
                //2. pass functions
                onclick= {changeName} />
            </PassComponent>
        </div>
    )
}

export default Parent;