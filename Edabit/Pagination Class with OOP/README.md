# 📑 Pagination Class with OOP

Your task is to create a **class** to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

## 🛠️ Initialization Parameters

The **`Pagination`** class will accept 2 parameters in its constructor:

1.  **`items`** (default: `[]`): An array of contents to paginate.
2.  **`pageSize`** (default: `10`): The amount of items to show in each page.

### Example Initialization:

```javascript
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);
console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
```

## 🧭 Required Methods

You will have to implement various methods to go through the pages. These methods must be **chainable** (e.g., `p.nextPage().nextPage();`).

| Method | Description |
| :--- | :--- |
| `prevPage()` | Moves the current page to the previous page. |
| `nextPage()` | Moves the current page to the next page. |
| `firstPage()` | Moves the current page to the very first page. |
| `lastPage()` | Moves the current page to the very last page. |
| `goToPage(page)` | Moves to a specific page number (must handle float input by converting it to an integer). |

### Example Continuation:

```javascript
p.nextPage();

console.log(p.getVisibleItems());
// ["e", "f", "g", "h"]

p.lastPage();

console.log(p.getVisibleItems());
// ["y", "z"]
```
## 📌 Notes

* You don't have to use ES6 **`class`** if you don't want to.
* The second argument (`pageSize`) could be a **float**, in that case just convert it to an **integer** (this is also the case for the **`goToPage`** method).
* The methods used to change page should be **chainable**, so you can call them one after the other like this: `p.nextPage().nextPage();`