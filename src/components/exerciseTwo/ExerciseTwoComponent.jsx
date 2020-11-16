import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Form,Button} from 'react-bootstrap';

function ExerciseTwoComponent(props) {

    const [input, setInput]=useState({number:0});
    const [returnedArray, setReturnedArray]=useState([]);
    const [warning, setWarning] =useState(false);

    const handleInputChange=(event)=>{
            setInput({
                    [event.target.name]:event.target.value
                });
                console.log('input',input);        
    }

    const getFizzBuzz=()=>{
        let arrayReturned=[];
        for(let i=1; i<16;i++){
            if(i%3===0 || i%5===0){
                if(i%3===0 & i%5==0){
                    arrayReturned.push('fizzbuzz')
                };
                if(i%3!==0 & i%5===0){
                    arrayReturned.push('buzz')
                };
                if(i%3===0 & i%5!==0){
                    arrayReturned.push('fizz')
                };
            }else{
                arrayReturned.push(i)
            }
         
        }
           console.log(arrayReturned)
           setReturnedArray(arrayReturned);
    }

    

    return (
        <div>
            <div className={"column m-4 p-4 rounded rounded bg-dark text-white"}>
            <h2>FizzBuzz, Fizz o Buzz</h2>
                <p>¡Ingresa un numero entero!</p> 
                <Form.Control name="number" 
                            className={"col-5 m-2"}
                            type="text" placeholder="Z number" 
                            onChange={handleInputChange}/>
               <Button onClick={getFizzBuzz}>GO</Button>  
            </div>

            {returnedArray.map(i => 
                <div>{i}</div>)
            }
            <div className={"row bg-light jsutify-content-around"}>
            { warning===true ?
                        <div className={"bg-success alert alert-danger ml-5"} role="alert">
                            <p>¡Debes ingresar un numero entero!</p>   
                        </div>
                        : <></>}
            </div>
        </div>
    )
}

ExerciseTwoComponent.propTypes = {

}

export default ExerciseTwoComponent

