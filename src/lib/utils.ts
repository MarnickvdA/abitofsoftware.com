import type {Metadata} from "../models/metadata";
import type {BlogPost} from "../models/blog-post";

export async function fetchMarkdownPosts(): Promise<BlogPost[]> {
    const allPostFiles = import.meta.glob('/src/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    return await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const {metadata} = await resolver() as { metadata: Metadata }
            const postPath = path.slice(11, -3)

            return {
                metadata,
                path: postPath
            }
        })
    )
}