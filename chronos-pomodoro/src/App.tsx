// * em React se usa PascalCase para nomear as functions
// * o que for apontado no return é o que aparece no html
// ? <></> = REACT FRAGMENT => agrupam children sem adicionar nós extras ao DOM

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading>
        History
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        mollitia corrupti at quod dolore voluptatum atque accusantium dolores!
        Amet nam nobis nostrum inventore suscipit earum architecto aliquid ipsum
        quos nihil.
      </p>
    </>
  );
}
