The solution is to ensure each item in the `data` array passed to `FlatList` has a unique and consistent `key` prop. Using a unique identifier from your data (like an ID) is the best approach.  This will prevent `FlatList` from re-rendering items unnecessarily.

Here's the corrected code:
```javascript
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Text>{item.text}</Text>
  )}
/>
```
This ensures that the `renderItem` function is only called once per item.