const prompt = require('prompt-sync')();

const startGame = () => {
    console.log();
    console.log("(Yes)  (I don't know)   (No)");
    console.log();
    const start = prompt('Ready to play? ');
    if (start === 'yes'|| start === 'Yes' || start === 'y' || start === 'Y'){
        whichAisle();
    } else if (start === "I don't know"|| start === "idk"||start === "i don't know"){
        startGame2();
    } else if (start === 'no'|| start === 'No'|| start === 'n'){
        process.exit();
    } else {
        startGame();
    }
}

const startGame2 = () => {
    console.log()
    console.log("(Yes)   (No)");
    const howAboutNow = prompt('... how about now? ');
    if (howAboutNow === 'yes'|| howAboutNow === 'Yes' || howAboutNow  === 'y' || howAboutNow === 'Y'){
        whichAisle();
    } else if (howAboutNow === 'no'|| howAboutNow === 'No' || howAboutNow  === 'n'){
        process.exit();
    } else {
        startGame2();
    }
}

const whichAisle = () => {
    console.log();
    console.log('  ____||____ ');
    console.log(' ///////////\ ');
    console.log('///////////  \ ');
    console.log('|   FOOD  |  | ');
    console.log('|[] | | []|[]| ');
    console.log('|   | |   |  | ');
    console.log('               ');
    console.log("You're at your local grocery store.")
    const aisle = prompt("Which number aisle would you like to go down? ");
    if (aisle === '1'|| aisle === 'one'|| aisle === 'One'){
        aisle1();
    } else if (aisle === '2'|| aisle === 'two'|| aisle === 'Two'){
        aisle2();
    } else if (aisle === '3' || aisle === 'three'|| aisle === 'Three'){
        aisle3();
    } else if (aisle === '4' || aisle === 'four'|| aisle === 'Four'){
        aisle4();
    } else if (aisle === '5' || aisle === 'five'|| aisle === 'Five'){
        aisle5();
    } else {
       console.log("You can't do that...");
       whichAisle();
    }
}

const aisle1 = () => {
    console.log();
    console.log(' ________     ________');
    console.log('|  Hot   |   |  Cold  |');
    console.log('| Cereal |   | Cereal |');
    console.log('|        |   |        |');
    console.log(' --------     --------');
    console.log();
    console.log('This is the cereal aisle. Yum!')
    const aisle1Prompt = prompt('Do you want hot cereal or cold cereal? ');
    if (aisle1Prompt === 'hot' || aisle1Prompt === 'Hot'|| aisle1Prompt === 'hot cereal' || aisle1Prompt === 'Hot Cereal'|| aisle1Prompt === 'Hot cereal'|| aisle1Prompt === 'hot Cereal'){
        cook1();
    } else if (aisle1Prompt === 'cold' || aisle1Prompt === 'Cold'|| aisle1Prompt === 'cold cereal' || aisle1Prompt === 'Cold Cereal'|| aisle1Prompt === 'Cold cereal' || aisle1Prompt === 'cold Cereal'){
        cook1();
    } else {
        aisle1();
    }
}
 
    const cook1 = () => {
        console.log();
        console.log('You checkout and drive back Home - Wow, your stomach is grumbling!');
        const cook1reply = prompt('Ready to start cooking? ');
        if (cook1reply === 'yes'|| cook1reply === 'Yes' || cook1reply === 'y'){
            stillHungry1();
        } else if (cook1reply === 'no'|| cook1reply === 'No' || cook1reply === 'n'){
            areYouSure1();
        } else {
            cook1()
        }
    }
    
    const stillHungry1 = () => {
        console.log();
        console.log("You didn’t really have to cook your cereal, but okay!");
        console.log("You finish eating but you’re still of hungry.");
        const backToTheStore = prompt("Do you want to go back to the store? ");
        if (backToTheStore === 'yes' || backToTheStore === 'Yes'|| backToTheStore === 'y'){
            whichAisle();
        } else if (backToTheStore === 'no' || backToTheStore === 'No'|| backToTheStore === 'n'){
            gameOver();
        } else{
            stillHungry1();
        }
    }

    const areYouSure1 = () => {
        console.log();
        console.log("Are you sure? You’re pretty hungry…");
        const lastChance1 = prompt('Do you want to cook?');
        if (lastChance1 === 'yes'|| lastChance1 === 'Yes' || lastChance1 === 'y'){
            stillHungry1();
        } else if(lastChance1 === 'no' || lastChance1 === 'No' || lastChance1 === 'n'){
            gameOver();
        } else {
            areYouSure1();
        }
    }

