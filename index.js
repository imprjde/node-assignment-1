const fs = require("fs").promises;

// showMessage function: Logs a message to the console and returns a resolved promise with a custom message
const showMessage = () => {
  console.log("showMessage function called...");

  return new Promise((resolve) => {
    console.log("Resolving the promise with a message...");
    resolve("This is a message from the Promise!");
  });
};

// Call the showMessage function and handle the resolved promise or any errors
showMessage()
  .then((message) => {
    console.log("Promise resolved with message: ", message);
  })
  .catch((error) => {
    console.error("Error in promise: ", error);
  });

// createFile function: Asynchronously creates a new text file with a message in it
const createFile = async () => {
  console.log("createFile function started...");

  try {
    console.log("Attempting to create the file 'message.txt'...");

    // Writing to the file
    await fs.writeFile(
      "message.txt",
      "Hello, this file was created with async/await!"
    );

    console.log("File 'message.txt' created successfully!");
  } catch (error) {
    console.error("Error creating file:", error);
  }

  console.log("createFile function finished execution.");
};

// Call the createFile function to create the file
createFile();
