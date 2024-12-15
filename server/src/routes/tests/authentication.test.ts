const axios = require("axios");
// const jest = require("jest");

jest.mock("axios");
// NOTE : add await to axios to make sure it's working as intended
// NOTE : needed to install @types/jest to dissipate error
// it("make an API call to /auth/signup_test", async () => {
//   // ensure that the axios function is casted as a mock
//   axios.post.mockResolvedValue({
//     id: 1,
//     user_email: "example@123.com",
//     password: "example123",
//   });
//   const payload_data = {
//     id: 1,
//     user_email: "example@123.com",
//     password: "example123",
//   };
//   const response = await axios.post(
//     "http://localhost:3000/auth/signup_test",
//     payload_data
//   );
//   console.log(`API Response is ${JSON.stringify(response)}`);

//   expect(response).toEqual(payload_data);
// });

it("make an API call to /auth/signup", async () => {
  axios.post.mockResolvedValue(200);
  const payload_data = {
    name: "Ayan",
    email: "example@123.com",
    password: "example123",
  };

  const response = await axios.post(
    "http://localhost:3000/auth/signup",
    payload_data
  );
  console.log(`The Response is: ${response}`);

  expect(response).toEqual(200);
});

// jest.mock("axios");

// test("fetchData fetches data successfully", async () => {
//   const mockData = { id: 1, name: "Test User" };
//   axios.post.mockResolvedValue({ data: mockData });

//   const result = await fetchData("someEndpoint");

//   expect(result).toEqual(mockData);
// });
