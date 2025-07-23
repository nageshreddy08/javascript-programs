function findsVowelsandConsonants() {
  let user = "Nageswar";
  let str = user.toLowerCase();
  let vowels = "";
  let vowelsCount = 0;
  let consonantsCount = 0;
  let consonants = "";
  for (let i = 0; i < user.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowels = vowels + str[i];
      vowelsCount++;
    } else {
      consonants = consonants + str[i];
      // console.log(str[i])
      consonantsCount++;
    }
  }
  console.log("vowels are: ", vowels);
  console.log("vowels count: ", vowelsCount);
  console.log("consonants are: ", consonants);
  console.log("consonants count: ", consonantsCount);
}
findsVowelsandConsonants();
