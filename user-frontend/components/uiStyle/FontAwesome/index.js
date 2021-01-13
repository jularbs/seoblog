import React from 'react';

const FontAwesome = ({name = '', ...rest}) => {
    return (
        <i {...rest} className={`fab fa-${name}`}/>
    );
};

export default FontAwesome;