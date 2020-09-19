import React from 'react';

function Title(props) {
    const {text} = props;
    return (
        <h3 className="title">{text}</h3>
    )
}

export default Title;