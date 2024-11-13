const showMessage = () => {
  return new Promise((resolve) => {
    resolve("Resolved:This is a message from the Promise!");
  });
};

showMessage().then((message) => {
  console.log(message);
});
