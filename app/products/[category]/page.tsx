import BrandLists from '@/components/BrandLists'
import CategoriesList from '@/components/CategoriesList'
import PriceRange from '@/components/PriceRange'
import PriceSlider from '@/components/PriceSlider'
import RatingStar from '@/components/RatingStar'
import LayoutShiftIcon from '@/components/LayoutShiftIcon'
import SortDropDownBox from '@/components/SortDropDownBox'
import BreadGrum from '@/components/BreadGrum'


import React from 'react'
import { array } from 'prop-types'
import Skelection from '@/components/Skelection'
import ProductCard from '@/components/ProductCard'
import CardWrapper from '@/components/CardWrapper'
import ResetFilter from '@/components/ResetFilter'
import Pagination from '@/components/Pagination'

const Products = ({ params }: { params: { category: string } }) => {
    return (
        <main className='w-full flex gap-x-5'>

            <div className='xl:w-1/5 md:1/4  bg-[#1f1f1f] px-5 py-3 lg:block hidden'>
                <header className='flex items-center justify-between'>
                    <h1 className='text-xl'>Filters</h1>
                    <ResetFilter />
                </header>
                {/* <SelectedFilters /> */}
                <div>
                    {/* <CategoriesList /> */}
                    <BrandLists />
                    <RatingStar />
                    <PriceRange />
                </div>
            </div>
            <div className='xl:w-4/5 md:3/4 w-full bg-[#1f1f1f]  py-4'>

                <header className='flex items-center justify-between  px-5'>
                    <BreadGrum />
                    <div className='flex gap-x-3'>
                        <LayoutShiftIcon />
                        <SortDropDownBox />
                    </div>
                </header>

                <CardWrapper category={params.category} />


            </div>


        </main>
    )
}

export default Products