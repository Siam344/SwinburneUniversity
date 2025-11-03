package lab4.example2;


public class A extends Thread {
    private final int[] arr;

    public A(int[] arr) {
        this.arr = arr;
        setName("Min-Thread");
    }

    @Override
    public void run() {
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
        }
        System.out.println(getName() + " → Min value = " + min);
    }
}


