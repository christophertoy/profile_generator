const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicnmaes are also acceptable :) ", (name) => {

  rl.question("Whats an acivity that you like doing? ", (activity) => {

    rl.question("What do you listen to while doing that? ", (music) => {
 
      rl.question("What kind of food do you like? ", (food) => {
    
        rl.question("Which sport is your absolute favourite? ", (sport) => {
      
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
       
            console.log(`Hey there I'm ${name}.`,`In my free time I love ${activity}.`,`I really enjoy listening to ${music} music.`,`Right now my favourtie food is ${food}.`,`I am a huge ${sport} fan!`,`My superpower is ${power}!`);

            rl.close();
          });
         
        });
    
      });

    });
  
  });

});

