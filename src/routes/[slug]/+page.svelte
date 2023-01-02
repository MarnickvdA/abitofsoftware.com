<script>
    import BlogPost from "$lib/components/BlogPost.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    <meta name="description" content="{data.metadata.description}">
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="{data.metadata.tags?.join(', ') ?? ''}">
    <meta name="author" content="{data.metadata.author}">

    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.metadata.title}" />
    <meta property="og:description" content="{data.metadata.description}" />
    <meta property="og:image" content="{data.metadata.thumbnailUrl}" />
    <meta property="og:url" content="{'https://abitofsoftware.com/' + data.metadata.path}" />
    <meta property="og:site_name" content="A Bit of Software" />

    <meta name="twitter:title" content="{data.metadata.title}">
    <meta name="twitter:description" content="{data.metadata.description}">
    <meta name="twitter:image" content="{data.metadata.thumbnailUrl}">
    <meta name="twitter:site" content="@abitofsoftware">
    <meta name="twitter:creator" content="@marnickvda">
</svelte:head>

<BlogPost post="{data}"/>