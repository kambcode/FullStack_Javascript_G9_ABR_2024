export const logMiddleware = (req, res, next) => {
    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
}

export const bodyValidation = (req, res, next) => {
    if(req.body.id && req.body.title && req.body.gender && req.body.author) next()
    else res.send('El body es invalido')
}

export const auth = (req, res, next) => {
    try {
        if(!req.headers.authorization){
            res.status(401)
            res.send('no estas autorizado')
        }
        const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        const bearerToken = req.headers.authorization.split(' ')[1]
        if(validToken === bearerToken) next()
        else {
            res.status(401)
            res.send('no estas autorizado')
        }
    } catch (error) {
       res.status(500)
       console.log(error)
       res.send('oops hubo un error') 
    }
    
    
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
