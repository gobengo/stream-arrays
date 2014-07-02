'use strict';
var Readable = require('stream').Readable;
var inherits = require('inherits');

/**
 * A Readable that emits the items of an array
 */
var ReadableArray = module.exports = function ReadableArray (array, opts) {
    this._array = array ? array.slice() : [];
    Readable.call(this, opts);
};

inherits(ReadableArray, Readable);

/**
 * @private
 * Called by Readable base when you should go get more data,
 * then pass it to this.push()
 */
ReadableArray.prototype._read = function () {
    if ( ! this._array.length) {
        return this.push(null);
    }
    this.push(this._array.shift());
};
