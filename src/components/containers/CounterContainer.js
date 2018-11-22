import React, { Component } from 'react'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'
import {addOne,addTen,removeOne,removeTen,reset} from '../../actions/counterActions'


class Counter extends Component {

    render() {
        const {
            addOne,
            addTen,
            removeOne,
            removeTen,
            reset} = this.props

        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick ={() => addOne()}>   ADD one   </button><br/><br/>
                <button onClick={() => addTen()}>  ADD 10  </button><br/><br/>
                <button onClick ={() => removeOne()}>   REMOVE ONE   </button><br/><br/>
                <button onClick ={() => removeTen()}>  REMOVE 10  </button><br/><br/>
                <button onClick ={() => reset()}>RESET</button>

            </div>
         );
    }
}


const mapStateToprops = state =>({
    count :state.count
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addOne,
    addTen,
    removeOne,
    removeTen,
    reset
},dispatch);

export default connect(mapStateToprops,mapDispatchToProps)(Counter);