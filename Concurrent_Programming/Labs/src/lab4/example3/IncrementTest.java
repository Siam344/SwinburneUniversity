package lab4.example3;


public class IncrementTest implements Runnable {

    static int classData = 0;   // shared by all
    int instanceData = 0;       // separate per object

    @Override
    public void run() {
        int localData = 0;

        while (localData < 10000000) {
            localData++;
            instanceData++;
            classData++;
        }
        System.out.println(Thread.currentThread().getName() +
                " → localData: " + localData +
                "\tinstanceData: " + instanceData +
                "\tclassData: " + classData);
    }

    public static void main(String[] args) {
        IncrementTest instance1 = new IncrementTest();
        IncrementTest instance2 = new IncrementTest();

        Thread t1 = new Thread(instance1, "T1");
        Thread t2 = new Thread(instance2, "T2");

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Both threads finished.");
    }
}
