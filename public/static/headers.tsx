import { HeaderInterface } from '@components/table';

export const HeaderLastBuyer: HeaderInterface[] = [
  { name: 'CLIENTE', style: 'p-4 text-left' },
  { name: 'FECHA', style: 'p-4 text-center' },
  { name: 'TOTAL', style: 'p-4 text-right' },
];

export const HeaderLastPurchase: HeaderInterface[] = [
  { name: 'PRODUCTO', style: 'p-4 text-left' },
  { name: 'PRECIO', style: 'p-4 text-center' },
  { name: 'CANTIDAD', style: 'p-4 text-center' },
  { name: 'TOTAL', style: 'p-4 text-right' },
];

export const HeaderProducts: HeaderInterface[] = [
  { name: 'NOMBRE', style: 'p-4 text-left' },
  { name: 'MARCA', style: 'p-4 text-center' },
  { name: 'COLOR', style: 'p-4 text-center' },
  { name: 'STOCK', style: 'p-4 text-center' },
  { name: 'PRECIO', style: 'p-4 text-center' },
  { name: 'ACCIONES', style: 'p-4 text-center' },
];
