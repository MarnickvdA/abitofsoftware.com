<script lang="ts">
    import BlogPost from "../components/BlogPost.svelte";
    import type {Post} from "../models/post";

    export let data: { posts: Post }
</script>

<span class="text-2xl text-slate-700 dark:text-slate-400">A Bit of Software</span>
<h1 class="text-7xl text-slate-800 font-black dark:text-slate-100">The Blog</h1>
<p class="text-lg dark:text-slate-100 mt-4 italic">
    Welcome to my blog, dedicated to all things related to the world of IT.
    Here, you'll find articles, tutorials, and insights on a wide range of topics, from programming and software
    development to architecture and consulting.
    My goal is to provide valuable and informative content that helps you stay up-to-date on the latest trends and
    technologies in the industry.
    <br><br>
    Thank you for visiting and I hope you enjoy reading my articles!
</p>

{#if data.posts}
    <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-8">
        {#each data.posts as post}
            <BlogPost post="{post}"/>
        {/each}
    </div>
{/if}