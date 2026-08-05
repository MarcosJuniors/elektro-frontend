import celularImg from '../assets/products/para-voce/celular.png';
import capaImg from '../assets/products/para-voce/capa.png';
import smarttvImg from '../assets/products/produtos-em-destaque/smarttv.png';
import monitorImg from '../assets/products/produtos-em-destaque/monitor.png';
import smartphoneImg from '../assets/products/mais-vendidos/smartphone.png';
import smartwatchImg from '../assets/products/mais-vendidos/smartwatch.png';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const paraVoceProducts: Product[] = [
  { id: '1', name: 'Celular', price: 'R$800,00', image: celularImg },
  { id: '2', name: 'Capa protetora', price: 'R$20,00', image: capaImg },
];

export const emDestaqueProducts: Product[] = [
  { id: '1', name: 'Smart TV', price: 'R$1400,00', image: smarttvImg },
  { id: '2', name: 'Monitor', price: 'R$750,00', image: monitorImg },
];

export const maisVendidosProducts: Product[] = [
  { id: '1', name: 'Smartphone', price: 'R$3.200,00', image: smartphoneImg },
  { id: '2', name: 'Smartwatch', price: 'R$900,00', image: smartwatchImg },
];