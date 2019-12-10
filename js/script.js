
// console.log("regex");

// $('#submit').on('click',function(){
// var age = $('#age').val(); //read value from input element
// console.log(age);

// //define the pattern
// var agePattern = /^[0-9]{2}$/;
// var ageTested = agePattern.test(age);//test method matches age with agePattern
// console.log(ageTested);
// alert('Age entered correctly');

// });
// $(this).value="";

// $('#postal').on('click',function(){

// });

// $('#submit').on('click',function(){
// var postalCode = $('#postal').val(); //read value from input element
// console.log(pstalCode);

// //define the pattern postal code
// var postalPattern = /^[A-Z]{2}[0-9]{1,2} ?[0-9][A-Z]{2}$/;
// var postalTested = postalPattern.test(postalCode);//test method matches age with agePattern
// console.log(postalTested);

// if(postalTested === true){
// alert('postal code entered correctly');
// } else{
// 	alert('Please enter 4 digits')
// }

// });

// $('#postal').on('click',function(){
// document.getElementById('#postal').value="";
// });
// //Verifying Postal Code
// $('#submit').on('click',function(){
// var postalCode = $('#postal').val(); //read value from input element
// console.log(postalCode);

// //define the pattern
// var postalPattern = /^[A-Z]{2}[0-9]{1,2} ?[0-9][A-Z]{2}$/;
// var postalTested = postalPattern.test(postalCode);//test method matches age with agePattern
// console.log(postalTested);
// if (postalTested === true){
//   alert('Postal code entered correctly');
// } else {
//   alert('Please enter correct digits');
// }

// });



// $('#phone').on('click',function(){
// document.getElementById('phone').value="";
// });


// $('#submit').on('click',function(){
// var phoneCode = $('#phone').val(); //read value from input element
// console.log(phoneCode);

// //define the pattern
// var phonePattern = /^[+]64[-\s\(][0-9]{2}[-\s\)][0-9]{3} ?[0-9$]{4}$/;
// var phoneTested = phonePattern.test(phoneCode);//test method matches age with agePattern
// console.log(phoneTested);
// if (phoneTested === true){
//   alert('Postal code entered correctly');
// } else {
//   alert('Please enter correct digits, example +64(04)384 9624 or +64-04-384 9624');
// }

// });

// $('#phone').on('click',function(){
// document.getElementById('phone').value="";
// });


// $('#submit').on('click',function(){
// var phoneCode = $('#phone').val(); //read value from input element
// console.log(phoneCode);

// //define the pattern
// var phonePattern = /^[+]64[-\s\(][0-9]{2}[-\s\)][0-9]{3} ?[0-9$]{4}$/;
// var phoneTested = phonePattern.test(phoneCode);//test method matches age with agePattern
// console.log(phoneTested);
// if (phoneTested === true){
//   alert('Postal code entered correctly');
// } else {
//   alert('Please enter correct digits, example +64(04)384 9624 or +64-04-384 9624');
// }

// });



// must start user input rules with /^ and end with $/
// [] defines input eg: [a-z]
//{} sets user parameters eg {4} user must enter four characters
//example /^[a-z]{6}$/



$('#login').on('click',function(){
	var loginName = $('#loginName').val(); //read value from input element
	console.log(loginName);
	var loginPattern = /^[a-z]{6}$/;
	var loginTested = loginPattern.test(loginName);
	console.log(loginTested);

// if (!loginTested){
// 	alert('login name must be 6 characters and contain no numbers and one capital');
// }
// else {
// 	alert('correct details');
// }

});
