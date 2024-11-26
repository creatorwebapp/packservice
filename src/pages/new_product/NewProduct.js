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
    const[saveData, setSaveData] = useState(<></>)
    function setter(){
        
        setVideostream(
            <div>
                <Webcam 
                    width={`100%`}
                    height={300}
                    ref={videoRef} 
                    audio={false} 
                    mirrored={false} 
                    screenshotFormat="image/png" 
                    screenshotQuality={1}
                    videoConstraints={{
                        //facingMode: {exact: "environment"}
                        facingMode: {exact: "user"}
                    }}
                />
                <div>
                    <span onClick={()=>handleScreenshot()}>
                        <Button content="Make Photo"/>
                    </span>
                    <span onClick={()=>finishPhoto()}>
                        <Button content="Finish Photo"/>
                    </span>
                </div>
                
            </div>
        )
    }
    const [arrPhoto, setArrPhoto] = useState([])
    
    const makephoto = () =>{
       const photo = videoRef.current.getScreenshot()
       return photo
    }
   
    const handleScreenshot = () => {
        const newScrenShot = makephoto()
        setArrPhoto(prevScreen => [...prevScreen, newScrenShot])
    }

    const finishPhoto = ()=>{
        setVideostream(<></>)
        setSaveData(<span><Button content="Save Data"/></span>)
    }
    return(
        <>
            <div className="screenshot_container">
                <div className="">
                    
                    {scanComponent}
                    <div className="margin_block"></div>
                    {scanData}
                    <div className="margin_block"></div>
                    {videostream}
                    <div className="margin_block"></div>
                    <div className="img_list">
                    {
                         arrPhoto.map((el, i) => {
                            return(
                                <img style={{margin:"2px"}} width={130} height={100} key={i} src={el}/>
                            )
                         })
                    }
                    </div>
                    <div className="margin_block"></div>
                    {saveData}
                </div>
            </div>
        </>
    )
}