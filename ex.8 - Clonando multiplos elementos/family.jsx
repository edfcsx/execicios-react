import React from 'react'

export default props => (
    <div>
        <h1>Familia</h1>
        {React.Children
            .map(props.children, child => React.cloneElement(child, {...props})) }

            {/*Foi criado um map para percorrer todos os elementos e utilizar o clone element com cada interação do map*/}
    </div>
)