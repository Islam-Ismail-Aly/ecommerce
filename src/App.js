import logo from './logo.svg';
import './App.css';
import { SharedLayout } from "./layout/SharedLayout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";


import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { Products } from './pages/products';
import { MyProducts } from './pages/MyProducts';



function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path='/' element={<MyProducts />}/>
			</Route>
			<Route path='*' element={<NotFound />} />
		</>
		)
	);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
