import React from 'react';
import { api } from '../services/api';
import { IProduct } from '../store/modules/cart/interfaces';
import CatalogItem from './CatalogItem';
// import { useStore,useSelector} from 'react-redux';
// import { Container } from './styles';

const Catalog: React.FC = () => {
  // const store = useStore();
  // console.log(store.getState());
  // const state = useSelector((state: any) => {return state.id});
  // console.log(state);
  const [catalog, setCatalog] = React.useState<IProduct[]>();

  React.useEffect(() => {
    api.get('products').then((response) => {
      setCatalog(response.data);
    })
  },[]);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog?.map((product) => {
        return (
          <CatalogItem product={product}/>
        )
      })}
    </main>
  );
}

export default Catalog;