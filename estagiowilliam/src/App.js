import { useEffect, useState } from "react";
import { getUsers, createUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
    senha: "",
    cpf: "",
    data_nascimento: "",
    endereco: "",
    cidade: "",
    estado: "",
    data_criacao: new Date().toISOString().split("T")[0], // Data atual formatada
  });

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const createdUser = await createUser(newUser);
    setUsers([...users, createdUser]);
    setNewUser({
      nome_completo: "",
      email: "",
      telefone: "",
      senha: "",
      cpf: "",
      data_nascimento: "",
      endereco: "",
      cidade: "",
      estado: "",
      data_criacao: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome_completo} - {user.email} - {user.telefone}
          </li>
        ))}
      </ul>

      <h2>Adicionar Novo Usuário</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="nome_completo" placeholder="Nome Completo" value={newUser.nome_completo} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" value={newUser.email} onChange={handleChange} required />
        <input type="text" name="telefone" placeholder="Telefone" value={newUser.telefone} onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" value={newUser.senha} onChange={handleChange} required />
        <input type="text" name="cpf" placeholder="CPF" value={newUser.cpf} onChange={handleChange} required />
        <input type="date" name="data_nascimento" value={newUser.data_nascimento} onChange={handleChange} required />
        <input type="text" name="endereco" placeholder="Endereço" value={newUser.endereco} onChange={handleChange} required />
        <input type="text" name="cidade" placeholder="Cidade" value={newUser.cidade} onChange={handleChange} required />
        <input type="text" name="estado" placeholder="Estado" value={newUser.estado} onChange={handleChange} required />
        <button type="submit">Adicionar Usuário</button>
      </form>
    </div>
  );
}

export default App;
