const fs = require("fs").promises;

const createFile = async () => {
  try {
    await fs.writeFile(
      "message.txt",
      "Hello, this file was created with async/await!"
    );
    console.log("File created successfully!");
  } catch (error) {
    console.error("Error creating file:", error);
  }
};

createFile();
