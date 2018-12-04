import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' //responsavel por ligar as funções criadas com o dispatch
import { changeValue } from './fieldActions'

class Field extends Component{

    render(){
        return (
            <div>
                <label>{ this.props.value }</label><br/>
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeValue}, dispatch)
}

//isso e um decorator , você importa seu objeto com um decorator para que ele volte com novas funcionalidades , bibiliotecas
export default connect(mapStateToProps, mapDispatchToProps)(Field)