"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

var ReadableArray = require('stream-arrays').ReadableArray;
var WritableArray = require('stream-arrays').WritableArray;

describe('stream-arrays', function () {
    describe('WritableArray', function () {
        it('can be written to three times', function () {
            var stream = new WritableArray();
            stream.write(1);
            stream.write(2);
            stream.write(3);
            assert.sameMembers(stream.get(), [1,2,3])
        });
    });

    describe('ReadableArray', function () {
        it('can be read', function () {
            var stream = new ReadableArray([1,2,3]);
            expect(stream.read()).to.equal(1);
            expect(stream.read()).to.equal(2);
            expect(stream.read()).to.equal(3);
        });
        it('eventually emits end once .resume()d', function (done) {
            var stream = new ReadableArray([1,2,3]);
            stream.on('end', done.bind({}, null));
            stream.resume();
        });
        it('can be piped to a WritableArray', function (done) {
            var readable = new ReadableArray([1,2,3]),
                writable = new WritableArray();
            readable.on('end', function () {
                assert.sameMembers(writable.get(), [1,2,3]);
                done();
            });
            readable.pipe(writable);
        });
    });
});

