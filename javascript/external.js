//document.write("where is my JS code?");

//window.alert(5 + 6);

//document.write('<h1>A heading</h>');
//document.write('<p>A sentence</p>');


//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);


//A prompt box is used to promt users to input a value before entering a page.
//user_name = window.prompt("Please enter your name", "Type your name here")
//document.write(user_name);


//x = 22;
//const y = 33;
//document.writeln(x + y);
//document.writeln("<br>");
//document.writeln(x += 33);


//document.writeln("<button onclick='condition()'>ConditionTest</button>")
/*
function condition()
{
    x = confirm("Are you sure you want to proceed?");
    if (x){
      document.writeln("You chose Okay!")
    }
    else{
      document.writeln("You chose Cancel!")
    }
}
*/
//var user_name = prompt("Please enter you full name with correct capitalization", "Type your name here.");


function welcome(){
  let a = "Please enter your name.";
  let b = "Type your name here.";

  //A prompt box is used to prompt to input a value before entering a page.
  user_name = window.prompt(a,b);

 message = "<h1> Hello, welcome to my webpage, " + user_name + "!<h1>"

  return message
}

function webmap_table()
{
  document.write("<table width=100%");
  for (var row=0; row < 2; row++)
    {
      document.write("<tr>");
      for (var column = 0; column < 3; column++)
      {
        document.write("<td>" + row + "," + column + "</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");
}

var webmaps =
[
  ["Realtors Property Resources",
  "https://www.narrpr.com ",
  "Using google API allowing realtors to set a distance from a property (5miles bubble); gather information about sold home within search vector output a report with comparable to other homes to estimate home value and length of time it has to be listed on market. This web mapping applaction is only aviable to relator so it contian personal information of final selling prices of home that redfin cannot prodive. JQurey is heavily use to project to data in table form for the realtor to produce a profesional pront to clients on a real time bases."
  ],
  ["Redfin Full-Service realty",
  "https://www.redfin.com ",
  "To provide listing information to home sellers/buyers on the market with a set area in real time. Redfin has market providing listing agent information and claim to be best realtor within the area because they payed to be a redfin listing agent within the website. Redfin also used a similar feature that allow user to set distance bubble, this is mostly a buffer method feture. They also a user draw feature that allows user to draw abstracted shapes creating a buffer in a triangle shape buffers."
  ]
];

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row = 0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column = 0; column < webmaps[0].length; column++)
    {
      if (column < 2){
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
      else {
        document.write("</tr><tr><td colspan='2'>" + webmaps[row][column] + "</td>");
      }
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
