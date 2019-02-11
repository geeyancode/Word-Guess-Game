 
       
                {/* // variable of wordbank all of our words and hints
                // all the words is an array of objects, which allowes us to get the name and hint */}
                
                    var currenHint =[];
                    var attempt = 10;
                    var wrongLetter = [];
                    var wordBank = [
                        {name: "Thor", Hint: "Who is the God of Thunder?"},
                        {name: "Hulk", Hint: "Who likes to smash things?"},
                        {name: "Wolverine", Hint: "Who has sharp claws?"},
                        {name: "Ironman", Hint: "Who is the best Avenger?"},
                        ]
                
                {/* // This function is the userInput function keycodes are number values of letter keys on your keyboard
                
                     // we turning everything into lower case
                     // we calling letterCheck variable with userInput value */}
                     
                        document.onkeydown = function(event) {
                            if(event.keyCode >= 65 && event.keyCode <= 90) {
                                userInput= event.key.toLowerCase()
                                console.log(userInput);
                                letterCheck(userInput);
                            };
                        }
                        
                        
                        
                        //
                            // We need to  pick a name at random  from the object this function will do that
                            var randomIndex = Math.floor(Math.random() * wordBank.length); // get a random index
                
                            // let us pick the word from wordBank
                            currentWord = wordBank[randomIndex].name.toLowerCase(); // use random index
                
                            currenHint = wordBank[randomIndex].Hint; 
                            document.getElementById("hint").innerHTML = currenHint;
                           
                            console.log(currentWord); // what word?
                            
                            
                            // we need to write a function for generate the length of letter lines
                            var letterLines = [];
                            
                            for (var i = 0; i < currentWord.length; i++) {
                                document.getElementById("letterLines").innerHTML = document.getElementById("letterLines").innerHTML + "_ ";
                                // letterLines.push serves the purpose of
                                letterLines.push("_ ");
                                console.log(letterLines)
                            }
                            
                //  now we check the user input agaisnt the currentWord
                // if the user input matches the currentWord[i] then we replace the letterlines[i] with that letter
                // else we add the letter to the wrong  guess and subtract one from the attempts  
                // var attempt =[];
                    function letterCheck(userInput){
                        document.getElementById("letterLines").innerHTML = ""; // empty it
                        for(var i = 0; i < currentWord.length; i++){
                        // if the userInput (letter) matches the currentWord it gets displayed on the screen
                        if (userInput == currentWord[i]) {
                            letterLines[i] = userInput; 
                            
                           
                        }
                      
                       // adding underline after each underline
                       if(letterLines[i] == "_ "){
                           document.getElementById("letterLines").innerHTML += "_ ";
                        }     
                      // adding underline after each letter
                        else {
                            document.getElementById("letterLines").innerHTML += letterLines[i];       
                           
                        }
                        
                    }
                    $("userInput").append(userInput);
                    console.log('test', userInput);
                    // this statement is used to filter out the wrong guessed letters. 
                    // it should only display wrongletters
                         if (currentWord.indexOf(userInput) == -1){
                            document.getElementById("wrongLetter").innerHTML += userInput;
                            attempt--;
                            document.getElementById("attemptsLeft").innerHTML = attempt;
                            console.log('attempt',attempt); 
                            console.log('currentWord',currentWord); 
                            console.log('userinput',userInput); 
                        }
                      
                        checkWin();
                        console.log("checkWin",checkWin); 
                }           
                
                
             
            
                            // This function is for checking if player wins
                            // collected all the correct letters and compared to currentWord 
                    function checkWin() {
                        if(document.getElementById("letterLines").innerHTML === currentWord){ // so proud!!!!!
                            document.getElementById("result").innerHTML = "You Win!";
                            console.log("result", result);
                            }
                                      
                        else if (attempt===0) {         
                            document.getElementById("result").innerHTML = "You lost!";
                            console.log("result", result);
                            event();
                                }
                    } 
                
                            // function rounds() {
                            //     document.getElementById("guessesLeft").innerHTML = guessesLeft;
                            //     document.getElementById("answersGuessed").innerHTML = wrongLetters;
                            //     document.getElementById("secretAnswer").innerHTML = output.join(" ");
                                 
                            //     if(letters.toString() == output.toString()) {
                            //       wins++
                            //       document.getElementById("game").innerHTML = wins;
                            //       play();
                            //     } else if (attempt===0) {
                            //         losses++
                            //         document.getElementById("attemptsLeft").innerHTML = losses;
                            //         gameStart();
                            //     }
                            //   };
                
                // current word has a matching hint  current word  currentWord[i] = currentHint[i]
                
         