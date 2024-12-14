const axios = require("axios");
// const jest = require("jest");

jest.mock("axios");
// NOTE : add await to axios to make sure it's working as intended
// NOTE : needed to install @types/jest to dissipate error
it("make an API call to /auth/signup_test", async () => {
  // ensure that the axios function is casted as a mock
  axios.post.mockResolvedValue({
    id: 1,
    user_email: "example@123.com",
    password: "example123",
  });
  const payload_data = {
    id: 1,
    user_email: "example@123.com",
    password: "example123",
  };
  const response = await axios.post(
    "http://localhost:3000/auth/signup_test",
    payload_data
  );
  console.log(`API Response is ${JSON.stringify(response)}`);

  expect(response).toEqual(payload_data);
});
