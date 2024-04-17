//gerando token
const jwt = require('jsonwebtoken');

const SECRET_KEY = '34938598GRDJHR948Udbfd43';

                //sign pois queremos assinar o nosso token
const nossoToken = jwt.sign(
  {
    name: 'Laura',
  },
  SECRET_KEY,
  {
    subject: '1',
    expiresIn: '1y',
  }
);

console.log(nossoToken);
const TOKEN_GERADO = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGF1cmEiLCJpYXQiOjE3MTMzNTY2NDAsImV4cCI6MTc0NDkxNDI0MCwic3ViIjoiMSJ9.SYK4UdtsM4ZpimrilP8_hcDp7c4XJn_5WcDbpswCdAk';

// console.log(jwt.verify(TOKEN_GERADO, SECRET_KEY));
console.log(jwt.decode(nossoToken)); //se eu quero olhar um token so dar um decode nele
console.log(jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGF1cmEiLCJpYXQiOjE3MTMzNTY3NDgsImV4cCI6MTc0NDkxNDM0OCwic3ViIjoiMSJ9.ISOUKgCWky_Yn9Ch1ANwG1cRz9ohq0ifqpVpHLhct14'));//decode tambem pode por o token direto
