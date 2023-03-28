<script lang="ts">
  import WinPopup from '$lib/components/WinPopup.svelte';

  let cells = Array(9).fill(undefined);
  let player = 'X';
  let isWin = false;

  const handleClick = (index: number) => {
    cells[index] = player;

    player = player === 'X' ? 'O' : 'X';

    // check if someone won
    if (
      (cells[0] === cells[4] &&
        cells[0] === cells[8] &&
        cells[0] !== undefined) ||
      (cells[2] === cells[4] && cells[2] === cells[6] && cells[2] !== undefined)
    ) {
      winner(cells[4]);
    } else {
      for (let i = 0; i < cells.length; i++) {
        if (cells[i] !== undefined) {
          if (cells[i] === cells[i + 3] && cells[i] === cells[i + 6]) {
            winner(cells[i]);
          }
          if (i === 0 || i === 3 || i === 6) {
            if (cells[i] === cells[i + 1] && cells[i] === cells[i + 2]) {
              winner(cells[i]);
            }
          }
        }
      }
    }
  };

  const winner = (player: string) => {
    isWin = true;
  };

  const reset = () => {
    cells.fill(undefined);
    cells = cells;
    player = 'X';
    isWin = false;
  };
</script>

<div class="flex flex-col items-center">
  <div class="relative">
    <WinPopup player={player === 'X' ? 'O' : 'X'} {isWin} />
    <div class="grid grid-cols-3 grid-rows-3 gap-6 text-center">
      {#each cells as cell, index}
        <button
          class="w-20 h-20 text-4xl rounded-lg ttt-btn bg-slate-800 font-bold"
          on:click={() => handleClick(index)}
          disabled={cell ?? isWin}>{cell ?? ' '}</button
        >
      {/each}
    </div>
  </div>

  {#if isWin}
    <button on:click={reset}>RECOMMENCER</button>
  {/if}
</div>
