/**
 * User: nike
 * Date: 3/18/13
 */

TestCase("BasicJavaScriptTest", {
    "testBasic" : function() {
        assertEquals("should be equal", 5, "Hello".length);
    },
    "testAlertConfirmPromt" : function() {
        window.confirm = function() {
            // This will get executed instead of showing a browser prompt message
            return true;
        };
        window.alert = function() {
        };

        window.prompt = function() {
            return "val1";
        };

        assertTrue(confirm("Hi!"));
        alert();
        assertEquals("val1",prompt("Enter something"));
    }
});