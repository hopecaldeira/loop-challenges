function totalProduct(x) {
    var total = 1;
        for (var i=1; i <= x; i++) {
            total = total * i;
        }
        return total;
}

totalProduct(12);