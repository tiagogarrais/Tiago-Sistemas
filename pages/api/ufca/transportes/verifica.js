export default function verifica (req, res){
  if (req.method === 'GET'){
    res.status(200).json([
      { responsavel: 'Fulano' },
      { responsavel: 'Cicrano' },
      { responsavel: 'Beltrano' },
    ])
  } else{
    res.status(405).end('Não permitido')
  }
}