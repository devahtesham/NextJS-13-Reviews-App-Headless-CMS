import { CACHE_TAG_REVIEWS } from "@/lib/constants"
import { revalidateTag } from "next/cache"

export async function POST(request){
    const payload = await request.json()
    // console.log('[payload]',payload)
    if (payload.model === 'review'){
        revalidateTag(CACHE_TAG_REVIEWS)
    }

    return new Response(null,{status: 204})
}