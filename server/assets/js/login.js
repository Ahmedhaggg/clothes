document.querySelectorAll('.form-control').forEach(e => {
    console.log(e)
    e.addEventListener("keypress", el => {
        if (el.target.classList.contains("border-danger")) {
            el.target.classList.remove('border-danger')
        }
    })
})

class Login {
    constructor (data) {
        this.data = data;
        this.status = false;
        this.userData = {};
        this.loginErr = false;
    }

    loginReq() {
        fetch('/api/signin', {
            headers: {'Content-Type': 'application/json'},
            method: "post",
            body: JSON.stringify(this.data)
        }).then(res => {
            this.status = res.status === 200 ?  true : false;
            return res.json();
        }).then(resData => {
            if (this.status == true) {
                this.userData = resData
                return this.saveUserDataInStorage();
            } 
            this.loginErr = resData;
            return this.handelErr();
        })
        .catch(err => console.log(err))
    }
    async saveUserDataInStorage() {
        await localStorage.setItem("userData", JSON.stringify(this.userData))
        location.href = '/'
    }
    handelErr() {
        if (this.loginErr.param) {
            document.querySelector('.login-err').textContent= this.loginErr.message;
            document.querySelector('.login-err').classList.remove('d-none');
            return;
        }
        let emailErr = this.loginErr.message.find(err => err.param === "email");
        let passErr = this.loginErr.message.find(err => err.param === "password");
        if (emailErr) document.querySelector('#email').classList.add('border-danger');
        if (passErr) document.querySelector('#password').classList.add('border-danger');
    }
    static submit(e) {
        e.preventDefault();
        document.querySelector('#login-btn').classList.add('disabled')
        const data = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        let login = new Login(data)
        login.loginReq()
       setTimeout(() => {
            document.querySelector('#login-btn').classList.remove('disabled')
       },1000)
    }
}

document.getElementById('login-form').addEventListener('submit', Login.submit)