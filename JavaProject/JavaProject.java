package JavaProject;

//import API's needed here:
import java.util.Scanner;
import java.text.DecimalFormat;

public class JavaProject 
{  

/*--------------------------------------------------------------------------------
main method below: 
includes access specifier - public - required for main, 
(other access specifier options: private & protected)
static (does not require an instance of the class to be created 
for method to run ) , 
return type: "void" (means the method will not return a value ), 
method identifier: "main" 
(all apps must have one main method, 
as it marks the start/entry point of the program when executed), 
arguments/parameters: ( ) data to be sent to the method - 
(more details when methods are covered)
---------------------------------------------------------------------------------*/        
public static void main(String args[ ]) 
        {
               //create any objects if needed (i.e. scanner for keyboard input)
              Scanner input = new Scanner(System.in);
              DecimalFormat fm = new DecimalFormat("0.00");

              //declare data storage space (constants and variables)   
              final int EASY = 10; //Points for easy questions
              final int MEDIUM = 15; //Points for medium questions
              final int HARD = 20; //Point for hard questions
              
              int userPoints = 50; //User starting points
              int userAttempt = 3; //User attempts for each question
              
              String welcome = 
              "╔════════════════════════════════════╗\n" +
              "║   Welcome to Java Beans' Project   ║\n" +
              "╚════════════════════════════════════╝"; //Welcoming string
          
              String gameRules = 
              "Starting Points: Players begin their gaming journey with an initial pool of 50 points.\n" +
              "Difficulty Levels: Players have the flexibility to choose questions from three distinct difficulty levels: Easy, Medium, and Hard. Each level corresponds to a specific point value: 5 points for Easy, 10 points for Medium, and 15 points for Hard questions.\n" +
              "Attempts: Players are granted three attempts to respond to each question.\n" +
              "Point System:\n" +
              "A correct answer results in point accumulation based on the difficulty level of the question.\n" +
              "Easy questions earn 5 points, Medium questions earn 10 points, and Hard questions earn 15 points.\n" +
              "An incorrect answer incurs a deduction in points.\n" +
              "Game Restart:\n" +
              "The game restarts when the player accumulates 150 points.\n" +
              "The game also restarts if the player reaches zero points due to a loss.\n"; //Game rules

              String congrats1 = "Congratulations, your answer is correct!";
              String congrats2 = "Great job! Your answer is correct!";
              String congrats3 = "Congratulations! Your response is accurate!";

              String motivation1 = "Keep trying, you're getting closer!";
              String motivation2 = "You're almost there! Give it another try!";
              String motivation3 = "Keep trying, you're on the right track!";

              String userAns; //User answer

              // Identifiers for easy questions
              //Question 1
              double length;
              double width;
              double area;

              //get  input as required by program specifications
              System.out.println(welcome);
              System.out.print("Would you like to go over the game rules?\n" + 
              "(Y)es or (N)o? ");
              userAns = input.nextLine().toLowerCase();

              if (userAns.charAt(0) == 'y'){
                System.out.println(gameRules);
              }


              //process data as required by program specificationsn
              //Easy questions
              //Question 1
              length = Double.parseDouble(fm.format(Math.random() * 10 + 1));
              width = Double.parseDouble(fm.format(Math.random() * 10 + 1));
              area = Double.parseDouble(fm.format(length * width));
              double answer;

              //display results as required by program specifications
              System.out.print("Would you like to choose easy, medium or hard question?\n" + 
              "(E)asy, (M)edium, or (H)ard? ");
              userAns = input.nextLine().toLowerCase();

              if (userAns.charAt(0) == 'e'){
                System.out.print("Calculate the area of a rectangle given its length and width\n" + "Length: " + length + ", Width: " + width + "\nYour answer: ");
                userAns = input.nextLine();
                answer = Double.parseDouble(userAns);
                if (answer == area){
                  System.out.println(congrats1);
                  userPoints += EASY;
                  System.out.println("Your current points: " + userPoints);
                } else {
                  if (userAttempt > 0 && answer != area){
                    System.out.println(motivation1);
                    userAns = input.nextLine();
                    userAttempt--;
                    if (userAttempt > 0 && answer != area){
                      System.out.println(motivation2);
                      userAns = input.nextLine();
                      userAttempt--;
                    } 
                    if (userAttempt > 0 && answer != area) {
                      System.out.println("Your answer is inccorect. The answer is: " + area);
                      userPoints -= EASY;
                      System.out.println("Your current points: " + userPoints);
                    }
                  } else {
                    System.out.println("Your answer is inccorect. The answer is: " + area);
                    userPoints -= EASY;
                    System.out.println("Your current points: " + userPoints);
                  }
                }
              }
         } //closing main method
} //closing class header
