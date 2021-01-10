function findifsc(){  
    var ifsc=document.getElementById('ifsc').value;
    var url=`https://ifsc.razorpay.com/${ifsc}`;
    fetch(url,{method:'GET'})
    .then((response)=>response.json())
    .then((data)=>{
        var name=data.BRANCH;
        var district=data.DISTRICT;
        var adress=data.ADDRESS;
        var BANK=data.BANK;
        document.getElementById('display1').innerText=`${BANK}`;
        document.getElementById('display3').innerText=`${adress}`;
        document.getElementById('display2').innerText=`${name}`;
        document.getElementById('display4').innerText=`${district}`;
    });

};