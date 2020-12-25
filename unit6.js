var obj1 = new Object();
// var obj2 = {};

var user = {
    first_name: "Manh",
    last_name: "DK",
    age: 32,
    username: "ManhDK"
};
// user.address = "Vinh";
// user["address"] = "Vinh";
var attribute = 'address';
user[attribute] = "Vinh";
console.log(Object.keys(user));
console.log(__filename);
console.log(__dirname)
