function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num: number) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return `${message}${total}`;
}

let res = sum("The total is: ", 1, 2, 3, 4, 5);

console.log(res);
