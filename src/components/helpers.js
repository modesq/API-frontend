const obj = [];

obj[0] = function () {
    console.log('Error')
    alert('Error')
}

obj[1] = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default obj;