const aisle2 = () => {
    console.log();
    console.log ('(Mexican) (Italian) (Chinese)');
    console.log();
    console.log ('This is the international food isle. Fun!');
    const aisle2prompt = prompt('Do you like Mexican, Italian, or Chinese food? ');
    if (aisle2prompt === 'Mexican' || aisle2prompt === 'mexican'){
        cook2();
    } else if (aisle2prompt === 'Italian' || aisle2prompt === 'italian'){
        cook2();
    } else if(aisle2prompt === 'Chinese' || aisle2prompt === 'chinese'){
        cook2();
    } else {
        aisle2();
    }
}
    const cook2 = () => {
        console.log('You checkout and drive back Home - Wow, your stomach is grumbling!');
        const cook2reply = prompt('Ready to start cooking? ');
        if (cook2reply === 'yes'|| cook2reply === 'Yes' || cook2reply === 'y'){
            console.log('You did great! You could totally beat Bobby Flay.');
            youWin();
        } else if (cook2reply === 'no'|| cook2reply === 'No' || cook2reply === 'n'){
            areYouSure2();
        } else {
            cook2();
        }
    }

    const areYouSure2 = () => {
        console.log("Are you sure? You’re pretty hungry…");
        const lastChance2 = prompt('Do you want to cook? ');
        if (lastChance2 === 'yes'|| lastChance2 === 'Yes' || lastChance2 === 'y'){
            console.log('That was close, but you ate in the nick of time!')
            youWin();
        } else if(lastChance2 === 'no' || lastChance2 === 'No' || lastChance2 === 'n'){
            gameOver();
        } else {
            areYouSure2();
        }  
    }

const aisle3 = () => {
    console.log(' ________     ________     ________');
    console.log('| Salty  |   | Sweet  |   |        |');
    console.log('| Snacks |   | Snacks |   |        |');
    console.log('|        |   |        |   |        |');
    console.log(' --------     --------     --------');
    console.log('This is the snack food isle. Dope! ');
    const aisle3prompt = prompt('Are you in the mood for salty or sweet? ');
    if (aisle3prompt === 'Salty' || aisle3prompt === 'salty'|| aisle3prompt === 'salty snacks'|| aisle3prompt === 'Salty Snacks'){
        cook3();
    } else if (aisle3prompt === 'Sweet' || aisle3prompt === 'sweet'|| aisle3prompt === 'Sweet Snacks' || aisle3prompt === 'sweet snacks'){
        cook3();
    } else if (aisle3prompt === 'Scooby Snacks' || aisle3prompt === 'scooby snacks' || aisle3prompt === 'Scooby snacks'){
        scoobyEasterEgg();
    } else {
        aisle3();
    }
}

     const cook3 = () => {
        console.log()
        console.log('You checkout and drive back Home - Wow, your stomach is grumbling!');
        const cook3reply = prompt('Ready to start cooking? ');
        if (cook3reply === 'yes'|| cook3reply === 'Yes' || cook3reply === 'y'){
            stillHungry3();
        } else if (cook3reply === 'no'|| cook3reply === 'No' || cook3reply === 'n'){
            areYouSure3();
        } else {
            cook3();
        }
    }
    const stillHungry3 = () => {
        console.log()
        console.log('This snack required no cooking, but you ate it!');
        console.log('You’re still pretty hungry...')
        const backToTheStore = prompt("Do you want to go back to the store? ");
        if (backToTheStore === 'yes' || backToTheStore === 'Yes'|| backToTheStore === 'y'){
            whichAisle();
        } else if (backToTheStore === 'no' || backToTheStore === 'No'|| backToTheStore === 'n'){
            gameOver();
        } else{
            stillHungry3();
        }
    }


    const areYouSure3 = () => {
        console.log("Are you sure? You’re pretty hungry…");
        const lastChance3 = prompt('Do you want to cook?');
        if (lastChance3 === 'yes'|| lastChance3 === 'Yes' || lastChance3 === 'y'){
            stillHungry3()
        } else if(lastChance3 === 'no' || lastChance3 === 'No' || lastChance3 === 'n'){
            gameOver();
        } else {
            areYouSure3(); 
        }
    }

