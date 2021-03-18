        const presults = document.createElement('p');


        function computerPlay() {
            // Random Picker

            let turn = Math.floor((Math.random() * 3 ) + 1);

            // Assignment of random picker

            if (turn === 1) {
                turn = 'Rock';
            } else if (turn === 2) {
                turn = 'Paper'
            } else {
                turn = 'Scissors';
            }

            return turn;
        }

        function playerSelection() {

            let choice = prompt("'Rock', 'Paper' || 'Scissors'");

            if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissors') {
                return choice;
            } else {
                prompt("You have entered an invalid choice!");
            }

            choice = choice.toLowerCase();

            return choice;
        }


        // playing a round

        let player1_Score = 0;
        let player2_Score = 0;

        function playRound(player1, player2) {

            player1 = computerPlay();
            player2 = playerSelection();

                if (player1.toLowerCase() === 'rock' && player2.toLowerCase() === 'scissors') {
                    presults.textContent = (`You Lose! ${player1} beats ${player2}`);
                    ++player1_Score;
                } else if (player1.toLowerCase() === 'paper' && player2.toLowerCase() === 'rock') {
                    presults.textContent = (`You Lose! ${player1} beats ${player2}`);
                    ++player1_Score;
             } else if (player1.toLowerCase() === 'scissors' && player2.toLowerCase() === 'paper') {
                presults.textContent = (`You Lose! ${player1} beats ${player2}`);
                    ++player1_Score;
              } else if (player1.toLowerCase() === player2.toLowerCase()) {
                presults.textContent = (`Draw! ${player1} && ${player2}`);
              } else {
                presults.textContent = (`You Win! ${player2} beats ${player1}`);
                    ++player2_Score;
            }

            presults.textContent = (`Computer Score: ${player1_Score}
Your Score    : ${player2_Score}
            `);


        }

        const playerbtn = document.querySelector('#playerbtn');

        playerbtn.addEventListener('click', () => {
            playerSelection()
        })

        const playbtn = document.querySelector('#playbtn');

        playbtn.addEventListener('click', () => {
            playRound();
        })

        const results = document.querySelector('#results');



        results.appendChild(presults);

        /*
        function game() {
            while (player2_Score < 5 && player1_Score < 5) {
                playRound()
            }
        }


        game();
        */