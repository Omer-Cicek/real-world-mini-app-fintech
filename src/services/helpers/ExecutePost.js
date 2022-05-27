import axios from 'axios';

export default {
  executeFormData(action, version, data = {}) {
    const configuration = {
      headers: {
        'content-Type': 'application/json',
      },
    };
    const formData = new FormData();

    formData.append('Action', action);
    formData.append('Version', version);
    formData.append('Parameters', JSON.stringify(data));

    return axios.post(
      'https://dev-smoothie-api.fintechyazilim.com/api/v1/FinTech/Execute',
      formData,
      configuration
    );
  },
};
