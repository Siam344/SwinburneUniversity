package lab4.example2;

public class Example {
    public static void main(String[] args) {
        // Small array = short, clean console output for your screenshot
        int[] data = { 7, -2, 13, 4, 9, 0 };

        Thread tA = new A(data); // A computes min
        Thread tB = new B(data); // B computes max

        tA.start();
        tB.start();

        try {
            tA.join();   // wait for min
            tB.join();   // wait for max
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Both threads finished.");
    }
}