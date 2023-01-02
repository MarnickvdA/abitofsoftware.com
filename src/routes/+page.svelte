<script lang="ts">
    import BlogListItem from "$lib/components/BlogListItem.svelte";
    import type {Post} from "$lib/models/post";

    export let data: { posts: Post[] }
</script>

<span class="text-2xl text-slate-700 dark:text-slate-400">A Bit of Software</span>
<h1 class="text-7xl text-slate-800 font-black dark:text-slate-100">The Blog</h1>
<p class="text-lg dark:text-slate-100 mt-4 italic">

</p>

{#if data.posts}
    <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-8">
        {#each data.posts as post}
            <BlogListItem post="{post}"/>
        {/each}
    </div>
{/if}