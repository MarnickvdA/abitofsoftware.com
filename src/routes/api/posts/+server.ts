import {fetchPostItems} from '$lib/utils'
import {json} from '@sveltejs/kit'

export const GET = async () => {
    const allPosts = await fetchPostItems()

    return json(allPosts)
}