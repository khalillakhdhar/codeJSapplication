function detectName() //camelCase
{
    var nom=document.getElementById("name").value;
    document.getElementById("welcome").innerHTML="hello "+nom;
}
function turnOn()
{
    console.log("il appuie sur le button on")
    document.getElementById('myImage').src='./images/pic_bulbon.gif';
}
function turnOff()
{
    console.log("il appuie sur le button off")
    document.getElementById('myImage').src='./images/pic_bulboff.gif';
}