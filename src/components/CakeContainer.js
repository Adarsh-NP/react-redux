import React from 'react'
import {connect} from 'react-redux'
import { buyCakes } from '../Redux'


function CakeContainer(props) {
    return (
        <div>
            <h2>No of cakes: {props.numOfCakes} </h2>
            <button onClick={props.buyCakes}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCakes: () => dispatch(buyCakes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
