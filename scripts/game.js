import {newGames} from '../data/featuredGames.js';
import {retro} from '../data/retroGames.js';



let newGamesHTML = '';
newGames.forEach((game) =>{
    newGamesHTML += `
    <div class= "videogame">

                    <div class="gamePreview">
                        <img class="gameImage" src="../${game.image}">
                    </div>
    
                    <div class="gameInfo">
                        <div>
                            <button class="bagbtn"><img class="bagButtonimg" src="../gameImages/Nintendo_eShop_-_Icon.png"><p class="addToBagtxt">Add</p></button>
                            
                        </div>

                        <div class="gameTitle">
                        ${game.title}
                        </div>
                        
                        <div class="price"> 
                            <p>$${(game.priceCents/100).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
    `
});

let gameGridQ = document.querySelector('.gamesGridjs');

gameGridQ.innerHTML = newGamesHTML;


let retroGames = '';
let rbtn = document.querySelector('#rbtn');
retro.forEach((retrog) =>{
    retroGames += `
    
    <div class= "videogame">

                    <div class="gamePreview">
                        <img class="gameImage" src="../${retrog.image}">
                    </div>
    
                    <div class="gameInfo">
                        <div>
                            <button class="bagbtn"><img class="bagButtonimg" src="../gameImages/Nintendo_eShop_-_Icon.png"><p class="addToBagtxt">Add</p></button>
                            
                        </div>

                        <div class="gameTitle">
                            <p>${retrog.title}</p>
                        </div>
                        
                        <div class="price"> 
                            <p>$${(retrog.priceCents/100).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
    `
});
rbtn.onclick = function(){
    document.querySelector('.gamesGridjs').innerHTML = retroGames;
    document.querySelector('.currentPage').innerHTML = 'Retro Games'
};

let fbtn = document.querySelector('#fbtn');

fbtn.onclick = function(){
    document.querySelector('.gamesGridjs').innerHTML = newGamesHTML;
    document.querySelector('.currentPage').innerHTML = 'Featured Games'
}

