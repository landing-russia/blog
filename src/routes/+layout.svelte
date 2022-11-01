<script>
  import "@fontsource/inter/100.css"
  import "@fontsource/inter/200.css"
  import "@fontsource/inter/300.css"
  import "@fontsource/inter/400.css"
  import "@fontsource/inter/500.css"
  import "@fontsource/inter/600.css"
  import "@fontsource/inter/700.css"
  import "@fontsource/inter/800.css"
  import "@fontsource/inter/900.css"
  import "@fontsource/bitter/100.css"
  import "@fontsource/bitter/200.css"
  import "@fontsource/bitter/300.css"
  import "@fontsource/bitter/400.css"
  import "@fontsource/bitter/500.css"
  import "@fontsource/bitter/600.css"
  import "@fontsource/bitter/700.css"
  import "@fontsource/bitter/800.css"
  import "@fontsource/bitter/900.css"
  import "../app.css"
  import "../prism-one-dark.css"

  import { fade } from "svelte/transition"

  import Header from "../lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"

  export let data
  
</script>

<Header />
<div class="w-full">
  {#key data.currentRoute}
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 100 }}>
      <slot />
    </main>
  {/key}
</div>
<div class="mt-auto">
  <Footer />
</div>
