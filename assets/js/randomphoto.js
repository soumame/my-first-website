var randomList = new Array(
"images/logo.svg",
"images/logo1.jpg",
"images/logo2.jpg",
"images/logo3.jpg",
"images/logo4.jpg",
"images/logo5.jpg",
"images/logo6.jpg" );
var num = Math.floor(Math.random() * randomList.length);
var printHtml = '<img src=' + randomList[num] + ' alt="プロフィール画像">';
document.write(printHtml);