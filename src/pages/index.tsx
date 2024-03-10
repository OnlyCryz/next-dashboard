import { Layout } from '@components/layout';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import { Card } from '@components/card';
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import { Table } from '@components/table';
import { HeaderLastBuyer, HeaderLastPurchase } from '../../public/static/headers';
import { cards } from '../../public/static/card';
import { CardItem } from 'interfaces/dashboard';
import { LastPurchase } from 'interfaces/products';
import { LastBuyers } from 'interfaces/users';
import { lastBuyers, lastPurchase } from '../../public/static/table';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const Home: NextPageWithLayout = () => {
  function addTotalToProducts(products: LastPurchase[]) {
    for (let i = 0; i < products.length; i++) {
      const total = products[i].quantity * products[i].price;
      products[i].total = total;
    }
    return products;
  }

  return (
    <div className="flex flex-col gap-3 pb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {cards.map((item: CardItem, index: number) => (
          <Card key={index}>
            <div className="flex flex-row justify-between">
              <div className="flex items-center gap-2">
                <div className="font-bold text-3xl text-3-aquamarine">{item.total}</div>
                <div className="font-bold text-xl text-gray-800">{item.title}</div>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-500 text-base mt-2">{item.description}</p>
            <div className="mt-4">
              <button className="bg-2-teal hover:bg-3-aquamarine text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ver</button>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <Card>
          <div className="font-bold text-xl text-gray-800">Ultimos compradores</div>

          <Table header={HeaderLastBuyer}>
            {lastBuyers.map((item: LastBuyers, index: number) => (
              <tr key={index}>
                <td className="p-4 text-left">{item.buyerName}</td>
                <td className="p-4 text-center">{formatDistanceToNow(item.date, { locale: es })}</td>
                <td className="p-4 text-right text-3-aquamarine font-bold">{item.total + ' CLP'}</td>
              </tr>
            ))}
          </Table>
        </Card>
        <Card>
          <div className="font-bold text-xl text-gray-800">Ultimas Ventas</div>

          <Table header={HeaderLastPurchase}>
            {addTotalToProducts(lastPurchase).map((item: LastPurchase, index: number) => (
              <tr key={index}>
                <td className="p-4 text-left">{item.productName}</td>
                <td className="p-4 text-center">{item.price + ' CLP'}</td>
                <td className="p-4 text-center">{item.quantity}</td>
                <td className="p-4 text-right text-3-aquamarine font-bold">{item.total + ' CLP'}</td>
              </tr>
            ))}
          </Table>
        </Card>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <Layout>{page}</Layout>;
};

export default Home;
