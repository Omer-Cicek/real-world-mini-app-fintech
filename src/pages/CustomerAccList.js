import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerAccountListService from '../services/CustomerAccountListService';

const CustomerAccList = () => {
  const {
    state: { id },
  } = useLocation();
  console.log(id);

  const formData = new FormData();

  formData.append('Action', 'GetAccountByCustomerId');
  formData.append('Version', '1');
  formData.append('Parameters', `{ CustomerId: '${id}'}`);

  const handleAccountList = () => {
    CustomerAccountListService.getAll(id).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    handleAccountList();
  }, []);

  return <div>CustomerAccList</div>;
};

export default CustomerAccList;
