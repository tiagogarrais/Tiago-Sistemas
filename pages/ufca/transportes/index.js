import { useState } from 'react'

export default function Transportes() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch('/api/ufca/transportes/verifica');
    const values = await response.json();
    setData(values);
  }

  return (
    <div>
      <h2>Transportes</h2>
      <div>
        <button onClick={getData}>Carregar dados</button>
        <ul>
          {data.map(item => (
            <li>{item.responsavel}</li>
          ))}
        </ul>
      </div>

      <a href="./transportes/solicita/form-solicita">
        <button>Solicita</button>
      </a>
    </div>
  )
}
