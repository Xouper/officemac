function sumInput() {
    let numbers = []
    while (true) {
        let value = prompt()
        if (value == '' || !isFinite(value) || value == null) break
        numbers.push(+value)
    }
    let sum = 0
    for (el of numbers) {
        sum += el
    }
    return sum
}
alert(sumInput())