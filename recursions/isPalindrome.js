/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    // ваш код здесь
    let string = str
        .replaceAll(" ", "")
        .replaceAll(",", "")
        .replaceAll(":", "")
        .toLowerCase();

    if (string.length <= 1) {
        return true;
    }
    let firstLetter = string[0];
    let lastLetter = string[string.length - 1];

    if (firstLetter === lastLetter) {
        let stringWithoutFirstAndLastLetters = string.substring(
            1,
            string.length - 1
        );
        return isPalindrome(stringWithoutFirstAndLastLetters);
    } else {
        return false;
    }
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
