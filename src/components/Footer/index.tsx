import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-footer">
      <section className="social-media">
        <ul>
          <li>
            <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
              <img src="/images/fb.png" alt="Facebook da Alura" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aluraonline" target="_blank" rel="noreferrer">
              <img src="/images/tw.png" alt="Twitter da Alura" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aluraonline/" target="_blank" rel="noreferrer">
              <img src="/images/ig.png" alt="Instagram da Alura" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/brand.png" alt="Logo Organo"/>
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}

export default Footer;
