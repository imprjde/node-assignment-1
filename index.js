const showMessage = () => {
  return new Promise((resolve) => {
    resolve("This is a message from the Promise!");
  });
};

showMessage().then((message) => {
  console.log(message);
});
