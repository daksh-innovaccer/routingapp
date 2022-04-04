import Welcome from './Components/Welcome/Welcome'
import Product from './Components/Products/Product';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/MainHeader/Header';
import { Fragment } from "react";
import ProductDetails from './Components/Products/ProductDetails';

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Routes>
                    <Route path='/welcome' element={<Welcome />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/product-details/:productId' element={<ProductDetails />} />
                </Routes>
            </main>
        </Fragment>
    );
}

export default App;
