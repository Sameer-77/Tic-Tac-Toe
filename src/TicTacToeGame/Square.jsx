import React from 'react'

const Square = (props) => {
    const { value, onClick } = props;

    // Determine the class to add for styling based on the value
    const squareClass = value === 'X' ? 'square x' : value === 'O' ? 'square o' : 'square';

    return (
        <div
            onClick={onClick}
            className={squareClass}>
            <h5>{value}</h5>
        </div>
    )
}

export default Square;
