var names = [];
var entrys = [];
var exits = [];
var total = [];

var x = 1;
var y = 0;

function totalTime(entry,exit) {

  s = entry.split(":");
  e = exit.split(":");

  min = e[1] - s[1];
  hour_carry = 0;
  if (min < 0) {
    min += 60;
    hour_carry += 1;
  }
  hour = e[0] - s[0] - hour_carry;
  diff = hour + ":" + min;

  return diff;
}

function addTable() {
  var table = document.getElementById("tableid");
  var tableNewRow = table.insertRow(x);

  names[y] = document.getElementById("nameid").value;
  entrys[y] = document.getElementById("entryid").value;
  exits[y] = document.getElementById("exitid").value;
  total[y] = totalTime(entrys[y], exits[y]);

  var cell1 = tableNewRow.insertCell(0);
  var cell2 = tableNewRow.insertCell(1);
  var cell3 = tableNewRow.insertCell(2);
  var cell4 = tableNewRow.insertCell(3);

  cell1.innerHTML = names[y];
  cell2.innerHTML = entrys[y];
  cell3.innerHTML = exits[y];
  cell4.innerHTML = total[y];

  x++;
  y++;
}
