exports.getRank = list => {
    let count = 0;
    let stars = 0;
    list.forEach(rank => {
        count++;
        stars += rank.stars 
    })
    return stars / count;
} 