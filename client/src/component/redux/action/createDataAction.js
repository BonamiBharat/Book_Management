

export const sendRequestForCreate = (data) => {
  console.log(data);
  return {
    type: 'sendRequestForCreate',
    payload: data
  }
}