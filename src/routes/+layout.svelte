<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
</script>

<div class="mx-auto max-w-5xl lg:px-8">
    <main class="mt-16">
        <slot />
    </main>

    <Footer/>
</div>
