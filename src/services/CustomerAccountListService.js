import ExecutePost from './helpers/ExecutePost';

export default {
  getAll(Action, Version = 1, CustomerId) {
    const data = { CustomerId };
    return ExecutePost.executeFormData(Action, Version, data);
  },
};
