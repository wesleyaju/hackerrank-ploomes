function pageCount(n, p) {

    if(n % 2 === 0) {
        n += 1
    }

    let distanceFrontPage = Math.floor(p / 2)
    let distanceBackPage = Math.floor((n - p) / 2)

    let solution = Math.min(distanceFrontPage, distanceBackPage)
    console.log(solution)
    
}

pageCount(5, 4)
