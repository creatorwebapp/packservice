import "./LoginPageStyle.scss";
import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import Input from "../../components/input/input";
export default function LoginPage (){

    return (
        <>
            <div className="home_page">
                <div className="container">
                    <Input/>
                    <div className="margin_block"></div>
                    <Input/>
                    <div className="margin_block"></div>
                    <Link to={"new_product"}>
                        <Button content="Login"/>
                    </Link>
                </div>
            </div>
        </>
    )
}