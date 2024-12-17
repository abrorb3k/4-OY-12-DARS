//===================Obyektlarni tanlash va chiqarish========================


//===================================================
//1-Masala: Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.
//  let people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];
// let res=people[0].name
// console.log(res);
// Natija: "Ali"


//===================================================
//2-Masala: Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.
//  let items = [
//   { id: 101 },
//   { id: 102 },
//   { id: 103 },
//   { id: 104 },
//   { id: 105 }
// ];
// let res=items[4].id;
// console.log(res);
// Natija: 105


//===================================================
//3-Masala: 4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.
//  let people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 },
//   { name: "Karim", age: 35 }
// ];
// let res=people.forEach(ages=>console.log(ages.age));
// Natija: 25, 30, 20, 35


//===================================================
//4-Masala: 3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.
//  let users = [
//   { name: "Ali", city: "Toshkent" },
//   { name: "Vali", city: "Samarqand" },
//   { name: "Sami", city: "Buxoro" }
// ];
// let res=users[1].city;
// console.log(res);
// Natija: "Samarqand"


//===================================================
//5-Masala: Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.
//  let workers = [
//   { name: "Ali", job: "Dasturchi" },
//   { name: "Vali", job: "O'qituvchi" },
//   { name: "Sami", job: "Haydovchi" }
// ];
// let res=workers.forEach(jobs=>console.log(jobs.job));
// Natija: "Dasturchi", "O'qituvchi", "Haydovchi"


//===================================================
//6-Masala: 5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.
//  let employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 900 },
//   { name: "Karim", salary: 1500 },
//   { name: "Asad", salary: 1100 }
// ];
// let res=employees[2].salary;
// console.log(res);
// Natija: 900


//===================================================
//7-Masala: 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.
//  let countries = [
//   { country: "Uzbekistan" },
//   { country: "Russia" },
//   { country: "USA" },
//   { country: "China" }
// ];
// let res=countries[0].country;
// console.log(res);
// Natija: "Uzbekistan"


//===================================================
//8-Masala: 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.
//  let orders = [
//   { id: 1, status: "New" },
//   { id: 2, status: "Pending" },
//   { id: 3, status: "Shipped" },
//   { id: 4, status: "Delivered" },
//   { id: 5, status: "Cancelled" },
//   { id: 6, status: "Returned" }
// ];
// let res=orders[4].status;
// console.log(res);
// Natija: "Cancelled"


//===================================================
//9-Masala: 3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.
//  let contacts = [
//   { name: "Ali", phone: "998901234567" },
//   { name: "Vali", phone: "998902345678" },
//   { name: "Sami", phone: "998903456789" }
// ];
// let res=contacts[2].phone;
// console.log(res);
// Natija: "998903456789"


//===================================================
//10-Masala: 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring.
//  let users = [
//   { name: "Ali", email: "ali@gmail.com" },
//   { name: "Vali", email: "vali@yahoo.com" },
//   { name: "Sami", email: "sami@hotmail.com" },
//   { name: "Karim", email: "karim@outlook.com" }
// ];
// let res=users.forEach(mail=>console.log(mail.email))
// Natija: "ali@gmail.com", "vali@yahoo.com", "sami@hotmail.com", "karim@outlook.com"



//=================Obyektlar qiymatini o'zgartirish=====================


//=================================================
//11-Masala: Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.
//  let users = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];
// users[0].name="Alisher"
// console.log(users);
// O'zgartirilgandan keyin: users[0].name = "Alisher"


//=================================================
//12-Masala: Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.
//  let tasks = [
//   { id: 1, status: "New" },
//   { id: 2, status: "In Progress" },
//   { id: 3, status: "Pending" }
// ];
// tasks[2].status="Updated"
// console.log(tasks);
// O'zgartirilgandan keyin: tasks[2].status = "Updated"


//=================================================
//13-Masala: 3-obyektning salary qiymatini 2000 ga tenglashtiring.
//  let employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 1500 }
// ];
// employees[2].salary=2000
// console.log(employees);
// O'zgartirilgandan keyin: employees[2].salary = 2000


