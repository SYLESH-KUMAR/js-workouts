var n = 10

function counter() {
    for (counter = 10; counter <= 12; counter = counter + 1)
        if (n < 12) {
            console.log("10")
        }
        else if ((n + 1) < 12) {
            console.log("11")
        }
        else if ((n + 2) < 12) {
            console.log("12")
        }
       
    return (counter)

}
counter()