'use client';

import Header from "@/app/components/layout/header";
import Form from "@/app/components/layout/form";
import CardResult from "@/app/components/layout/card-result";

function SearchComponent() {

    return (
        <div className="w-full p-2">
            <Header />
            <div className="w-full flex flex-col md:flex-row justify-center p-4 space-x-4">
                <div className="w-full md:w-1/3 flex flex-col p-4 space-y-6">
                    <Form />
                </div>
                <div className="w-full md:w-2/3 flex flex-col p-4 space-y-6">
                    <CardResult />
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;
