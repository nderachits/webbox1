/**
 * User: nike
 * Date: 3/18/13
 */

TestCase("BasicJavaScriptTest", {
    "testStrings" : function() {
        var s = "abc";
        assertEquals("sb 'b'", "b", s[1]);
        assertEquals("sb 3", 3, s.length);
    },
    "testIndexOf" : function() {
        var text = "s;svnqsvns,dfjasd";
        assertEquals("sb found", 2, text.indexOf("svn"));
        assertEquals("sb found", 6, text.indexOf("svn", 5));
    },
    "testArrays" : function() {
        var arr = ["a","b","q","w"];
        assertEquals("should be awbq", "awbq", arr[0]+arr[3]+arr[1]+arr[2]);
        assertEquals("sb 4", 4, arr.length);
        var junk = ["St", 2, "Ln", 7];
        assertEquals("shdb StLn","StLn", junk[0]+junk[2]);
        assertEquals("shdb 9",9, junk[1]+junk[3]);
    },
    "testFor" : function() {
        var s = "";
        for(var i = 0; i<5; i++) {
            s += i;
        }
        assertEquals("String should be 01234", "01234", s);
    },
    "testNanAndType" : function() {
        assertTrue("should be NaN", isNaN( "s"*"s"));
        assertEquals("should be number type", "number", typeof 123);
        assertEquals("should be string type", "string", typeof "s");
    },
    "testMax" : function() {
        assertEquals("Max is 5", 5, findMax(3,5));
        assertEquals("Max is 7", 7, findMax(5, 3, 7));
    },

    "testGlobalScope" : function() {
        assertEquals("global variable should be not changed", 5, var1);
        assertEquals("local var should have separate value", 10, varFunc(10));
    },

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