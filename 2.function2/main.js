function palindrome(message){
  var newString = "";
  var yesOrYes = "";
    for (var i = message.length - 1; i >= 0; i--) {
        newString += message[i];
    }
    if(message===newString){
      console.log("true");
    }
    else{
      console.log("false");
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true