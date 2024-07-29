let boxes = document.querySelectorAll(".box") ; //access the box classes so that we can make them work 
let resetbtn = document.querySelector("#btn") ; //access the reset btn to make work it for us 
let newButton = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container")
//let elements = document.querySelectorAll("#el")
//const checkWinnerButton = document.getElementById('checkWinnerButton');


let turn = true ; //playerO 

const newColor1 = '#E6B7AD';
const newColor2 = '#BEB6DB';


const  winpatterns = [
    [0 , 1 ,2],
    [0 , 3, 6],
    [0 , 4 ,8],
    [1 , 4 ,7],
    [2 , 5 ,8],
    [3 , 4 ,5],
    [6 , 7 ,8],
    [2 , 4 ,6],

]



    
document.addEventListener('DOMContentLoaded', (event) => {

    const resetgame = () =>{
        turn = true ;
        enabledboxes();
        msgcontainer.classList.add("hide");
    }

    boxes.forEach(( box )=> {
       // Check what box is
        box.addEventListener('click', () => {
           // console.log('Box clicked:');
            if(turn)
            {
                box.innerHTML = "O" ;
                box.style.color = newColor1 ;
                turn = false ;
            }
            else{
                box.innerHTML = "X";
                box.style.color = newColor2 ;
                turn = true ;
            }
            box.disabled = true ;

            checkwinner();
        });
    });

    let disabledboxes = () => {
        for( let box of boxes){
            box.disabled = true ;
        }
    };

    const enabledboxes = () => {
        for( let box of boxes){
            box.disabled = false ;
            box.innerText = "";
        }
    };


let showwinner = (winner) => {
   // console.log(msg);
    msg.innerText = `Congractulation winner is ${winner}` ;
    console.log(msgcontainer)
    msgcontainer.classList.remove('hide');
    disabledboxes();
}

const checkwinner = () => {
    for(let patterns of winpatterns){
       // console.log (patterns[0] , patterns[1] , patterns[2]) ; 
       // console.log (boxes[patterns[0]].innerText, 
     //   boxes[patterns[1]].innerText, 
      //  boxes[patterns[2]].innerText) ; 
    let posval1 = boxes[patterns[0]].innerText ;
    let posval2 = boxes[patterns[1]].innerText ;
    let posval3 = boxes[patterns[2]].innerText ;
    if(posval1 != "" && posval2 != "" && posval3 != "")
    {
        if(posval1 === posval2 && posval2=== posval3)
        {
           // console.log("winner" , posval1);
            showwinner(posval1)
        }
    }
    }
}

newButton.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);

});

