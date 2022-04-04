const name1 = "Uwielbiam JavaScript";
const name2 = "Jestem skromnym programistą";

function longer(str1, str2) {
  return [str1, str2].reduce(
    (acc, str) => (str.length > acc.length ? str : acc),
    ""
  );
}

console.log(longer(name1, name2));
