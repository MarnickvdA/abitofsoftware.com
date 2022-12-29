<script lang="ts">
    import type {Post} from "../models/post";

    export let post: Post

    let formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(post.metadata.date));
</script>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="{post.path}">
        <img class="rounded-t-lg" src="{post.metadata.thumbnailUrl}" alt=""/>
    </a>
    <div class="p-5">
        <span class="mb-1 text-sm tracking-tight text-gray-700 dark:text-white">{formattedDate}</span>
        <a href="{post.path}">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.metadata.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.metadata.shortDescription}</p>
    </div>
</div>
