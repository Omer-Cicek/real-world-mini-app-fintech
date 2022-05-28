import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CustomerAccountListService from '../services/CustomerAccountListService';

const CustomerAccList = () => {
  const [userAccounts, setUserAccounts] = useState([]);

  const {
    state: { id },
  } = useLocation();

  const formData = new FormData();

  formData.append('Action', 'GetAccountByCustomerId');
  formData.append('Version', '1');
  formData.append('Parameters', `{ CustomerId: '${id}'}`);

  const handleAccountList = () => {
    CustomerAccountListService.getAll(id).then((res) => {
      setUserAccounts(res.data.Result);
      console.log(res);
    });
  };

  useEffect(() => {
    handleAccountList();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Account No</th>
            <th>Customer Id</th>
            <th>Base Currency Id</th>
          </tr>
        </thead>
        {userAccounts?.map((account, index) => {
          return (
            <tbody key={account.AccountId}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  {account.FirstName} {account.LastName}
                </td>
                <td>{account.AccountNo}</td>
                <td>{account.CustomerId}</td>
                <td>{account.BaseCurrencyId}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      {userAccounts.length === 0 && (
        <h2 className="lead text-center">User has no active account</h2>
      )}
    </>
  );
};

export default CustomerAccList;
