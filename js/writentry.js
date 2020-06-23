
// var entry =  document.getElementById("smt");
// entry.addEventListener("click", displayDetails);



function displayDetails()
{
    const date = document.getElementById('appd').value;
    const time = document.getElementById('appt').value;
    const title = document.getElementById('title').value;
    const note = document.getElementById('note').value;

    localStorage.setItem("DATE", date);
    localStorage.setItem("TIME", time);
    localStorage.setItem("TITLE", title);
    localStorage.setItem("NOTE", note);
    
    return;

}