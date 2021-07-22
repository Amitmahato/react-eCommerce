import React from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../../context/Cart-context";
import { ICartItems } from "../../../context/Cart-reducer";
import { fetchFromAPI } from "../../../helper/cart";

const StyledForm = styled.form`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  .emailInput {
    align-self: center;
    width: 50%;
  }
  .error {
    color: red;
  }
`;

const StripeCheckout: React.FC = () => {
  const stripe = useStripe();
  const { cartItems } = useContext(CartContext);

  const handleGuesCheckout = async (values: any) => {
    const line_items = cartItems.map((item: ICartItems) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100, // convert into cents
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.imageUrl],
        },
      },
    }));

    const response: any = await fetchFromAPI("create-checkout-session", {
      body: {
        line_items,
        customer_email: values.email,
      },
    });

    const { sessionId } = response;
    // use stripe hosted checkout page
    const { error }: any = await stripe?.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log("Error : ", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Invalid Email"),
    }),
    onSubmit: handleGuesCheckout,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        {...formik.getFieldProps("email")}
        className="emailInput"
        placeholder="Enter your email"
      />
      <div className="error">{formik.errors.email}</div>
      <Button htmlType="submit">Submit</Button>
    </StyledForm>
  );
};

export default StripeCheckout;
