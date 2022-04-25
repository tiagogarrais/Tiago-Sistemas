export default function verifica (req, res){
  if (req.method === 'GET'){
    res.status(200).json([
      { responsavel: 'Mikasa' },
      { responsavel: 'Ayaka' },
      { responsavel: 'Beidou' },
      { responsavel: 'Xiyan' },
      { responsavel: 'Bennet' },
      { responsavel: 'Eren' },
      { responsavel: 'Armin' },

    ])
  } else{
    res.status(405).end('Não permitido')
  }
}