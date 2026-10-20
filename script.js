


let cards = ["😺", "😺", "👺", "👺", "👹", "👹", "👿", "👿", "👽", "👽", "🐷", "🐷", "🐻", "🐻", "🐼", "🐼"];


let board = document.getElementById("board");
let flipped = [];
let moves = 0;
let matched = 0;

function createcard() 
{
    board.innerHTML = "";                          //to empty the board 
    cards.sort(() => Math.random() - 0.5);         //shuffle cards

    cards.forEach(function (emoji)
    {
        let card = document.createElement("div");
        card.textContent = "?";
        card.dataset.emoji = emoji;                //hidden content
        board.appendChild(card);                   //add card to board

        card.addEventListener("click",  ()=> 
        {
            if (flipped.length < 2 && card.textContent == "?") 
            {
                card.textContent = card.dataset.emoji;
                flipped.push(card);

            if (flipped.length == 2) 
            {
                    moves++;
                    document.getElementById("moves").textContent = `Moves: ${moves}`;

              if (flipped[0].dataset.emoji == flipped[1].dataset.emoji)       //agar match hogye to card khule rhenge emojis dekhege
              {
                flipped = [];
                matched++;
                if (matched == 8) 
                {
                 alert(`you won! Moves: ${moves}`);
                }
              }

            else                                                  //agar match nahi huye and 1 sec badd card dubara flip hojaynge ? ye dikhega
            {
                setTimeout(function () 
                {
                 flipped[0].textContent = "?";
                 flipped[1].textContent = "?";
                 flipped = [];
                }, 1000);
            }
            }
            }
        })
    });
}
createcard();
document.getElementById("restart").addEventListener("click", ()=> {      //to restart the button
    flipped = [];
    moves = 0;
    matched = 0;
    document.getElementById("moves").textContent = "Moves: 0";
    createcard();
})


