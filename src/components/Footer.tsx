import * as React from "react"
import { Link } from "gatsby"
import nav from "../data/nav"
import { useStateMachine } from "little-state-machine"
import * as styles from "./Footer.module.css"

export default ({ currentLanguage }: { currentLanguage: string }) => {
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode

  return (
    <footer
      className={`${styles.footer} ${lightMode ? styles.lightFooter : {}}`}
    >
      <ul className={styles.links}>
        <li>
          <Link to="/">{nav[currentLanguage].home}</Link>
        </li>
        <li>
          <Link to="/get-started">{nav[currentLanguage].getStarted}</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
        <li>
          <Link to="/ts">TS</Link>
        </li>
        <li>
          <Link to="/advanced-usage">{nav[currentLanguage].advanced}</Link>
        </li>
        <li>
          <Link to="/faqs">{nav[currentLanguage].faqs}</Link>
        </li>
        <li>
          <Link to="/form-builder">{nav[currentLanguage].builder}</Link>
        </li>
        <li>
          <Link to="/dev-tools">DevTools</Link>
        </li>
        <li>
          <Link to="/resources">{nav[currentLanguage].resources}</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
      </ul>
      <p>
        A project by{" "}
        <a
          href="https://www.beekai.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="BEEKAI Form builder"
        >
          <b>BEEKAI</b>
        </a>{" "}
        | Please support us by leaving a ★{" "}
        <a
          href="https://github.com/react-hook-form/react-hook-form"
          target="_blank"
          rel="noreferrer noopener"
        >
          @github
        </a>{" "}
        |{" "}
        <a
          href="https://openbase.io/js/react-hook-form"
          target="_blank"
          rel="noreferrer noopener"
        >
          Feedback
        </a>
      </p>
      <p
        style={{
          display: "inline-block",
          background: "white",
          color: "black",
          padding: "6px 20px",
          borderRadius: 4,
        }}
      >
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Hosted and powered by ▲ <b>Vercel</b>
        </a>
      </p>
    </footer>
  )
}
