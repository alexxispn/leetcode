export const validParentheses = (text: string): boolean => {
  const stack: string[] = [];
  const closingToOpening = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ]);

  const isOpeningBracket = (char: string): boolean =>
    !closingToOpening.has(char);

  const isMatchingPair = (opening: string | undefined, closing: string): boolean =>
    closingToOpening.get(closing) === opening;

  for (const char of text) {
    if (isOpeningBracket(char)) {
      stack.push(char);
    } else {
      const lastOpeningBracket = stack.pop();
      if (!isMatchingPair(lastOpeningBracket, char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
