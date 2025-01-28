'use client';
import { Button, DatePicker, Input, Select } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";

function Hotel() {
    const router = useRouter();

    const [city, setCity] = useState('');
    const [date, setDate] = useState<Dayjs | null>(null);
    const [nights, setNights] = useState('Nights');
    const [star, setStar] = useState('Star');
    const [participants, setParticipants] = useState('Participants');

    const handleSearch = () => {
        const query = {
            city: city || '',
            date: date ? dayjs(date).format('YYYY-MM-DD') : '',
            nights: nights || '',
            star: star || '',
            participants: participants || ''
        };

        const queryString = new URLSearchParams(query).toString();

        router.push(`/Search?${queryString}`);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 rounded md:w-[930px] md:h-[92px] w-full h-auto p-3" style={{
            backgroundColor: 'transparent',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 0px 32px 0px #00000029'
        }}>
            <div className="flex flex-col md:flex-row items-center w-full md:w-[750px] bg-white h-auto md:h-[60px] rounded-lg space-y-3 md:space-y-0 p-3 md:p-0">
                <Input
                    placeholder="City"
                    className="h-full md:mr-3 w-full md:w-auto"
                    style={{ border: 'none' }}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <div className="md:h-[60%] h-[40%] border-l border-gray-300 md:mr-3 hidden md:block"></div>

                <DatePicker
                    className="h-full md:mr-3 w-full md:w-80"
                    style={{ border: 'none' }}
                    value={date ? dayjs(date) : null}
                    onChange={(dateMoment) => setDate(dateMoment)}
                />

                <div className="md:h-[60%] h-[40%] border-l border-gray-300 md:mr-3 hidden md:block"></div>

                <Select
                    defaultValue="Nights"
                    className="h-full md:mr-3 w-full md:w-auto border-0"
                    value={nights}
                    onChange={(value) => setNights(value)}
                >
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                </Select>

                <div className="md:h-[60%] h-[40%] border-l border-gray-300 md:mr-3 hidden md:block"></div>

                <Select
                    defaultValue="Star"
                    className="h-full md:mr-3 w-full md:w-auto border-0"
                    value={star}
                    onChange={(value) => setStar(value)}
                >
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                </Select>

                <div className="md:h-[60%] h-[40%] border-l border-gray-300 md:mr-3 hidden md:block"></div>

                <Select
                    defaultValue="Participants"
                    className="h-full w-full md:w-auto border-0"
                    value={participants}
                    onChange={(value) => setParticipants(value)}
                >
                    <Select.Option value="1">1 adult</Select.Option>
                    <Select.Option value="2">2 adults</Select.Option>
                    <Select.Option value="1+1">1 adult 1 child</Select.Option>
                    <Select.Option value="2+1">2 adults 1 child</Select.Option>
                    <Select.Option value="2+2">2 adults 2 children</Select.Option>
                </Select>
            </div>

            <Button
                type="primary"
                className="bg-orange-400 font-semibold text-white w-full md:w-[142px] h-[40px] md:h-[60px] mt-3 md:mt-0"
                onClick={handleSearch}
            >
                SEARCH
            </Button>
        </div>
    );
}

export default Hotel;
