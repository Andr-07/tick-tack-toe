let table_item = document.querySelectorAll(".table_item");
let table_container = document.querySelector(".table_container");
let random = 0;
let key = false;

table_container.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    if ((event.target.className = "table_item") && (event.target.innerText !== "O")) {
        event.target.innerText = "X";
        console.log(key);
        console.log(random);
        random = Math.round(Math.random()*8);
        while (key === false) {
            if ((table_item[random].innerText !=="X") && (table_item[random].innerText !=="O")){
                table_item[random].innerText = "O";
                key = true;}
                else { key = false;}
            }
        }

        // random = Math.round(Math.random()*8);
        // console.log(random)
        // while ((table_item[random].innerText !=="X") && (table_item[random].innerText !=="O")){
        //     table_item[random].innerText = "O";
        //     break;
        // } 


        //  if (table_item[Math.round(Math.random()*8)].innerText != "X"){
        //      table_item[Math.round(Math.random()*8)].innerText = "O";
        // }
    
});

// while (key = false) {
//     random = Math.round(Math.random()*8);
//     if ((table_item[random].innerText !=="X") && (table_item[random].innerText !=="O")){
//         table_item[random].innerText = "O";
//         key = false;}
//         else { key = true;}
//     }
// }

// function putNull() {
//     while ((table_item[i] !="X") && (table_item[i] !="O")) {
//         table_item[i].innerText = "O";
//         i++;
//     }
    
//     // for (let i = 0; i < table_item.length; i++) {
//     //     i = Math.round(Math.random()*8);
//     //     if ((table_item[i] !="X") && (table_item[i] !="O")) {
//     //         table_item[i].innerText = "O";
//     //     }
//     } 
