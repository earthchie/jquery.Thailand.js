# Demo
[https://earthchie.github.io/jquery.Thailand.js/](https://earthchie.github.io/jquery.Thailand.js/)

## jquery.Thailand.js
ตัวช่วยกรอกที่อยู่ที่ดีที่สุดในไทย ไม่ต้องใช้ Server Side!

อ่านแนวคิด และที่มาที่ไปได้ที่นี่ [ระบบ Auto Complete ที่อยู่ไทย อย่างที่มันควรเป็น](https://medium.com/@earthchie/ระบบ-auto-complete-ที่อยู่ไทย-อย่างที่มันควรเป็น-27360185d86a)

## Changelogs 1.4.x
- รวม 2 branches เข้าด้วยกัน เพื่อความสะดวกในการ maintainance repo
- ระบุ database เป็นไฟล์ json หรือ zip ก็ได้ ระบบจะแยกแยะจากนามสกุลไฟล์ให้เอง
- ในกรณีที่ url ไปยัง database ไม่มีนามสกุลไฟล์ (ใช้ mod_rewrite) ให้ระบุประเภทไฟล์ผ่าน option ``database_type`` ว่าเป็น ``json`` หรือ ``zip`` แทน
- สามารถอัพเดตจากเวอร์ชัน 1.3.x ได้ทันที ไม่กระทบโค้ดเดิมที่คุณใช้งาน
- ย้ายไฟล์ database ออกมาจากโฟลเดอร์ source code เพื่อความง่ายในการ maintainance ในอนาคต

## Changelogs 1.3.x
- เพิ่ม callback ``onDataFill()`` ตาม [request](https://github.com/earthchie/jquery.Thailand.js/issues/9)
- แก้บัค ฟิลด์ข้อมูลไม่ยิง event change เมื่อเกิด autocomplete แล้ว (สำหรับตัวอย่างเพิ่มเติม ดูโค้ดใน [Demo](https://earthchie.github.io/jquery.Thailand.js/))
- ฟิลด์ใหม่ ``$search`` ใช้สำหรับค้นหา ดูตัวอย่างได้จากโค้ดใน [Demo](https://earthchie.github.io/jquery.Thailand.js/) (ใช้งานคู่กับ callback ``onDataFill()``)
- เพิ่มฐานข้อมูลต้นฉบับ เป็นไฟล์ .xls อัพเดตข้อมูลล่าสุด เดือนตุลา 2559
- แก้บัคเล็กๆ น้อยๆ
- refactor และ validate ด้วย jslint
- จัดระเบียบโครงสร้างโปรเจค และลบไฟล์ที่ไม่จำเป็นทิ้ง

## Todo
- [x] Clean up repo
- [ ] Need help! with database https://github.com/earthchie/jquery.Thailand.js/issues/4

# วิธีใช้

ในส่วนนี้จะเป็นวิธีใช้อย่างคร่าวๆ หากต้องการรายละเอียดเพิ่มเติม กรุณาอ่านหัวข้อถัดไป

1. ติดตั้ง Dependencies ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/JQL.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
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
*วิธีใช้โดยละเอียด กรุณาอ่านหัวข้อถัดไป*

```javascript

$.Thailand({
    database: './jquery.Thailand.js/database/db.json', // path หรือ url ไปยัง database
    $district: $('#district'), // input ของตำบล
    $amphoe: $('#amphoe'), // input ของอำเภอ
    $province: $('#province'), // input ของจังหวัด
    $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
});

```

# วิธีใช้อย่างละเอียด

เรามีทางเลือกของฐานข้อมูลให้อยู่ 2 ประเภท คือฐานข้อมูลแบบ ``json`` และแบบ ``zip`` ในกรณีที่ Server ของคุณรองรับ gzip เราแนะนำเป็นอย่างยิ่งให้คุณใช้ฐานข้อมูลชนิด ``json``

ทั้งสองแบบมีความแตกต่างกันเพียงแค่ขนาดไฟล์ ไฟล์ฐานข้อมูลที่เล็กกว่า ย่อมทำให้ user ใช้เวลารอน้อยลง

ลองพิจารณาขนาดของฐานข้อมูลแบบ ``json`` ดูครับ 

### ขนาดของฐานข้อมูล

| ไฟล์ | ไม่มี gzip | เปิดใช้ gzip |
| --- | ---:| ---:|
| ``data.json`` | 186.00 KB | **68.90 KB** |

*ผลลัพธ์อ้างอิงจากระบบ gzip ของ github page*

จะเห็นได้ว่าหากเปิด gzip เอาไว้ ขนาดข้อมูลจะเล็กลงมากๆ เราขอแนะนำให้คุณใช้ทางเลือกนี้เสมอหากเป็นไปได้
แต่หากคุณไม่สามารถเปิดใช้ gzip ได้จริงๆ คุณก็สามารถเลือกใช้ฐานข้อมูลแบบ ``zip`` แทนได้ ซึ่งขนาดของฐานข้อมูลรวมตัวแกะ zip มีขนาดดังนี้

| ไฟล์ | ขนาดไฟล์ |
| --- | ---:|
| ``jszip.min.js`` | 99.90 KB |
| ``jszip-utils.min.js`` | 2.10 KB |
| ``db.zip`` | 51.10 KB |
| **รวม** | **153.10 KB** |

ซึ่งจะเล็กกว่าแบบ ``json`` ไม่มี gzip อยู่เพียง 32.90 KB แม้ไม่มากแต่ก็ถือว่าเล็กกว่าอยู่ดี

สรุปขนาดข้องมูล ตามประเภทของ Server

| Server | ประเภทฐานข้อมูลที่แนะนำ | ขนาดฐานข้อมูล |
| --- | ---:| ---:|
| รองรับ gzip | ``json`` | 68.90 KB |
| *ไม่*รองรับ gzip | ``zip`` | 153.10 KB |

ตอนนี้คุณน่าจะตอบคำถามตัวเองได้แล้วว่าจะใช้ฐานข้อมูลประเภทไหน ``json`` หรือ ``zip`` เรามาดูวิธีใช้งานทั้งสองแบบกัน


## หากคุณเลือกใช้ฐานข้อมูลชนิด JSON

1. ติดตั้ง Dependencies ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/JQL.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
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
    database: './jquery.Thailand.js/database/db.json', // path หรือ url ไปยัง database
    $district: $('#district'), // input ของตำบล
    $amphoe: $('#amphoe'), // input ของอำเภอ
    $province: $('#province'), // input ของจังหวัด
    $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
});

```

## หากคุณเลือกใช้ฐานข้อมูลชนิด ZIP
ใช้งานแทบจะเหมือนกับแบบ ``json`` ทุกประการ เว้นแต่ว่าต้องติดตั้ง dependencies เพิ่ม 2 ตัว ``jszip.min.js`` และ ``jszip-utils.min.js``

1. ติดตั้ง Dependencies ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/jszip.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/jszip-utils.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/JQL.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
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
    database: './jquery.Thailand.js/database/db.zip', // ฐานข้อมูลเป็นไฟล์ zip
    $district: $('#district'), // input ของตำบล
    $amphoe: $('#amphoe'), // input ของอำเภอ
    $province: $('#province'), // input ของจังหวัด
    $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
});

```

## การใช้งานโหมดค้นหา

![image](https://cloud.githubusercontent.com/assets/7013039/25127003/642fa330-245e-11e7-9f0b-ab1d3f6e3085.png)

โหมดค้นหาเป็นโหมดที่เพิ่มเข้ามาใหม่ในเวอร์ชัน 1.3.x ลักษณะของมันคือช่องกรอกข้อมูลที่รับ input มาจาก user แล้วนำไปค้นที่อยู่ให้

เมื่อ user ทำการเลือกที่อยู่แล้ว มันจะส่งข้อมูลทั้งหมดไปที่ callback ``onDataFill()`` ให้คุณนำไปจัดการต่อได้ตามสะดวก

```javascript
$.Thailand({ 
    database: './jquery.Thailand.js/database/db.json', // path หรือ url ไปยัง database
    $search: $('#search'), // input ของช่องค้นหา
    onDataFill: function(data){ // callback เมื่อเกิดการ auto complete ขึ้น
        console.log(data);
    }
});
```

## คำอธิบาย options ทั้งหมด

```javascript

$.Thailand({ 
    
    database: './jquery.Thailand.js/database/db.json', // path หรือ url ไปยัง database
    database_type: 'auto', // auto, zip หรือ json; การใส่ auto ลงไป ระบบจะแยกแยะเอาเองตามนามสกุลของ database, ไม่ระบุก็ได้ ค่า default คือ auto

    autocomplete_size: 20, // ขนาดของตัวเลือก ไม่ระบุก็ได้ ค่า default คือ 20

    $district: $('#district'), // input ของตำบล
    $amphoe: $('#amphoe'), // input ของอำเภอ
    $province: $('#province'), // input ของจังหวัด
    $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
    $search: $('#search'), // input ของช่องค้นหา 

    onDataFill: function(data){ // callback เมื่อเกิดการ auto complete ขึ้น
        console.log('Data Filled', data);
    },

    onLoad: function(){ // callback เมื่อโหลดฐานข้อมูลเสร็จและระบบ Auto Complete พร้อมที่จะทำงาน
        console.info('Autocomplete is ready!');
    }
});
```

## Contributers
[earthchie](https://github.com/earthchie/) - Project Owner

[dtinth](https://github.com/dtinth/) - First accepted PR. Made a [big improvement!](https://github.com/earthchie/jquery.Thailand.js/pull/2) Yay!

[saknarak](https://github.com/saknarak) - First [PR](https://github.com/earthchie/jquery.Thailand.js/pull/1).

## License
WTFPL 2.0 http://www.wtfpl.net/

