<script lang="ts">
  import WinPopup from '$lib/components/WinPopup.svelte';

  let cells: string[] = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H'
  ]; // random
  let isWin = false;
  let isLoose = false;
  let maxTry = 5;

  let firstClick: number | undefined = undefined;
  let secondClick: number | undefined = undefined;
  let result: string[] = [];
  let erreur: number = 0;

  const handleClick = (index: number) => {
    if (firstClick === undefined) {
      firstClick = index;
    } else if (secondClick === undefined) {
      secondClick = index;
    } else {
      firstClick = index;
      secondClick = undefined;
    }

    if (firstClick !== undefined && secondClick !== undefined) {
      if (cells[firstClick] === cells[secondClick]) {
        result.push(cells[firstClick]);
        if (result.length === 8) {
          winner();
        }
      } else {
        erreur++;
        if (erreur >= maxTry) {
          isLoose = true;
        }
      }
    }
  };

  const random = () => {
    cells = cells.sort(() => Math.random() - 0.5);
  };

  const winner = () => {
    isWin = true;
  };

  const reset = () => {
    firstClick = undefined;
    secondClick = undefined;
    result = [];
    isWin = false;
    isLoose = false;
    erreur = 0;
    random();
  };

  random();
</script>

<div class="flex flex-col items-center">
  <div class="relative">
    <WinPopup isWin={isWin || isLoose} player status={isWin} />
    <p class="text-center font-bold mb-4">
      Nombre d'erreur: {erreur} / {maxTry}
    </p>
    <div class="grid grid-cols-4 grid-rows-4 gap-3 sm:gap-6 text-center">
      {#each cells as cell, index}
        <button
          class={`sm:w-20 sm:h-20 w-16 h-16 text-4xl rounded-lg ttt-btn  font-bold select-none ${
            index === firstClick ||
            index === secondClick ||
            result.includes(cell)
              ? 'bg-slate-600'
              : 'bg-slate-800'
          }`}
          on:click={() => handleClick(index)}
          disabled={(index === firstClick && secondClick === undefined) ||
            isLoose ||
            isWin ||
            result.includes(cell)}
          >{firstClick === index ||
          secondClick === index ||
          isLoose ||
          result.includes(cell)
            ? cell
            : ' '}</button
        >
      {/each}
    </div>
  </div>

  {#if isWin || isLoose}
    <button on:click={reset}>RECOMMENCER</button>
  {/if}
</div>
