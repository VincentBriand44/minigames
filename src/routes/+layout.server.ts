import type { Nav } from '$lib/types/app';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
  return {
    nav: [
      {
        label: 'Accueil',
        href: '/'
      },
      {
        label: 'Tic Tac Toe',
        href: '/tictactoe'
      },
      {
        label: 'Memory',
        href: '/memory'
      }
    ] as Nav[]
  };
};
