
    const testString = `Cats conserve energy by sleeping more than most animals, especially as they grow older. The daily duration of sleep varies, usually between 12 and 16 hours, with 13 and 14 being the average. Some cats can sleep as much as 20 hours. The term "cat nap" for a short rest refers to the cat's tendency to fall asleep (lightly) for a brief period. While asleep, cats experience short periods of rapid eye movement sleep often accompanied by muscle twitches, which suggests they are dreaming. Outdoor cats are active both day and night, although they tend to be slightly more active at night. To aid with navigation and sensation, cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage.`;

        /* Write a function that calculates the number of occurences of words in the above string and prints it in "container" above 
        Example: 
            sleeping: 1
            cats: 4
            objects: 2
            conserve: 1
            term: 1
            ... etc
      */

    function occurence(s) {
            const strArray = s.toLowerCase().split(" ");
            console.log(strArray)
            for (let i = 0; i < strArray.length; i++){
                let count = 0;
                for (let j = 0; j < strArray.length; j++) {
                    if (strArray[i] === strArray[j]) {
                        count++;
                    }
                }
            console.log(strArray[i] +"::"+count);
            }
        }

    occurence(testString);

