package JavaProject;

//import API's needed here:
import java.util.Scanner;
import java.text.DecimalFormat;

public class JavaProject {

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
  public static void main(String args[]) {
    // create any objects if needed (i.e. scanner for keyboard input)
    Scanner input = new Scanner(System.in);
    DecimalFormat fm = new DecimalFormat("0.00");

    // declare data storage space (constants and variables)
    final int EASY = 50; // Points for easy questions
    final int MEDIUM = 15; // Points for medium questions
    final int HARD = 20; // Point for hard questions

    int userPoints = 50; // User's starting points
    int userAttempts = 2; // User's attempts for each question

    String welcome = "Welcome to Java Beans' Project"; // Welcoming string

    String gameRules = "Starting Points: Players begin their gaming journey with an initial pool of 50 points.\n"
        + "Difficulty Levels: Players have the flexibility to choose questions from three distinct difficulty levels: Easy, Medium, and Hard. Each level corresponds to a specific point value: 5 points for Easy, 10 points for Medium, and 15 points for Hard questions.\n"
        + "Attempts: Players are granted three attempts to respond to each question.\n"
        + "Point System:\n"
        + "A correct answer results in point accumulation based on the difficulty level of the question.\n"
        + "Easy questions earn 5 points, Medium questions earn 10 points, and Hard questions earn 15 points.\n"
        + "An incorrect answer incurs a deduction in points.\n"
        + "Game Restart:\n"
        + "The game restarts when the player accumulates 150 points.\n"
        + "The game also restarts if the player reaches zero points due to a loss.\n"; // Game rules

    String congrats1 = "Congratulations, your answer is correct!"; // congratulation quote
    String congrats2 = "Great job! Your answer is correct!"; // congratulation quote
    String congrats3 = "Congratulations! Your response is accurate!"; // congratulation quote

    String motivation1 = "Keep trying, you're getting closer!"; // motivation quote
    String motivation2 = "You're almost there! Give it another try!"; // motivation quote
    String motivation3 = "Keep trying, you're on the right track!"; // motivation quote

    String secretQuestion = "Mirror Mirror on the wall, who's the prettiest of them all?";
    int secretQuestionPoint = 50;
    
    int hints = 2;

    String userAns; // User answer

    // Identifiers for easy questions
    // Question 1
    int number1; // number 1
    int number2; // number 2
    int number3; // number 3
    int number4; // number 4
    int number5; // number 5
    float userAnswer; // User Answer
    float avg; // Average

    // Identifiers for medium questions
    // question 1
    double length; // length
    double width; // width
    double area; // area
    double answer; // answer

    // Identifiers for hard questions
    // Question 1
    double radius; // radius
    double height; //height
    double volume; //volume

    // get input as required by program specifications
    System.out.println(welcome);

    System.out.print("Would you like to go over the game rules?\n" + "(Y)es or (N)o? ");
    userAns = input.nextLine().toLowerCase();

    while (userAns.isEmpty() || (userAns.charAt(0) != 'y' && userAns.charAt(0) != 'n')) {
      System.out.print("Would you like to go over the game rules?\n" + "(Y)es or (N)o? ");
      userAns = input.nextLine().toLowerCase();
    }

    if (userAns.charAt(0) == 'y') {
        System.out.println(gameRules);
    }

    // process data as required by program specificationsn
    // Easy questions
    // Question 1
    number1 = (int) (Math.random() * 10);
    number2 = (int) (Math.random() * 10);
    number3 = (int) (Math.random() * 10);
    number4 = (int) (Math.random() * 10);
    number5 = (int) (Math.random() * 10);
    avg = (float) (number1 + number2 + number3 + number4 + number5) / 5;

    // Medium questions
    // Question 1
    length = Double.parseDouble(fm.format(Math.random() * 10));
    width = Double.parseDouble(fm.format(Math.random() * 10));
    area = Double.parseDouble(fm.format(length * width));

    // Hard questions
    // Question 1
    radius = Double.parseDouble(fm.format(Math.random() * 10));
    height = Double.parseDouble(fm.format(Math.random() * 10));
    volume = Double.parseDouble(fm.format(Math.PI * Math.pow(radius, 2) * height));

    // display results as required by program specifications
    do {
      System.out.print("Would you like to choose easy, medium or hard question?\n" + "(E)asy, (M)edium, or (H)ard? ");
      userAns = input.nextLine().toLowerCase();
      if (userAns.length() > 0 && userAns.charAt(0) == 'e') {
        // question 1
        System.out.print("What is the average of the following numbers, answer in nearest tenth: " + number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5 + " ?\n" + "Your answer: ");
        userAnswer = input.nextFloat();
            if (userAnswer != avg) {
              while (userAttempts > 0 && userAnswer != avg) {
                  System.out.println(motivation1);
                  System.out.println("Number of attempts remaining: " + userAttempts);
                  System.out.print("Your answer: ");
                  userAnswer = input.nextFloat();
                  if (userAnswer == avg) {
                    System.out.println(congrats1);
                    userPoints += EASY;
                    System.out.println("Your current points: " + userPoints);

                    // Secret question
                    if (Math.random() <= 0.5) {
                      System.out.println(secretQuestion);
                      System.out.print("Your answer: ");
                      userAns = input.next().toLowerCase();
                      if (userAns.equals("hayden")) {
                          System.out.println(congrats1);
                          userPoints += secretQuestionPoint;
                          System.out.println("Your current points: " + userPoints);
                      }
                    }
                  }
                  userAttempts--;
              }
              if(userAttempts == 0 && userAnswer != avg){
                System.out.println("Your answer is incorrect. The answer is: " + avg);
                userPoints -= EASY;
                System.out.println("Your current points: " + userPoints);
              }
            } else {
                System.out.println(congrats1);
                userPoints += EASY;
                System.out.println("Your current points: " + userPoints);

                // Secret question
                if (Math.random() <= 0.5) {
                  System.out.println(secretQuestion);
                  System.out.print("Your answer: ");
                  userAns = input.next().toLowerCase();
                  if (userAns.equals("hayden")) {
                      System.out.println(congrats1);
                      userPoints += secretQuestionPoint;
                      System.out.println("Your current points: " + userPoints);
                  }
                }
              }

      } else if (userAns.length() > 0 && userAns.charAt(0) == 'm') {
        // Question 1
        System.out.print("Calculate the area of a rectangle given its length and width\n" + "Length: " + length + ", Width: " + width + "\nYour answer: ");
        userAns = input.nextLine();
        answer = Double.parseDouble(userAns);
        if (answer == area) {
          System.out.println(congrats2);
          userPoints += MEDIUM;
          System.out.println("Your current points: " + userPoints);
        } else {
          System.out.println("Your answer is incorrect. The answer is: " + area);
          userPoints -= MEDIUM;
          System.out.println("Your current points: " + userPoints);
        }

      } else if (userAns.length() > 0 && userAns.charAt(0) == 'h') {
        // question 1
        System.out.print("Calculate the volume of a cylinder given its radius and height\n" + "Radius: " + radius + ", Height: " + height + "\nYour answer: ");
        userAns = input.nextLine();
        answer = Double.parseDouble(userAns);
        if (answer == volume) {
          System.out.println(congrats3);
          userPoints += HARD;
          System.out.println("Your current points: " + userPoints);
        } else {
          System.out.println("Your answer is incorrect. The answer is: " + volume);
          userPoints -= HARD;
          System.out.println("Your current points: " + userPoints);
        }
      }
    } while (0 < userPoints && userPoints < 150 );

    do {
      userPoints = 50;
      userAttempts = 2;
      hints = 2;

      System.out.print("Do you want to (R)estart or (E)xit the game? ");
      userAns = input.nextLine().toLowerCase();
      if (userAns.length() > 0 && userAns.charAt(0) == 'r'){
        System.out.println("Game restarting now!");
      } else if (userAns.length() > 0 && userAns.charAt(0) == 'e') {
        System.out.println("Game exiting now!");
        System.exit(0);
      }
    } while (userPoints <= 0 || userPoints >= 150);
    
  } // closing main method
}
// closing class header
