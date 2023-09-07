var obj = {

    val: 100

}

function fun() {

    console.log(this.val)

}

//obj.fun()//now it will search fun method inside obj if you want call this fun for obj then use call /bind or apply
fun.call(obj)