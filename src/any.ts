(() => {
  let dynamicVar: any;
  dynamicVar = 10;
  dynamicVar = true;
  dynamicVar = {};
  dynamicVar = [];
  dynamicVar = () => {
  };
  dynamicVar = 'one';
  const asString = (dynamicVar as string).toUpperCase();
  console.log(asString);
  const asNumber = (<number>dynamicVar) + 10;
  console.log(asNumber);
  const asBoolean = (<boolean>dynamicVar).valueOf();
  console.log(asBoolean);
})();
