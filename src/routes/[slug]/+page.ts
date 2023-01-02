import type {Post} from "$lib/models/post";
import { redirect } from '@sveltejs/kit';

export async function load({params}: { params: { slug: string } }): Promise<Post> {
    try {
        const data = await import(`../../posts/${params.slug}.md`)
        return {
            metadata: {
                ...data.metadata,
                path: params.slug
            },
            content: data.default
        }
    } catch (e) {
        throw redirect(302, '/')
    }
}