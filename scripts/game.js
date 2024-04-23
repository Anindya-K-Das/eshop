import {newGames} from '../data/featuredGames.js';


let newGamesHTML = '';


newGames.forEach((game) =>{
    newGamesHTML += `
    <div class= "videogame">

                    <div class="gamePreview">
                        <img class="gameImage" src="${game.image}">
                    </div>
    
                    <div class="gameInfo">
                        <div>
                            <button class="bagbtn"><img class="bagButtonimg" src="gameImages/Nintendo_eShop_-_Icon.png"><p class="addToBagtxt">Add</p></button>
                            
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
})

document.querySelector('.gamesGridjs').innerHTML = newGamesHTML;