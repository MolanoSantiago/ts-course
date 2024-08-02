(() => {
  // Union types allow us to use more than one data type for a variable

  // Literal types are a subset of union types
  type UserID = number | string;
  let userId: UserID;

  function greeting(text: number | string): string {
    if (typeof text === 'number') {
      return `Hello, user with id ${text}`;
    } else {
      return `Hello, ${text}`;
    }
  }

  userId = 18;
  console.log(greeting(userId));
  userId = 'John Doe';
  console.log(greeting(userId));
})();
