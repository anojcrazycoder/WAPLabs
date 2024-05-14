const result = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);

/*
The program provides an output structured as follows:
{ firstName: 'John', lastName: 'Smith' }

In the function, two variables are received: exports (initialized as null) and module (initialized as an empty object with the property exports).
Subsequently, module.exports is equated to exports. Then, a firstName property is added to exports, which simultaneously updates module.exports.
Following this, a lastName property is directly appended to module.exports. At a later stage, exports is reassigned a new object, including a function
variable named getFullName. However, this reassignment does not affect module.exports. Finally, the function concludes by returning module.exports,
which, as established, contains the attributes firstName and lastName, resulting in the aforementioned output.

*/