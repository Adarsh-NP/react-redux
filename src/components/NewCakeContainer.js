import React, { useState } from 'react'
import {connect} from 'react-redux'
import { buyCakes } from '../Redux'


function NewCakeContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>No of cakes: {props.numOfCakes} </h2>
            <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)}></input>
            <button onClick={()=>props.buyCakes(number)}>Buy {number} Cake</button>
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
        buyCakes: (number) => dispatch(buyCakes(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
