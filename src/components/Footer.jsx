import { useState } from "react";

function Footer() {
  const YEAR = new Date().getFullYear();
  const [{ index, text, style }, setProperties] = useState({
    index: 0,
    text: "© notesTech",
    style: { fontFamily: "var(--font-unkempt)", color: "var(--pawpaw-orange)" },
  });

  function changeProperties() {
    index
      ? setProperties({
          index: 0,
          text: "© notesTech",
          style: {
            fontFamily: "var(--font-unkempt)",
            color: "var(--pawpaw-orange)",
          },
        })
      : setProperties({
          index: 1,
          text: "FRUITYDOM",
          style: {
            fontFamily: "var(--font-rubik)",
            color: "var(--deep-green)",
          },
        });
  }
  return (
    <footer onPointerOver={changeProperties} onPointerOut={changeProperties}>
      <span style={style}>{text}</span> {YEAR}
    </footer>
  );
}

export default Footer;
