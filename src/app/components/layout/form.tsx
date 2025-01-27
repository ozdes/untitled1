import { useEffect, useState } from "react";
import { DatePicker, Input, Select } from "antd";
import HotelConcept from "@/app/components/layout/hotel-concept";
import RadioButton from "@/app/components/layout/radio-button";
import { useRouter, useSearchParams } from 'next/navigation';
import dayjs from "dayjs";

function Form() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [from, setFrom] = useState(searchParams.get("from") || "0");
    const [destination, setDestination] = useState(searchParams.get("destination") || "0");
    const [participants, setParticipants] = useState(searchParams.get("participants") || "0");
    const [date, setDate] = useState(searchParams.get("date") || null);
    const [nights, setNights] = useState(searchParams.get("nights") || "0");

    const updateURL = (key, value) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(key, value);
        } else {
            params.set(key, "0");
        }
        router.replace(`?${params.toString()}`);
    };

    useEffect(() => {
        updateURL("from", from);
    }, [from]);

    useEffect(() => {
        updateURL("destination", destination);
    }, [destination]);

    useEffect(() => {
        updateURL("participants", participants);
    }, [participants]);

    useEffect(() => {
        updateURL("date", date ? dayjs(date).format("YYYY-MM-DD") : "0");
    }, [date]);

    useEffect(() => {
        updateURL("nights", nights);
    }, [nights]);

    return (
        <div className="flex flex-col bg-white shadow-sm border border-slate-200 w-full rounded-lg p-4">
            <div className="flex flex-col gap-4">
                <div className="font-bold text-lg">Filter</div>

                <Input
                    placeholder="From"
                    value={from !== "0" ? from : ""}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full border-gray-300 rounded-md"
                />

                <Input
                    placeholder="Destination"
                    value={destination !== "0" ? destination : ""}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full border-gray-300 rounded-md"
                />

                <label className="text-sm text-slate-600">Participants</label>
                <Select
                    defaultValue={participants}
                    onChange={(value) => setParticipants(value)}
                    className="w-full"
                >
                    <Select.Option value="1">1 adult</Select.Option>
                    <Select.Option value="2">2 adults</Select.Option>
                    <Select.Option value="1+1">1 adult 1 child</Select.Option>
                    <Select.Option value="2+1">2 adults 1 child</Select.Option>
                    <Select.Option value="2+2">2 adults 2 children</Select.Option>
                </Select>

                <label className="text-sm text-slate-600">Date</label>
                <DatePicker
                    value={date ? dayjs(date) : null}
                    onChange={(dateMoment, dateString) => {
                        setDate(dateString);
                    }}
                    className="w-full border-gray-300 rounded-md"
                />

                <label className="text-sm text-slate-600">Nights</label>
                <Select
                    defaultValue={nights}
                    onChange={(value) => setNights(value)}
                    className="w-full"
                >
                    <Select.Option value="1">1 Night</Select.Option>
                    <Select.Option value="2">2 Nights</Select.Option>
                    <Select.Option value="3">3 Nights</Select.Option>
                </Select>

                <HotelConcept />
                <RadioButton />
            </div>
        </div>
    );
}

export default Form;
