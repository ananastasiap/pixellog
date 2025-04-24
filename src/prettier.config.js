/** @type {import("prettier").Config} */
export default {
  printWidth: 100, // максимальная длина строки — 100 (удобно на 13-15" экранах)
  tabWidth: 2, // отступ в 2 пробела
  useTabs: false, // не используем табы
  semi: true, // ставим ; в конце строк
  singleQuote: false, // используем двойные кавычки (как ты хотела)
  quoteProps: "consistent", // кавычки в ключах объектов — если хотя бы один требует
  trailingComma: "all", // запятая после последнего элемента (массивы, объекты, параметры функций)
  bracketSpacing: true, // пробелы внутри {объектов}
  jsxSingleQuote: false, // двойные кавычки и в JSX
  bracketSameLine: false, // закр. скобка JSX на новой строке (удобнее читать)
  arrowParens: "always", // круглые скобки вокруг аргументов стрелочных функций
  endOfLine: "auto", // использовать системные окончания строк (LF или CRLF)
  proseWrap: "preserve", // не переносить длинные строки в Markdown
};
