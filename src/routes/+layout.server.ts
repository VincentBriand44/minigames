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
        label: 'Morpion',
        href: '/tictactoe'
      },
      {
        label: 'Memory',
        href: '/memory'
      },
      {
        label: 'Juste Nombre',
        href: '/rightnumber'
      },
      {
        label: 'Pendu',
        href: '/pendu'
      },
      {
        label: '2048',
        href: '/2048'
      }
    ] as Nav[]
  };
};
