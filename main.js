function getAge() {
    const birthdateInput = document.querySelector("input#birthdate");
    const birthDate = new Date(birthdateInput.value);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Adjust age if the birthday hasn't occurred this year yet
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff=currentDate.getDay()-birthDate.getDay();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    const agetxt = document.querySelector('#agetxt');
    agetxt.textContent=`you are ${age} Years  ${monthDiff} Months and ${dayDiff} Days`;
}

function reset(){
    const birthdateInput = document.querySelector("input#birthdate");
    birthdateInput.value='';

    const agetxt=document.querySelector("#agetxt")
    agetxt.textContent="Your age will appear here";

}
