export function capitaliseFirstLetter(
  stringVal: string,
  eachWord: boolean = true
) {
  if (!stringVal) return stringVal;

  if (stringVal.length === 1) return stringVal.toUpperCase();

  if (eachWord) {
    const strArr = stringVal.split(" ");
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }

    return strArr.join(" ");
  } else {
    return stringVal.charAt(0).toUpperCase() + stringVal.slice(1);
  }
}
