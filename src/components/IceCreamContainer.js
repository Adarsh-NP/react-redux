import React from 'react'
import {connect} from 'react-redux'
import { buyIceCreams } from '../Redux'


function IceCreamContainer(props) {
    return (
        <div>
            <h2>No of cakes: {props.numOfIceCreams} </h2>
            <button onClick={props.buyIceCreams}>Buy IceCream</button>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCreams: () => dispatch(buyIceCreams())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
