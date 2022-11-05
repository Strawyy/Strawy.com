const hours = document.querySelector("#Hours > input");
const week = document.querySelector("#Week > input");
const date = document.querySelector("#Date > input");
const month = document.querySelector("#Month > input");
const year = document.querySelector("#Year > input");
const keyword = document.querySelector("#Keyword > textarea");
const message = document.querySelector("#Message > textarea");

const constant = document.querySelector("#Constant > input");
const outputBox = document.querySelector("#OutputBox > textarea");

//alphabet transformation
var alphabet = "abcdefghijklmnopqrstuvwxyz!£$%&/()=?'^*+[]@#,;.:-_1234567890"
var alphabet2 ="zyxwvutsrqp"
var alphabet3 ="                          abcdefghi"


// function to create the every constant
function createConstant(num) {
    num = num
         .toString()
         .split('')
         .map(Number)
         .reduce(function (a, b) {
             return a + b;
         }, 0);

  if (num > 9){
    num = num
            .toString()
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);
  }

  return num
}

// function to create the weekDay constant
function weekConstant(num) {
  return num = 7 - num + 1
}

//function to create the present weekDay constant
function presentWeekConstant() {
  var weekWord = Date().split(" ")[0]
  var weekArray = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"]
  var weekNum = weekArray.indexOf(weekWord) + 1
  return weekNum
}

//function to create the present Month constant
function presentMonthConstant() {
  var monthWord = Date().split(" ")[1]
  var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  var monthNum = monthArray.indexOf(monthWord) + 1
  return monthNum
}

//function that merge every constant
function finalConstant() {
  var hoursConst = createConstant(hours.value);
  var weekConst = weekConstant(week.value)
  var dateConst = createConstant(date.value)
  var monthConst = createConstant(month.value)
  var yearConst = createConstant(year.value)

  var finalConst =createConstant(hoursConst + weekConst + dateConst + monthConst + yearConst);
  constant.value = finalConst;
  return finalConst
}

//function that find every time variables
function autoTime() {
  var presentHour = Date().split(" ")[4].split(":")[0]
  hours.value = presentHour
  var presentWeek = presentWeekConstant()
  week.value = presentWeek
  var presentDate = Date().split(" ")[2]
  date.value = presentDate
  var presentMonth = presentMonthConstant()
  month.value = presentMonth
  var presentYear = Date().split(" ")[3]
  year.value = presentYear

  finalConstant()
}

//function that finish the work
function startTransform(keyword, text) {
      text = text.toLowerCase()

     var noSpaceMessage = text.split(" ").join("");
     var keywordHelper = keyword;
     var mess = "";
     var messageLetters = noSpaceMessage.split("")
   for (i = 0; i <= messageLetters.length - 1; i++) {
          keywordHelper += keyword;
     }
     keyword = keywordHelper.toLowerCase().split("")

     var specialCarArray = [];

      for (let i = 0; i < messageLetters.length; i++) {
          if (alphabet.indexOf(messageLetters[i])> 25) {
            specialCarArray += messageLetters[i]
          } else {
            specialCarArray += "O"
          }
     }
     specialCarArray = specialCarArray.split("")

      messageLetters = messageLetters.join("").split("!")
                                     .join("").split("£")
                                     .join("").split("$")
                                     .join("").split("%")
                                     .join("").split("&")
                                     .join("").split("/")
                                     .join("").split("(")
                                     .join("").split(")")
                                     .join("").split("=")
                                     .join("").split("?")
                                     .join("").split("'")
                                     .join("").split("^")
                                     .join("").split("*")
                                     .join("").split("+")
                                     .join("").split("[")
                                     .join("").split("]")
                                     .join("").split("@")
                                     .join("").split("#")
                                     .join("").split(",")
                                     .join("").split(";")
                                     .join("").split(".")
                                     .join("").split(":")
                                     .join("").split("-")
                                     .join("").split("_")
                                     .join("").split("1")
                                     .join("").split("2")
                                     .join("").split("3")
                                     .join("").split("4")
                                     .join("").split("5")
                                     .join("").split("6")
                                     .join("").split("7")
                                     .join("").split("8")
                                     .join("").split("9")
                                     .join("").split("0")
                                     .join("")


      for (let i = 0; i < messageLetters.length; i++) {
           //==========================================================================
            if (alphabet.indexOf(keyword[i]) >= 13) {
              if (alphabet.indexOf(messageLetters[i]) + finalConstant() > 25) {
                mess += alphabet3[Math.abs(alphabet.indexOf(messageLetters[i]) + finalConstant())]
              } else {
                 mess += alphabet[alphabet.indexOf(messageLetters[i]) + finalConstant()]
              }
            } else {
              if (alphabet.indexOf(messageLetters[i]) - finalConstant() < 0) {
                mess += alphabet2[Math.abs(alphabet.indexOf(messageLetters[i]) - finalConstant()) - 1 ]
              } else {
                mess += alphabet[alphabet.indexOf(messageLetters[i]) - finalConstant()]
            }
        }
        ///============================================================================
      }
         mess = mess.split("")
          for(let i = 0; i < specialCarArray.length; i++) {
            if (specialCarArray[i] == "O") {
            } else if (specialCarArray[i] !== "O") {
                mess += mess.splice(i, 0, specialCarArray[i])
                mess = mess.split(",")

          }
         }
         mess = mess.join("")
         return output = mess
}

