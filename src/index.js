module.exports = function getZerosCount(number, base) {
    var number_of_0 = Number.MAX_VALUE;
    var j = base;
    
    for (var i = 2; i <= base; i++) {
      var p = 0;
      var c = 0;
      var k = 0;
      if (j % i == 0) {
        while (j % i == 0) {
                j = j / i;     
                p++;
              }
        
        k = Math.floor(number / i);
        while (k > 0) {
                c += k;
                k = Math.floor(k / i);
              }
              number_of_0 = Math.min(number_of_0, Math.floor(c / p))
      }
    }
    return number_of_0;
}