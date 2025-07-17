import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';
export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dignissimos, nesciunt assumenda natus quia vel quidem error dolores
        saepe officiis vitae optio aut similique ducimus? Quis esse iusto
        dolores labore.
      </p>
    </>
  );
}
