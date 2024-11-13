import "./button.scss";

export default function Button (content){

    return(
        <button className="custom_button">{content.content}</button>
    )
}