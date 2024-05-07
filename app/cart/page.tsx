"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const CartPage = () => {
    const router = useRouter()
    return (
        <div className="font-[sans-serif] bg-[#181818] py-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-white">Shopping Cart</h2>
                <div className="overflow-x-auto">
                    <table className="mt-12 w-full border-collapse divide-y">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="text-base text-white p-4">Description</th>

                                <th className="text-base text-white p-4">Quantity</th>
                                <th className="text-base text-white p-4">Remove</th>
                                <th className="text-base text-white p-4">Price</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y">
                            <tr>
                                <td className="py-6 px-4">
                                    <div className="flex items-center gap-6 w-max">
                                        <div className="h-36 shrink-0">
                                            <Image
                                                src="https://readymadeui.com/images/product6.webp"
                                                className="w-full h-full object-contain"
                                                width={8000}
                                                height={8000}
                                                alt='dsfg'
                                            />
                                        </div>
                                        <div className='flex items-start gap-3 flex-col'>
                                            <p className="text-lg font-bold text-white">Black T-Shirt</p>
                                            <p>Brand: Apple</p>
                                            <p>Category: T-shirt</p>
                                            <div className="flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black">
                                                    5.0
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </td>

                                <td className="py-6 px-4">
                                    <div className="flex divide-x border w-max">
                                        <button
                                            type="button"
                                            className=" px-4 py-2 font-semibold"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 fill-current"
                                                viewBox="0 0 124 124"
                                            >
                                                <path
                                                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-transparent px-4 py-2 font-semibold text-white text-md"
                                        >
                                            56
                                        </button>
                                        <button
                                            type="button"
                                            className="text-white px-4 py-2 font-semibold"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 fill-current"
                                                viewBox="0 0 42 42"
                                            >
                                                <path
                                                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="py-6 px-4">
                                    <button
                                        type="button"
                                        className="bg-transparent border px-4 py-2 font-semibold"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 fill-red-500 inline cursor-pointer"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                data-original="#000000"
                                            />
                                            <path
                                                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </button>
                                </td>
                                <td className="py-6 px-4">
                                    <h4 className="text-lg font-bold text-white">$18.5</h4>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                    <Link href={""} onClick={() => router.back()} className='flex  p-4 items-center gap-3 decoration-transparent border-0 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>

                        Continue Shopping
                    </Link>
                </div>
                <div className=" max-w-xl ml-auto mt-6">
                    <ul className="text-white divide-y">
                        <li className="flex flex-wrap gap-4 text-md py-3">
                            Subtotal <span className="ml-auto font-bold">$37.00</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-md py-3">
                            Shipping <span className="ml-auto font-bold">$4.00</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-md py-3">
                            Tax <span className="ml-auto font-bold">$4.00</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-md py-3 font-bold">
                            Total <span className="ml-auto">$45.00</span>
                        </li>
                    </ul>
                    <Link
                        type="button"
                        className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
                        href={"/checkout"}
                    >
                        Check out
                    </Link>
                    <button
                        type="button"
                        className="mt-6 text-md px-6 py-2.5 w-full bg-rose-600 hover:bg-rose-700 text-white rounded"
                    >
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CartPage