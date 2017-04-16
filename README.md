# jquery.Thailand.js
ตัวช่วยกรอกที่อยู่ที่ดีที่สุดในไทย ไม่ต้องใช้ Server Side!

อ่านแนวคิด และที่มาที่ไปได้ที่นี่ [ระบบ Auto Complete ที่อยู่ไทย อย่างที่มันควรเป็น](https://medium.com/@earthchie/ระบบ-auto-complete-ที่อยู่ไทย-อย่างที่มันควรเป็น-27360185d86a)

## Changelogs 1.3.0
- อัพเดตจาก 1.2.0
- เพิ่ม callback onDataFill() ตาม [request](https://github.com/earthchie/jquery.Thailand.js/issues/9)
- แก้บัค ฟิลด์ข้อมูลไม่ยิง event change เมื่อเกิด autocomplete แล้ว (สำหรับตัวอย่างเพิ่มเติม ดูโค้ดใน [Demo](https://earthchie.github.io/jquery.Thailand.js/))
- จัดระเบียบโครงสร้างโปรเจค และลบไฟล์ที่ไม่จำเป็นทิ้ง
- เพิ่มฐานข้อมูลต้นฉบับ เป็นไฟล์ .xls อัพเดตข้อมูลล่าสุด เดือนตุลา 2559
- ฟิลด์ใหม่ ``$search`` ใช้สำหรับค้นหา ดูตัวอย่างได้จากโค้ดใน [Demo](https://earthchie.github.io/jquery.Thailand.js/)

## Todo
- [x] Clean up repo
- [ ] Need help! with database https://github.com/earthchie/jquery.Thailand.js/issues/4

# Demo
[https://earthchie.github.io/jquery.Thailand.js/](https://earthchie.github.io/jquery.Thailand.js/)

## วิธีใช้

1. ติดตั้ง Dependency ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="jquery.Thailand.js/dependencies/JQL.min.js"></script>
<script type="text/javascript" src="jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
```

2. ติดตั้ง jquery.Thailand.js

```html
<link rel="stylesheet" href="./jquery.Thailand.js/dist/jquery.Thailand.min.css">
<script type="text/javascript" src="./jquery.Thailand.js/dist/jquery.Thailand.min.js"></script>
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
    
    database: './jquery.Thailand.js/dist/db.json', // path หรือ url ไปยัง zip
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

## Performance

ใน [v1.1.0](https://github.com/earthchie/jquery.Thailand.js/tree/fe302996ca72f156e1542048419399484431c391) เป็นต้นมามีการปรับเปลี่ยนโครงสร้างข้อมูล ภายใต้สมมุติฐานว่า Server รองรับ gzip รายละเอียดดังนี้

| ไฟล์ | ขนาดเมื่อถูก gzip |
| --- | ---:|
| JQL.min.js | 1.3 KB |
| typeahead.bundle.js | 14.6 KB |
| jquery.Thailand.min.js | 1.2 KB |
| data.json | 57.4 KB |
| **รวม** | **74.5 KB** |

แต่หากท่านใดที่ Server ไม่รองรับ gzip สามารถใช้ [zipped version](https://github.com/earthchie/jquery.Thailand.js/tree/zipped_version) แทนได้ โดยมีรายละเอียดดังนี้

| ไฟล์ | ขนาดไฟล์ |
| --- | ---:|
| jszip.min.js | 99.5 KB |
| jszip-utils.min.js | 1.7 KB |
| JQL.min.js | 3.1 KB |
| typeahead.bundle.js | 43.4 KB |
| jquery.Thailand.min.js | 2.6 KB |
| db.zip | 50.7 KB |
| **รวม** | **201 KB** |

## Contributers
[earthchie](https://github.com/earthchie/) - Project Owner

[dtinth](https://github.com/dtinth/) - First accepted PR. Made a [big improvement!](https://github.com/earthchie/jquery.Thailand.js/pull/2) Yay!

[saknarak](https://github.com/saknarak) - First [PR](https://github.com/earthchie/jquery.Thailand.js/pull/1).

## Fork
- **Rungsikorn** [Reimplemented in React (jQuery free)](https://github.com/zapkub/react-thailand-address-typeahead), [Storybook Example](http://zapkub.github.io/react-thailand-address/)

## License
WTFPL 2.0 http://www.wtfpl.net/

