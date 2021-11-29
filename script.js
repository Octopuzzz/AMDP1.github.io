function validateLogin(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email == '' && password == ''){
        return alert('Email and password required!')
    }
    if(email == '' ){
        return alert('Email required!')
    }
    if(password == '' ){
        return alert('Password required!')
    }
}

function validateRegist(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mgender = document.getElementById('mgender').checked
    let fgender = document.getElementById('fgender').checked
    let city = document.getElementById('city').value
    let password = document.getElementById('password').value
    let cpass = document.getElementById('cpass').value
    let errorMsg = []

    if(name == '' && email == '' && !mgender && !fgender && !city && password == '' && cpass == ''){
        alert('Please fill the form!')
    }
    else{
        valname(name, errorMsg)
        valemail(email, errorMsg)
        valgender(mgender, fgender, errorMsg)
        valcity(city, errorMsg)
        valpass(password, errorMsg)
        vallcpass(password, cpass, errorMsg)
    
        if(errorMsg.length){
            alert(errorMsg.join('\n'))
        }
    }

}

function valname(name, errorMsg){
    if(name == '') errorMsg.push('Username required!')
}

function valemail(email, errorMsg){
    if(email == '') errorMsg.push('Email required!')
    else{
        let cnt = 0;
        for(let i = 0; i < email.length; i++){
            if(email[i] == '@') cnt++;
        }
        if(cnt != 1) errorMsg.push('Email format is not valid!')
    }
}

function valgender(mgender, fgender, errorMsg){
    if(!mgender && !fgender) errorMsg.push('Gender required!')
}

function valcity(city, errorMsg){
    if(!city) errorMsg.push('City required!')
}

function valpass(password, errorMsg){
    if(password == '') errorMsg.push('Password required!')
    else{
        let numb = 0, upper = 0
        for(let i = 0; i < password.length; i++){
            if(password.charAt(i) >= '0' && password.charAt(i) <= '9') numb++
            if(password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') upper++
        }
        if(password.length < 8) errorMsg.push('Password min. 8 characters!')
        else if(!numb) errorMsg.push('Minimum password contains 1 number!')
        else if(!upper) errorMsg.push('Minimum password contains 1 capital letter!')
    }
}

function vallcpass(password, cpass, errorMsg){
    if(cpass == '') errorMsg.push('Confirm password required!')
    else if(password != cpass) errorMsg.push('Confirm password is not valid!')
}