const services = [
  {
    number: "01",
    title: "Teljes körű könyvelés",
    text: "Naprakész nyilvántartások, bevallások és beszámolók — érthetően, pontosan, határidőre.",
  },
  {
    number: "02",
    title: "Adótanácsadás",
    text: "Gyakorlati válaszok vállalkozása adózási kérdéseire, a döntéseihez szükséges tiszta képpel.",
  },
  {
    number: "03",
    title: "Bérszámfejtés",
    text: "Megbízható havi bérügyintézés és kapcsolódó bevallások a foglalkoztatás teljes folyamatában.",
  },
];

const steps = [
  ["01", "Megismerjük", "Átbeszéljük vállalkozását, folyamatait és azt, hol van szüksége valódi támogatásra."],
  ["02", "Rendszerezzük", "Kialakítjuk az átlátható együttműködést, a dokumentumok és határidők rendjét."],
  ["03", "Végigkísérjük", "Nemcsak könyvelünk: jelezzük a teendőket, és elérhetőek maradunk, amikor kérdése van."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vukovics Kft. – főoldal">
          <span className="brand-mark">V</span>
          <span className="brand-copy"><strong>Vukovics</strong><small>Adó &amp; Számvitel</small></span>
        </a>
        <nav aria-label="Fő navigáció">
          <a href="#szolgaltatasok">Szolgáltatások</a>
          <a href="#rolunk">Rólunk</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
        <a className="header-cta" href="tel:+3672233409">Beszéljünk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Könyvelés és adótanácsadás Pécsen</p>
          <h1>A számok mögött<br /><em>az Ön vállalkozása áll.</em></h1>
          <p className="hero-lead">Több mint három évtized tapasztalatával segítünk, hogy pénzügyei rendezettek, döntései pedig magabiztosak legyenek.</p>
          <div className="hero-actions">
            <a className="button primary" href="#kapcsolat">Időpontot kérek <span>↗</span></a>
            <a className="text-link" href="#szolgaltatasok">Szolgáltatásaink <span>↓</span></a>
          </div>
        </div>
        <div className="hero-panel" aria-label="1992 óta megbízható szakmai háttér">
          <div className="panel-grid" />
          <div className="panel-orbit"><span>V</span></div>
          <div className="panel-note">
            <small>Tapasztalat</small>
            <strong>1992 óta</strong>
            <p>szakértelem, figyelem<br />és kiszámíthatóság</p>
          </div>
          <div className="panel-location">Pécs <span>46.0727° N</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Kiemelt értékeink">
        <p>Személyes figyelem</p><i />
        <p>Naprakész szakértelem</p><i />
        <p>Érthető kommunikáció</p><i />
        <p>Hosszú távú partnerség</p>
      </section>

      <section className="services section" id="szolgaltatasok">
        <div className="section-intro">
          <p className="eyebrow"><span /> Amiben számíthat ránk</p>
          <h2>Biztos háttér a<br />mindennapi működéshez.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#kapcsolat" aria-label={`${service.title} – érdeklődés`}>Részletek <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="rolunk">
        <div className="about-visual">
          <span className="big-v">V</span>
          <p>Adó<br />&amp; Számvitel</p>
          <div className="since"><strong>34</strong><span>év szakmai<br />tapasztalat</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow light"><span /> Rólunk</p>
          <h2>Nyugodtabb mindennapok.<br /><em>Átláthatóbb pénzügyek.</em></h2>
          <p>A Vukovics Kft. 1992 óta támogatja ügyfeleit számviteli és adózási kérdésekben. Hiszünk abban, hogy a jó könyvelő nem csupán feldolgozza a számokat, hanem érthető, elérhető és előre gondolkodik.</p>
          <p>Ismerjük a helyi vállalkozások mindennapjait, ezért minden ügyfelünkre személyesen figyelünk. Nálunk a kérdése nem vész el egy rendszerben — valódi választ kap rá.</p>
          <div className="about-signature"><span>VM</span><p><strong>Vukovics Mihály</strong><small>ügyvezető</small></p></div>
        </div>
      </section>

      <section className="process section">
        <div className="section-intro process-title">
          <p className="eyebrow"><span /> Így dolgozunk együtt</p>
          <h2>Egyszerűen. Átláthatóan.<br />Személyesen.</h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <div className="step-top"><span>{number}</span><i /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="kapcsolat">
        <div className="contact-copy">
          <p className="eyebrow light"><span /> Kapcsolat</p>
          <h2>Beszéljük át,<br /><em>miben segíthetünk.</em></h2>
          <p>Keressen bennünket telefonon vagy e-mailben. Röviden egyeztetjük az igényeit, és megbeszéljük a következő lépést.</p>
          <a className="button warm" href="mailto:molnarne.hajnalka@gmail.com">E-mailt írok <span>↗</span></a>
        </div>
        <div className="contact-details">
          <div><small>Telefon</small><a href="tel:+3672233409">+36 72 233 409</a></div>
          <div><small>E-mail</small><a href="mailto:molnarne.hajnalka@gmail.com">molnarne.hajnalka@gmail.com</a></div>
          <div><small>Iroda</small><a href="https://www.google.com/maps/search/?api=1&query=7622+Pécs+Verseny+utca+1%2FB" target="_blank" rel="noreferrer">7622 Pécs, Verseny utca 1/B <span>↗</span></a></div>
          <p className="company-id">Adószám: 10743511-1-02 · Cégjegyzékszám: 02-09-061366</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">V</span><span className="brand-copy"><strong>Vukovics</strong><small>Adó &amp; Számvitel</small></span></a>
        <p>© 2026 Vukovics Kft. Minden jog fenntartva.</p>
        <a href="#top">Vissza az elejére ↑</a>
      </footer>
    </main>
  );
}
