# Demo
[https://earthchie.github.io/jquery.Thailand.js/](https://earthchie.github.io/jquery.Thailand.js/)

## jquery.Thailand.js
ตัวช่วยกรอกที่อยู่ที่ดีที่สุดในไทย ไม่ต้องใช้ Server Side!

อ่านแนวคิด และที่มาที่ไปได้ที่นี่ [ระบบ Auto Complete ที่อยู่ไทย อย่างที่มันควรเป็น](https://medium.com/@earthchie/ระบบ-auto-complete-ที่อยู่ไทย-อย่างที่มันควรเป็น-27360185d86a)

## Changelogs 1.5.2
> 21 กันยายน 2017

- **Add:** เพิ่มอำเภอเวียงเก่า จังหวัดขอนแก่น เข้าไปในฐานข้อมูล มีผลกับไฟล์ ``db.json`` ``db.zip`` ``geodb.json`` และ ``geodb.zip``
- **Enhancement** แปลง JQL ให้กลับมาเป็น ECMA5 แล้ว เพื่อให้รองรับเบราเซอร์เก่าๆ มากขึ้น
- **Add:** เพิ่ม ``$.Thailand.DB`` เป็น JQL Object ที่เรียกใช้ได้หลังจากโหลดฐานข้อมูลแล้วเรียบร้อย สามารถนำไปใช้ query ได้ 
เช่น 
```javascript
    $.Thailand.DB.select('*').where('province').is('เชียงใหม่').fetch();
```
- **Add:** เพิ่ม ``$.Thailand.setup()`` สำหรับใช้กำหนดค่า default เพื่อที่จะได้ไม่ต้องกำหนดค่าเดิมใหม่ซ้ำๆ ทุกครั้ง เช่น
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

อ่านทั้งหมดได้ที่ [CHANGELOG.md](https://github.com/earthchie/jquery.Thailand.js/blob/master/CHANGELOG.md)

## Todo
- [x] Clean up repo
- [x] Need help! with database [#4](https://github.com/earthchie/jquery.Thailand.js/issues/4)
- [ ] Need Tester on geodb data [#4](https://github.com/earthchie/jquery.Thailand.js/issues/4)

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
    database: './jquery.Thailand.js/database/db.json', // path หรือ url ไปยัง database
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