//function that decrypt
function invertTransform(keyword, text) {
  text = text.toLowerCase()

 var noSpaceMessage = text.split(" ").join("");
 var keywordHelper = keyword;
 var mess = "";
 var messageLetters = noSpaceMessage.split("")
for (i = 0; i <= messageLetters.length - 1; i++) {
      keywordHelper += keyword;
 }
 keyword = keywordHelper.toLowerCase().split("")

 var specialCarArray = [];

  for (let i = 0; i < messageLetters.length; i++) {
      if (alphabet.indexOf(messageLetters[i])> 25) {
        specialCarArray += messageLetters[i]
      } else {
        specialCarArray += "O"
      }
 }
 specialCarArray = specialCarArray.split("")

  messageLetters = messageLetters.join("").split("!")
                                 .join("").split("£")
                                 .join("").split("$")
                                 .join("").split("%")
                                 .join("").split("&")
                                 .join("").split("/")
                                 .join("").split("(")
                                 .join("").split(")")
                                 .join("").split("=")
                                 .join("").split("?")
                                 .join("").split("'")
                                 .join("").split("^")
                                 .join("").split("*")
                                 .join("").split("+")
                                 .join("").split("[")
                                 .join("").split("]")
                                 .join("").split("@")
                                 .join("").split("#")
                                 .join("").split(",")
                                 .join("").split(";")
                                 .join("").split(".")
                                 .join("").split(":")
                                 .join("").split("-")
                                 .join("").split("_")
                                 .join("").split("1")
                                 .join("").split("2")
                                 .join("").split("3")
                                 .join("").split("4")
                                 .join("").split("5")
                                 .join("").split("6")
                                 .join("").split("7")
                                 .join("").split("8")
                                 .join("").split("9")
                                 .join("").split("0")
                                 .join("")


  for (let i = 0; i < messageLetters.length; i++) {
       //==========================================================================
        if (alphabet.indexOf(keyword[i]) < 13) {
          if (alphabet.indexOf(messageLetters[i]) + finalConstant() > 25) {
            mess += alphabet3[Math.abs(alphabet.indexOf(messageLetters[i]) + finalConstant())]
          } else {
             mess += alphabet[alphabet.indexOf(messageLetters[i]) + finalConstant()]
          }
        } else {
          if (alphabet.indexOf(messageLetters[i]) - finalConstant() < 0) {
            mess += alphabet2[Math.abs(alphabet.indexOf(messageLetters[i]) - finalConstant()) - 1 ]
          } else {
            mess += alphabet[alphabet.indexOf(messageLetters[i]) - finalConstant()]
        }
    }
    ///============================================================================
  }
     mess = mess.split("")
      for(let i = 0; i < specialCarArray.length; i++) {
        if (specialCarArray[i] == "O") {
        } else if (specialCarArray[i] !== "O") {
            mess += mess.splice(i, 0, specialCarArray[i])
            mess = mess.split(",")

      }
     }
     mess = mess.join("")
     return output = mess
}


function transform() {
  var keywordConst = keyword
  var messageConst = message
  var startTransformConst = startTransform(keyword.value, message.value)


  outputBox.value = startTransformConst
}

function transform1() {
  var keywordConst = keyword
  var messageConst = message
  var invertTransformConst = invertTransform(keyword.value, message.value)


  outputBox.value = invertTransformConst
}

function decryptTransofrm() {
  var keywordConst = keyword
  var messageConst = message
  var invertTransformConst = invertTransform(keyword.value, message.value)

  output.value = invertTransformConst
}

function finalTransform() {
  finalConstant()
  transform()
}

function finalTransform1() {
  decryptTransofrm()
  transform1()
}


function main() {
  hours.addEventListener("input", finalTransform);
  week.addEventListener("input", finalTransform);
  date.addEventListener("input", finalTransform);
  month.addEventListener("input", finalTransform);
  year.addEventListener("input", finalTransform);
  keyword.addEventListener("textarea", finalTransform);

  constant.addEventListener("input", finalTransform);
  message.addEventListener("textarea", finalTransform);
  outputBox.addEventListener("textarea", finalTransform);
}

function main1() {
  hours.addEventListener("input", finalTransform1);
  week.addEventListener("input", finalTransform1);
  date.addEventListener("input", finalTransform1);
  month.addEventListener("input", finalTransform1);
  year.addEventListener("input", finalTransform1);
  keyword.addEventListener("textarea", finalTransform1);

  constant.addEventListener("input", finalTransform1);
  message.addEventListener("textarea", finalTransform1);
  outputBox.addEventListener("textarea", finalTransform1);
}

main()
main1()
