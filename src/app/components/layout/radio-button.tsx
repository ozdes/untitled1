'use client';
import { useRouter } from "next/navigation";
import React from "react";

function RadioButton() {
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        const queryString = new URLSearchParams({ star: value }).toString();
        router.push(`/Search?${queryString}`);
    };

    return (
        <div>
            <label className="text-sm text-slate-600">Star</label>
            <div className="flex">
                <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="border-orange-200 text-orange-600 focus:ring-orange-500"
                    id="hs-radio-vertical-group-1"
                    value="1"
                    onChange={handleChange}
                />
                <label htmlFor="hs-radio-vertical-group-1" className="text-sm ms-2">
                    <svg className="w-4 h-4 text-orange-400 ms-1 inline mr-0.5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>1+
                </label>
            </div>
            <div className="flex">
                <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="border-orange-200 text-orange-600 focus:ring-orange-500"
                    id="hs-radio-vertical-group-2"
                    value="2"
                    onChange={handleChange}
                />
                <label htmlFor="hs-radio-vertical-group-2" className="text-sm ms-2">
                    <svg className="w-4 h-4 text-orange-400 ms-1 inline mr-0.5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>2+
                </label>
            </div>
            <div className="flex">
                <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="border-orange-200 text-orange-600 focus:ring-orange-500"
                    id="hs-radio-vertical-group-3"
                    value="3"
                    onChange={handleChange}
                />
                <label htmlFor="hs-radio-vertical-group-3" className="text-sm ms-2">
                    <svg className="w-4 h-4 text-orange-400 ms-1 inline mr-0.5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>3+
                </label>
            </div>
            <div className="flex">
                <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="border-orange-200 text-orange-600 focus:ring-orange-500"
                    id="hs-radio-vertical-group-4"
                    value="4"
                    onChange={handleChange}
                />
                <label htmlFor="hs-radio-vertical-group-4" className="text-sm ms-2">
                    <svg className="w-4 h-4 text-orange-400 ms-1 inline mr-0.5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>4+
                </label>
            </div>
            <div className="flex">
                <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="border-orange-200 text-orange-600 focus:ring-orange-500"
                    id="hs-radio-vertical-group-5"
                    value="5"
                    onChange={handleChange}
                />
                <label htmlFor="hs-radio-vertical-group-5" className="text-sm ms-2">
                    <svg className="w-4 h-4 text-orange-400 ms-1 inline mr-0.5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>5+
                </label>
            </div>
        </div>
    );
}

export default RadioButton;
