"use strict";

var assert = require('chai').assert;
var sinon = require('sinon');

var ReadableArray = require('stream-arrays').ReadableArray;
var WritableArray = require('stream-arrays').WritableArray;

describe('stream-arrays', function () {
    it('.ReadableArray', function () {
        assert.typeOf(ReadableArray, 'function');
    });
    it('.WritableArray', function () {
        assert.typeOf(WritableArray, 'function');
    });
});
