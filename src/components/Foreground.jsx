import React, { useState } from 'react'
import { useRef } from 'react';
import Card from "./Card"

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "This is a Mini Note taking Website!",
            fileSize: ".1mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Get Vegetables from Market While Returning from Office!",
            fileSize: ".2mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "Read more about Javascript Libraries and Frameworks!",
            fileSize: ".2mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Office Timings will be from 9:00 AM to 4:00 PM Except Weekends!",
            fileSize: ".3mb",
            close: true,    
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "Post Social Media Posts Every Saturday Night!",
            fileSize: ".3mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Spend Your Time to Learn Some New Skills Every Day for Atleast 2-3 Hours!",
            fileSize: ".4mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        }
    ]
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full gap-5 flex flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} referance={ref} />
            ))}
        </div>
    )
}

export default Foreground