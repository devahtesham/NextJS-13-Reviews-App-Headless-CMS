import React from 'react'
import SubHeading from '@/components/SubHeading';
import { getReview, getSlugs } from '@/lib/reviews';
import AllButtons from '@/components/AllButtons';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// export const dynamicParams = false       // this ius by default true, used if any change occur at CMS, so NextJS display that segment on demand using this dynamicParams, but not automatically because that segment is not static page at the build time but can display on demand (manually write that segment on address bar)

export const generateStaticParams = async () => {
  // return [
  //   {slug:'audi'},
  //   {slug:'supra'},
  //   {slug:'lamborgini'}
  // ]

  const allSlugs = await getSlugs()
  let slugsArrayOfObj = allSlugs.map((slug) => ({ slug: slug }));
  return slugsArrayOfObj

}

// for meta data
export const generateMetadata = async ({ params: { slug } }) => {
  let reviewDetails = await getReview(slug);
  if (!reviewDetails) {
    notFound()
  }
  return {
    title: reviewDetails.title
  }
}

const ReviewDetailPage = async ({ params: { slug } }) => {
  // console.log("I am slug component !!")

  let reviewDetails = await getReview(slug);

  if (!reviewDetails) {
    notFound()
  }


  return (
    <>
      <section className='w-5/6 m-auto flex flex-col items-start min-h-screen gap-4 '>
        <div className="image w-[40%] self-center my-5">
          <Image src={reviewDetails.image} alt="" width={600} height={900} className='w-full rounded-3xl' priority />
        </div>
        <div className='content basis-[500px]'>
          <div className='flex items-center justify-between'>
            <SubHeading>{reviewDetails.title}</SubHeading>
            <AllButtons />
          </div>
          <article dangerouslySetInnerHTML={{ __html: reviewDetails.body }} className='py-3' />
          <span className='font-extrabold block text-end'>{reviewDetails.date}</span>

        </div>
      </section>
    </>
  )
}

export default ReviewDetailPage