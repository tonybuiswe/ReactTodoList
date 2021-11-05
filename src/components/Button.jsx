import PropTypes from 'prop-types';
import  { useState } from "react";


const Button = ({text,color,onClick}) => {
    return (
        <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Button