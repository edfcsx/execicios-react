import React from 'react'
import ReactDOM from 'react-dom'
import { First, Second } from './componente'

ReactDOM.render(
    <div>
        <First value='Primeiro componente!'/>
        <Second value='Segundo componente!'/>
    </div>
, document.getElementById('app'))