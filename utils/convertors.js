export function textToLinkConverter(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s/gi, "-")
}

const text = "What are some of the \"gotchas\" for writing efficient CSS?"
console.log(textToLinkConverter(text))
