import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState(''); // Criando state
  const [progress, setProgress] = useState(0); // Criando state
  const [telefone, setTelefone] = useState(''); // Criando state
  const [email, setEmail] = useState(''); // Criando state
  const [senha, setSenha] = useState(''); // Criando state
  const [exibirSenha, setExibirSenha] = useState(false); // Criando state
  const [aceitaTermos, setAceitaTermos] = useState(false); // Criando state

  //Executa quando qualquer um dos states referentes ao formulario forem alterados
  useEffect(() => {
    //Pega os states
    const allStates = { nome, telefone, email, senha, exibirSenha, aceitaTermos };
    //variavel vai guardar quantos estão selecionados
    let countPreenchidos = 0;
    //Calcula quantos states possuem valores
    for (const key in allStates) {
      if (allStates[key as keyof typeof allStates]) {
        countPreenchidos++;
      }
    //seta o progresso com base no countPreenchidos
    setProgress(100/5*countPreenchidos)
}

  }, [nome, telefone, email, senha, exibirSenha, aceitaTermos]);


  // Seta o exibir senha quando clickar no botão
  const handleExibirSenha = () => {
    setExibirSenha(!exibirSenha); // Investe o valor
  };


  // Evita o comportamento padrão do formulário 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  };


  // O htmx simplismente seta os valores dos estados nos componentes respectivos
  // Tambem seto as funções no onCLick
  return (
    <main className="flex">
      {/* LADO ESQUERDO */}
      <aside className="flex flex-column">
        <div className="flex flex-column">
          <div className="logo">
            <a href="/">
              <img src="https://raw.githubusercontent.com/370100961/account-digital-bank-html/refs/heads/main/img/logo.svg" alt="Logo Digital Bank" />
            </a>
          </div>
          <div className="titulo">
            <h1>Complete os campos ao lado para abrir sua Conta Digital</h1>
            <p className="subtitulo">
              Aqui, você acontece com segurança e toda a praticidade que o Digital Bank oferece. Mais do que uma conta com cartão, você tem uma experiência completa com investimentos, Mimos exclusivos e muito mais.
            </p>
          </div>
          <small>&copy; Criado por Nome do Aluno e Matrícula 000000000</small>
        </div>
      </aside>

      <div className="flex flex-column">
        <form className="formulario flex flex-column" onSubmit={handleSubmit}>
          <div className="progresso">
            <label>Preencha os campos</label>
            <progress value={progress} max="100"></progress>
          </div>

          <div className="flex flex-column">
            <label htmlFor="nome">Digite seu nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex flex-column">
            <label htmlFor="telefone">Digite seu telefone</label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="flex flex-column">
            <label htmlFor="email">Digite seu e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-column">
            <label htmlFor="senha">Digite sua senha</label>
            <input
              type={exibirSenha ? "text" : "password"}
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="button" className="mostra-senha" onClick={handleExibirSenha}>
              {exibirSenha ? 'Ocultar senha' : 'Exibir senha'}
            </button>
          </div>

          <div className="flex termos">
            <input
              type="checkbox"
              id="aceita-termos"
              checked={aceitaTermos}
              onChange={(e) => setAceitaTermos(e.target.checked)}
            />
            <label htmlFor="aceita-termos">
              Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta.
            </label>
          </div>

          <div className="flex">
            <button className="botao" type="submit" disabled={!aceitaTermos}>
              Abrir minha conta
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
