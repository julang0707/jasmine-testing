function letterCount(str){
    //log(str)
    // turn into array
    var _ = str.split('')
    //log(_)
    // remove spaces
    var withoutSpaces = _.filter(function(v){
        return v.match(/[a-z]/gi)
    })
    log(withoutSpaces)
    // [a,b,c,a] -> {a:1, b:1, c:1}
    var i = 1
    return withoutSpaces.reduce(function(a,v){
        v = v.toLowerCase() // A or a..
        if(a[v]){
            a[v]++
        } else {
            a[v] = 1 // found 'a' first time
        }
        return a
    }, {})
}
