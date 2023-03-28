<script lang="ts">
  import WinPopup from '$lib/components/WinPopup.svelte';

  let result: number;
  let isWin = false;
  let isLoose = false;
  let maxTry = 7;
  let message: string | undefined;

  let erreur: number = 0;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      let value = parseInt(event.target?.value);
      if (value === result) {
        winner();
      } else {
        erreur++;
        if (erreur >= maxTry) {
          isLoose = true;
        }
        if (value > result) {
          message = "C'est moins";
        } else {
          message = "C'est plus";
        }
      }
    } else {
      message = undefined;
    }
  };

  const random = () => {
    result = Math.floor(Math.random() * 100) + 1;
  };

  const winner = () => {
    isWin = true;
  };

  const reset = () => {
    console.log(result);
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
    <p class="h-10 text-center">{message ?? ''}</p>
    <div class="flex justify-center text-center">
      <input
        class={'w-full h-16 text-4xl rounded-lg ttt-btn  font-bold select-none bg-slate-800 p-4'}
        disabled={isLoose || isWin}
        on:keydown={handleKeyDown}
        type="number"
        placeholder="Entrez un nombre"
        pattern="[0-9]*"
      />
    </div>
  </div>

  {#if isWin || isLoose}
    <button on:click={reset}>RECOMMENCER</button>
  {/if}
</div>
