var obj = {

    val: 100

}

function fun(a, b, c) {
    console.log({ a })//5
    console.log({ b })//1

    console.log(this.val + a + b + c)

}

const fun2 = fun.bind(obj, 5)



fun2(1, 2, 3)