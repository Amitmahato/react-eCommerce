import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Button, Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { withRouter } from "react-router-dom";

const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & div {
    width: 250px;
    height: 300px;

    & div {
      height: 60px;
      width: 100%;
      margin: 10px 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      & small {
        width: 100%;
        color: red;
        text-align: end;
      }
    }

    & .buttonGroup {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

const ShippingAddress: React.FC<any> = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid Email"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...formik.getFieldProps("name")} />
          <small>{formik.touched.name && formik.errors.name}</small>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...formik.getFieldProps("email")} />
          <small>{formik.touched.email && formik.errors.email}</small>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...formik.getFieldProps("address")} />
          <small>{formik.touched.address && formik.errors.address}</small>
        </div>

        <ButtonGroup className="buttonGroup">
          <Button onClick={() => history.push("/cart")}>Cancel</Button>
          <Button htmlType="submit">Continue</Button>
        </ButtonGroup>
      </div>
    </StyledForm>
  );
};

export default withRouter(ShippingAddress);
