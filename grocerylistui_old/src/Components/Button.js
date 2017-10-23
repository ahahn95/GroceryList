import React from 'react';

const Button = ({handleClick}) => {
    return (
        <button onClick={handleClick}>Submit</button>
    );
}

export default Button;