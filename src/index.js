import './styles/index.css';
import { Header } from './header/header';
import { Section } from './section/section';

const $app = document.querySelector('#app');

export const App = () => {
  $app.append(Header(), Section());
};

App();