//=================================================
//14-Masala: Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.
//  let cities = [
//   { id: 1, city: "Toshkent" },
//   { id: 2, city: "Namangan" },
//   { id: 3, city: "Samarqand" }
// ];
// cities[1].city="Farg'ona"
// console.log(cities);
// O'zgartirilgandan keyin: cities[1].city = "Farg'ona"


//=================================================
//15-Masala: 4-obyektning email qiymatini yangi qiymat bilan almashtiring.
//  let clients = [
//   { name: "Ali", email: "ali@mail.com" },
//   { name: "Vali", email: "vali@mail.com" },
//   { name: "Sami", email: "sami@mail.com" },
//   { name: "Karim", email: "karim@mail.com" }
// ];
// clients[3].email = "karim_new@mail.com";
// console.log(clients);
// O'zgartirilgandan keyin: clients[3].email = "karim_new@mail.com"



//==============Yangi maydon qo'shish va qiymatni yangilash==============


//=================================================
//21-Masala: Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.
//  let users = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];
// users[0].status="Active";
// console.log(users);
// users[0].status = "active"

//=================================================
//22-Masala: Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.
//  let people = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// people[2].role="admin"
// console.log(people);
// people[2].role = "admin"


//=================================================
//23-Masala: Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.
//  let users = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// users.forEach(user=>user.isVerified=false)
// console.log(users);
// Har bir obyekt uchun: users[i].isVerified = false


//=================================================
//24-Masala: 2-obyektning salary qiymatini 500 ga oshiring.
//  let workers = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 900 }
// ];
// workers[1].salary += 500;
// console.log(workers);
// workers[1].salary += 500


//=================================================
//25-Masala: 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.
//  let contacts = [
//   { name: "Ali", phone: "998901234567" },
//   { name: "Vali", phone: "998902345678" },
//   { name: "Sami", phone: "998903456789" },
//   { name: "Karim", phone: "998904567890" }
// ];
// contacts[3].phone += " (updated)";
// console.log(contacts);
// contacts[3].phone += " (updated)"


//=================================================
//26-Masala: Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.
//  let people = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 30 }
// ];
// people[1].age*=2;
// console.log(people);
// people[1].age *= 2


//=================================================
//27-Masala: Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.
//  let employees = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// employees[2].joinedAt = "2024-07-01"
// console.log(employees);
// employees[2].joinedAt = "2024-07-01"


//=================================================
//28-Masala: Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.
//  let team = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// team[0].name += " (CEO)";
// console.log(team);
// team[0].name += " (CEO)"


//=================================================
//29-Masala: 3-obyektning price qiymatini 10% kamaytiring.
//  let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// products[2].price*=0.9
// console.log(products);
// products[2].price *= 0.9


//=================================================
//30-Masala: Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.
//  let users = [
//   { name: "Ali", isActive: false },
//   { name: "Vali", isActive: false },
//   { name: "Sami", isActive: false }
// ];
// users.forEach(user=>user.isActive=true)
// console.log(users);
// users[i].isActive = true (barcha obyektlarda)



//==============Shartli tekshirish va qiymatlar o'zgarishi=================


//===================================================
//31-Masala: Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", status: "Completed" },
//   { id: 2, name: "Vali", status: "Pending" },
//   { id: 3, name: "Sami", status: "Completed" }
// ];
// let res=data[1];
// if(res.status=="Pending"){
//     res.status="Completed"
// }
// console.log(data)


//===================================================
//32-Masala: 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.
// let data = [
//   { id: 1, name: "Ali", age: 35 },
//   { id: 2, name: "Vali", age: 25 },
//   { id: 3, name: "Sami", age: 28 }
// ];
// let res=data[0];
// if(res.age>30){
//     res.senior=true
// }
// console.log(data);


//===================================================
//33-Masala: Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.
// let data = [
//   { id: 1, name: "Product1", price: 150 },
//   { id: 2, name: "Product2", price: 80 },
//   { id: 3, name: "Product3", price: 60 }
// ];
// let res=data[2];
// if(res.price<100){
//     res.price=100
// }
// console.log(data);


