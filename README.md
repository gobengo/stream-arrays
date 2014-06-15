# stream-arrays

## ReadableArray

Convert an Array to a [stream-objectmode]().Readable.

```javascript
var things = new (require('stream-arrays').ReadableArray)([1,2,3,4,5]);
things.on('data', console.log);
// 1
// 2
// 3
// 4
// 5
```

## WritableArray

Convert an Array to a [stream-objectmode]().Writable.

```javascript
var things = new (require('stream-arrays').ReadableArray)([1,2,3,4,5]);
var dest = new (require('stream-arrays').WritableArray)();
things.pipe(dest);

dest.on('finish', function () {
    dest.get().map(console.log);
});
// 1
// 2
// 3
// 4
// 5
```
