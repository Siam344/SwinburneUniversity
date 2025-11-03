package Week6;

public class LockOtherObjectSynchronized implements Runnable  {
    private long c1 = 0;
    private long c2 = 0;

    private void inc1() {
        // Class-level intrinsic lock protects the shared static field
        synchronized (Another.class) {
            c1++;
            Another.i++;
        }
    }

    private void inc2() {
        synchronized (Another.class) {
            c2++;
            Another.i++;
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

        LockOtherObjectSynchronized instance = new LockOtherObjectSynchronized();
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
