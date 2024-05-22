function proccessInput(para: string | number) {
  if (Number(para)) {
    para = Number(para) * 2;
    console.log(para);
  } else if (String(para)) {
    console.log(para.toString().toUpperCase());
  }
}

proccessInput("tousif");
proccessInput(5);
