import React from "react";

const Button = (props) => {
    const { text, link, color } = props;

    return (
        color == "dark" ?
            <a className='sofax-default-btn pill dark-btn sofax-header-btn' data-text={text} href={link}>
                <span className="button-wraper">{text}</span>
            </a> : <a className='sofax-default-btn pill  sofax-header-btn' data-text={text} href={link}>
                <span className="button-wraper">{text}</span>
            </a>

    );
}

export default Button;