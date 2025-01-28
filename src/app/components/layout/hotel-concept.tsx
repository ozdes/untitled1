'use client';

import { useState, useEffect } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function HotelConcept() {
    const initialItems = [
        { id: 1, name: 'Beach Hotel', value: 'beach' },
        { id: 2, name: 'Adult Hotel', value: 'adult' },
        { id: 3, name: 'Boutique Hotel', value: 'boutique' },
        { id: 4, name: 'Family Hotel', value: 'family' },
        { id: 5, name: 'Pet Friendly Hotel', value: 'petFriendly' },
    ];

    const additionalItems = [
        { id: 6, name: 'Resort Hotel', value: 'resort' },
        { id: 7, name: 'A Hotel', value: 'A' },
    ];

    const [items, setItems] = useState(initialItems);
    const [showMore, setShowMore] = useState(false);
    const [selectedItems, setSelectedItems] = useState({});
    const [queryString, setQueryString] = useState('');
    const router = useRouter();

    const handleShowMore = () => {
        if (showMore) {
            setItems(initialItems);
        } else {
            setItems([...initialItems, ...additionalItems]);
        }
        setShowMore(!showMore);
    };

    const handleCheckboxChange = (id) => {
        setSelectedItems((prevState) => {
            const updatedItems = {
                ...prevState,
                [id]: !prevState[id],
            };

            const selectedValues = Object.keys(updatedItems)
                .filter((key) => updatedItems[key])
                .map((key) => {
                    const item = items.find(item => item.id === parseInt(key));
                    return item ? item.value : null;
                })
                .filter(value => value !== null);

            setQueryString(new URLSearchParams({ hotelConcept: selectedValues.join(',') }).toString());

            return updatedItems;
        });
    };

    const handleReset = () => {
        setSelectedItems({});
        setQueryString('');
    };

    // Use useEffect to push the router after the state update
    useEffect(() => {
        if (queryString) {
            router.push(`/Search?${queryString}`);
        }
    }, [queryString, router]);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-slate-600">Hotel Concept</label>
                <button onClick={handleReset} className="text-orange-400">Reset</button>
            </div>

            {items.map((hotel) => (
                <div key={hotel.id} className="flex">
                    <input
                        type="checkbox"
                        className="mx-1 my-1 border-orange-400 text-orange-600 focus:ring-orange-500"
                        id={`hotel-${hotel.id}`}
                        checked={selectedItems[hotel.id] || false}
                        onChange={() => handleCheckboxChange(hotel.id)}
                    />
                    <label htmlFor={`hotel-${hotel.id}`} className="text-sm">
                        {hotel.name}
                    </label>
                </div>
            ))}

            <button onClick={handleShowMore} className="text-gray-400">
                {showMore ? (
                    <UpOutlined className="h-5 w-5" />
                ) : (
                    <DownOutlined className="h-5 w-5" />
                )}
                <span className="ml-2">
                    {showMore ? 'Less' : 'More'}
                </span>
            </button>
        </div>
    );
}
