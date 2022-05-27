import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/v1/FinTech/Execute',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => console.log('DATA', data.data))
      .catch((err) => console.log('ERROR', err));
  };

  useEffect(() => {
    handleAccountList();
  }, []);

  return <div>CustomerAccList</div>;
};

export default CustomerAccList;
