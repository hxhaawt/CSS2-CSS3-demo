/**
 * Created by hxh on 2017/3/28.
 */

window.onload = myTest;

function myTest() {

    var sheet = document.styleSheets[0];
    var rules = sheet.cssRules || sheet.rules;

    var divItem = document.getElementsByTagName("div");

    for (var i=1, len=rules.length; i<len; i++){
        divItem[i].innerHTML = rules[i].style.cssText;
    }

    // margin-right < 0
    // alert(rules[5].style.marginRight);

    // chrome/ firefox 等 body 里默认有 3个  标签
    // alert(document.getElementsByTagName("div").length);

    // alert(rules.length);
    // alert(divItem.length);

    // var rule0 = rules[0];
    // var div1 = document.getElementById("div1");
    // div1.innerHTML = rule0.style.cssText;
    //
    // var rule1 = rules[1];
    // var div2 = document.getElementById("div2");
    // div2.innerHTML = rule0.style.cssText;
    //
    // var rule2 = rules[2];
    // var div3 = document.getElementById("div3");
    // div3.innerHTML = rule2.style.cssText;
    // alert(rule1.style.cssText);
}
