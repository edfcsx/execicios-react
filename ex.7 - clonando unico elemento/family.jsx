import React from 'react'

export default props => (
    <div>
        {props.children}
        { React.cloneElement(props.children, {...props}) }
        {/* Passando prioridades para o elemento filho com o operador spread iremos passar um clone das propriedades*/}
    </div>
)