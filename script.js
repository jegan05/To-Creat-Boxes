let button=document.getElementById("generateButton");
button.addEventListener('click',myFunction);
var i=1;
var oldnumber=0;
function myFunction(){
    let n=document.getElementById('textBox').value;
   
    n=parseInt(oldnumber)+parseInt(n);
    for(;i<=n;i++)
    {
        var box=document.createElement('div')
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML+=i;     
        oldValue=document.getElementById('box').lastElementChild.innerHTML;
    }
}