(function(){

  function isValidSSN(v) {
    if (!v) return false;
    var re = /^(?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/;
    return re.test(v);
  }

  function maskSSN(v) {
    if (!isValidSSN(v)) {
      throw new Error('Invalid Social Security Number');
    }

    return v.substr(0, v.length - 4).replace(/[\w]/g, 'X') + v.substr(-4);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidSSN;
    module.exports.maskSSN = maskSSN;
  } else {
    window.isValidSSN = isValidSSN;
    window.maskSSN = maskSSN;
  }

})();
