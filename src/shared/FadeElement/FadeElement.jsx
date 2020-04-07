import React from 'react'
import './FadeElement.css'
import { CSSTransition } from 'react-transition-group'
const FadeElement = ({ children, enter }) => {
    return (
        <CSSTransition
            in={enter}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames='fade'
        >
            {children}
        </CSSTransition>
    )
}

export default FadeElement
