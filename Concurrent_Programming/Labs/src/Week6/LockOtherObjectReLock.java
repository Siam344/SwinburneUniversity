package Week6;

import java.util.concurrent.locks.ReentrantLock;

public class LockOtherObjectReLock implements Runnable {
    private long c1 = 0;
    private long c2 = 0;

    // One explicit shared lock for the class-wide static field
    private static final ReentrantLock I_LOCK = new ReentrantLock();

    private void inc1() {
        I_LOCK.lock();
        try {
            c1++;
            Another.i++;
        } finally {
            I_LOCK.unlock();
        }
    }

    private void inc2() {
        I_LOCK.lock();
        try {
            c2++;
            Another.i++;
        } finally {
            I_LOCK.unlock();
        }
    }

    @Override
    public void run() {
        if (Thread.currentThread().getName().equals("t1")) {
            for (int k = 0; k < 10_000_000; k++) inc1();
            System.out.println("c1 has " + c1 + ";");
        } else {
            for (int k = 0; k < 10_000_000; k++) inc2();
            System.out.println("c2 has " + c2 + ";");
        }
    }

    public static void main(String[] args) throws InterruptedException {
        // reset shared static
        Another.i = 0;

        LockOtherObjectReLock instance = new LockOtherObjectReLock();
        Thread t1 = new Thread(instance, "t1");
        Thread t2 = new Thread(instance, "t2");

        long start = System.currentTimeMillis();
        t1.start(); t2.start();
        t1.join();  t2.join();
        long end = System.currentTimeMillis();

        System.out.println("i is " + Another.i + ".");
        System.out.println("Time = " + (end - start) + " ms");
    }
}
