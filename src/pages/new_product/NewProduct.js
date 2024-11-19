import BarcodeScannerComponent from "react-qr-barcode-scanner"
import Button from "../../components/button/button"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function NewProduct (){
    const [scanData, setScanData] = useState("000")
    const [scanComponent, setScanComponent] = useState(<span onClick={(e)=>setter(e)}><Button content="Start scanning ttttt"/></span>)
    function setter(ev){
        
         setScanComponent(<BarcodeScannerComponent
             width={500}
             height={500}
             onUpdate={(err, result) => {
                 if (result) {
                     setScanData(result.text)
                     setScanComponent(<></>)
                 }
                 else{
                     setScanData("NotFound")
                 }
             }}
         />)
    }
    return(
        <>
            <div className="home_page">
                <div className="container">
                    {scanComponent}
                    {scanData}
                    <div className="margin_block"></div>
                    <Link to={"work_page"}>
                        <Button content="List Products"/>
                    </Link>
                </div>
            </div>
        </>
    )
}