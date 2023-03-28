<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<Header nav={data.nav} />
<main class="py-4 page">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.700);
    color: theme(colors.slate.200);
  }

  .page {
    display: flex;
    justify-content: center;
    min-height: 100%;
  }
</style>
