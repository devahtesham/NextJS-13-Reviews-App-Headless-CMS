import Heading from "@/components/Heading"
import SubHeading from "@/components/SubHeading"
import { getAllReviews } from "@/lib/reviews"
import Link from "next/link"
import Image from "next/image"
import PaginationBar from "@/components/PaginationBar"


export const metadata = {
  title: "Reviews"
}
const PAGE_SIZE = 6

const AllReviewsPage = async ({searchParams}) => {
  let page = parsePageParam(searchParams.page)
  let {allReviews,pageCount} = await getAllReviews(PAGE_SIZE,page);

  return (
    <>
      <section className="flex flex-wrap justify-center ">
        {
          allReviews.map((review, index) => (
            <div className="border basis-[28%] shadow-md rounded-3xl m-5 p-5" key={review.slug}>
              <Link href={`/reviews/${review.slug}`}>
                <Image src={review.image} alt="" width={200} height={800} className="w-full rounded-md mb-3" priority={index === 0} />
                <span>Date: {review.date}</span>
                <SubHeading>{review.title}</SubHeading>
              </Link>
            </div>
          ))
        }
      </section>
      <PaginationBar page={page} pageCount={pageCount} segment={"/reviews"} />
    </>
  )
}

export default AllReviewsPage


// separate function for page number parsing due to string in nature because of url
function parsePageParam(pageParam){
  if(pageParam){
    let page = parseInt(pageParam)       // if it is in numeric so it will be convert in number otherwise NaN bcz string cant be converted in number 
    if (isFinite(page) && page > 0){
      return page
    }
  }
  return 1
}
