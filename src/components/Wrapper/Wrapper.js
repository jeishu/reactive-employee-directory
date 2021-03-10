import React from 'react'
import "../Wrapper/Wrapper.scss";

// Putting {children} will render anything thats within the Wrapper JSX from the APP.js
const Wrapper = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper;