//实现判断表单组件输入内容是否合理的js语句
function check_name(){
    var x = document.getElementById("name");
    var l1 = document.getElementById("label1");
    if(x.value =="")
    l1.innerHTML = "姓名不能为空哦!";
    else
    l1.innerHTML = "";
}
function check_email(){
    var x = document.getElementById("email");
    var l2 = document.getElementById("label2");
    if(x.value =="")
    l2.innerHTML = "邮箱地址不能为空哦!";
    else
    {
    var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    strEmail=pattern.test(x.value);
    if (strEmail)
    {
    l2.innerHTML = "";
    }else
    {
    l2.innerHTML = "请输入合法邮箱地址哦!"
    }
    }
}
function check_account(){
    var x = document.getElementById("account");
    var l3 = document.getElementById("label3");
    if(x.value =="")
    l3.innerHTML = "用户名不能为空哦!";
    else
    l3.innerHTML = "";
}