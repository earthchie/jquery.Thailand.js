# jquery.Thailand.js
ตัวช่วยกรอกที่อยู่ที่ดีที่สุดในไทย ไม่ต้องใช้ Server Side!

อ่านแนวคิด และที่มาที่ไปได้ที่นี่ https://medium.com/@earthchie/ระบบ-auto-complete-ที่อยู่ไทย-อย่างที่มันควรเป็น-27360185d86a

# Demo
https://earthchie.github.io/jquery.Thailand.js/

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
    database: './jquery.Thailand.js/db.zip', // path หรือ url ไปยัง zip
    autocomplete_size: 10, // ถ้าไม่ระบุ ค่า default คือ 20
    $district: $('#district'),
    $amphoe: $('#amphoe'),
    $province: $('#province'),
    $zipcode: $('#zipcode'),
    onComplete: function(){
        console.log('Autocomplete is ready!')
    }
});

```

## Performance

ใน [v1.1.0](https://github.com/earthchie/jquery.Thailand.js/tree/fe302996ca72f156e1542048419399484431c391) เป็นต้นมามีการปรับเปลี่ยนโครงสร้างข้อมูล ภายใต้สมมุติฐานว่า Server รองรับ gzip รายละเอียดดังนี้

| ไฟล์ | ขนาดไฟล์ | ขนาดเมื่อถูก Gzip |
| --- | ---:| ---:|
| JQL.min.js | 3.1 KB | 1.3 KB |
| typeahead.bundle.js | 43.4 KB | 14.6 KB |
| jquery.Thailand.min.js | 2.5 KB | 1.2 KB |
| data.json | 286.0 KB | 57.4 KB |
| **รวม** | 335.0 KB | **74.5 KB** |

แต่หากท่านใดที่ Server ไม่รองรับ gzip สามารถใช้ [v1.0.2](https://github.com/earthchie/jquery.Thailand.js/tree/747b09ba84d8acb19cf0aca4e8debfee35e36176) แทนได้ โดยมีรายละเอียดดังนี้

| ไฟล์ | ขนาดไฟล์ | ขนาดเมื่อถูก Gzip |
| --- | ---:| ---:|
| jszip.min.js | 99.5 KB | 29.7 KB |
| jszip-utils.min.js | 1.7 KB | 1.2 KB |
| JQL.min.js | 3.1 KB | 1.3 KB |
| typeahead.bundle.js | 43.4 KB | 14.6 KB |
| jquery.Thailand.min.js | 2.4 KB | 1.2 KB |
| db.zip | 65.3 KB | 65.6 KB |
| **รวม** | **215.4 KB** | 113.6 KB |

## Contributers
[earthchie](https://github.com/earthchie/) - Project Owner

[dtinth](https://github.com/dtinth/) - First accepted PR. Made a [big improvement!](https://github.com/earthchie/jquery.Thailand.js/pull/2) Yay!

[saknarak](https://github.com/saknarak) - First [PR](https://github.com/earthchie/jquery.Thailand.js/pull/1).

## Fork
- **Rungsikorn** [Reimplemented in React (jQuery free)](https://github.com/zapkub/react-thailand-address-typeahead), [Storybook Example](http://zapkub.github.io/react-thailand-address/)

## License
WTFPL 2.0 http://www.wtfpl.net/

