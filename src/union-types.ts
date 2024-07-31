(() => {
  let userId: number | string;

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
