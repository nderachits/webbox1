/**
 * User: nike
 * Date: 3/18/13
 */

TestCase("BasicJavaScriptTest", {
    "testBasic" : function() {
        assertEquals("should be equal", 5, "Hello".length);
    },
    "testComparisons" : function() {
        assertTrue("Should be Equal", 1+2 === 3);
        assertFalse("Should Not equal", 1+2 !== 3);
        assertEquals("Modulo shoud be 2", 2, 5 % 3);
    },

    "testSubstring" : function() {
        assertEquals("should be 'lo'", "lo", "Hello, world".substring(3, 5));
    },

    "testVariables" : function() {
        var val = 1;
        val = val + 10;
        assertEquals("should be 11", 11, val);
    },

    "testAlertConfirmPromt" : function() {
        var real_confirm = window.confirm;
        var real_alert = window.alert;
        var real_prompt = window.prompt;
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

        window.confirm = real_confirm;
        window.alert = real_alert;
        window.prompt = real_prompt;
    },
    "testModaleDialogTestsIsolation" : function() {
//        uncomment to test;
//        confirm();
//        alert();
//        prompt();
    },

    "testConsoleLog" : function() {
        var st = "Hello, console!";
        var real_console_log = console.log;
        console.log = function(param1) {
            real_console_log(param1);
            assertEquals("should be eq", st, param1);
        };

        console.log(st);
        expectAsserts(1);

        console.log = real_console_log;
    },
    "testTestCaseIsolation" : function() {
        console.log("Test console without interceptor");
    }
});