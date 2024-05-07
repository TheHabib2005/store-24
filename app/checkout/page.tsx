import Link from 'next/link'
import React from 'react'

const CheckOut = () => {
    return (
        <div>

            <div>
                CheckOut</div>

            <div>
                <Link href={'/success-orders'}>Place Order</Link>
            </div>



        </div>
    )
}

export default CheckOut