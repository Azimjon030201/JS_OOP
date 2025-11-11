# Video Streaming Plans

Given a class for a **`BasicPlan`**, write the classes for **`StandardPlan`** and **`PremiumPlan`** which have class properties of the following:

## 📊 Plan Properties

| Property | `BasicPlan` | `StandardPlan` | `PremiumPlan` |
| :--- | :---: | :---: | :---: |
| `canStream` | ✓ | ✓ | ✓ |
| `canDownload` | ✓ | ✓ | ✓ |
| `hasSD` | ✓ | ✓ | ✓ |
| `hasHD` | | ✓ | ✓ |
| `hasUHD` | | | ✓ |
| `numOfDevices` | 1 | 2 | 4 |
| `price` | $8.99 | $12.99 | $15.99 |

---

## 💡 Examples

```javascript
BasicPlan.hasSD ➞ true 

PremiumPlan.hasSD ➞ true

BasicPlan.hasUHD ➞ false

BasicPlan.price ➞ '$8.99'

PremiumPlan.numOfDevices ➞ 4
