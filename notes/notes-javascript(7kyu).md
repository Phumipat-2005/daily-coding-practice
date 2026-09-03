1# 📝 บันทึกสรุปพื้นฐาน JavaScript (7 kyu)

---

### 1. การตรวจสอบและค้นหาข้อความด้วย Regular Expression (RegEx)
* **การจับคู่รูปแบบด้วย `.match()`:**
  * โครงสร้าง: `str.match(/pattern/flags)`
  * ตัวอย่างค้นหาสระ: `str.match(/[aeiou]/g)`
    * เครื่องหมายก้ามปู `[...]`: ระบุกลุ่มตัวอักษรที่ต้องการค้นหา (Character Set)
    * แฟลก `g` (Global Flag): สั่งให้ค้นหาครบทุกจุดทั่วทั้งข้อความ ไม่หยุดแค่ตัวแรกที่พบ
  * คืนค่าผลลัพธ์ออกมาเป็น **Array ของตัวอักษรที่พบ**
* **เทคนิค Safe Navigation ป้องกันแอปพัง (`|| []`):**
  * ถ้าค้นหาไม่พบเลยแม้แต่ตัวเดียว คำสั่ง `.match()` จะคืนค่าเป็น **`null`**
  * การเรียก `.length` ต่อท้าย `null` จะทำให้เกิด TypeError (`Cannot read properties of null`) ทันที
  * **วิธีแก้:** ดักด้วย Fallback Empty Array เสมอ เช่น:
    ```javascript
    const count = (str.match(/[aeiou]/g) || []).length;
    ```

---

### 2. การตรวจสอบการมีอยู่ของข้อมูล (String Inspection)
* **คำสั่ง `str.includes()`:**
  * โครงสร้าง: `targetString.includes(searchElement)`
  * ทำหน้าที่ตรวจว่ามีตัวอักษรหรือคำที่ค้นหาอยู่ในข้อความหรือไม่ โดยคืนค่าเป็น Boolean (`true` / `false`)
  * นิยมนำมาใช้เป็นเกณฑ์ตรวจสอบเงื่อนไข เช่น `"aeiou".includes(char)`

---

### 3. การนับจำนวนด้วยการแปลงสตริงเป็น Array (Functional Approach)
* **โครงสร้าง `.split('')` ร่วมกับ `.filter()`:**
  * หั่นข้อความให้กลายเป็น Array ของตัวอักษรเดี่ยวๆ ด้วย `.split('')`
  * ใช้ `.filter()` กรองเอาเฉพาะตัวอักษรที่ตรงเงื่อนไข
  * ดึงจำนวนผลลัพธ์ด้วย `.length` ได้ทันที:
    ```javascript
    str.split('').filter(char => "aeiou".includes(char)).length;
    ```

---

### 4. ตารางสรุป Methods & RegEx (7 kyu Cheat Sheet Part 1)

| คำสั่ง / ไวยากรณ์ | หน้าที่ | ตัวอย่างการใช้งาน | ผลลัพธ์ |
|---|---|---|---|
| `/[aeiou]/g` | RegEx ค้นหาสระทุกตัวในข้อความ | `"abracadabra".match(/[aeiou]/g)` | `['a', 'a', 'a', 'a', 'a']` |
| `str.match() \|\| []` | ดึงข้อมูลที่ตรง Pattern พร้อมป้องกัน Error กรณีหาไม่เจอ | `("sky".match(/[aeiou]/g) \|\| []).length` | `0` |
| `str.includes(char)` | เช็คว่ามีตัวอักษรในสตริงหรือไม่ | `'aeiou'.includes('a')` | `true` |
| `str.split('')` | แปลง String เป็น Array ทีละตัวอักษร | `'cat'.split('')` | `['c', 'a', 't']` |