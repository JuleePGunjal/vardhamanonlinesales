

var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vardhaman Sales</h1>"
        +"<h2>Home of Beauty</h2>"
        +"<hr/>"
        +"<h2>SALE SALE SALE</h2>"
        +"<h3>50% OFFER On </h3>"
        +"<ol>"
        +"<li>LACKMI Products</li>"
        +"<li>NYKA EYE COlOR</li>"
        +"<li>HIMALAYA kajal</li>"
        +"<li>KATE lipstics</li>"
        +"<li>MABELLINE Compact</li>"
       +"</ol>" 
    )
})

app.get("/aboutus",(req,res)=>{
    res.send("<h1>Vardhman Sales</h1>"
    +"<br><br>"
    +"<h2>Business:Cosmetics</h2>"
    +"<h3>OWner:Julee Gunjal</h3>"
    +"<h3>Location:All INDIA"
    +"<h3>Contact:Vardhman building,Daregaon,Malegaon,Nashik</h3>"
    +"<h4>email:julee@gmail.com</h4>"
    )
})

var  server=app.listen(9000)
console.log("Listning server at 9000")