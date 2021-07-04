ts<!DOCTYPE ;html>
<html>
<head>
<script>
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed."
    }
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed."
    }
    function Nandi(Webpage) {
        console.log('Nandi' + website)
    }
    <script>
        src= "https://zamashangase.github.io/WSOA3028A_1664818/index.html/js/myScript.js"
    </script>
    <script src="main.js"></script>
</script>
</head>
<body>
    <h1>Nandi's Work</h1>
    <p id= "demo"> This is a website for my character Nandi, who is a part time art consultant and part-time digital art student at Wits University.</p>
    <button type= "button"
    onclick="myFunction()"Try It></button>
    
    let c = 1.01 + 2.02;
    console.log(c.toString));
    console.log(c.toString));

</body>
</html>
//code for Responsive design javascript//
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/*toggle mobile menu or mobile function*/
function toggleMenu() {
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "< class='fas fa-times'></i>";
    }else{
        menu.classList.add("active");
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "< class='fas fa-times'></i>";
    }
}

fetch("https://zamashangase.github.io/WSOA3028A_1664818/index.html")
.then((r) => r.json())
.then((nandi) => {
    console.log(nandi);
    console.log('zama reveived');
    handleNandi(nandi);
})
.catch((error) => console.warn("Our Warning", error));

const handleNandi = (nandisWork) => {
    document.querySelector("p").innerText = nandisWork.value;
    document.querySelector("img").src = nandisWork.img1_url;
    console.log("This website was done by Zama");

    
};
console.log('Nandi is a character created by Zama')
