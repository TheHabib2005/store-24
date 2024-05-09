
import { ProductsApi } from "@/ProductApi";
import BreadGrum from "@/components/BreadGrum";
import AddToCartButton from "@/components/productDetails-componenets/AddToCartButton";
import AddToWishList from "@/components/productDetails-componenets/AddToWishList";
import ComponentsWrapper from "@/components/productDetails-componenets/MiniWrapper";
import ProductImageGallery from "@/components/productDetails-componenets/ProductImageGallery";

import { fetchProductById } from "@/utils";

const ProductDetails = async ({ params }: { params: any }) => {

    let { data } = await fetchProductById(params.id);

    return (
        <div>
            <div className="lg:flex block gap-x-4">

                <ProductImageGallery product={data} />
                <div className="lg:w-[60%] ">
                    <div className="p-3 md:block hidden">
                        <BreadGrum category={data.category} />
                    </div>
                    <div className="p-3 flex flex-col gap-y-3">
                        <h1 className="text-xl capitalize font-semibold leading-[30px]">
                            {data.title}
                        </h1>
                        <span className=" flex items-center gap-x-2">
                            {" "}
                            {Array(4)
                                .fill("4")
                                .map((rating) => {
                                    return (
                                        <svg
                                            key={rating}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 text-yellow-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    );
                                })}
                        </span>

                        <p className="capitalize">Brand : {data.brand}</p>

                        <p className="text-2xl text-[#2562E7] font-semibold">
                            ৳ {data.stringPrice}
                        </p>
                        {/* <Quantity /> */}

                        <div className="flex items-center gap-x-5 mt-5">
                            <AddToCartButton product={data} />
                            <AddToWishList />
                        </div>

                    </div>
                </div>

            </div>
            <ComponentsWrapper />
        </div>
    );
};

export default ProductDetails;
