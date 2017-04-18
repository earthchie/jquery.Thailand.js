# Zipped Version
Branch นี้เหมาะสำหรับ Server ที่ไม่รองรับ gzip นะครับ เหมาะสำหรับท่านที่ใช้งาน shared host ที่ไม่สามารถเปิดใช้ gzip ได้
แต่หากใครที่เซิร์ฟเวอร์รองรับ gzip แนะนำให้ไปใช้ Branch [Master](https://github.com/earthchie/jquery.Thailand.js/tree/master) แทนนะครับ

# Demo
[https://earthchie.github.io/jquery.Thailand.js/](https://earthchie.github.io/jquery.Thailand.js/)

## jquery.Thailand.js
ตัวช่วยกรอกที่อยู่ที่ดีที่สุดในไทย ไม่ต้องใช้ Server Side!

อ่านแนวคิด และที่มาที่ไปได้ที่นี่ https://medium.com/@earthchie/ระบบ-auto-complete-ที่อยู่ไทย-อย่างที่มันควรเป็น-27360185d86a

## Changelogs 1.3.x
- เพิ่ม callback onDataFill() ตาม [request](https://github.com/earthchie/jquery.Thailand.js/issues/9)
- แก้บัค ฟิลด์ข้อมูลไม่ยิง event change เมื่อเกิด autocomplete แล้ว (สำหรับตัวอย่างเพิ่มเติม ดูโค้ดใน [Demo](https://earthchie.github.io/jquery.Thailand.js/))
- จัดระเบียบโครงสร้างโปรเจค และลบไฟล์ที่ไม่จำเป็นทิ้ง
- เพิ่มฐานข้อมูลต้นฉบับ เป็นไฟล์ .xls อัพเดตข้อมูลล่าสุด เดือนตุลา 2559
- ฟิลด์ใหม่ ``$search`` ใช้สำหรับค้นหา ดูตัวอย่างได้จากโค้ดใน [Demo](https://earthchie.github.io/jquery.Thailand.js/)

## Todo
- [x] Clean up repo
- [ ] Need help! with database https://github.com/earthchie/jquery.Thailand.js/issues/4



# วิธีใช้

1. ติดตั้ง Dependency ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="jquery.Thailand.js/dependencies/jszip.min.js"></script>
<script type="text/javascript" src="jquery.Thailand.js/dependencies/jszip-utils.min.js"></script>
<script type="text/javascript" src="jquery.Thailand.js/dependencies/JQL.min.js"></script>
<script type="text/javascript" src="jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
```

2. ติดตั้ง jquery.Thailand.js

```html
<link rel="stylesheet" href="jquery.Thailand.js/jquery.Thailand.min.css">
<script type="text/javascript" src="jquery.Thailand.js/jquery.Thailand.min.js"></script>
```

3. สร้าง input สำหรับกรอก ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์

```html
<input type="text" id="district">
<input type="text" id="amphoe">
<input type="text" id="province">
<input type="text" id="zipcode">
```

4. เรียกใช้ jquery.Thailand.js

```javascript

$.Thailand({ 
    
    database: './jquery.Thailand.js/dist/db.zip', // path หรือ url ไปยัง zip
    autocomplete_size: 10, // ขนาดของตัวเลือก ถ้าไม่ระบุ ค่า default คือ 20

    $district: $('[name="district"]'), // input ของตำบล
    $amphoe: $('[name="amphoe"]'), // input ของอำเภอ
    $province: $('[name="province"]'), // input ของจังหวัด
    $zipcode: $('[name="zipcode"]'), // input ของรหัสไปรษณีย์

    onDataFill: function(data){ // callback เมื่อเกิดการ auto complete ขึ้น
        console.info('Data Filled', data);
    },

    onLoad: function(){ // callback เมื่อโหลดฐานข้อมูลเสร็จและระบบ Auto Complete พร้อมที่จะทำงาน
        console.info('Autocomplete is ready!');
    }
});

```

## ขนาดของข้อมูล

ใน [v1.1.0](https://github.com/earthchie/jquery.Thailand.js/tree/fe302996ca72f156e1542048419399484431c391) เป็นต้นมามีการปรับเปลี่ยนโครงสร้างข้อมูล ภายใต้สมมุติฐานว่า Server รองรับ gzip รายละเอียดดังนี้

| ไฟล์ | ขนาดเมื่อถูก gzip |
| --- | ---:|
| data.json | 68.9 KB |
| **รวม** | **68.9 KB** |

แต่หากท่านใดที่ Server ไม่รองรับ gzip สามารถใช้ [zipped version](https://github.com/earthchie/jquery.Thailand.js/tree/zipped_version) แทนได้ โดยมีรายละเอียดดังนี้

| ไฟล์ | ขนาดไฟล์ |
| --- | ---:|
| jszip.min.js | 99.5 KB |
| jszip-utils.min.js | 1.7 KB |
| db.zip | 51.1 KB |
| **รวม** | **152.3 KB** |

## Contributers
[earthchie](https://github.com/earthchie/) - Project Owner

[dtinth](https://github.com/dtinth/) - First accepted PR. Made a [big improvement!](https://github.com/earthchie/jquery.Thailand.js/pull/2) Yay!

[saknarak](https://github.com/saknarak) - First [PR](https://github.com/earthchie/jquery.Thailand.js/pull/1).

## License
WTFPL 2.0 http://www.wtfpl.net/

