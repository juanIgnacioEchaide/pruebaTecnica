import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Form,Button} from 'react-bootstrap';

function ExerciseOneComponent(props) {

    const [input, setInput]=useState({
                                    A:'',
                                    B:''});

    const [isAnagram, setIsAnagram]=useState(false);
    const[isNotAnagram, setIsNotAnagram]=useState(false);
    const [warning, setWarning] =useState(false);


    const checkAnagram=(wordA, wordB)=>{       
        let sameElem = 0;

        if(wordA && wordB){
            const a = [...wordA.toLowerCase()].sort();
            const b = [...wordB.toLowerCase()].sort();
            console.log(a);
            console.log(b);
            for(let i=0; i<a.length;i++){
                if(a[i]===b[i]){
                    sameElem+=1;
                }
            }
            if(a.length===sameElem){
                setIsAnagram(true);
                setWarning(false);
                setIsNotAnagram(false);
            }else{
                setIsNotAnagram(true);
                setIsAnagram(false);
                setWarning(false);
            }            
        }else{
            setWarning(true);
            setIsAnagram(false);
            setIsNotAnagram(false);
        } 

    }


        const handleInputChange=(event)=>{
            setInput({
            ...input,
            [ event.target.name]:event.target.value
            });
            console.log(input);
        }
        
        const handleCheckButton=()=>{
            checkAnagram(input.A,input.B);
        }

        return (
        <div >
             <div className={"column m-4 p-4 rounded rounded bg-dark text-white"}>  
             <h2>Anagrama</h2>
                <p>Procedimiento que consiste en crear una palabra a partir de la 
                reordenación de las letras de otra palabra.</p> 
            </div> 
                <div className={"row justify-content-center"}>
                    <div className={"items-align-center justify-content-center"}>
                        <p style={{fontSize:'90px'}}>¿</p>
                    </div>
                    <Form  className={"column m-4 p-4 rounded justify-content-around bg-light"} >
                        <div className={"row pl-2  ml-2 col-12"}>
                            <Form.Label style={{fontSize:'20px'}} className={"pt-2"} >Es</Form.Label>
                            <Form.Control name="A" 
                            className={"col-5 m-2"}
                            type="text" placeholder="1er palabra" 
                            onChange={handleInputChange}/>
                        </div>
                        <div className={"row pl-2  ml-2"}>
                            <Form.Label style={{fontSize:'20px'}} className={"pt-2"}>anagrama de </Form.Label>
                            <Form.Control name="B" type="text" 
                            className={"col-5 m-2"}
                            placeholder="2da palabra" 
                            onChange={handleInputChange}/>                          
                        </div>
                    </Form>
                    <div>
                        <p style={{fontSize:'90px'}}>?</p>
                    </div>    
                </div>

                <div className={"row m-4 p-4 rounded rounded bg-light"}> 
                    <Button onClick={handleCheckButton}>CHECK</Button>           
                    { isAnagram===true ?
                        <div className={" alert alert-success ml-5"} role="alert">
                            <p>{input.A} es anagrama de {input.B}</p>   
                        </div>
                        : <></>}
                    { warning===true ?
                        <div className={" alert alert-danger ml-5"} role="alert">
                            <p>Son necesarias dos palabras para comparar</p>   
                        </div>
                        : <></>}
                    { isNotAnagram===true ?
                        <div className={" alert alert-warning ml-5"} role="alert">
                            <p>{input.A} es NO anagrama de {input.B}</p>    
                        </div>
                        : <></>}
                </div>
        </div>
        )
    }

ExerciseOneComponent.propTypes = {

}

export default ExerciseOneComponent

