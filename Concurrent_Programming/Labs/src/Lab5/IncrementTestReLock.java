package Lab5;

import java.util.concurrent.locks.ReentrantLock;

public class IncrementTestReLock implements Runnable {

    static int classData = 0;
    int instanceData = 0;

    // Shared explicit lock across ALL instances
    private static final ReentrantLock LOCK = new ReentrantLock();

    private void incBoth() {
        LOCK.lock();
        try {
            instanceData++;
            classData++;
        } finally {
            LOCK.unlock();
        }
    }

    @Override
    public void run() {
        int localData = 0;
        while (localData < 10_000_000) {
            localData++;
            incBoth();
        }
        LOCK.lock();
        try {
            System.out.println("localData: " + localData +
                    "\tinstanceData: " + instanceData +
                    "\tclassData: " + classData);
        } finally {
            LOCK.unlock();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        classData = 0;

        // Two instances (still safe because the lock is shared)
        IncrementTestReLock instance1 = new IncrementTestReLock();
        IncrementTestReLock instance2 = new IncrementTestReLock();

        Thread t1 = new Thread(instance1);
        Thread t2 = new Thread(instance2);

        t1.start(); t2.start();
        t1.join();  t2.join();

        System.out.println("EXPECTED classData ~ " + (2 * 10_000_000));
        LOCK.lock();
        try {
            System.out.println("classData=" + classData);
            System.out.println("instance1=" + instance1.instanceData + ", instance2=" + instance2.instanceData);
        } finally {
            LOCK.unlock();
        }
    }
}
