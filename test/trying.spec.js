import letterCount './trying.spec.js'

describe("letterCount", function(){
  it('should count the number of each letter', function(){
    var result = letterCount("aAJBAJSDABSDJHABSDJHBbcabcabcdefab c a oo ija ;a ;skmdals kn")
    expect(result.b).toEqual(8)
  });
});
