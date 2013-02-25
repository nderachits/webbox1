
GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function(name) {
    var greeter = new myapp.Greeter();
    assertEquals("Hello, World!", greeter.greet("World"));
}
