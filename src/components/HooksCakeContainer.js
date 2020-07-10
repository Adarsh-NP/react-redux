import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCakes } from '../Redux'

function HooksCakeContainer() {
    //useSelector hook accepts a function as a parameter called selector function which receives redux state as its argument
    //very similar to function mapStateToProps 
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    

    //useDispatch hook returns a reference to the dispatch function from the redux store

    const dispatch = useDispatch()

    return (
        <div>
            <h1>number of cakes: {numOfCakes}</h1>
            <button onClick={()=> dispatch(buyCakes())}>Buy cake </button>
        </div>
    )
}

export default HooksCakeContainer
