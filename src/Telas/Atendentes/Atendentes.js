export default function Atendentes() {
  return (
    <div>
      <h1>Atendentes</h1>

      <form>
        <h1>Cadastro de novos atendentes</h1>
          <input type="text" className="" name="nomeAtendente" placeholder="Nome"/>
          <input type="email" className="" name="emailAtendente" placeholder="Email"/>
          <input type="password" className="" name="senhaAtendente" placeholder="Senha"/>
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
            <td>Yasmin</td>
            <td>yasmin@email.com</td>
            <td>1234321</td>
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
