function staircase(n) {
    var nInitial = n
    while (n > 0) {
        let i = n - 1
        let row = ' '.repeat(i) + '#'.repeat(nInitial - i)
        console.log(row)
        n--
    }
}

staircase(6)
