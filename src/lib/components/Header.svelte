<script lang="ts">
  import type { Nav } from '$lib/types/app';

  export let nav: Nav[];
</script>

<header>
  <nav
    class="flex items-center justify-center w-full h-16 font-bold bg-slate-800"
  >
    <ul class="flex justify-center gap-2">
      {#each nav as { label, href }}
        <li class="px-4 py-2 rounded-lg hover:bg-slate-900">
          <a {href}>{label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
