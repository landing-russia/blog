<script>
  export let data
  const { title, date, content: Content, categories } = data
</script>

<article>
  <p class="!mb-6 !text-sm !font-medium !opacity-75 !text-gray-500">
    {new Date(date).toLocaleDateString("ru", {
      // weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
  <h1>{title}</h1>
  <Content />
</article>

{#if categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each categories as category}
        <li>
          <a href="/blog/category/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
