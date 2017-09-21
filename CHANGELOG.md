## [1.5.2]
> 21 กันยายน 2017

- **Bugfix:** เพิ่มอำเภอเวียงเก่า จังหวัดขอนแก่น เข้าไปในฐานข้อมูล มีผลกับไฟล์ ``db.json`` ``db.zip`` ``geodb.json`` และ ``geodb.zip``
- **Enhancement** แปลง JQL ให้กลับมาเป็น ECMA5 แล้ว เพื่อให้รองรับเบราเซอร์เก่าๆ มากขึ้น
- **Add:** เพิ่ม ``$.Thailand.DB`` เป็น JQL Object ที่เรียกใช้ได้หลังจากโหลดฐานข้อมูลแล้วเรียบร้อย สามารถนำไปใช้ query ได้ เช่น 
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

[1.5.2]: https://github.com/earthchie/jquery.Thailand.js/commit/b304c12fe1714c912ad0b2af36b342e58be0c8fc

## [1.5.1]
> 14 กรกฎาคม 2017

- **Bugfix:** แก้บัคโหมดค้นหา แสดงผลตกหล่น

[1.5.1]: https://github.com/earthchie/jquery.Thailand.js/commit/4e5f496f5db064bf56c163514167796816d9e357

## [1.5.0]
> 20 เมษายน 2017

