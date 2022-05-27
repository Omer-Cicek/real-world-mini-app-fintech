import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [customerInfo, setCustomerInfo] = useState();
  const { loggedIn } = useSelector((state) => state.LoginReducer);

  const navigate = useNavigate();

  const formData = new FormData();

  formData.append('Action', 'GetCustomer');
  formData.append('Version', '1');
  formData.append('Parameters', '{}');

  const handleCustomers = (e) => {
    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/v1/FinTech/Execute',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        console.log(data.data);
        setCustomerInfo(data.data.Result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleCustomers();
  }, []);

  const handleUserAccounts = (id) => {
    // navigate('/customer-accounts-list', { state: { id } });
    console.log(id);
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birth Date</th>
          <th>Email</th>
          <th>User Account's List</th>
        </tr>
      </thead>
      <tbody>
        {customerInfo?.map((customer, index) => {
          return (
            <tr key={customer.CustomerId}>
              <td>{index + 1}</td>
              <td>{customer.FirstName}</td>
              <td>{customer.LastName}</td>
              <td>{customer.BirthDate}</td>
              <td>{customer.Email}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleUserAccounts(customer.CustomerId)}
                >
                  Accounts <BsFillArrowRightSquareFill />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Main;
