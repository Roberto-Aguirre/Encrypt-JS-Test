import bcrypt from 'bcrypt'

let users = {

}

export const registerUser = async (req, res) => {
    
    const {username,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10)
    users[username] = hashedPassword

    res.send("Usuario creado.")
}


export const loginUser = async (req,res) => {
    const {username,password} = req.body

    const hashedPassword = users[password]

    const isValid = bcrypt.compare(password,hashedPassword);


    if (isValid) {
        res.send("Login exitoso")
    }
    else{
        res.status(401).send("Contraseña incorrecta")
    }
}