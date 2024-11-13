document.getElementById("check-btn").addEventListener("click", checkPalindrome);

function checkPalindrome() {
    const inputText = document.getElementById("text-input").value;
    const result = document.getElementById("result");    
    if (!inputText.trim()) {
        alert("Please input a value");
        return;
    }
    const cleanText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
    const isPalindrome = cleanText === cleanText.split("").reverse().join("");
    if (isPalindrome) {
        result.textContent = `${inputText} is a palindrome.`;
    } else {
        result.textContent = `${inputText} is not a palindrome.`;
    }
}
