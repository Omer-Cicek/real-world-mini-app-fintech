import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CustomerAccList = () => {
  const {
    state: { id },
  } = useLocation();
  console.log(typeof id);

  const formData = new FormData();

  formData.append('Action', 'GetAccountByCustomerId');
  formData.append('Version', '1');
  formData.append('Parameters', '{ CustomerId: `${id}`}');
  // formData.append(
  //   'Parameters',
  //   "{ CustomerId: '754FFAEB-D1C2-EC11-AC1F-000C29330757'}"
  // );

  const handleAccountList = () => {
    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/v1/FinTech/Execute',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleAccountList();
  }, []);

  return <div>CustomerAccList</div>;
};

export default CustomerAccList;
