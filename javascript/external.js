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
  ["oil Spill Toolkit",
  "https://www.glo.texas.gov/ost/",
  "The Oil Spill Toolkit developed by Enterprise Technology Solutions"
  ],
  ["Texas Ecosystems Analytical Mapper",
  "http://tpwd.texas.gov/gis/team/",
  "The Texas Parks and Wildlife's Landscape Ecology program developed"
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
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
