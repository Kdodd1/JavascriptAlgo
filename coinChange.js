function coinChange(num){
  //{dollars: 3, dimes: 1, pennies: 2}
  var dollars = 0;
  var quarters = 0;
  var dimes = 0;
  var nickles = 0;
  var pennies = 0;
  var dict = {};

  while(num - 100 >= 0){
    dollars += 1;
    dict["Dollars"] = dollars;
    num = num - 100;
  }
  while(num - 25 >= 0){
    quarters += 1;
    dict["Quarters"] = quarters;
    num = num - 25;
  }
  while(num - 10 >= 0){
    dimes += 1;
    dict["Dimes"] = dimes;
    num = num - 10;
  }
  while(num - 5 >= 0){
    nickles += 1;
    dict["Nickles"] = nickles;
    num = num - 5;
  }
  while(num - 1 >= 0){
    pennies += 1;
    dict["Pennies"] = pennies;
    num = num - 1;
  }

  return dict;
}
