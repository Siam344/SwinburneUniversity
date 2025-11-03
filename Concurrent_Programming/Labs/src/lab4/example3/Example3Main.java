package lab4.example3;

public class Example3Main {
    public static void main(String[] args) throws InterruptedException {
        // One shared IncrementTest instance → instanceData is SHARED
        IncrementTest instance = new IncrementTest();

        Thread t1 = new Thread(instance, "T1");
        Thread t2 = new Thread(instance, "T2");

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Example3 (same instance) finished.");
    }
}