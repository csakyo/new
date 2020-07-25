//  color = "赤";

// 以下にswitch文を書いてください。
// switch(color) {
//     case "金":
//         console.log("ハワイ旅行券");
//         break;
//     case "赤":
//         console.log("国内温泉巡り旅行券");
//         break;
//     case "青":
//         console.log("商品券1万円");
//         break;
// }

for (let i = 1; i <= 50; i++){
    if (i % 15 === 0){
        console.log("FizzBuzz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else if (i % 3 === 0){
        console.log("Fizz");
    }else {
        console.log(i);
    }
}
