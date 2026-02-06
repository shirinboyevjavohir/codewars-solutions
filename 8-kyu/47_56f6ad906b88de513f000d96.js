const bonusTime = (salary, bonus) => {
  salary = "\u00A3" + salary;
  return bonus ? salary + "0" : salary;
};

console.log(bonusTime(1000, true));
