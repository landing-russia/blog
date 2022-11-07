<script>
  export let data
</script>

<div
  class="max-w-7xl mx-auto p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
>
  {#each data.posts as post}
    <a
      href={post.path}
      class="group p-4 bg-white shadow hover:shadow-lg dark:bg-gray-900 border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-500 rounded-md transition duration-150"
    >
      <div class="text-xs text-gray-400 dark:text-gray-500 mb-2">
        {new Date(post.meta.date).toLocaleDateString("ru", {
          // weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <h3
        class="line-clamp-2 font-serif leading-5 font-bold text-xl text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-100 transition duration-150"
      >
        {post.meta.title}
      </h3>
      {#if post.meta.categories}
        <div class="flex flex-wrap items-center justify-start mt-1">
          {#each post.meta.categories as category}
            <div class="flex flex-wrap items-center justify-start mt-1">
              <div
                class="px-2 py-0.5 mr-2 mt-2 leading-4 border border-gray-300 text-sm text-gray-500 group-hover:text-gray-600 dark:border-gray-600 dark:text-gray-500 dark:group-hover:text-gray-400 rounded-xl whitespace-nowrap transition duration-150"
              >
                { category }
              </div>
            </div>
          {/each}
        </div>
      {/if}</a
    >
  {/each}
</div>
