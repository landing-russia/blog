<script>
  import { Button } from "flowbite-svelte"
  import { Icon, ArrowRight, Filter } from "svelte-hero-icons"
</script>

<div class="p-4">
  <h1 class="mb-2 text-4xl font-bold">Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <Button size="xl" class="my-4" shadow="cyan" gradient color="cyanToBlue"
    >Welcome</Button
  >

  <Icon src={Filter} solid size="32" />

  <Icon src={ArrowRight} size="32" />

  <Icon src={Filter} solid class="h-8 w-8 text-red-500" />
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
  <a href="/blog">Blog</a>
</div>
