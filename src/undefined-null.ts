(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  let myNumber: number | null;
  myNumber = 10;
  console.log(myNumber);
  myNumber = null;
  console.log(myNumber);
  let myString: string | undefined;
  myString = 'Hello';
  console.log(myString);
  myString = undefined;
  console.log(myString);

  function hello(name: string | null): string {
    return `Hello, ${name || 'stranger'}`;
  }

  console.log(hello('John Doe'));
  console.log(hello(null));
})();
