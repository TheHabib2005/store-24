import React from 'react'

const OrderSuccess = async () => {
    let product = await fetch("http://localhost:30400/api/test");
    let response = await product.json();
    console.log(response);
    return (
        <div>Order success </div>
    )
}

export default OrderSuccess