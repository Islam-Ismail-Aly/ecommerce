import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function MyProductDetails() {
  
   let [product, setProduct] = useState({});
   let [isLoading, setIsLoading] = useState(true);
   let [error, setError] = useState(null);
 
   const navigate = useNavigate();
   const { id } = useParams();
 
   useEffect(() => {
       const fetchData = async () => {
           try {
               let response = await getProductById(id);
               setProduct(response.data);
               setIsLoading(false);
           } catch (error) {
               setError(error.message);
               setIsLoading(false);
           }
       };
       fetchData();
   }, [id]);
 
   const backToProducts = () => {
       navigate('/products');
   };
 
   return (
       <>
           {isLoading ? (
               <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                   <Spinner animation="border" role="status">
                       <span className="sr-only">Loading...</span>
                   </Spinner>
               </div>
           ) : error ? (
               <Alert variant="danger" className="text-center">
                   <Alert.Heading>Error</Alert.Heading>
                   <p>{error}</p>
               </Alert>
           ) : (
               <Container className="mt-5">
                   <Card className="bg-dark text-light">
                       <Card.Header className="text-center">
                           <h1>Product Details: {id}</h1>
                       </Card.Header>
                       <Card.Body className="text-center">
                           <Card.Title>Product Name: {product.productName}</Card.Title>
                           <Card.Text>Price: ${product.price}</Card.Text>
                           <Button variant="success" onClick={backToProducts} className="mt-4">
                               Back to Products
                           </Button>
                       </Card.Body>
                   </Card>
               </Container>
           )}
       </>
   );
}
