// "use client"
// import { useEffect } from "react"

import Heading from "@/components/Heading"
import SubHeading from "@/components/SubHeading"
import { getAllReviews } from "@/lib/reviews"
import Image from "next/image"
import Link from "next/link"

// export const revalidate = 60            // means 60 sec men ye page regenerate kregaa w.r.t previous requests

export const metadata = {
    description: "This is my first page (Home Page) renders",
}

async function HomePage() {
    const {allReviews} = await getAllReviews(3);

    // console.log('[Home Page: ]',allReviews.map(review => review.slug).join(","))

    return (
        <>
            <Heading>This is my First Page (Home Page) renders</Heading>
            <p className="font-devonshire text-2xl my-3">i am learning Next js by udemy course.</p>
            <section>
                <Heading>Latest Reviews</Heading>
                <ul className="flex flex-wrap">
                    {
                        allReviews.map((review,index) =>(
                            <li className="border w-[28rem] shadow-md rounded-3xl m-5 p-5" key={review.slug}>
                                <Link href={`/reviews/${review.slug}`}>
                                    <Image src={review.image} alt="" width={200} height={800} className="w-full rounded-md mb-3" priority={index === 0} />
                                    <span>Date: {review.date}</span>
                                    <SubHeading>{review.title}</SubHeading>
                                </Link>
                            </li>

                        ))
                    }
                </ul>
            </section>

        </>
    )
}

export default HomePage