import { Card } from '@components/card';
import { Layout } from '@components/layout';
import { Table } from '@components/table';
import { NextPageWithLayout } from '@pages/_app';
import { ReactElement, useMemo, useRef, useState } from 'react';
import { HeaderProducts } from '../../../public/static/headers';
import { productsItems } from '../../../public/static/table';
import { ProductItem } from 'interfaces/products';
import { Modal } from '@components/modal';
import { useOpen } from 'hooks/useOpen';
import Link from 'next/link';

const Products: NextPageWithLayout = () => {
  const modal = useOpen({});
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<ProductItem[]>(productsItems);
  const inputStyle = 'placeholder-slate-400 rounded-md text-sm border border-8-border h-9 w-full p-2';

  const nameRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    return products.filter((item) => {
      const isNameMatch = item.productName.toLocaleLowerCase().includes(query.toLocaleLowerCase());
      const isBrandMatch = item.brand.toLocaleLowerCase().includes(query.toLocaleLowerCase());
      const isColorMatch = item.color.toLocaleLowerCase().includes(query.toLocaleLowerCase());

      const isSearch = isNameMatch || isBrandMatch || isColorMatch;
      return isSearch;
    });
  }, [products, query]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId = products.length ? products.length + 1 : 1;

    const newProduct: ProductItem = {
      id: newId,
      productName: nameRef.current ? nameRef.current.value : '',
      brand: brandRef.current ? brandRef.current.value : '',
      color: colorRef.current ? colorRef.current.value : '',
      stock: stockRef.current ? +stockRef.current.value : 0,
      price: priceRef.current ? +priceRef.current.value : 0,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    modal.close();
  };

  const deleteProduct = (id: number) => {
    const newList = products.filter((item) => item.id !== id);
    setProducts(newList);
  };

  return (
    <div className="flex flex-col gap-3 pb-5">
      <Card>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="font-bold text-xl text-gray-800">Productos</div>
          <div className="flex w-full md:w-32">
            <Modal title="Nuevo Producto" modal={modal}>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <label className="text-1-oceanic" htmlFor="nameRef">
                      Nombre
                    </label>
                    <input required id="nameRef" className={inputStyle} ref={nameRef} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-1-oceanic" htmlFor="brandRef">
                      Marca
                    </label>
                    <input required id="brandRef" className={inputStyle} ref={brandRef} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-1-oceanic" htmlFor="colorRef">
                      Color
                    </label>
                    <input required id="colorRef" className={inputStyle} ref={colorRef} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-1-oceanic" htmlFor="stockRef">
                      Stock
                    </label>
                    <input required type="number" id="stockRef" className={inputStyle} ref={stockRef} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-1-oceanic" htmlFor="priceRef">
                      Precio
                    </label>
                    <input required type="number" id="priceRef" className={inputStyle} ref={priceRef} />
                  </div>
                </div>

                <div className="flex flex-row justify-end gap-2">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => modal.close()}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-3-aquamarine hover:bg-4-azure text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
        <div className="flex w-full md:w-64">
          <input type="search" placeholder={'Buscar...'} className="border border-8-border rounded-md p-2 placeholder-slate-400 w-full" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className="grid grid-cols-1">
          <Table header={HeaderProducts}>
            {filteredItems.map((item: ProductItem, index: number) => (
              <tr key={index}>
                <td className="p-4 text-left">{item.productName}</td>
                <td className="p-4 text-center">{item.brand}</td>
                <td className="p-4 text-center">{item.color}</td>
                <td className="p-4 text-center">{item.stock}</td>
                <td className="p-4 text-center text-3-aquamarine font-bold">{item.price + ' CLP'}</td>
                <td className="flex flex-wrap gap-2 justify-center p-4">
                  <Link href={'/products/' + item.id}>
                    <button type="button" className="w-24 bg-2-teal hover:bg-3-aquamarine text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Ver
                    </button>
                  </Link>

                  <button
                    onClick={() => deleteProduct(item.id)}
                    type="button"
                    className="w-24 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </Card>
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <Layout>{page}</Layout>;
};

export default Products;
