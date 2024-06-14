import React, { useEffect, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { addNewProduct, getProductById, editProduct } from '../API/ProductAPI';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewProductAction } from '../store/productSlice';

export default function MyProductsForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        quantity: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id && id !== "0") {
            getProductById(id)
                .then(response => setFormData(response.data))
                .catch(error => setError(error.message));
        }
    }, [id]);

    const formHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addHandler = async (e) => {
        e.preventDefault();
        try {
            if (id === "0") {
                await dispatch(addNewProductAction(formData));
            } else {
                await editProduct(id, formData);
            }
            navigate('/products');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container className="mt-3">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={addHandler}>
                <Form.Group className="mb-3" controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        onChange={formHandler}
                        type="text"
                        placeholder="Enter Product Name"
                        name="productName"
                        value={formData.productName}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        onChange={formHandler}
                        type="number"
                        placeholder="Enter Price"
                        name="price"
                        value={formData.price}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        onChange={formHandler}
                        type="number"
                        placeholder="Enter Quantity"
                        name="quantity"
                        value={formData.quantity}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    {id === "0" ? 'Add New Product' : 'Edit Product'}
                </Button>
            </Form>
        </Container>
    );
}
