<script>
  export let data
</script>

<ul>
  {#each data.posts as post}
    <li>
      <h4>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h4>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
