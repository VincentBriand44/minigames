<script lang="ts">
  export let player: string | boolean;
  export let isWin: boolean;
  export let status = true; // true = win, false = loose
</script>

<dialog
  open={isWin}
  class="font-bold transform -translate-y-1/2 bg-slate-600 rounded-xl text-slate-200 top-1/2"
>
  {#if status}
    {#if player !== true}
      <p>
        Le joueur <span class="text-lg text-green-500">{player}</span> a gagné !
      </p>
    {:else}
      <p>Tu as gagné !</p>
    {/if}
  {:else}
    <p>Tu as perdu !</p>
  {/if}
</dialog>
