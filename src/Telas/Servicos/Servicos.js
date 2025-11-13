export default function  Servicos() {
  return (
    <div>
      <h1>Sericos</h1>

      <form>
        <h1>Cadastro de um novo servico</h1>
        <input type="text" className="" name=""/>
        <br/>
        <button>Salvar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Servico</th>
            <th>Acoes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Manicure</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
