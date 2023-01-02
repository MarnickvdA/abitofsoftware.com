<script>
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import { fade } from 'svelte/transition'

  export let data
</script>

<div class="mx-auto max-w-5xl min-h-screen bg-white dark:bg-slate-800 px-8 border-x border-slate-900/15 dark:border-slate-900">
    {#key data.currentRoute}
        <main class="pt-16" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
            <slot />
        </main>
    {/key}

    <Footer/>
</div>
