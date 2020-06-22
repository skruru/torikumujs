// document.write('HELLO');
// console.log('HELLO WORLD');



// const members = [
//     {name:"山田太郎", age:42, hobby:"ギター"},
//     {name:"斎藤すぐる", age:46, hobby:"車"},
//     {name:"田中よしお", age:32, hobby:"旅行,カメラ"},
//     {name:"高橋とおる", age:25, hobby:"絵を描くこと"},
// ];

// for(let i=0; i<members.length; i++){
//     document.write(`${members[i].name}さんは、${members[i].age}歳で、${members[i].hobby}が趣味です。` + "<br>");
// };

// for(let i =1; i<=9; i++){
//     for(let p =1; p <=9; p++){
//         document.write(`${i} ✖︎  ${p} =      ${i*p}<br>`);
//     };
// };

// for(let i = 1; i<=100; i++){
//     if(i%15 === 0){
//         document.write('FizzBuzz');
//     }else if(i%3 === 0){
//         document.write('Fizz');
//     }else if (i%5 ===0){
//         document.write('Buzz');
//     }else{
//         document.write(i);
//     };
//     document.write("<br>");
// };

// const person = {
//     name: "高橋",
//     age: 30,
//     task: ["歯磨き","朝食"],
//     hobby: {
//         sports: "ラグビー",
//         cooking: "イタリアン",
//     },
//     getName: function () {
//         console.log('こんにちは');
//     }
// };

// // ドット記法
// person.name = "斎藤";
// console.log(person.name);

// // ブラケット記法
// const nameKye = "name";
// person[nameKye] = "斎藤";

// console.log(person.name);

// window.prompt();
// console.log();
// document.write();
// alert();

// const button = document.querySelector('.button');
// const button = document.getElementById('js-button');
// const button = document.querySelectorAll('.list');
// console.log(button);

// const title = document.querySelector('h1');
// title.innerHTML = '変更しました';
// title.classList.add('title');
// title.classList.remove('red');


// const div = document.createElement('div');
// const content = div.textContent = '追加したい要素';

// const header = document.querySelector('header');
// header.insertBefore(div, header.firstChild);

// const link = document.createElement('a');
// link.href = 'https://github.com';
// link.textContent = 'GitHUBへのリンク';

// link.setAttribute('href','https://github.com');
// // console.log(link);

// const input = document.querySelector('input');
// input.name = 'name';
// input.type = 'text';
// console.log(input);

// const target = document.querySelector('#section');
// const newContent = document.createElement('div');

// newContent.id = 'test';
// newContent.classList.add('red');
// newContent.textContent = '新しいコンテンツ';

// target.parentNode.appendChild(newContent);

// console.log(newContent);

// // ラッキーカラー診断
// const btn = document.getElementById('js-btn');
// const p = document.createElement('p')
// const div = document.querySelector('div');

// const colors = [
//     'red',
//     'blue',
//     'yellow',
//     'green',
//     'pink',
// ];

// div.appendChild(p);

// btn.addEventListener('click', () => {
//     const num = Math.floor(Math.random() * colors.length);
//     p.textContent = colors[num];
// });

