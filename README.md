## thai-address-database
ฐานข้อมูลที่อยู่ในไทย ไม่ต้องใช้ Server Side!

## Original version
**database** และ function **preprocess()** จาก ตั้นฉบับ version **1.5.1**

[[Commit: 4e5f496](https://github.com/earthchie/jquery.Thailand.js/commit/4e5f496f5db064bf56c163514167796816d9e357)]

## ข้อจำกัด
* ตอนนี้รองรับแค่ db.json
* ยังไม่รองรับ db.zip
* ยังไม่รองรับ geodb

## Example
```
$ yarn add thai-address-database
```

```vue
<template>
  <div id="app">
    <input v-model="q">
    <ul>
      <li v-for="item in result">
        {{item.district}} » {{item.amphoe}} » {{item.province}} » {{item.zipcode}}
      </li>
    </ul>
  </div>
</template>

<script>
import { searchAddressByDistrict } from 'thai-address-database'

export default {
  name: 'app',
  data () {
    return {
      q: ''
    }
  },
  computed: {
    result () {
      return searchAddressByDistrict(this.q)
    }
  }
}
</script>
```

## Todos
- [x] Add Standard style(ESLint)
- [ ] คิดชื่อ npm package
- [ ] Unit test
- [ ] Add code coverage report
- [ ] Refactoring
- [ ] เพิ่มวิธีการใช้งานใน README.md
- [ ] โหมดค้นหา
- [ ] Deploy to npmjs.com

## Publish to npmjs
```
npm run deploy
```
