<script lang="ts">
  interface Nav {
    label: string
    href: string
  }

  const nav: Nav[] = [
    {
      label: 'Accueil',
      href: '/'
    }
  ]
</script>

<header>
  <nav>
    <ul>
      {#each nav as { label, href }}
        <li>
          <a {href}>{label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
