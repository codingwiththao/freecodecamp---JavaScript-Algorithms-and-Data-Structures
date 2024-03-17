const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-option");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;

/*Arrow functions: trường hợp như callback functions giữ ngữ cảnh lexical của "this"*/
dateOptionsSelectElement.addEventListener ("", () => {
    switch (dateOptionsSelectElement) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            break;
        case "mm-dd-yyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year}-${hours} Hours ${minutes} Minutes`;
            break; 
        dafault:
            currentDateParagraph.textContent = formattedDate;
    }
});
