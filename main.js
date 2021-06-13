vararay_names = [""];
vararay_names.sort();
var List_of_names="";
var length =vararay_names.length;
function Add_name(){
    List_of_names="";
    names=document.getElementById("Name").value;
    vararay_names.push(names);
    length=vararay_names.length;
    for(var i=0;i<length;i++)
{
    List_of_names=List_of_names + vararay_names[i]+"<br>";
}
document.getElementById("Names_").innerHTML=List_of_names;
document.getElementById("Name").value="";
}