import React, { Component } from 'react';
import { increament, decreament } from './action/IncDec.js';
import './counter.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        changeNumber: state.changeNumber
    }
}

//Dispatcher 
const mapDispatchProps = () => {
    return {
        increament,
        decreament
    }
}

class Counter extends Component {


    render() {

        console.log('props', this.props)

        const { increament, decreament } = this.props;
        // console.log('increament', increament)


        return (
            <div>
                <div className="main-div">


                    <div class="container">

                        <h1>Increment/Decrement counter</h1>
                        <div class="quantity">
                            <a class="quantity__minus" title="Decrement" onClick={decreament}><span>-</span></a>
                            <input name="quantity" type="text" class="quantity__input" value={this.props.changeNumber} />
                            <a class="quantity__plus" title="Increment" onClick={increament}><span>+</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchProps())(Counter);

