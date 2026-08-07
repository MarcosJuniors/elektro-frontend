import celularImg from '../assets/products/para-voce/celular.png';
import capaImg from '../assets/products/para-voce/capa.png';
import carregadorImg from '../assets/products/para-voce/carregador.png';
import mousepadImg from '../assets/products/para-voce/mousepad.png';
import tecladoImg from '../assets/products/para-voce/teclado.png';

import smarttvImg from '../assets/products/produtos-em-destaque/smarttv.png';
import monitorImg from '../assets/products/produtos-em-destaque/monitor.png';
import headsetImg from '../assets/products/produtos-em-destaque/headset.png';
import tabletImg from '../assets/products/produtos-em-destaque/tablet.png';
import notebookImg from '../assets/products/produtos-em-destaque/notebook.png';

import smartphoneImg from '../assets/products/mais-vendidos/smartphone.png';
import smartwatchImg from '../assets/products/mais-vendidos/smartwatch.png';
import mouseImg from '../assets/products/mais-vendidos/mouse.png';
import foneImg from '../assets/products/mais-vendidos/fone.png';
import caixaDeSomImg from '../assets/products/mais-vendidos/caixa-de-som.png';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const paraVoceProducts: Product[] = [
  { id: '1', name: 'Celular', price: 'R$800,00', image: celularImg },
  { id: '2', name: 'Capa protetora', price: 'R$20,00', image: capaImg },
  { id: '3', name: 'Carregador', price: 'R$50,00', image: carregadorImg },
  { id: '4', name: 'Mousepad', price: 'R$60,00', image: mousepadImg },
  { id: '5', name: 'Teclado', price: 'R$120,00', image: tecladoImg },
];

export const emDestaqueProducts: Product[] = [
  { id: '1', name: 'Smart TV', price: 'R$1400,00', image: smarttvImg },
  { id: '2', name: 'Monitor', price: 'R$750,00', image: monitorImg },
  { id: '3', name: 'Headset', price: 'R$250,00', image: headsetImg },
  { id: '4', name: 'Tablet', price: 'R$300,00', image: tabletImg },
  { id: '5', name: 'Notebook', price: 'R$900,00', image: notebookImg },
];

export const maisVendidosProducts: Product[] = [
  { id: '1', name: 'Smartphone', price: 'R$3.200,00', image: smartphoneImg },
  { id: '2', name: 'Smartwatch', price: 'R$900,00', image: smartwatchImg },
  { id: '3', name: 'Mouse', price: 'R$50,00', image: mouseImg },
  { id: '4', name: 'Fone de ouvido', price: 'R$50,00', image: foneImg },
  { id: '5', name: 'Caixa de som', price: 'R$300,00', image: caixaDeSomImg },
];