async function paginate(model, query = {}, queryParams) {
    try {
      const limit = queryParams.limit ? parseInt(queryParams.limit) : 0;
      const page = queryParams.page ? parseInt(queryParams.page) : 0;
      const result = await model
        .find(query)
        .limit(limit)
        .skip(page * limit);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  
  module.exports = paginate;