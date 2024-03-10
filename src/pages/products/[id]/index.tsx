import { Layout } from '@components/layout';
import { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';

const Product: NextPageWithLayout = () => {
  return <div>producto 1</div>;
};

Product.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <Layout>{page}</Layout>;
};

export default Product;
