let fullName= prompt ("Enter your full Name");
let res = "@"+ fullName+ fullName.length;
console.log(fullName);
console.log(res);
//public class Employee {
    private String id;
    private String name;
    private int age;
    private static int nextID = 1;

    public Employee(String name, int age) {
        this.id = "E" + nextID;
        nextID++;
        this.name = name;
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public static int getNextID() {
        return nextID + 1;
    }

    public void show() {
        System.out.println("ID: " + id + "\nName: " + name + "\nAge: " + age);
    }

    public static void showNext() {
        System.out.println("Next Employee ID: E" + nextID);
    }
}//