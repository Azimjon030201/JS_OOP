# 📚 Book Shelf

## 🎯 Vazifa
`Book` nomli **constructor function** yarating. U ikkita property va ikkita methodga ega bo‘lsin.

### 🧩 Property-lar:
- `title`
- `author`

### 🛠 Method-lar:
- `getTitle()` → `"Title: " + title`
- `getAuthor()` → `"Author: " + author`

---

## 🧱 Talablar
`Book` constructor’idan foydalanib quyidagi 3 ta obyekt yarating:

| Kitob nomi           | Muallif              | Obyekt nomi |
|----------------------|----------------------|--------------|
| Pride and Prejudice  | Jane Austen          | `PP`         |
| Hamlet               | William Shakespeare  | `H`          |
| War and Peace        | Leo Tolstoy          | `WP`         |

---

## 💡 Misol
Agar quyidagi kitob yaratilsa:

```js
const HP = new Book("Harry Potter", "J.K. Rowling");
U holda quyidagi natijalar olinadi:

HP.title       ➞ "Harry Potter"
HP.author      ➞ "J.K. Rowling"
HP.getTitle()  ➞ "Title: Harry Potter"
HP.getAuthor() ➞ "Author: J.K. Rowling"