        // 消費税計算アプリ

        // const userName = window.prompt('ユーザー名を入力してください');
        // const sum = window.prompt('合計金額を入力してください。');
        // const total = Math.round(sum * 1.1 );
        // document.write(`${userName}さんの合計金額は${total}円となります。`)



        // メンバー紹介

        // const members = [
        //     {name:  "山田太郎" , age:42 , hobby: "ギター"},
        //     {name:  "斎藤すぐる" , age:46 , hobby: "車"},
        //     {name:  "田中よしお" , age:32 , hobby: "旅行、カメラ"},
        //     {name:  "高橋とおる" , age:25 , hobby: "絵を描くこと"}
        // ]
        // for(let i = 0; i < members.length ; i++){
        //     document.write(`名前:${members[i].name} 年齢:${members[i].age} 趣味:${members[i].hobby} <br>`);
        // }
        // document.write('<br>')
        // const sortMembers = members.sort(function(a,b){
        //     if(a.age < b.age) return -1;
        //     if(a.age > b.age) return 1;
        //     return 0;
        // });
        // for(let i = 0; i < sortMembers.length ; i++){
        //     document.write(`名前:${sortMembers[i].name} 年齢:${sortMembers[i].age} 趣味:${sortMembers[i].hobby} <br>`);
        // }


        // FizzBuzz

        // for (let i = 1; i < 100 ; i++) {
        //     if(i%3==0 && i%5==0){
        //         document.write("FizzBuzz"+"<br>");
        //     }else if(i%3==0){
        //         document.write("Fizz"+"<br>");
        //     }else if(i%5==0){
        //         document.write("Buzz"+"<br>");
        //     }else(
        //         document.write(`${i}`+"<br>")
        //     )
        // }


        // ラッキーカラー診断アプリ
        
        const btn = document.querySelector('.btn');
        const container = document.querySelector('.container');
        const colors = ["red", "blue", "green", "yellow", "orange"];
        const newContent = document.createElement('p');

        btn.addEventListener('click',function(){
            btn.classList.toggle('action');
            if(btn.classList.contains('action')) {
            let num = Math.floor(Math.random() * 5);
            newContent.textContent = (colors[num]);
            container.appendChild(newContent);
            }else {
                newContent.textContent = "ボタンを押してください";
            }
        },false)