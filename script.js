const axios = require('axios');
const { expect } = require('chai');

describe('HTTP Request', () => {
  let responseData;

  beforeEach(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      responseData = response.data;
    } catch (error) {
      console.error(error);
    }
  });

  it('should log the response body to the console', () => {
    console.log(responseData);
    // Add your validation assertions here
    expect(responseData).to.have.property('userId');
    expect(responseData).to.have.property('id');
    expect(responseData).to.have.property('title');
    expect(responseData).to.have.property('completed');
  });
});
