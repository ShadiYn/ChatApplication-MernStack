import jwt from 'jsonwebtoken';

const generateTokenAndSetCokkie = (userId, res) =>{

  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '30d' //token expirará en 30 dias
  })
  res.cookie("token", token, {
    //el orden para poner los valores: dias, horas, minutos, segundos, milisegundos
    maxAge: 30*24*60*60*1000, //30 dias.
    httpOnly: true, //solo será accesible por servidor, no por cliente, y previene XXS ataques o cropss-site scripting ataques.
    sameSite: "strict", //previene ataques de CSRF
    secure: process.env.NODE_ENV !== "development", //si es producción, entonces el cookie será seguro, si es desarrollo, no.
  })
}
export default generateTokenAndSetCokkie;