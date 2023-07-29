(() => {
  // let myNumber: number = undefined?
  // let myString: string = null;

  let myNumber: number | null = null;

  myNumber = 12;

  function hi(name: string | null) {
    let hello = 'hello ';
    if (name) {
      hello += name;
    } else {
      hello += 'noBody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null | undefined) {
    let hello = 'hello ';
    hello += name?.toLocaleLowerCase() || 'noBodyv2';
    console.log(hello);
  }

  hi(null);
  hi('pepe');

  hiV2('pepe');
  hiV2(undefined);
})();
