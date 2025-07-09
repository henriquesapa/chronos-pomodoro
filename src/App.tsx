import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={12345} attr2='String'>
        Olá mundo!
      </Heading>
      <body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae
        voluptate ducimus atque at, voluptates laudantium. Ipsa nemo distinctio
        in quaerat tenetur corporis necessitatibus veritatis, magnam culpa
        pariatur, tempora excepturi!
      </body>
    </>
  );
}