- **Feature:** รองรับฐานข้อมูลชนิดใหม่ geodb โดย geodb คือฐานข้อมูลที่เพิ่มข้อมูล area code เข้ามา สำหรับงานที่จำเป็นต้องใช้งานด้านแผนที่ [#4]

[1.5.0]: https://github.com/earthchie/jquery.Thailand.js/commit/ef3114e1badedf02dd08b4c6bf6b97a7a258494a
[#4]: https://github.com/earthchie/jquery.Thailand.js/issues/4

## [1.4.1]
> 20 เมษายน 2017

- **Enhancement:** เปลี่ยนตัวแกะ zip ไปใช้ zip.js (แทนที่ JSZip) เนื่องจากมีขนาดเล็กกว่ามาก

[1.4.1]: https://github.com/earthchie/jquery.Thailand.js/commit/628dfd9c3561120aa4f6511fbb69f25f788d0343

## [1.4.0]
> 18 เมษายน 2017

- รวม 2 branches เข้าด้วยกัน เพื่อความสะดวกในการ maintainance repo
- **Feature:** ระบุ database เป็นไฟล์ json หรือ zip ก็ได้ ระบบจะแยกแยะจากนามสกุลไฟล์ให้เอง ในกรณีที่ url ไปยัง database ไม่มีนามสกุลไฟล์ (ใช้ mod_rewrite) ให้ระบุประเภทไฟล์ผ่าน option database_type ว่าเป็น json หรือ zip แทน
- **Refactor:** ย้ายไฟล์ database ออกมาจากโฟลเดอร์ source code เพื่อความง่ายในการ maintainance ในอนาคต

[1.4.0]: https://github.com/earthchie/jquery.Thailand.js/commit/4d6e5eb7c3313a300dc7e372190f25c2f075cef0

## [1.3.7]
> 18 เมษายน 2017

- **Refactor:** ทำ JSLint
- **Refactor:** จัดระเบียบโครงสร้างโปรเจค และลบไฟล์ที่ไม่จำเป็นทิ้ง

[1.3.7]: https://github.com/earthchie/jquery.Thailand.js/commit/7bd8d78addccc0e7729e871bf45d391ff79bc981


## [1.3.6]
> 16 เมษายน 2017

- **Enhancement:** กล่อง search จะทำงานที่ keyword ความยาวมากกว่า 1 เท่านั้น (เหตุผลด้าน performance)

[1.3.6]: https://github.com/earthchie/jquery.Thailand.js/commit/a065ae07855a531eac5e774c61545904b70f1b36

## [1.3.5]
> 16 เมษายน 2017

- **Bugfix:** ผลลัพธ์ไม่จำเป็นต้องขึ้นต้นด้วย keyword ที่กำหนดเท่านั้น หากพื้นที่ใดมี keyword อยู่ในชื่อจะแสดงผลออกมาหมด (อย่างที่ควรเป็น)

[1.3.5]: https://github.com/earthchie/jquery.Thailand.js/commit/0fbb2571f76bbef6060d12ce77ae5249258a1348

## [1.3.4]
> 16 เมษายน 2017

- **Enhancement:** ผลการค้นหาเรียงลำดับจากความใกล้เคียงของ keyword แล้ว 

[1.3.4]: https://github.com/earthchie/jquery.Thailand.js/commit/6aff78c0403da50c9414ef62a769c3bdc5578a3d

## [1.3.3]
> 16 เมษายน 2017

- **Bugfix:** แก้บัคแสดงลำดับของตัวเลือกไม่ถูกต้อง (เอาอำเภอขึ้นก่อนตำบลซะงั้น)

[1.3.3]: https://github.com/earthchie/jquery.Thailand.js/commit/c9240dc855185eb8ebb675bc97d9d21bb2a41884

## [1.3.2]
> 16 เมษายน 2017

- **Bugfix:** แก้ของ preprocess() ที่ไม่ตรงกับเวอร์ชันฐานข้อมูล

[1.3.2]: https://github.com/earthchie/jquery.Thailand.js/commit/5a68838ad9f2355caf520278d53a26dd4bc2f628

## [1.3.1]
> 16 เมษายน 2017

- **Feature:** ปรับฟีเจอร์ของ branch zipped_version ให้ทัน master
- **Bugfix:** แก้บัคของ branch zipped_version

[1.3.1]: https://github.com/earthchie/jquery.Thailand.js/commit/3fe89f9c2eabb70de4f64c8a5e8406465a48d249

## [1.3.0]
> 16 เมษายน 2017

- **Feature:** เพิ่ม callback ``onDataFill()`` ตาม [#9]
- **Feature:** ฟิลด์ใหม่ ``$search`` ใช้สำหรับค้นหา
- **Bugfix:** แก้บัค ฟิลด์ข้อมูลไม่ยิง event change เมื่อเกิด autocomplete แล้ว
- **Add:** เพิ่มฐานข้อมูลต้นฉบับ เป็นไฟล์ .xls อัพเดตข้อมูลล่าสุด เดือนตุลา 2559
- **Refactor:** จัดระเบียบโครงสร้างโปรเจค และลบไฟล์ที่ไม่จำเป็นทิ้ง

[1.3.0]: https://github.com/earthchie/jquery.Thailand.js/commit/6fbc2dba93c3d34b71a9ec3290292628a1ca7dfa
[#9]: https://github.com/earthchie/jquery.Thailand.js/issues/9

## [1.2.0]
> 10 เมษายน 2017

- **Enhancement:** ปรับปรุงขนาดฐานข้อมูลให้เล็กลง [#7]

[1.2.0]: https://github.com/earthchie/jquery.Thailand.js/commit/3c22fb59ce3c126db86abb2c45e4295d237104b9
[#7]: https://github.com/earthchie/jquery.Thailand.js/commit/96f0fe98c61b006890549041d8a12622984306ad

## [1.1.0]
> 8 เมษายน 2017

- **Enhancement:** เปลี่ยนโครงสร้างฐานข้อมูลไปเป็นแบบต้นไม้ เพื่อขนาดที่เล็กลง

[1.1.0]: https://github.com/earthchie/jquery.Thailand.js/commit/678d1ea2e23011a1955ab2ec461c2e7172a6c11a

## [1.0.2]
> 8 เมษายน 2017

- **Enhancement:** เพิ่มโค้ดแจ้งและจัดการกับ Error ต่างๆ

[1.0.2]: https://github.com/earthchie/jquery.Thailand.js/commit/934ce086010d8811d4e9d660d307f9453f57fc36

## [1.0.1]
> 8 เมษายน 2017

- **Feature:** เพิ่มตัวเลือกให้กำหนด ``autocomplete_size``
- **Bugfix:** เรียกใช้ fields ที่กำหนดแล้ว

[1.0.1]: https://github.com/earthchie/jquery.Thailand.js/commit/84c4e82e83348f1ad756c6a23d70d5cedfeec278

## [1.0.0]
> 8 เมษายน 2017

- :confetti_ball: Initial commit

[1.0.0]: https://github.com/earthchie/jquery.Thailand.js/commit/e6ce847d6fda0569897992f4a8ee468fd34b2dbb