//===================================================
//34-Masala: Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.
// let data = [
//   { id: 1, name: "Ali", role: "manager" },
//   { id: 2, name: "Vali", role: "guest" },
//   { id: 3, name: "Sami", role: "supervisor" }
// ];
// data.forEach(value => value.role="user");
// data[2].role="admin"
// console.log(data);


//===================================================
// //35-Masala: 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.
// let data = [
//   { id: 1, name: "Ali", city: "Buxoro" },
//   { id: 2, name: "Vali", city: "Namangan" },
//   { id: 3, name: "Sami", city: "Toshkent" }
// ];
// let res=data[2]
// if(res.city=="Toshkent"){
//   res.city="Samarqand"
// }
// console.log(data);



//===================================================
//36-Masala: Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.
// let data = [
//   { id: 1, name: "Ali", salary: 900 },
//   { id: 2, name: "Vali", salary: 1200 },
//   { id: 3, name: "Sami", salary: 800 }
// ];
// for(let i=0;i<data.length;i++){
//     if(data[i].salary<1000){
//         data[i].salary="low"
//     }
// }
// console.log(data);

//===================================================
//37-Masala: 2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.
// let data = [
//   { id: 1, name: "Ali", email: "ali@yahoo.com" },
//   { id: 2, name: "Vali", email: "vali@gmail.com" },
//   { id: 3, name: "Sami", email: "sami@mail.com" }
// ];
// let res=data[1];
// if(res.email.endsWith("@gmail.com")){
//     res.email+=" (Verified)"
// }
// console.log(data);



//===================================================
//38-Masala: Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].LastLogin="17.12.2024"
// console.log(data);


//===================================================
//39-Masala: Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.
// let data = [
//   { id: 1, name: "Product1", stock: 0 },
//   { id: 2, name: "Product2", stock: 5 },
//   { id: 3, name: "Product3", stock: 10 }
// ];
// let res=data[0];
// if(res.stock==0){
//     res.isAvailable=false
// }
// console.log(data);


//===================================================
//40-Masala: Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.
// let data = [
//   { id: 1, name: "Ali", status: "Pending" },
//   { id: 2, name: "Vali", status: "Active" },
//   { id: 3, name: "Sami", status: "Completed" }
// ];
// data.forEach(value=>value.status="Inactive")
// data[0].status="Active"
// console.log(data);




//=============Obyektni saralash, tanlash va qiymatlarni tekshirish============


//===================================================
//41-Masala: Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.
// let data = [
//   { id: 1, name: "Product1", price: 600 },
//   { id: 2, name: "Product2", price: 400 },
//   { id: 3, name: "Product3", price: 800 }
// ];
// for(let i=0;i<data.length;i++){
//     if(data[i].price>500){
//         data[i].price=true
//     }
// }
// console.log(data);


//===================================================
//42-Masala: 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", salary: 900 },
//   { id: 2, name: "Vali", salary: 1000 },
//   { id: 3, name: "Sami", salary: 800 }
// ];
// let res=data[1];
// if(res.salary>=1000){
//     res.Highsalary=true
// }
// console.log(data);


//===================================================
//43-Masala: Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.
// let data = [
//   { id: 1, name: "Vali", role: "user" },
//   { id: 2, name: "Sami", role: "user" },
//   { id: 3, name: "Ali", role: "guest" }
// ];
// let res = data[2];
// if (res.name == "Ali") {
//   res.isManager = true;
// }
// console.log(data);


//===================================================
//44-Masala: Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.
// let data = [
//   { id: 1, name: "Ali", age: 17 },
//   { id: 2, name: "Vali", age: 20 },
//   { id: 3, name: "Sami", age: 16 }
// ];
// for(let i=0;i<data.length;i++){
//     if(data[i].age<18){
//         data[i].isUnderage=true
//     }
// }
// console.log(data);


//===================================================
//45-Masala: Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.
// let data = [
//   { id: 1, name: "Product1", stock: 5 },
//   { id: 2, name: "Product2", stock: 15 },
//   { id: 3, name: "Product3", stock: 8 }
// ];
// for(let i=0;i<data.length;i++){
//     if(data[i].stock<10){
//         data[i].LowStock=true
//     }
// }
// console.log(data);


