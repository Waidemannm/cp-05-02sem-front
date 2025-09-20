import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
import App from './App';
import Error from './routes/Error';
import Home from './routes/Home';
import ProdutoList from './routes/ProdutoList';
import DetalhesProdutos from './routes/ProdutoDetail';
import AdicionarProduto from './routes/AdicionarProduto';

const router = createBrowserRouter([
  {path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/produtos", element:<ProdutoList/>},
    {path:"/produtos/:id", element: <DetalhesProdutos/>},
    {path:"/produtos/criar", element: <AdicionarProduto/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
