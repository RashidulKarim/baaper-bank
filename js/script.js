// select btn
document.getElementById('submitBtn').addEventListener('click', function(){
    const emailFeild = document.getElementById('userEmail')
    const passwordFeild = document.getElementById('userPassword')
    if(emailFeild.value == 'sontan@baap.com' & passwordFeild.value == 'secret'){
        window.location.href ='bank.html'
    }
    else{
        alert('Please input a valid email & password')
    }
})