//===================================================
//46-Masala: 1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.
// let data = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Vali", role: "user" },
//   { id: 3, name: "Sami", role: "supervisor" }
// ];
// data[0].role="guest";
// data[2].role = "guest";

// console.log(data);


//===================================================
//47-Masala: Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", status: "Pending" },
//   { id: 2, name: "Vali", status: "Completed" },
//   { id: 3, name: "Sami", status: "Pending" }
// ];
// for(let i=0;i<data.length;i++){
//     if(data[i]=="Pending"){
//         data[i].isPending=true
//     }
// }
// console.log(data);


//===================================================
//48-Masala: Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.
// let data = [
//   { id: 1, name: "Ali", city: "Samarqand" },
//   { id: 2, name: "Vali", city: "Namangan" },
//   { id: 3, name: "Sami", city: "Toshkent" }
// ];
// let res = data[2];
// if (res.city == "Toshkent") {
//   res.city = "Buxoro";
// }
// console.log(data);


//===================================================
//49-Masala: Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", score: 70 },
//   { id: 2, name: "Vali", score: 90 },
//   { id: 3, name: "Sami", score: 40 }
// ];
// let res=data[2];
// if(res.score<50){
//     res.failed=true
// }
// console.log(data);


//===================================================
//50-Masala: Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.
// let data = [
//   { id: 1, name: "Product1", price: 1200 },
//   { id: 2, name: "Product2", price: 800 },
//   { id: 3, name: "Product3", price: 1500 }
// ];
//discount qiymat yuq



//=============Obyektlarni o'zgartirish va murakkabroq amallar==============


//====================================================
//51-Masala: Massivdagi obyektlarning salary qiymatini 10% ga oshiring.
// let data = [
//   { id: 1, name: "Ali", salary: 1000 },
//   { id: 2, name: "Vali", salary: 1500 },
//   { id: 3, name: "Sami", salary: 2000 }
// ];
// let res=data.map(value=>({...value,salary:value.salary*1.1}))
// console.log(res);


//====================================================
//52-Masala: 2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[1].name+=" - employed"
// console.log(data);


//====================================================
//53-Masala: Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.
// let data = [
//   { id: 1, name: "Product1", stock: 5 },
//   { id: 2, name: "Product2", stock: 0 },
//   { id: 3, name: "Product3", stock: 10 }
// ];
// for(let i=0;i<data.length;i++){
//     if(data[i].stock>0){
//        data[i].stock= true 
//     }else{
//         data[i].stock=false
//     }
// }
// console.log(data);


//====================================================
//54-Masala: Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.
// let data = [
//   { id: 1, name: "Product1", price: 1200 },
//   { id: 2, name: "Product2", price: 800 },
//   { id: 3, name: "Product3", price: 1000 }
// ];
// let res=data[0];
// if(res.price>1000){
//     res.price=900
// }
// console.log(data);


//====================================================
//55-Masala: Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].updatedAt = "2024-07-10";
// console.log(data);


//====================================================
//56- Masala: 3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.
// let data = [
//   { id: 1, name: "Ali", level: "Beginner" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].level="Intermediate"
// console.log(data);


//====================================================
//57-Masala: Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 85 },
//   { id: 3, name: "Sami", score: 90 }
// ];
// for (let i=0;i<data.length;i++){
//     if (data[i].score > 80) {
//       data[i].isTop = true;
//     }
// } 
//  console.log(data);


//====================================================
//58-Masala: Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Vali", role: "user" },
//   { id: 3, name: "Sami", role: "admin" }
// ];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].role == "admin") {
//     data[i].role = "full";
//   }
// }
// console.log(data);


//====================================================
//59-Masala: Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].name+=" (completed)"
// console.log(data);


//====================================================
//60-Masala: Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.
// let data = [
//   { id: 1, name: "Ali", isVerified: false },
//   { id: 2, name: "Vali", isVerified: true },
//   { id: 3, name: "Sami", isVerified: false }
// ];
// data[0].isVerified=true
// console.log(data);