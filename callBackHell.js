//CallBack-->use to write asynchronous code in js

setTimeout(function(){
    console.log("call me later")
},5000)//call after 5 sec

//There two problem in js
//1.CallBackHell-eb suppose make cart then placeoder ,payment,odersummary

const cart=["shoes","t-shirt","jeans"]

api.placeOrder(cart,function(){
    api.payment(function(){
        api.OderSummary(function(){
            api.feedback();
        });
    });
});//rhis callBackHell 0r pryamid Of doom

//2.Inversion of control-when depend on function that callback other function eg payment api depend on api.createorder  





