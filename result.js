function result(){
    var name=document.getElementById("22").value;
    var res=document.getElementById("res");
    var per=(Math.random()*100).toFixed(2);
    res.innerHTML=name +" "+"the result is"+" "+per+" "+"%"

    if(per>0||per>34){
        res.innerHTML=name+"fail"+per;
    }else if(per>34||per>60){
        res.innerHTML=name+"second class"+per;
    }else if(per>60||per>75){
        res.innerHTML=name+"first class"+per;
    }else if(per>75||per>90){
        res.innerHTML=name+"distinction"+per;
    }else if(per>90||per>100){
            res.innerHTML=name+"topper"+per;
    }
    <button>submit</button>    