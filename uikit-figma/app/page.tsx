'use client';
import styles from './page.module.css';

export default async function Index() {

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <ul className="container">
          <li>
            <a href="/vars">Load variables from Figma</a>
          </li>
          <li>
            <a href="/icon-types">Update icons catalog</a>
          </li>
          <li>
            <a href="/react-icons">Generate React Icon Components</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
