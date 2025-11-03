package Lab5;

public class IncrementTestSyncBlock implements Runnable {

    static int classData = 0;
    int instanceData = 0;

    // ONE shared lock for all instances (fixes two-instance mismatch)
    private static final Object LOCK = new Object();

    private void incBoth() {
        synchronized (LOCK) {
            instanceData++;
            classData++;
        }
    }

    @Override
    public void run() {
        int localData = 0;
        while (localData < 10_000_000) {
            localData++;
            incBoth();
        }
        synchronized (LOCK) { // lock around print to avoid a skewed snapshot
            System.out.println("localData: " + localData +
                    "\tinstanceData: " + instanceData +
                    "\tclassData: " + classData);
        }
    }

    public static void main(String[] args) throws InterruptedException {
        classData = 0;

        // Use TWO instances to prove the fix still works
        IncrementTestSyncBlock instance1 = new IncrementTestSyncBlock();
        IncrementTestSyncBlock instance2 = new IncrementTestSyncBlock();

        Thread t1 = new Thread(instance1);
        Thread t2 = new Thread(instance2);

        t1.start(); t2.start();
        t1.join();  t2.join();

        System.out.println("EXPECTED classData ~ " + (2 * 10_000_000));
        synchronized (LOCK) {
            System.out.println("classData=" + classData);
            System.out.println("instance1=" + instance1.instanceData + ", instance2=" + instance2.instanceData);
        }
    }
}
