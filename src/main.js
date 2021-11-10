let html = document.querySelector("#html")  //通过CSS选择器（即 #html）找到这个元素
let style = document.querySelector("#style")

let string = `/*你好，我是一名前端新人
* 接下来展示一下我的前端功底
* 首先，我要准备一个 div **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来，把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
* 一黑一白 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接下来，写八卦图的细节部分 **/
#div1::before{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    transform: translateX(50%);
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    transform: translateX(50%);
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
`
//在中文上加上注释，就不会影响到 css
let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => {
        if(string[n] === '\n'){  //如果第n个字符串是回车，就不照搬
            string2 += '<br>'
        }else if (string[n] === ' ') { //如果第n个字符串是空格，就不照搬
            string2 += '&nbsp;'
        }else{ //如果第n个字符串不是空格也不是回车，就直接照搬
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n) //css里不能出现html标签,所以用 substring 比较合适
        window.scrollTo(0,999999);
        html.scrollTo(0, 999999)
        if (n+1 < string.length) {  //是 n 还是 n+1 或者 n-1 都试试
            n += 1
            step()
        }
    }, 50);
}
step();








