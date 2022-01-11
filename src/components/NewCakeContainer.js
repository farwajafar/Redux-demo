import React, {useState} from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'


function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h1>Number of cakes - {props.numOfCakes}</h1>
            <input type = 'text' value={number} 
            onChange={e =>setnumber(e.target.value)}
            ></input>
            <button onClick={() => props.buyCake(number)}>Buy Cake {number}</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : number => dispatch (buyCake(number))
    }
}

export default connect
( mapStateToProps,
 mapDispatchToProps) 
(NewCakeContainer)
