function total()
{
    let  idliqty = document.getElementById("idliqt").value;
    let  dosaqty = document.getElementById("dosaqty").value;
    let pooriqty = document.getElementById("pooriqty").value;
    let pulqty = document.getElementById("pulqty").value;
    let chapataiqty = document.getElementById("chapataiqty").value;
    let teaqty = document.getElementById("teaqty").value;
    let coffeeqty= document.getElementById("coffeeqty").value;

    let  idliprice = 30
    let  dosaprice = 40
    let pooriprice = 50
    let pulprice = 40
    let chapataprice = 40
    let teaprice = 80
    let coffeeprice = 10

    let total = ((idliqty+idliprice)(dosaqty+dosaprice)( pooriqty+pooriprice)(pulqty+ pulprice)(chapataiqty+chapataprice)(teaqty+ teaprice)(coffeeqty+coffeeprice))
    
    let price = document.getElementById("total")

    price.innerHTML = "The total bill is"+""+total;
}