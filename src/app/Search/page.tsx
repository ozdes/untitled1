'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "@/app/components/layout/header";
import Form from "@/app/components/layout/form";
import CardResult from "@/app/components/layout/card-result";

function SearchComponent() {
    const searchParams = useSearchParams();

    const from = searchParams.get('from') || '';
    const destination = searchParams.get('destination') || '';
    const date = searchParams.get('date') || '';
    const nights = searchParams.get('nights') || '';
    const participants = searchParams.get('participants') || '';

    const [searchData, setSearchData] = useState({
        from: ' ',
        destination: '',
        date: '',
        nights: '',
        participants: ''
    });

    useEffect(() => {
        setSearchData({
            from,
            destination,
            date,
            nights,
            participants
        });
    }, [from, destination, date, nights, participants]);

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
