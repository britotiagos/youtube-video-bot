const readline = require("readline-sync");
function start() {
  const content = {};
  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();

  function askAndReturnSearchTerm() {
    return readline.question("Type a Wikipedia search term: ");
  }
  function askAndReturnPrefix() {
    const prefixes = ["Who is", "What is", "THe history of"];
    const selectedPrefixIndex = readline.keyInSelect(
      prefixes,
      "Choose one option : "
    );
    const selectedPrefixTest = prefixes[selectedPrefixIndex];

    return selectedPrefixTest;
  }

  console.log(content);
}

start();
