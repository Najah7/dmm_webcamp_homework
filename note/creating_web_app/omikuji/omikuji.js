function omikuji(){
    const randomNum = Math.floor( Math.random() * 5) ;
    switch (randomNum){
        case 0:
            return "大吉"
        case 1:
            return "中吉"
        case 2:
            return "小吉"
        case 3:
            return "吉"
        case 4:
            return "凶"
    }
}

let userName = prompt("お名前を教えて下さい。");
if (userName == "")
{
    userName = "名無しさん";
}
document.getElementById("name").innerHTML = userName;

let userResult = omikuji();
document.getElementById("result").innerHTML = userResult;