function test(){
    var data = {actionCode: 16, data:{type:"site"}};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            //responseData {status:1, message: "success!", data: {path: "/media/0/a.doc"}
            alert(responseData)
        });
}
function testGetPicture(){
    var data = {actionCode: 0};
    /*window.WebViewJavascriptBridge.send(
        data,function(responseData) {
        //responseData {status:1, message: "success!", data: {path: "/media/0/a.jpg"}
            alert(responseData)
        }
    );*/
    var responseData='{status:1, message: "success!", data: {path: "../img/block.jpg"}}';
    var objpic=eval('('+ responseData+ ')');
    var parm= document.getElementById("picture_play");
    var Add= document.getElementById("add");
        //添加 img
        var li = document.createElement("li")
        var img = document.createElement("img");
        //设置 img 属性，如 id
        img.setAttribute("id", "newImg");
        img.setAttribute("onclick", "testOpenPicture(src)");
        //设置 img 图片地址
        img.src = objpic.data.path;
        li.appendChild(img);
        Add.appendChild(li);

}

function testOpenPicture(src){
    var data = {actionCode: 1,data:{path:src}};
    // window.WebViewJavascriptBridge.send(
    //     data,function(responseData) {
    //     //responseData {status:1, message: "success!", data: {deleted: true}
    //         alert(responseData)
    //     }
    // );
    alert(src);

}

function testChooseFile(){
    var data = {actionCode: 2};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
        //responseData {status:1, message: "success!", data: {path: "/media/0/a.doc"}
            alert(responseData)
        }
    );
}

function testQRCode(){
    var data = {actionCode: 3};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
        //responseData {status:1, message: "success!", data: {code: "alkfjdwoiwoir323i4o"}
            alert(responseData)
        }
    );
}

function testTime(){
    var data = {actionCode: 4};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            alert(responseData)
        //responseData {status:1, message: "success!", data: {time: "yyyy-MM-dd HH:mm:ss"}
            var responseData='{status:1,message:"success!",data:{time:"yyyy-MM-dd HH:mm:ss"}}';
            var obj=eval('(' + responseData + ')');
            document.getElementById("time").value=obj.data.time;
        }
    );
}

function testVoice(){
    var data = {actionCode: 5};
    /*window.WebViewJavascriptBridge.send(
        data,function(responseData) {
        //responseData {status:1, message: "success!", data: {path: "/meida/0/a.mgr"}
            alert(responseData)

        }
    );*/

    var responseData='{status:1,message:"success!",data:{path:"/meida/0/a.mgr"}}';
    var objVoice=eval('('+responseData+')');
    var play=objVoice.data.path;
    if (play) {
    var Add= document.getElementById("add");
        //添加 img
        var li = document.createElement("li")
        var img = document.createElement("img");
        //设置 img 属性，如 id
        //alert(play);
        img.setAttribute("id", "newImgvoice");
        img.setAttribute("onclick", "testVoicePlay(play)");
        //设置 img 图片地址
        img.src = "../img/voice_s.png";
        li.appendChild(img);
        Add.appendChild(li);
    };
}

function testVoicePlay(play){
    var data = {actionCode: 10, data:{path:play}};
    /*window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            //responseData {status:1, message: "success!", data: {}}
            alert(responseData)
        }
    );*/
    alert(play)
}

function testList(defaultIndex, arrayStr){
    //var data = {actionCode: 6, data:{items:["option1", "option2", "option3"], selected: 0}};
    var data = {actionCode: 6, data: {items: arrayStr, selected: defaultIndex}};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            alert(responseData)
            //responseData {status:1, message: "success!", data: {item: "item0"}
            var responseData='{status:1, message: "success!", data: {item0: "客户自行解决"}}';
            var obj=eval('(' +responseData+ ')');
            document.getElementById("single_reason").value=obj.data.item0;
        }
    );
}

function testPost(params){
    //var data = {actionCode: 7, data:{url:"api.com/v1/controller", var1:"kkll", var2:"klsj"}};
    var data = {actionCode: 7, data: params};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
        //responseData {status:1, message: "success!", data: {}}
            alert(responseData)
        }
    );
}

function testCall(phone){
    var data = {actionCode:9, data:{phone:phone}};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            alert(responseData)
        }
    );
}


function testMore(){
    var data = {actionCode:11, data:[
        {actionId:1, actionName:"升级", icon: "http://123.57.223.29/img/order_content_update.png"},
        {actionId:2, actionName:"支持", icon:"http://123.57.223.29/img/order_content_support.png"},
        {actionId:3, actionName:"改约", icon:"http://123.57.223.29/img/order_content_appoint.png"},
        {actionId:4, actionName:"取件", icon:"http://123.57.223.29/img/order_content_delivery.png"},
        {actionId:5, actionName:"关单", icon:"http://123.57.223.29/img/order_content_close_order.png"},
        {actionId:6, actionName:"消息", icon:"http://123.57.223.29/img/order_content_news.png"},
        {actionId:7, actionName:"知识库", icon:"http://123.57.223.29/img/order_content_repository.png"}
    ]};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            alert(responseData);
            var option = eval('(' + responseData + ')');
            alert(option);
            if(option.status == 1){
                var id = option.data.actionId;
                alert(id);
                if(id == 1){
                    //TODO upgrade
                    testGoto("http://123.57.223.29/active_job/go_up.html");
                }else if(id == 2){
                    //todo
                    testGoto("http://123.57.223.29/active_job/support.html");
                }else if(id == 3){
                    testGoto("http://123.57.223.29/active_job/change_date.html");
                } else if(id == 4){
                    testGetPicture();
                }else  if(id ==5){
                    testGoto("http://123.57.223.29/active_job/close.html");
                }else if(id == 6){
                    testGoto("android:im?orderId=1");
                }else if(id == 7){
                    testGoto("android:kn?orderId=1");
                }
            }
        }
    );
}

function  testGoto(url){
    alert(url);
    var data = {actionCode:12, data:{url:url}};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            alert(responseData)
        }
    );
}

function testAutoSign(x, y, orderId){
    var data = {actionCode:13, data:{latitude: x, longtitude: y, orderId: orderId}};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            //responseData : {status:1, message:"success!",data{}};
            alert(responseData)
        }
    );
}

function testToast(tip){
    var data = {actionCode:14, data:{tip: tip}};
    window.WebViewJavascriptBridge.send(
        data,function(responseData) {
            //responseData : {status:1, message:"success!",data{}};
            alert(responseData)
        }
    );
}
