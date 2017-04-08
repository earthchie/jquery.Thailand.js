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
    database: 'jquery.Thailand.js/db.zip',
    $district: $('#district'),
    $amphoe: $('#amphoe'),
    $province: $('#province'),
    $zipcode: $('#zipcode'),
});

```

## License
WTFPL 2.0 http://www.wtfpl.net/

