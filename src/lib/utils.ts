import type {Metadata} from "./models/metadata";
import type {Post} from "./models/post";

export async function fetchPostItems(): Promise<Post[]> {
    const allPostFiles = import.meta.glob('/src/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    return await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const {metadata} = await resolver() as { metadata: Metadata }
            const postPath = path.slice(11, -3)

            return {
                metadata: {
                    ...metadata,
                    path: postPath
                }
            } as Post
        })
    ).then((posts) => {
        return posts.sort((a, b) => {
            return new Date(b.metadata.date).getDate() - new Date(a.metadata.date).getDate()
        })
    })
}

export function trimText(text: string, maxLength = 144): string {
    return text.length > maxLength ?
        text.substring(0, maxLength - 3) + "..." :
        text;
}

export function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-GB', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(dateString));
}