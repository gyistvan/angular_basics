export const errorsDescriptions = {
    "login" : {
        "email" : {
            "required" : "E-mail can't be empty",
            "invalidEmail" : "Valid e-mail required"
        },
        "password" : {
            "required" : "Password can't be empty",
            "invalidPassword" : "Password must contain min. 8 characters and at least one number and one letter"
        }
    },
    "registration" : {
        "name" : {
            "required" : "Name is required"
        },
        "email" : {
            "required" : "E-mail can't be empty",
            "invalidEmail" : "Valid e-mail required"
        },
        "password" : {
            "required" : "Password can't be empty",
            "invalidPassword" : "Password must contain min. 8 characters and at least one number and one letter"
        }        
    },
    "course" : {
        "title" : {
            "required" : "Title can't be empty"
        },
        "description" : {
            "required" : "Description can't be empty"
        },
        "duration" : {
            "required" : "Duration can't be empty",
            "min" : "Duration can't be negative"
        }
    }
}