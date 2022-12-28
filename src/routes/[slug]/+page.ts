export async function load({params}: { params: { slug: string } }) {
    try {
        const post = await import(`../../posts/${params.slug}.md`)
        const {title, date} = post.metadata
        const content = post.default

        return {
            content,
            title,
            date,
        }
    } catch (e) {
        return {
            // Show error page.
        }
    }
}