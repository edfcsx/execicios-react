import React, { Component } from 'react'

export default class ClassComponent extends Component{

    /*
        Props é uma variavel recebida como herança atraves de Component
    */
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
    }

    sum(delta){
        this.setState({value: this.state.value + delta})
    }

    render(){
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Dec</button>

                {/*no evento onclick tem de se passar uma função e não a chamada de uma função
                    pois caso fosse passada uma função retornaria undefined*/}
            </div>
        )
 }   
}