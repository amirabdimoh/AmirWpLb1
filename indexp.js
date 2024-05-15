var slider = document.querySelector('.slider-img');
var images = ['salesforce.jpeg', 'java.jpeg', 'python.jpeg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider.setAttribute('src',''+images[i]);
	
}

var side=document.getElementById("sidebar");
function openmenu(){
    side.style.left="0";
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}
function closemenu(){
    side.style.left="-240%";
}



const n=document.querySelector(".n"),
      navList=n.querySelectorAll("li"),
      totalnavlist=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;
      for(let i=0;i<totalnavlist;i++)
      {
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            for(let j=0; j<totalnavlist; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })

      }
      function showSection(element)
      {
        for(let k=0;k<totalSection;k++)
        {
            allSection[k].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }

const sidebar=document.querySelector("sidebar");


