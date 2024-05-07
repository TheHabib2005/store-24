"use client";
import { smartPhoneBrandList } from "@/utils/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BrandLists = () => {


    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();
    const router = useRouter();
    const [brandLists, setBrandLists] = useState(smartPhoneBrandList);
    const [isListOpen, setIsListOpen] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState(
        params.get("brands")?.split(" ") || []
    );
    const handleChange = (
        e: any,
        brand: any,
        index: number
    ) => {
        console.log("hello");
        let updateBrandList = [...brandLists];
        if (e.target.checked === true) {
            updateBrandList[index].isChecked = true;
        } else {
            updateBrandList[index].isChecked = false;
        }

        setBrandLists(updateBrandList);
        let me = updateBrandList.filter((b) => {
            if (b.isChecked === true) {
                return b.name;
            }
        });
        let selectBrand = me.map((b) => b.name);
        setSelectedBrand(selectBrand);
        if (selectBrand.length > 0) {
            params.set("brands", selectBrand.join(" "));
            router.replace(`${path}?${params}`);
        } else {
            params.delete("brands");
            router.replace(`${path}?${params}`);
        }
    };
    const updateState = () => {
        let updateBrandList = [...brandLists];

        updateBrandList.map((brand, index) => {
            if (selectedBrand.includes(brand.name.toLowerCase())) {
                updateBrandList[index].isChecked = true;
            } else {
                updateBrandList[index].isChecked = false;
            }
        });
        setBrandLists(updateBrandList);
    };
    useEffect(() => {
        updateState();
    }, []);

    return (
        <>
            <div className="pt-5">
                <div className=" border-t  border-neutral-700 px-4 py-3 select-none">
                    <div className="flex items-center justify-between cursor-pointer">
                        <h1>Choose Brand</h1>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    {isListOpen && (
                        <ul className="flex flex-col gap-y-3 my-3 px-2">
                            {/* rendering a brands list */}
                            {brandLists.map((brand, index) => {
                                return (
                                    <label
                                        htmlFor={brand.name}
                                        key={brand.id}
                                        className="flex items-center gap-x-4 cursor-pointer"
                                    >
                                        <input
                                            className="cursor-pointer"
                                            type="checkbox"
                                            checked={brand.isChecked}
                                            name={brand.name}
                                            id={brand.name}
                                            onChange={(e) => handleChange(e, brand, index)}
                                        />
                                        <span className="capitalize">{brand.name}</span>
                                    </label>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default BrandLists;
