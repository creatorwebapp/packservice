import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import "./HomePageStyle.scss"

export default function HomePage(){
    return (
        <>
            <div className="home_page">
                <div className="container">
                    <Link to={"login"}>
                        <Button content="Login"/>
                    </Link>
                </div>
            </div>
        </>
    )
}