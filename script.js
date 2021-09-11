const dateOfBirth = document.querySelector("#date-of-birth");
const luckyno = document.querySelector("#lucky-number");
const checkbtn = document.querySelector("#check-btn");

function checkBirthDateIslucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(sum&&dob){
    compareValues(sum, luckyno.value);
  } else{
    outputBox.innerText = "Please Enter both the fields😑"
  }
  
}

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let i=0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function compareValues(sum, number){
  if(sum % number===0){
    outputBox.innerText="Your Birthdate is Lucky 🥳"
  } else{
    outputBox.innerText="Your Birthdate is not lucky 😶"
  }
}


checkbtn.addEventListener("click", checkBirthDateIslucky)