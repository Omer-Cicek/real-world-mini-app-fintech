import ExecutePost from './helpers/ExecutePost';

export default {
  getAll(CustomerId) {
    const data = { CustomerId };
    return ExecutePost.executeFormData('GetAccountByCustomerId', 1, data);
  },
};
