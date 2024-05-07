"use client";
import { ProductsTYPE } from "@/constant-type";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useFetchProduct = (category?: any) => {
    const [isFetchingProduct, setIsFetchingProduct] = useState<boolean>(false);
    const [products, setPorducts] = useState<ProductsTYPE[]>([]);
    const [isFetchingError, setIsFetchingError] = useState({
        error: false,
        message: "",
    });
    const ssearchParams = useSearchParams();
    const params = new URLSearchParams(ssearchParams);
    const brand = params.get("brands")?.split(" ");
    const cate = params.get("category")?.split(" ");
    const searchQuery = params.get("q");

    let filterQuery: any = {};

    if (brand) {
        filterQuery.brand = brand
    }
    if (category) {
        filterQuery.categorys = category
    }
    if (searchQuery) {
        filterQuery.searchQuery = searchQuery || ""
    }

    const fetchProduct = async () => {
        try {
            setIsFetchingProduct(true);
            let response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    authorization: "Breear 3127wf6fwsea4r4285492847w4fww3r324@#$@#$@#",
                },
                body: JSON.stringify(filterQuery),

                cache: "no-cache",
            });
            let res_result = await response.json();
            console.log(category);

            setPorducts(res_result.data);
            setIsFetchingProduct(false);
        } catch (error) {
            console.log(error);
            setIsFetchingProduct(false);

            throw new Error("retgregfgfdg")
        }
    };

    useEffect(() => { fetchProduct() }, [params.toString()]);

    return { isFetchingError, isFetchingProduct, fetchProduct, products }
};

export default useFetchProduct;
