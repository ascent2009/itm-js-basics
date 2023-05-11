/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    // ваш код здесь
    str = str
        .replaceAll(" ", "")
        .replaceAll(",", "")
        .replaceAll(":", "")
        .toLowerCase();

    if (str.length == 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, -1));
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
