import React from 'react'

import {connect} from 'react-redux'
import { buyCakes, buyIceCreams } from '../Redux'

function ItemContainer(props) {
    return (
        <div>
            <h3>Item - {props.item}</h3>
    <button onClick={props.buyItem}>Buy item</button>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return{
        item: itemState
    }

}


const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? ()=> dispatch(buyCakes()) : ()=>dispatch(buyIceCreams())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)

//passing null in place of mapStateToProps whenever you don't want to pass it
