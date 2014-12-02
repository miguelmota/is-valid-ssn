(function(){

  function isValidSSN(v) {
    if (!v) return false;
    var re = /^(?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/;
    var reWithDash = /^(?!\b(\d)\1+-(\d)\1+-(\d)\1+\b)(?!123-45-6789|219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    return re.test(v) || reWithDash.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidSSN;
  } else {
    window.isValidSSN = isValidSSN;
  }

})();
