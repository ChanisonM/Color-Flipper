const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click' , function(){
    let hexColor = '#'
    for(let i = 0 ; i < 6 ; i++){
        hexColor += hex[getRanNumberArray()]
        console.log(hexColor);
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})


function getRanNumberArray(){
    return Math.floor(Math.random() * hex.length)
}

/* แนวคิด

    - สร้าง array เก็บค่า 0 - 9 และ A - F

    - ดึงค่า element ขอ id 'btn' จากไฟล์ hex.html เก็บค่าไว้ตัวแปร const btn

    - ดึงค่า selector ขอ class 'color' จากไฟล์ hex.html เก็บค่าไว้ตัวแปร const color

    - เพิ่มอีเว้นท์ คลิ๊ก พร้อมฟังก์ชั่น เก็บค่าไว้ตัวแปร const btn
    
    - สร้างตัวแปร hexColor เก็บค่า # 

    - วนลูป for หลังจากนั้นให้ hexColor += hex[getRanNumberArray()] หมายถึง # แล้วตามด้วย ตัวเลขที่ random มาจาก ฟังก์ชัน getRanNumberArray() อีก 6 ตัว

    - แสดงข้อความ หลัง random hexColor ออกเป็นรูปแบบ Text

    - เซ็ต backgroundColor 


*/
 
