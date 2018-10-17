# Demo
[https://earthchie.github.io/jquery.Thailand.js/](https://earthchie.github.io/jquery.Thailand.js/)

## jquery.Thailand.js
ตัวช่วยกรอกที่อยู่ที่ดีที่สุดในไทย ไม่ต้องใช้ Server Side!

อ่านแนวคิด และที่มาที่ไปได้ที่นี่ [ระบบ Auto Complete ที่อยู่ไทย อย่างที่มันควรเป็น](https://medium.com/@earthchie/ระบบ-auto-complete-ที่อยู่ไทย-อย่างที่มันควรเป็น-27360185d86a)

## ต้องการปรับปรุงฐานข้อมูล?
คุณสามารถปรับปรุงข้อมูลได้ที่ [raw_database.json](https://github.com/earthchie/jquery.Thailand.js/blob/master/jquery.Thailand.js/database/raw_database/raw_database.json) จากนั้นนำไฟล์ที่แก้ไขแล้ว ไป compact ให้มีขนาดเล็กลงเพื่อให้นำไปใช้กับ Libary ได้ที่ [Database Tools](https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/database/tools/)

## Changelog [1.5.3.5]
> 23 กันยายน 2018
- ต.บางวัว อ.บางปะกง เปลี่ยนรหัสไปรษณีย์เป็น 24130

ปรับปรุงฐานข้อมูลตาม [#29](https://github.com/earthchie/jquery.Thailand.js/issues/29)
- ต.เกาะเต่า อ.เกาะพงัน เพิ่มรหัสไปรษณีย์ 84360
- ต.ฉลอง, ต.ราไวย์ อ.เมืองภูเก็ต เพิ่มรหัสไปรษณีย์ 83130
- ต.โคกม่วง อ.คลองหอยโข่ง เพิ่มรหัสไปรษณีย์ 90115

[1.5.3.5]: https://github.com/earthchie/jquery.Thailand.js/commit/808d5e143a8fe3ae9339bd1d54a28b7b044b93e2

## Changelog [1.5.3.4]
> 27 กุมภาพันธ์ 2018
- แขวงวังใหม่ เพิ่มรหัสไปรษณีย์ 10110 (อาคารเพลินจิตเซ็นเตอร์), 10120 (อาคารลุมพินีทาวเวอร์), 10400 (อาคารวิทยุคอมเพล็กซ์ และอื่นๆ), 10500 (ศาลแขวงปทุมวัน)
- แขวงท่าแร้ง เพิ่มรหัสไปรษณีย์ 10230
- แขวงหัวหมาก และสะพานสูง เพิ่มรหัสไปรษณีย์ 10250
- แขวงพระโขนง เพิ่มรหัสไปรษณีย์ 10260
- แขวงสวนจิตรลดา เพิ่มรหัสไปรษณีย์ 10303 (ภายในพระราชวังดุสิต)

[1.5.3.4]: https://github.com/earthchie/jquery.Thailand.js/commit/687903603b2cf238480028dca25727f273d16688

## Changelog [1.5.3.3]
> 22 กุมภาพันธ์ 2018
- ต.หนองเข็ง จ.บึงกาฬ เปลี่ยนชื่อเป็น ต.โนนสว่าง [รายละเอียด](https://github.com/earthchie/jquery.Thailand.js/issues/24)
- เพิ่มรหัสไปรษณีย์ 10240 ให้แก่แขวงคลองกุ่ม [รายละเอียด](https://github.com/earthchie/jquery.Thailand.js/issues/23#issuecomment-364639460)
- ต.อ่าวนาง จ.กระบี่ เปลี่ยนรหัสไปรษณีย์เป็น 81000 [รายละเอียด](https://github.com/earthchie/jquery.Thailand.js/issues/23#issuecomment-366976139)

[1.5.3.3]: https://github.com/earthchie/jquery.Thailand.js/commit/cc93cf383121a19efec96be579c1fd784fa7c45c

## Changelog [1.5.3.2]
> 25 มกราคม 2018
- เพิ่มรหัสไปรษณีย์ 21150 ให้ตำบลเนินพระ จังหวัดระยอง [รายละเอียด](https://github.com/earthchie/jquery.Thailand.js/issues/23#issuecomment-359311564)

[1.5.3.2]: https://github.com/earthchie/jquery.Thailand.js/commit/49dde0a4e0da753d9f6fea4dff41f44b8c67addd

## Changelog [1.5.3.1]
> 20 มกราคม 2018
- เพิ่มแขวงทับช้าง แขวงราษฎร์พัฒนา (เขตสะพานสูง กทม.)

[1.5.3.1]: https://github.com/earthchie/jquery.Thailand.js/commit/cc1a1e59e87a8a1e07d4905a8a452495800ba773

## Changelog [1.5.3]
> 20 ธันวาคม 2017

- **Update** ปรับปรุงรหัสไปรษณีย์ อ.แก่งหางแมว จ. จันทบุรี เป็น 22160
- **Update** ปรับปรุงรหัสไปรษณีย์ อ.วังเจ้า จ.ตาก เป็น 63180
- **Update** ปรับปรุงรหัสไปรษณีย์ อ.บางเสาธง จ.สมุทรปราการ เป็น 10570
- **Update** ย้าย ต.ท่าแฝก จ.อุตรดิตถ์ ออกจากอ.ท่าปลา ไปอยู่ อ.น้ำปาด
- **Enhancement** กำหนดฐานข้อมูลให้อ่านไฟล์จาก GitHub CDN เป็นค่า default ทำให้ไม่จำเป็นต้องโฮสไฟล์ฐานข้อมูลเอง
- **Enhancement** ลบโค้ดที่ไม่จำเป็นทิ้ง
- **Enhancement** เปลี่ยนชื่อไฟล์ ``/database/raw_database/database.xls`` เป็น ``/database/raw_database/original_database_from_thaipost.xls``
- **Enhancement** เปลี่ยนชื่อไฟล์ ``/database/raw_database/database.json`` เป็น ``/database/raw_database/raw_database.json``
- **Add** เพิ่มเครื่องมือ build ฐานข้อมูลแบบ web-based [Database Tools](https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/database/tools/)

[1.5.3]: https://github.com/earthchie/jquery.Thailand.js/commit/5254a5e5745f25d93369f3085560fe6e7cb2a179

อ่านทั้งหมดได้ที่ [CHANGELOG.md](https://github.com/earthchie/jquery.Thailand.js/blob/master/CHANGELOG.md)

## Todo
- [x] Clean up repo
- [x] Need help! with database [#4](https://github.com/earthchie/jquery.Thailand.js/issues/4)
- [ ] Need Tester on geodb data [#4](https://github.com/earthchie/jquery.Thailand.js/issues/4)
- [ ] Drop support for zip file, will use GZIP CDN instead.
- [ ] English language database

# วิธีใช้

ในส่วนนี้จะเป็นวิธีใช้อย่างคร่าวๆ หากต้องการรายละเอียดเพิ่มเติม กรุณาอ่านหัวข้อถัดไป

1. ติดตั้ง Dependencies ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dependencies/JQL.min.js"></script>
<script type="text/javascript" src="https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
    
```

2. ติดตั้ง jquery.Thailand.js

```html
<link rel="stylesheet" href="https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.css">
<script type="text/javascript" src="https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.js"></script>
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
    $district: $('#district'), // input ของตำบล
    $amphoe: $('#amphoe'), // input ของอำเภอ
    $province: $('#province'), // input ของจังหวัด
    $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
});

```

ใน version 1.5.3 เป็นต้นมา คุณไม่จำเป็นต้องระบุฐานข้อมูล ตัว lib จะทำการเรียกใช้ฐานข้อมูลจาก GitHub CDN ให้อัตโนมัติ

# วิธีใช้อย่างละเอียด

เรามีทางเลือกของฐานข้อมูลให้อยู่ 2 ประเภท คือฐานข้อมูลแบบ ``json`` และแบบ ``zip`` ในกรณีที่ Server ของคุณรองรับ gzip เราแนะนำเป็นอย่างยิ่งให้คุณใช้ฐานข้อมูลชนิด ``json``

ทั้งสองแบบมีความแตกต่างกันที่แค่ขนาดไฟล์เป็นหลัก ไฟล์ฐานข้อมูลที่เล็กกว่า ย่อมทำให้ user ใช้เวลารอน้อยลง

นอกจากนี้การใช้ฐานข้อมูลแบบ zip จะมีข้อเสียเพิ่มเติมอีกเล็กน้อย ดังต่อไปนี้
* ต้องใช้ resource ด้าน CPU และ RAM เพิ่มเล็กน้อย
* ต้องเสียเวลาในการโหลด dependencies สำหรับแกะ zip เพิ่มอีก 3 ตัว ถึงแม้จะมีขนาดเล็ก แต่ก็เสียเวลาไปกับ latency ที่เกิดจาก HTTP Request อีกเล็กน้อยอยู่ดี

![image](https://cloud.githubusercontent.com/assets/7013039/25199750/139c52ec-2576-11e7-9630-fa5fa26d87e6.png)

จากภาพนี้จะเห็นได้ว่า หากเป็นฐานข้อมูลชนิด ``json`` จะมีการโหลดไฟล์ ``db.json`` เพียงไฟล์เดียว ใช้เวลาเพียง 123ms เท่านั้น
ในขณะที่ฐานข้อมูลชนิด ``zip`` จะต้องโหลดไฟล์หลายไฟล์ ใช้เวลารวมกันถึง 43+47+294+286 = 670ms ช้ากว่าแบบ `` json`` ถึงครึ่งวินาที

นอกจากนี้ หากพูดถึงเรื่องขนาด เรามาลองพิจารณาขนาดของฐานข้อมูลแบบ ``json`` ดูครับ 

### ขนาดของฐานข้อมูล

| ไฟล์ | ไม่มี gzip | เปิดใช้ gzip |
| --- | ---:| ---:|
| ``db.json`` | 186.00 KB | **68.90 KB** |

*ผลลัพธ์อ้างอิงจากระบบ gzip ของ github page*

จะเห็นได้ว่าหากเปิด gzip เอาไว้ ขนาดข้อมูลจะเล็กลงมากๆ เราขอแนะนำให้คุณใช้ทางเลือกนี้เสมอหากเป็นไปได้
แต่หากคุณไม่สามารถเปิดใช้ gzip ได้จริงๆ คุณก็สามารถเลือกใช้ฐานข้อมูลแบบ ``zip`` แทนได้ ซึ่งขนาดของฐานข้อมูลรวมตัวแกะ zip มีขนาดดังนี้

| ไฟล์ | ขนาดไฟล์ |
| --- | ---:|
| ``zip.js`` | 12.40 KB |
| ``z-worker.js`` | 2.00 KB |
| ``inflate.js`` | 22.00 KB |
| ``db.zip`` | 51.10 KB |
| **รวม** | **87.50 KB** |

สรุปขนาดข้องมูล ตามประเภทของ Server

| Server | ประเภทฐานข้อมูลที่แนะนำ | ขนาดฐานข้อมูล |
| --- | ---:| ---:|
| รองรับ gzip | ``json`` | 68.90 KB |
| *ไม่*รองรับ gzip | ``zip`` | 87.50 KB |

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

หรือใช้งาน ``$.Thailand.setup()`` เพื่อกำหนดค่า default จะได้ไม่ต้องกำหนดค่าเดิมใหม่ซ้ำๆ ทุกครั้ง เช่น
```javascript
    $.Thailand.setup({
        database: './jquery.Thailand.js/database/db.json'
    });

    // ไม่ต้องกำหนด path ของ database ซ้ำ
    $.Thailand({
        $search: $('#demo1 [name="search"]'),
        onDataFill: function(data){
            console.log(data)
        }
    });

    // ไม่ต้องกำหนด path ของ database ซ้ำเช่นกัน
    $.Thailand({
        $search: $('#demo2 [name="search"]'),
        onDataFill: function(data){
            console.log(data)
        }
    });
```

## หากคุณเลือกใช้ฐานข้อมูลชนิด ZIP
ใช้งานแทบจะเหมือนกับแบบ ``json`` ทุกประการ เว้นแต่ว่าต้องติดตั้ง dependencies เพิ่ม คือ ``zip.js``

1. ติดตั้ง Dependencies ให้ครบ

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./jquery.Thailand.js/dependencies/zip.js/zip.js"></script>
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
    $search: $('#search'), // input ของช่องค้นหา
    onDataFill: function(data){ // callback เมื่อเกิดการ auto complete ขึ้น
        console.log(data);
    }
});
```

## geodb

geodb คือฐานข้อมูลชนิดใหม่ โดยที่มีการเพิ่มข้อมูล Area Code เข้ามา สำหรับงานที่จำเป็นต้องใช้งานด้านแผนที่ [#4](https://github.com/earthchie/jquery.Thailand.js/issues/4) มีขนาดใหญ่กว่าฐานข้อมูลปกติเล็กน้อย สามารถสลับสับเปลี่ยนกับฐานข้อมูลปกติได้ทันที

เปรียบเทียบขนาดของฐานข้อมูล

### ชนิด ``json``

| ไฟล์ | ไม่มี gzip | เปิดใช้ gzip |
| --- | ---:| ---:|
| ``db.json`` | 186.00 KB | 68.90 KB |
| ``geodb.json`` | 242.00 KB | 91.20 KB |
| ใหญ่ขึ้น | 56.00 KB | 22.30 KB |

### ชนิด ``zip``
| ไฟล์ | ไม่มี gzip |
| --- | ---:|
| ``db.zip`` | 51.10 KB |
| ``geodb.zip`` | 68.50 KB |
| ใหญ่ขึ้น | 17.40 KB |

วิธีการใช้งาน สามารถทำได้ง่ายมาก เพียงเปลี่ยน url ของฐานข้อมูลไปเป็นแบบ geodb ก็เป็นอันเรียบร้อย

ตัวอย่าง

```html
<input type="text" id="search">

<input type="text" id="district_code">
<input type="text" id="amphoe_code">
<input type="text" id="province_code">
```

```javascript
$.Thailand({
    // เปลี่ยนไปใช้ geodb แทน จะเป็น geodb.json หรือ geodb.zip ก็ได้
    database: './jquery.Thailand.js/database/geodb.json', 

    $search: $('#search'),

    $district_code: $('#district_code'),
    $amphoe_code: $('#amphoe_code'),
    $province_code: $('#province_code'),

    onDataFill: function(data){
        console.log(data);
        /*
        ผลลัพธ์ที่ได้
        {
            district: '',
            district_code: '',
            amphoe: '',
            amphoe_code: '',
            province: '',
            province_code: '',
            zipcode: ''
        }
        */
    }
});
```

## คำอธิบาย options ทั้งหมด

```javascript

$.Thailand({ 
    
    // path หรือ url ไปยัง database เลือกได้ 4 แบบตามความเหมาะสม 
    // db.json, db.zip, geodb.json, geodb.zip
    database: './jquery.Thailand.js/database/db.json', 
    
    // auto, zip หรือ json; การใส่ auto ลงไป ระบบจะแยกแยะเอาเองตามนามสกุลของ database
    // (ไม่ระบุก็ได้ ค่า default คือ auto)
    database_type: 'auto', 
    
    // อ่านหัวข้อถัดไป
    // (ปกติไม่ต้องระบุ)
    zip_worker_path: false, 
    
    // ขนาดของตัวเลือกใน Dropdown 
    // (ไม่ระบุก็ได้ ค่า default คือ 20)
    autocomplete_size: 20, 
    
    // input ของตำบล
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $district: $('#district'), 
    
    // input area code ของตำบล
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $district_code: $('#district_code'), 
    
    // input ของอำเภอ
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $amphoe: $('#amphoe'), 
    
    // input area code ของอำเภอ
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $amphoe_code: $('#amphoe_code'), 
    
    // input ของจังหวัด
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $province: $('#province'), 
    
    // input area code ของจังหวัด
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $province_code: $('#province_code'), 
    
    // input ของรหัสไปรษณีย์
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $zipcode: $('#zipcode'), 
    
    // input ของช่องค้นหา 
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    $search: $('#search'), 
    
    // callback เมื่อเกิดการ auto complete ขึ้น
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    onDataFill: function(data){ 
        console.log('Data Filled', data);
    },
    
    // callback เมื่อโหลดฐานข้อมูลเสร็จและระบบ Auto Complete พร้อมที่จะทำงาน
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    onLoad: function(){ 
        console.info('Autocomplete is ready!');
    },

    // object templates ใช้สำหรับ render dataset ใน typeahead.js
    // สามารถอ่านเพิ่มเติมได้ที่ field templates ใน https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#datasets
    // (ไม่ระบุก็ได้หากไม่จำเป็นต้องใช้)
    templates: {
        empty: ' ',
        suggestion: function (data) {
            if (data.zipcode) {
                data.zipcode = ' » ' + data.zipcode;
            }
            return '<div>' + data.district + ' » ' + data.amphoe + ' » ' + data.province + data.zipcode + '</div>';
        }
    }
});
```
#### zip_worker_path?

คือ path ที่เก็บไฟล์ ``z-worker.js`` และ ``inflate.js`` โดยปกติไม่จำเป็นต้องยุ่งกับค่านี้เลย ระบบจะ detect เอาเอง
เว้นแต่ว่าจะพบ error แจ้งว่าหาไฟล์ ``z-worker.js`` และ ``inflate.js`` ไม่เจอ (ซึ่งไม่น่าเกิดขึ้นได้ เว้นแต่จะแยกไฟล์ ``zip.js`` ออกไปไว้คนละที่กัน)
ถ้ามันแจ้ง error ว่าหาไฟล์ไม่เจอ ก็ค่อยให้ระบุค่าลงไป เช่น ``zip_worker_path: "./jquery.Thailand.js/dependencies/zip.js/",``

## Contributers
[earthchie](https://github.com/earthchie/) - Project Owner

[dtinth](https://github.com/dtinth/) - First accepted PR. Made a [big improvement!](https://github.com/earthchie/jquery.Thailand.js/pull/2) Yay!

[saknarak](https://github.com/saknarak) - First [PR](https://github.com/earthchie/jquery.Thailand.js/pull/1).

## License
WTFPL 2.0 http://www.wtfpl.net/

## Forks
* [React](https://github.com/zapkub/react-thailand-address-typeahead)
* [WooCommerce Plugin](https://www.designilcode.com/woo-thai-address/) (ไม่ฟรี)

