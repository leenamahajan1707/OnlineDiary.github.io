
var row = 1;
window.addEventListener('load',() =>{
    
    const date = localStorage.getItem('DATE');
    const time = localStorage.getItem('TIME');
    const title = localStorage.getItem('TITLE');
    const note = localStorage.getItem('NOTE');

    
    // document.getElementById('rs-date').innerHTML = date;
    // document.getElementById('rs-time').innerHTML = time;
    // document.getElementById('rs-title').innerHTML = tit;
    // document.getElementById('rs-note').innerHTML = not;


    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);


    
    cell1.innerHTML = date;
    cell2.innerHTML = time;
    cell3.innerHTML = title;
    cell4.innerHTML = note;
    
    
     row++;


    
})