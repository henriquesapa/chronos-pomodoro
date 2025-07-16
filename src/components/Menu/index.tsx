import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function HandleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); //Não segue o link
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    });
  }

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // }); //Executado todas vezes que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('Teste', Date.now());
  // }, []); //Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]); // Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={event => HandleClick(event)}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
