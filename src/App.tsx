import React from "react";
import styles from "./App.module.css";
import {
  Auburn,
  Rocklin,
  Roseville,
  Lincoln,
  Loomis,
  Folsom,
  Dorado,
  Rancho,
  Elk,
  Natomis,
  WestSac,
  EastSac,
  Map,
} from "./Map";
function App() {
  const hover = (item: string) => {
    const node = document.getElementById(item);
    const header = document.getElementById(`${item}Header`);
    if (node && header) {
      node.style.transform = "scale(1.025)";
      node.style.zIndex = "2";
      node.style.filter = "brightness(0.9)";
      header.style.color = "white";
    }
  };
  const unhover = (item: string) => {
    const node = document.getElementById(item);
    const header = document.getElementById(`${item}Header`);

    if (node && header) {
      node.style.transform = "scale(1)";
      node.style.zIndex = "0";
      node.style.filter = "none";
      header.style.color = "black";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapWrapper}>
        <div
          className={styles.Auburn}
          onMouseOver={() => hover("Auburn")}
          onMouseLeave={() => unhover("Auburn")}
        >
          <h1 id="AuburnHeader">Auburn</h1>
        </div>
        <img src={Auburn} alt="Auburn" id="Auburn" />

        <div
          className={styles.Rancho}
          onMouseOver={() => hover("Rancho")}
          onMouseLeave={() => unhover("Rancho")}
        >
          <h1 id="RanchoHeader">Rancho Cordova</h1>
        </div>

        <img src={Rancho} alt="Rancho Cordova" id="Rancho" />

        <div
          className={styles.Rocklin}
          onMouseOver={() => hover("Rocklin")}
          onMouseLeave={() => unhover("Rocklin")}
        >
          <h1 id="RocklinHeader">Rocklin</h1>
        </div>

        <img id="Rocklin" src={Rocklin} alt="Rocklin" />

        <div
          className={styles.Roseville}
          onMouseOver={() => hover("Roseville")}
          onMouseLeave={() => unhover("Roseville")}
        >
          <h1 id="RosevilleHeader">Roseville</h1>
        </div>

        <img src={Roseville} alt="Roseville" id="Roseville" />

        <div
          className={styles.Lincoln}
          onMouseOver={() => hover("Lincoln")}
          onMouseLeave={() => unhover("Lincoln")}
        >
          <h1 id="LincolnHeader">Lincoln</h1>
        </div>

        <img id="Lincoln" src={Lincoln} alt="Lincoln" />

        <div
          className={styles.Folsom}
          onMouseOver={() => hover("Folsom")}
          onMouseLeave={() => unhover("Folsom")}
        >
          <h1 id="FolsomHeader">Folsom</h1>
        </div>

        <img id="Folsom" src={Folsom} alt="Folsom" />

        <img src={Map} alt="Main Map" />

        <div
          className={styles.Loomis}
          onMouseOver={() => hover("Loomis")}
          onMouseLeave={() => unhover("Loomis")}
        >
          <h1 id="LoomisHeader">Loomis</h1>
        </div>

        <img id="Loomis" src={Loomis} alt="Loomis" />
        <div
          className={styles.Dorado}
          onMouseOver={() => hover("Dorado")}
          onMouseLeave={() => unhover("Dorado")}
        >
          <h1 id="DoradoHeader">El Dorado Hills</h1>
        </div>

        <img id="Dorado" src={Dorado} alt="Dorado" />

        <div
          className={styles.Elk}
          onMouseOver={() => hover("Elk")}
          onMouseLeave={() => unhover("Elk")}
        >
          <h1 id="ElkHeader">Elk Grove</h1>
        </div>

        <img id="Elk" src={Elk} alt="Elk" />

        <div
          className={styles.WestSac}
          onMouseOver={() => hover("WestSac")}
          onMouseLeave={() => unhover("WestSac")}
        >
          <h1 id="WestSacHeader">West Sacramento</h1>
        </div>

        <img src={WestSac} alt="West Sac" id="WestSac" />

        <div
          className={styles.Natomis}
          onMouseOver={() => hover("Natomis")}
          onMouseLeave={() => unhover("Natomis")}
        >
          <h1 id="NatomisHeader">Natomis</h1>
        </div>

        <img src={Natomis} alt="Natomis" id="Natomis" />

        <div
          className={styles.EastSac}
          onMouseOver={() => hover("EastSac")}
          onMouseLeave={() => unhover("EastSac")}
        >
          <h1 id="EastSacHeader">East Sacramento</h1>
        </div>

        <img src={EastSac} id="EastSac" alt="East Sac" />
      </div>
    </div>
  );
}

export default App;
