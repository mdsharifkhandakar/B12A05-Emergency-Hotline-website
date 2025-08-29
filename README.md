# Q&A  

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
- *getElementById* → শুধু একটাই element আনে (id দিয়ে)
- *getElementsByClassName* → একই class-এর অনেকগুলো element আনে
- *querySelector* → প্রথম match করা element আনে (CSS selector দিয়ে)
- *querySelectorAll* → সব match করা element আনে (CSS selector দিয়ে)
---

### 2. How do you create and insert a new element into the DOM?
Answer: DOM-এ নতুন element বানিয়ে সেটার textContent বা innerHTML দিয়ে লেখা বসিয়ে parent.appendChild() দিয়ে যোগ করে নিই।

---

### 3. What is Event Bubbling and how does it work?
Answer: Event bubbling মানে ইভেন্ট আগে child-এ ধরে, সেখান থেকে ধাপে ধাপে তার সব parent এ উপরে দিকে যায়।

---

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation হল parent-এ একবার listener বসিয়ে আইটেমগুলোর ক্লিক ইত্যাদি এক জায়গা থেকে ধরা, এতে কোড কম লাগে এবং নতুন আইটেমও কাজ করে।

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() ব্রাউজারের ডিফল্ট কাজ থামায়, stopPropagation() ইভেন্টকে parent পর্যন্ত উঠতে দেয় না।

---
