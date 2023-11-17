import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      {" "}
      {/* Correção: alterado para 'className' */}
      <h1>Palavra secreta</h1>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
