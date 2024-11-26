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
        
        setVideostream(
            <div>
                <Webcam 
                    width={400}
                    height={300}
                    ref={videoRef} 
                    audio={false} 
                    mirrored={true} 
                    screenshotFormat="image/png" 
                    screenshotQuality={1}
                    videoConstraints={{
                        facingMode: {exact: "environment"}
                        //facingMode: {exact: "user"}
                    }}
                />
                <span onClick={()=>handleScreenshot()}>
                    <Button content="Make Photo"/>
                </span>
            </div>
        )
    }
    const [arrPhoto, setArrPhoto] = useState([])
    
    const makephoto = () =>{
       const photo = videoRef.current.getScreenshot()
       return photo

    //    let arr = arrPhoto
    //    arr.push(<img key={dateStamp} src={photo} width={100} height={100}/>)
    //    setArrPhoto(arr)
    }
   
    const handleScreenshot = () => {
        const newScrenShot = makephoto()
        setArrPhoto(prevScreen => [...prevScreen, newScrenShot])
    }

    return(
        <>
            <div className="screenshot_container">
                <div className="">
                    {scanComponent}
                    {scanData}
                    <div className="margin_block"></div>
                    <div className="img_list">
                    {
                         arrPhoto.map((el, i) => {
                            return(
                                <img width={130} height={100} key={i} src={el}/>
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