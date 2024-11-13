import { useState } from "react";
import "./input.scss";

export default function Input(props){
    const [number, setNumber] = useState("");
    const checkPress = (params) =>{
        props.flag === "true" ? setNumber(params.split("").filter(el=>isNaN(el)?"":el).join("")) : setNumber(params)
    }

    return(
        <input 
            value={number} 
            onChange={(e)=>checkPress(e.target.value)} 
            className="custom_input" 
            type={props.typeinput} 
            placeholder={props.placeholder}
        />
    )
}