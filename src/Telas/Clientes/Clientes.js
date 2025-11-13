export default function Clientes() {
  return (
    <div>
      <h1>Clientes</h1>

      <form>
        <h1>Cadastro de novos Clientes</h1>
          <input type="text" className="" name="nomeCliete" placeholder="Nome"/>
          <input type="email" className="" name="emailCliete" placeholder="email"/>
          <input type="password" className="" name="senhaCliete" placeholder="Senha"/>
        <br/>
          <button>Salvar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Acoes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Pedro</td>
            <td>pedro@email.com</td>
            <td>1234</td>
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
