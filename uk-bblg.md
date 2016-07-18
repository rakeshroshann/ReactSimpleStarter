#Bulk Buy Limit Group (BBLG) 

Yellow Messaging - Side Basket

### Item Limit

It can be idenitified by `bulkBuyLimit` property of product. If item in trolley is equal to `bulkBuyLimit` for that product 
then the product is item Limit Reached and will show yellow message in "Max. Qty reached by item"



### Group Limit & Group Item Limit

To identify a product is group / groupItem limit the `bulkBuyLimitGroupId` should have value and `groupBulkBuyLimit > 0`

#### Identify Group Limit / GroupItem Limit Product

If groupBulkBuyLimit & bulkBuyLimit is same it means it's Group Limit product else GroupItem Limit Product


Now Code Understanding 

Our trolley item object is typeof immutable.OrderedMap and looks like below. where the each basket item is stored against 
the product id property in an object

``` Javascript
items = immutable.OrderedMap({
  1234: {quantity: 6, product: { id:1234, bulkBuyLimitGroupId:'BBLG12', groupBulkBuyLimit: 12, bulkBuyLimit: 12 }},
  1235: {quantity: 6, product: { id:1235, bulkBuyLimitGroupId:'BBLG12', groupBulkBuyLimit: 12, bulkBuyLimit: 12 }}
}
```

How to identify the product has reached its limit by Group / GroupItem
 
 groupLimitReached | itemLimitReached | limit Reached By
------------ | ------------- | ------------- 
true | false | Group
true | true | Group
false | true | Item
 
