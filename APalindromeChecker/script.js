const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkForPalindrome = input => {
    const originalInput = input;

    if(input === '') {
        alert("Please input a value");
        return;
    }

    // Remove the previous result
    resultDiv.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    //Biểu thức chính quy (regular expression)
    // /: Bắt đầu or Kết thúc của biểu thức chính quy. 
    //Ký tự ^: phủ định
    // Cờ g là để khớp tất cả các ký tự không chỉ là ký tự đầu tiên. 
    // Cờ i là để bỏ qua sự phân biệt chữ hoa và chữ thường.

    let resultMsg = 
    `<strong>${originalInput}</strong> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;
    //[...lowerCaseStr] tạo ra một mảng các ký tự từ chuỗi lowerCaseStr.

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    // Show the result
    resultDiv.classList.remove("hidden");
}

checkBtn.addEventListener("click", () => {
    checkForPalindrome(textInput.value);
    textInput.value = '';
})

textInput.addEventListener("keydown", e => {
    if(e.key === 'Enter') {
        checkForPalindrome(textInput.value);
        textInput.value = '';
    }
    //Tham số e, đại diện cho sự kiện
    //Nếu là phím "Enter", hai hành động sẽ được thực hiện
})
