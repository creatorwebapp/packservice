import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import { useState } from "react"

export default function WorkPage(){
    const [canCode, setScanCode] = useState()
    const [codeComponent, setCodeComponent] = useState()
    
    return(
        <>
            <div className="home_page">
                <div className="container">
                    <Link to={"new_product"}>
                        <Button content="Start packing"/>
                    </Link>
                    <div className="margin_block"></div>
                    <Link to={"work_page"}>
                        <Button content="List Products"/>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}