package Lab5;

public class IncrementTestSyncMethod implements Runnable {

    static int classData = 0;   // shared by ALL instances
    int instanceData = 0;       // per-object

    // MUTEX via the instance’s intrinsic lock
    private synchronized void incBoth() {
        instanceData++;
        classData++;
    }

    @Override
    public void run() {
        int localData = 0;
        while (localData < 10_000_000) {  // adjust to 2_000_000 if your PC is slow
            localData++;
            incBoth();
        }
        // Not locking the print here – shows the mismatch more clearly
        System.out.println("localData: " + localData +
                "\tinstanceData: " + instanceData +
                "\tclassData: " + classData);
    }

    public static void main(String[] args) throws InterruptedException {
        // Reset shared state before run
        classData = 0;

        /*
        // ====== Setup #1: SHARED instance (consistent results) ======
        IncrementTestSyncMethod instance1 = new IncrementTestSyncMethod();
        Thread t1 = new Thread(instance1);
        Thread t2 = new Thread(instance1);

        t1.start(); t2.start();
        t1.join();  t2.join();

        System.out.println("FINAL classData=" + classData);
        System.out.println("instance1=" + instance1.instanceData);
        */

        // ====== Setup #2: TWO different instances (mismatch appears) ======
        IncrementTestSyncMethod instance1 = new IncrementTestSyncMethod();
        IncrementTestSyncMethod instance2 = new IncrementTestSyncMethod();

        Thread t1 = new Thread(instance1);
        Thread t2 = new Thread(instance2);

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("FINAL classData=" + classData);
        System.out.println("instance1=" + instance1.instanceData +
                           ", instance2=" + instance2.instanceData);
    }
}
