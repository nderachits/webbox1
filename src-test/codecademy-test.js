/**
 * User: nike
 * Date: 3/18/13
 */

TestCase("BasicJavaScriptTest", {
    "testContructor" : function() {

        var Person = function(nameParam, age1) {
            this.name = nameParam;
            this.age = age1;
            this.describe = function() {
                return "Person "+nameParam+"("+this.age+")";
            }
        };

        function Book(title, author) {
            this.title = title;
            this.author = author;
            var notseen = "something";
            this.describe = function() {
                return "Book "+this.title+" was written by "+this.author.describe();
            }
        }

        var horstman = new Person("Horstman", 50);
        var jc = new Book("Core Java", horstman);

        assertNotNull(horstman);
        console.log(horstman.describe());
        assertEquals("Person Horstman(50)", horstman.describe());
        assertNotNull(jc);
        assertEquals("Core Java", jc.title);
        assertEquals("Book Core Java was written by Person Horstman(50)", jc.describe());
        assertEquals(undefined, jc.notseen);
        assertTrue(jc.title != null);
        assertTrue(jc.notseen == null);

        horstman.name = "nn";
        horstman.age = 55;
        assertEquals("Person Horstman(55)", horstman.describe());
    },
    "testForProps" : function() {
        var obj = {
            name : "Nike",
            age : 27
        };
        var log = "";
        var i = 0;
        for( var prop in obj) {
            log += obj[prop];
            i++;
        }
        assertEquals(2, i);
        assertTrue(log.indexOf("Nike")>=0);
        assertTrue(log.indexOf("27")>=0);
        assertEquals("Nike27".length, log.length);
    },
    "testObjects" : function() {
        var obj = {
            "val3" : [2,3],
            val4 : function() { return 4}
        };
        obj.val1 = 1;
        obj.val2 = "str";
        obj["val5"] = "s2";

        var obj2 = new Object();
        obj2.val1 = "Nike";
        obj["var6"] = obj2;

        obj.func1 = function() {
            return "obj" + this.val1 + this.val2 + this.val3[1] + this.var6.val1;
        };
        assertEquals("obj1str3Nike",obj.func1());
        assertEquals(2, obj.val3[0]);
        assertEquals(4, obj.val4());
        assertEquals("s2", obj.val5);

    },
    "testJaggedArrays" : function() {
        var jagged = [[1,2], [3,4,5], 6,7];
        assertEquals(1, jagged[0][0]);
        assertEquals(2, jagged[0][1]);
        assertEquals(undefined, jagged[0][2]);
        assertEquals(5, jagged[1][2]);
        assertEquals(6, jagged[2]);
        assertEquals(undefined, jagged[4]);
        assertEquals(4, jagged.length);
        assertEquals(3, jagged[1].length);
    },
    "testLogicOps" : function() {
        assertFalse(true && false);
        var f0 = function() {
            assertTrue(false);
            return false;
        };
        var f2 = function() {
            assertTrue(true);
            return false;
        };
        assertTrue(true || f0());
        assertEquals(0, true & f2());
        assertEquals(1, false | !f2());
        assertEquals(1, true | f2());
        assertEquals(true, true || f2());
        assertEquals(3, 1 | 2);
        expectAsserts(1 + 1 + 2 + 2 + 4);
    },
    "testSwitch" : function() {
        switch("val1") {
            case "val1":
                assertTrue(true);
                break;
            default :
                assertTrue(false);
        }
        expectAsserts(1);
    },
    "testWhile" : function(){
        var i = 2;
        while(i) {
            assertTrue(true);
            i--;
        }
        expectAsserts(2);
    },
    "testMath" : function() {
        assertEquals("sb 1",1, Math.floor(1.3));
        assertEquals("sb 1",1, Math.floor(1.6));
        assertEquals("sb -2",-2, Math.floor(-1.6));
        assertEquals(30, Math.max(25,30));
    },
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

        arr[4] = "x";
        assertEquals("sb 5", 5, arr.length);
        arr[6] = "z";
        assertEquals("sb 7", 7, arr.length);
        assertEquals(undefined, arr[5]);
    },
    "testFor" : function() {
        var s = "";
        for(var i = 0; i<5; i++) {
            s += i;
        }
        assertEquals("String should be 01234", "01234", s);
    },
    "testNanAndType" : function() {
        assertTrue("sb ", isNaN("one"));
        assertFalse("sb ", isNaN("123"));
        assertFalse("sb ", isNaN("123.4"));
        assertFalse("sb ", isNaN(123));
        assertTrue("sb ", isNaN(undefined));
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
        var nullVar = null;
        assertTrue(nullVar === null);
        assertFalse(nullVar !== null);
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