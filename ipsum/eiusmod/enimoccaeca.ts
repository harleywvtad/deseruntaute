interface User {
  name: string;
}

const user: User = {
  name: "Leanne Graham",
};

// Function to display user's name
function displayUserName(user: User): void {
  console.log(`User's name is: ${user.name}`);
}

// Call the function to display the name
displayUserName(user);
