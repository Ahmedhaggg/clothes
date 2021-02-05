const User = require('./schemas/user');
const bcrypt = require('bcrypt')

exports.signin = (data) => {
    return new Promise((resolve, reject) => {
        User.findOne({email: data.email})
        .then(user => {
            if (!user) reject("this email is not used")
            else {
                return bcrypt.compare(data.password, user.password)
                    .then(same => {
                        if (same) {
                            let {_id, userName, email, profileImg, role} = user
                            resolve({_id, userName, email, profileImg, role})
                        } else {
                            reject("password is wrong")
                        }
                    })
                    .catch( () => reject("something went wrong"))
            }
        })
        .catch( () => reject("something went wrong"))
    })
}

exports.signup = async data => {
    return new Promise((resolve, reject) => {
        User.findOne({email : data.email})
            .then( user => {
                if (user) reject("this email is used") 
                else {
                    return bcrypt.hash(data.password , 10)
                        .then(hashPasswrod => {
                            data.password = hashPasswrod
                            let newUser = new User(data)
                            newUser.save()
                                .then(result => resolve(result))
                                .catch((err) => reject(err))
                        })
                }
            })
            .catch(() => reject("something went wrong"))
    })
}
