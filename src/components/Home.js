import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
        alert("Added to Cart")
    }

    render() {

        var itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id} >
                    <div className="card-image" >
                        <img src={item.img} alt="" /><br></br>
                        {/* <p className="p-2">{item.title}</p> */}
                        <p className="card-title mb-n5">{item.title}</p>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: Rs.{item.price}</b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <h3 className="center"></h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)