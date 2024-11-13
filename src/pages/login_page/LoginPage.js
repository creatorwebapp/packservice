import "./LoginPageStyle.scss";
import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import Input from "../../components/input/input";
export default function LoginPage (){

    return (
        <>
            <div className="home_page">
                <div className="container">
                    <Input placeholder="id-woker" typeinput="text" flag="true"/>
                    <div className="margin_block"></div>
                    <Input placeholder="password" typeinput="password" flag="false"/>
                    <div className="margin_block"></div>
                    <Link to={"work_page"}>
                        <Button content="Login"/>
                    </Link>
                </div>
            </div>
        </>
    )
}