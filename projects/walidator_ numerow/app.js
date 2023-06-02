function telephoneCheck(str) {
  let splitted = str.split("");
  let counter = 0;

  splitted.forEach((val) => {
    if (
      val == "1" ||
      val == "2" ||
      val == "3" ||
      val == "4" ||
      val == "5" ||
      val == "6" ||
      val == "7" ||
      val == "8" ||
      val == "9" ||
      val == "0"
    ) {
      counter += 1;
    }
  });

  console.log(counter);

  if (counter === 10 && splitted.length === 10) {
    return true;
  }

  if (
    counter === 10 &&
    splitted.length === 12 &&
    splitted[0] == " " &&
    splitted[4] == " "
  ) {
    return true;
  }

  if (
    counter === 10 &&
    splitted.length === 12 &&
    splitted[3] == "-" &&
    splitted[7] == "-"
  ) {
    return true;
  }

  if (counter === 10 && splitted[0] === "(" && splitted[4] === ")") {
    if (splitted.length == 12) {
      return true;
    }
    if (splitted[8] == "-") {
      return true;
    }

    if (splitted.length == 14 && splitted[5] == " ") {
      return true;
    }
  }

  // jedynka z przodu

  if (counter === 11 && splitted[0] === "1") {
    console.log("tu");
    if (splitted[1] == " " && splitted[5] == "-" && splitted[9] == "-") {
      return true;
    }
    if (
      splitted[1] == " " &&
      splitted[2] == "(" &&
      splitted[6] == ")" &&
      splitted[7] == " " &&
      splitted[11] == "-"
    ) {
      return true;
    }
    if (splitted[1] == "(" && splitted[5] == ")" && splitted[9] == "-") {
      return true;
    }
    if (splitted[1] == " " && splitted[5] == " " && splitted[9] == " ") {
      return true;
    } else return false;
  } else return false;
}

console.log(telephoneCheck("2(757)622-7382"));
