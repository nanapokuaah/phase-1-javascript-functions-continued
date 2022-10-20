// code your solution here
function saturdayFun(activity="roller-skate"){// Had return as This saturday I want to roller-skate before this
   return( `This Saturday, I want to ${activity}!`)
}

function mondayWork(plan="go to the office"){
    return `This Monday, I will ${plan}.`
    //return ("This Monday, I will go to the office."")
}

function wrapAdjective(outerValue ="*"){
    return function (innerValue = "special"){
        return `You are ${outerValue}${innerValue}${outerValue}!`
    }

}
