// * em React se usa PascalCase para nomear as functions
// * o que for apontado no return é o que aparece no html
// ? <></> tags vazias são REACT FRAGMENT e servem para agrupar elementos filhos sem adicionar nós extras ao DOM

export function App() {
  return (
    <>
      <h1>Olá, Mundo (do App)</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        mollitia corrupti at quod dolore voluptatum atque accusantium dolores!
        Amet nam nobis nostrum inventore suscipit earum architecto aliquid ipsum
        quos nihil.
      </p>
    </>
  );
}
