<script lang="ts">
    import type {Post} from "../models/post";
    import {getFormattedDate, trimText} from "$lib/utils.js";

    export let post: Post
</script>

<a href="{post.metadata.path}" class="max-w font-normal bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-slate-700 dark:border-slate-800">
    <div class="w-auto">
        <img class="rounded-t-lg" src="{post.metadata.thumbnailUrl}" alt=""/>
    </div>
    <div class="p-5">
        <span class="mb-1 text-sm tracking-tight text-gray-700 dark:text-white">{getFormattedDate(post.metadata.date)}</span>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{post.metadata.title}</h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">{trimText(post.metadata.description)}</p>
    </div>
</a>
