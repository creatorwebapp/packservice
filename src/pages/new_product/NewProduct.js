import BarcodeScannerComponent from "react-qr-barcode-scanner"
import Button from "../../components/button/button"
import { useEffect, useRef, useState } from "react"
import Webcam from "react-webcam"
import "./NewProductStyle.scss";

export default function NewProduct (){
    const [scanData, setScanData] = useState("")
    const [scanComponent, setScanComponent] = useState(<span onClick={(e)=>setterBarkode()}><Button content="Start scanning Code"/></span>)
    function setterBarkode(){
         setScanComponent(<BarcodeScannerComponent
             width={400}
             height={300}
             onUpdate={(err, result) => {
                 if (result) {
                     setScanData(`Number product: ${result.text}`)
                     setScanComponent(<></>)
                 }
                 else{
                     setScanData("NotFound")
                 }
             }}
         />)
    }
    const [videostream, setVideostream] = useState(<span onClick={()=>setter()}><Button content="Firts Photo"/></span>)
    const videoRef = useRef(null)
    
    function setter(){
        
        setVideostream(<div><Webcam ref={videoRef} audio={false} mirrored={true} screenshotFormat="image/jpeg" screenshotQuality={1}/><span onClick={()=>makephoto()}><Button content="Make Photo"/></span></div>)
    }
    const [arrPhoto, setArrPhoto] = useState([])
    
    const makephoto = () =>{
       const photo = videoRef.current.getScreenshot()
       console.log(photo);
       
       let arr = arrPhoto
       arr.push(photo)
       setArrPhoto(arr)
    }
    

    return(
        <>
            <div className="home_page">
                <div className="container">
                    {scanComponent}
                    {scanData}
                    <div className="margin_block"></div>
                    <div className="img_list">
                    {
                        arrPhoto.map((i, el)=>{
                            console.log(el);
                            
                            return(
                                <img key={i} src={el}/>
                            )
                        })
                    }
                    </div>
                    <div className="margin_block"></div>
                    {videostream}
                </div>
            </div>
        </>
    )
}