<script lang="ts">
    import type {Post} from "../models/post";
    import {getFormattedDate} from "$lib/utils.js";
    import '$lib/styles/blog.scss'

    export let post: Post;
</script>

<article>
    <div class="mt-16 mb-8">
        <h1 class="text-6xl font-bold">{post.metadata.title}</h1>
        <span class="text-md italic">Posted on {getFormattedDate(post.metadata.date)} by {post.metadata.author}</span>
    </div>

    <svelte:component this={post.content} class="content" />
</article>
