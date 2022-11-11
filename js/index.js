            var i = 0;
            var str ="If you love a person, keep a love, you can go for an outing together in early spring, you can go to appreciate the lotus together in midsummer, you can go to the moon together in light autumn, you can go to seek plum together in deep winter, not tired, but happy, extraordinary, but plain. Then there will be no regrets in this life.";
            window.onload = function typing(){
                var mydiv = document.getElementById("display");
                mydiv.innerHTML += str.charAt(i);
                var oBtn = document.getElementById('btn');
                i++;
                var id = setTimeout(typing,100);
                if(i==str.length){
                    clearTimeout(id);
                    mydiv.value ="";
                    mydiv.innerHTML +=""
                    //alert("程序执行完毕！");
                }   
            }
 