// let inputForm = document.querySelector("#table");
// let input = document.querySelector("#inputID");
// let table = document.querySelector(".time-table");

// // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// // https://developer.mozilla.org/en-US/docs/Web/Events

// inputForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let tableOf = input.value;

//   table.innerHTML = "";

//   for (let i = 1; i <= 12; i++) {
//     //   console.log(tableOf + " x " + i + " =", tableOf * i);
//     const message = `${tableOf} X ${i} = ${tableOf * i}`;

//     table.innerHTML += `${message} <br>`;
//   }
// });

// // navigator.clipboard.writeText("Chandio");
// // navigator.clipboard
// //   .readText()
// //   .then(
// //     (clipText) => (document.querySelector(".editor").innerText += clipText)
// //   );

let tableForm = document.querySelector("#tableForm")
let input = document.querySelector("#inputID")
let printTable = document.querySelector("#time-table")

tableForm.addEventListener("submit" , (event) => {
    event.preventDefault();

    let tableOf = input.value;
    printTable.innerHTML = "" ;

    for (let i = 0; i <= 12; i++) {
        
        const message = `${tableOf} x ${i} = ${tableOf * i}`

        printTable.innerHTML = `${message} <br>`
    }

}
);