let table_item = document.querySelectorAll(".table_item");
let table_container = document.querySelector(".table_container");
let random = 0;
let arr = [0,1,2,3,4,5,6,7,8];
let arr1 = new Array(9);

table_container.addEventListener('click', function(event) {
    if ((event.target.className = "table_item") && (event.target.innerText !== "O") && (event.target.innerText !== "X")){
    // console.log(event.target.innerText);
    let index = event.target.id;
    console.log("Number click " + index);
    event.target.innerText = "X";
    arr.splice(arr.indexOf(parseInt(index)),1);
    console.log('first ' + arr);
    /* Index of random */

    random = Math.round(Math.random() * (arr.length-1));
    table_item[parseInt(arr[random])].innerText = "O";
    
    console.log("Random number: " + random);
    // console.log("Random index " + (table_item[(arr.indexOf(arr[random]))]));
    console.log( "Random index " + (parseInt(arr[random])));
    
    arr.splice(random,1);
    
    console.log('second ' + arr);

    if (((table_item[0].innerText === "X")&&
    (table_item[1].innerText === "X")&&
    (table_item[2].innerText === "X")) ||
    ((table_item[3].innerText === "X")&&
    (table_item[4].innerText === "X")&&
    (table_item[5].innerText === "X")) ||
    ((table_item[6].innerText === "X")&&
    (table_item[7].innerText === "X")&&
    (table_item[8].innerText === "X")) ||
    ((table_item[0].innerText === "X")&&
    (table_item[3].innerText === "X")&&
    (table_item[6].innerText === "X"))||
    ((table_item[1].innerText === "X")&&
    (table_item[4].innerText === "X")&&
    (table_item[7].innerText === "X"))||
    ((table_item[2].innerText === "X")&&
    (table_item[5].innerText === "X")&&
    (table_item[8].innerText === "X"))||
    ((table_item[0].innerText === "X")&&
    (table_item[4].innerText === "X")&&
    (table_item[8].innerText === "X"))||
    ((table_item[2].innerText === "X")&&
    (table_item[4].innerText === "X")&&
    (table_item[6].innerText === "X"))
      
    )     {    alert("X is winner");}
    else if (((table_item[0].innerText === "O")&&
    (table_item[1].innerText === "O")&&
    (table_item[2].innerText === "O")) ||
    ((table_item[3].innerText ==="O")&&
    (table_item[4].innerText === "O")&&
    (table_item[5].innerText === "O")) ||
    ((table_item[6].innerText ==="O")&&
    (table_item[7].innerText === "O")&&
    (table_item[8].innerText === "O")) ||
    ((table_item[0].innerText ==="O")&&
    (table_item[3].innerText === "O")&&
    (table_item[6].innerText === "O"))||
    ((table_item[1].innerText ==="O")&&
    (table_item[4].innerText === "O")&&
    (table_item[7].innerText === "O"))||
    ((table_item[2].innerText ==="O")&&
    (table_item[5].innerText === "O")&&
    (table_item[8].innerText === "O"))||
    ((table_item[0].innerText ==="O")&&
    (table_item[4].innerText === "O")&&
    (table_item[8].innerText === "O"))||
    ((table_item[2].innerText ==="O")&&
    (table_item[4].innerText === "O")&&
    (table_item[6].innerText === "O"))
    ) { alert("O is winner");
    }

    
        let sum = [];
        for (let k = 0; k < 8; k++) {
            sum.push(table_item[k].innerText);
        }
        

        // let index1 = 0;
        // let result = [];
        // let arr1 = [];
        // for (let i = 0; i < 3; i++) {
        //     arr1 = [];
        //     for (let j = 0; j < 3; j++) {
        //         arr1.push(sum[index1++])
        //     }
        //     result.push(arr1)
        // }

        // console.log(result)
        console.log(sum);


    }


});



// toCheckRandom(random, arr)
// if ((event.target.className = "table_item") && (event.target.innerText !== "O")) {
    //     random = Math.round(Math.random()*8);
    //     event.target.innerText = "X";
    //     for (let i = 0; i < (9 - arr.length); i++) {
        //         if (random !== arr[i]) {
            //             table_item[random].innerText = "O";
            //             arr.push(random);
    //             console.log(arr);
    //         }           
    //     }
    
    // }
    

function resultInArr() {
    let tic = [0,1,2,3,4,5,6,7,8];
let index = 0;
let result = [];
let arr = [];
for (let i =0; i<3; i++){
arr = [];
  for (let j=0; j<3; j++){
    arr.push(tic[index++])
  }
result.push(arr)
}

console.log(result)

}



    // function toCheckRandom(randomX, arrX) {
    //     for (let i = 0; i < (9 - arrX.length); i++) {
    //         if (randomX !== arrX[i]) {
    //             console.log(randomX, arrX[i]);
                
    //             arrX.push(randomX)
    //         }
    //     }
    // }

    // function checkPlace() {
    //     let id = Math.round(Math.random()*8);
    //     if (arr1[id]) {
    //         checkPlace() } 
    //         else { move(id, "checkPlace")
    //     }
    // }



















        // random = Math.round(Math.random()*8);
        // console.log(random)
        // while ((table_item[random].innerText !=="X") && (table_item[random].innerText !=="O")){
        //     table_item[random].innerText = "O";
        //     break;
        // } 


        //  if (table_item[Math.round(Math.random()*8)].innerText != "X"){
        //      table_item[Math.round(Math.random()*8)].innerText = "O";
        // }
    

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