const aisle4 = () => {
    console.log();
    console.log('This is the frozen food isle. Too cold... ');
    const aisle4prompt = prompt('Do you look at TV dinners, or frozen veggies? ');
    if (aisle4prompt === 'TV dinners' || aisle4prompt ===  'tv dinners'|| aisle4prompt ===  'TV Dinners'){
        cook4();
    } else if(aisle4prompt === 'Frozen Veggies' || aisle4prompt ===  'frozen veggies'|| aisle4prompt ===  'Frozen Veggies'|| aisle4prompt ===  'frozen Veggies'){
        cook4();
    } else{
        aisle4();
    }
}


    const cook4 = () => {
        console.log()
        console.log('You checkout and drive back Home - Wow, your stomach is grumbling!');
        const cook4reply = prompt('Ready to start cooking? ');
        if (cook4reply === 'yes'|| cook4reply === 'Yes' || cook4reply === 'y'){
            console.log("You do a dance for the minute 30 seconds it’s in the microwave... ");
            console.log("and you’re ready to go! Your parents would be proud.")
            youWin();
        } else if (cook4reply === 'no'|| cook4reply === 'No' || cook4reply === 'n'){
            areYouSure4();
        } else {
            cook4();
        }
    }


     const areYouSure4 = () => {
        console.log("Are you sure? You’re pretty hungry…");
        const lastChance4 = prompt('Do you want to cook? ');
        if (lastChance4 === 'yes'|| lastChance4 === 'Yes' || lastChance4 === 'y'){
            console.log('That was close, but you ate in the nick of time!')
            youWin();
        } else if(lastChance4 === 'no' || lastChance4 === 'No' || lastChance4 === 'n'){
            gameOver();
        } else {
            areYouSure4();
        }
    }
            

const aisle5 = () => {
    console.log();
    console.log('This is the meat isle. Meaty!');
    const aisle5prompt = prompt('Should we look at fish, chicken, or tofu? ');
    if (aisle5prompt === 'fish'|| aisle5prompt === 'Fish'){
        cook5();
    } else if (aisle5prompt === 'chicken'||aisle5prompt === 'Chicken'){
        cook5();
    } else if (aisle5prompt === 'tofu' ||aisle5prompt === 'Tofu' ){
        cook5();
    } else{
        aisle5();
    }
} 


    const cook5 = () => {
        console.log();
        console.log('You checkout and drive back Home - Wow, your stomach is grumbling!');
        const cook4reply = prompt('Ready to start cooking? ');
        if (cook4reply === 'yes'|| cook4reply === 'Yes' || cook4reply === 'y'){
            console.log("Hell yeah, you’re cooking it up like you’re salt bae.");
            console.log("That guy on instagram with the sunglasses and the salt?")
            console.log("You know what I mean. It’s delicious!")
            youWin();
        } else if (cook4reply === 'no'|| cook4reply === 'No' || cook4reply === 'n'){
            areYouSure5();
        } else {
            cook5();
        }
    }

    const areYouSure5 = () => {
        console.log("Are you sure? You’re pretty hungry…");
        const lastChance5 = prompt('Do you want to cook?');
        if (lastChance5 === 'yes'|| lastChance5 === 'Yes' || lastChance5 === 'y'){
            console.log('That was close, but you ate in the nick of time!')
            youWin();
        } else if(lastChance5 === 'no' || lastChance5 === 'No' || lastChance5 === 'n'){
            gameOver();
        } else {
            areYouSure5();
        }
    }

const scoobyEasterEgg = () =>{
    console.log()
    console.log(' |\_/|     ')
    console.log(' | @ @   ')
    console.log(' |   <>  ')
    console.log(' |  _/\ ')
    console.log('Did someone say, scooby snacks?')
    console.log('')
    console.log('You found the easter egg!')
    console.log('Should have known you were good at solving mysteries.')
    aisle3()
}

const gameOver = () => {
    console.log();
    console.log("Wow you got so hungry you died!")
    console.log('      .-. ')
    console.log('     (o.o)')
    console.log('      |=| ')
    console.log();
    console.log("Sorry fam.");
    process.exit();
}    

const youWin = () => {
    console.log();
    console.log('You won!');
    console.log("                      __");
    console.log('                     // \ ');
    console.log("                     \\_/ //");
    console.log("   ''-.._.-''-.._.. -(||)(')");
    console.log("                     ''' ");
    console.log('     ');
    console.log('Save the bees!');
    console.log();
}
    
startGame()