package lab4.example2;

public class B extends Thread {
    private final int[] arr;

    public B(int[] arr) {
        this.arr = arr;
        setName("Max-Thread");
    }

    @Override
    public void run() {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        System.out.println(getName() + " → Max value = " + max);
    }
}
