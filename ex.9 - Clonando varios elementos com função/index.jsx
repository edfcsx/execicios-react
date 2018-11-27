import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastname='Silva'>
        <Member name='guilherme'></Member>
        <Member name='rafael'></Member>
        <Member name='juliana'></Member>
    </Family>
, document.getElementById('app'))