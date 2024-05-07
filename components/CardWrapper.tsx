"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductsApi } from '@/ProductApi'
import SkelectionsLoader from './SkelectionsLoader'
import { useLayoutSwitcherState } from '@/zustant-store/globalTempStore'
import useFetchProduct from '@/hooks/useFetchProduct'
import { useSearchParams } from 'next/navigation'

const CardWrapper = ({ category }: { category?: string }) => {
    let searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    let categoryQuery = category ? [category] : params.get("category")?.split(" ")
    const { isFetchingProduct, products } = useFetchProduct(categoryQuery)
    const { isGrid, flexClass, girdClass } = useLayoutSwitcherState()

    // const [products, setProducts] = useState(ProductsApi)
    if (isFetchingProduct) {
        return <SkelectionsLoader />
    }
    return (
        <>
            {
                products && products.length > 0 ? <div className={`${isGrid ? girdClass : flexClass}`}>
                    {
                        products.map((product) => {
                            return <ProductCard product={product} key={product.id} />
                        })
                    }
                </div> : <div className=' py-6  text-white text-3xl'>
                    <h1 className='text-center'>No Product Found 😒</h1>
                </div>
            }
        </>
    )
}

export default CardWrapper