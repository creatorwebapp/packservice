import BarcodeScannerComponent from "react-qr-barcode-scanner"
import Button from "../../components/button/button"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

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
    const [makeFirstPhoto, setMakeFirstPhoto] = useState(<span onClick={()=>setter()}><Button content="Firts Photo"/></span>)
    const videoRef = useRef()
    const canvasRef = useRef()
    
    function setter(){
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then((stream)=>{
            videoRef.current.srcObject = stream
            videoRef.current.onloadedmetadata = ()=>videoRef.current.play()
        })
        setMakeFirstPhoto(<video playsInline muted ref={videoRef}></video>)
    }

    const makephoto = () =>{
        const videoWidth = videoRef.current.scrolWidth
        const videoHeight = videoRef.current.scrolHeight
        canvasRef.current.width = videoWidth
        canvasRef.current.height = videoHeight
        canvasRef.current.getContext("2d").drawImage(videoRef.current, 0, 0, videoWidth, videoHeight   )
    }
    return(
        <>
            <div className="home_page">
                <div className="container">
                    {scanComponent}
                    {scanData}
                    <div className="margin_block"></div>
                    {makeFirstPhoto}
                </div>
            </div>
        </>
    )
}