const names: string[] = ["Tousif", "Anika", "Tasrik", "Shifa"];

function checkName(res_name: string): boolean {
  if (names.includes(res_name)) {
    return true;
  }

  return false;
}

let result = checkName("Tousif");
console.log(result);
