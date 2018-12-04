import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} value={props.counter.step} type='number'/>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

//Mapeando o state para o props
const mapStateToProps = state => ({ counter: state.counter })
//ligando as ações com o dispatch do reduce
const mapDispatchToProps = dispatch => bindActionCreators({inc, dec, stepChanged}, dispatch)

//Implementando o padrão decorator
export default connect(mapStateToProps, mapDispatchToProps)(Counter)