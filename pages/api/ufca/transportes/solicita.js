export default function solicita(req, res){
  
  if (req.method === 'POST'){
    res.status(200).json({mensagem: 'POST funcionando'})
  }
  
  else {
    res.status(405).end('Acesso proibido')
  }
      
}