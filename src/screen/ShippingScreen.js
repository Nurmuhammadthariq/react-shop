import React, { useState } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Components
import FormContainer from '../components/FormContainer';

// Call actions
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = () => {
  const history = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history('/');
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="form-group">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city" className="form-group">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode" className="form-group">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Postal Code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country" className="form-group">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="form-group">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
