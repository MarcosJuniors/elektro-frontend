import celularesImg from '../assets/categories/celulares.png';
import notebooksImg from '../assets/categories/notebooks.png';
import tabletsImg from '../assets/categories/tablets.png';
import perifericosImg from '../assets/categories/perifericos.png';
import tvsImg from '../assets/categories/tvs.png';
import acessoriosImg from '../assets/categories/acessorios.png';
import pcsImg from '../assets/categories/pcs.png';
import smartwatchesImg from '../assets/categories/smartwatches.png';

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Celulares', image: celularesImg },
  { id: '2', name: 'Notebooks', image: notebooksImg },
  { id: '3', name: 'Tablets', image: tabletsImg },
  { id: '4', name: 'Periféricos', image: perifericosImg },
  { id: '5', name: 'TVs', image: tvsImg },
  { id: '6', name: 'Acessórios', image: acessoriosImg },
  { id: '7', name: 'PCs', image: pcsImg },
  { id: '8', name: 'Smartwatches', image: smartwatchesImg },
];