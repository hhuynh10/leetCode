class Result {

    

    public static void fizzBuzz(int n) {
        for( int i = 0; i <= n; i++){
            if (i % 3 == 0 && i % 5 == 0){
                System.out.println("Fizzbuzz");
            }
            else if (i % 3 == 0){
                System.out.println("Fizz");
            }
            else if (i % 5 == 0){
                System.out.println("Buzz");
            }
            else {
                System.out.println(i);
            }
        }
    }

}