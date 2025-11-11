# Make a Circle with OOP (Object-Oriented Programming)

Your task is to create a **Circle constructor** that creates a circle with a **radius** provided by an argument.

The circles constructed must have two methods:

1.  `getArea()` ($\pi r^2$)
2.  `getPerimeter()` ($2\pi r$)

These methods must give both respective areas and perimeter (circumference).

For help with this class, I have provided you with a **Rectangle constructor** which you can use as a base example.

---

## 💡 Examples

| Kod | Natija | Formula |
| :--- | :--- | :--- |
| `let circy = new Circle(11)` | `circy.getArea()` | $A = \pi r^2$ |
| | // Should return `380.132711084365` | |
| `let circy = new Circle(4.44)` | `circy.getPerimeter()` | $P = 2\pi r$ |
| | // Should return `27.897342763877365` | |

---

## 📌 Notes

* Don't worry about **floating point precision** - I've factored in the chance that your answer may be more or less accurate than mine.
* This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.