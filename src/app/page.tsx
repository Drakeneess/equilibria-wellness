import { WellnessHeader } from "@/components/WellnessHeader";
import { brand, pillars, principles, faqs } from "@/data/site";

function RayIcon({ type }: { type: string }) {
  if (type === "sonido") {
    return <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M11 31a21 21 0 0 1 42 0M17 31a15 15 0 0 1 30 0M23 31a9 9 0 0 1 18 0"/><path d="M7 38h50M15 45h34M23 52h18"/></svg>;
  }
  if (type === "presencia") {
    return <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="13"/><path d="M32 3v13M32 48v13M3 32h13M48 32h13"/></svg>;
  }
  return <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 55C14 46 8 32 11 15c16 0 27 11 30 24M32 55C51 45 56 31 53 15 40 15 28 26 24 39"/><path d="M32 55V19"/></svg>;
}

export default function HomePage() {
  return (
    <>
      <WellnessHeader />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-ambient hero-ambient--left" aria-hidden="true" />
          <div className="hero-ambient hero-ambient--right" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--gold"><span className="eyebrow-rule" /> BIENESTAR HOLÍSTICO · EQUILIBRIA</div>
              <h1 id="hero-title">Un espacio para<br/><em>volver a tu</em><br/><span>centro.</span></h1>
              <p>Una invitación a bajar el ritmo, redescubrir el silencio y conectar con el presente a través del sonido y los sentidos.</p>
              <div className="hero-actions">
                <a className="button button--gold" href="#filosofia">Descubrir Wellness <span aria-hidden="true">↗</span></a>
                <a className="button button--quiet" href="#universo">Explorar nuestro universo <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-micro"><span className="small-sun" aria-hidden="true">✺</span> SONIDO <span className="micro-dot"/> PRESENCIA <span className="micro-dot"/> EQUILIBRIO</div>
            </div>
            <div className="hero-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.heroImage} width={1254} height={1254} alt="Cuencos metálicos artesanales, una vela y el emblema de Equilibria Wellness en un ambiente de luz ámbar" fetchPriority="high" />
              <div className="hero-visual__frame" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-bottom shell"><span>UNA EXPERIENCIA PARA LOS SENTIDOS</span><span>01 — 03</span><a href="#filosofia" aria-label="Desplazarse hacia el enfoque de Wellness">DESLIZA PARA EXPLORAR <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="intro section-light" id="filosofia" aria-labelledby="intro-title">
          <div className="shell intro-grid">
            <div className="section-index"><span className="index-line" /> 01 / NUESTRA ESENCIA</div>
            <div className="intro-content">
              <div className="eyebrow">EL ARTE DE LA PAUSA</div>
              <h2 id="intro-title" className="section-title">Hay momentos en los que el bienestar empieza por <em>escuchar.</em></h2>
              <p>En Equilibria Wellness imaginamos un lugar donde el sonido, la presencia y el entorno se encuentran. Una propuesta que celebra los pequeños rituales y el tiempo dedicado a uno mismo.</p>
              <div className="intro-signature"><span aria-hidden="true">✳</span> Respirar · Sentir · Estar</div>
            </div>
          </div>
        </section>

        <section className="pillars section-light" id="universo" aria-labelledby="pillars-title">
          <div className="shell">
            <div className="section-heading-row">
              <div>
                <div className="eyebrow">02 / NUESTRO UNIVERSO</div>
                <h2 id="pillars-title" className="section-title">Tres formas de <em>habitar el presente.</em></h2>
              </div>
              <p>No se trata de hacer más. Se trata de crear espacio para lo esencial.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article className="pillar-card" key={pillar.number}>
                  <div className="pillar-card__top"><span>{pillar.number} / 03</span><RayIcon type={pillar.key} /></div>
                  <div className="pillar-card__bottom">
                    <span className="pillar-card__label">{pillar.label}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <div className="pillar-card__line" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="interlude" aria-labelledby="interlude-title">
          <div className="interlude-orbit interlude-orbit--one" aria-hidden="true" />
          <div className="interlude-orbit interlude-orbit--two" aria-hidden="true" />
          <div className="interlude-orbit interlude-orbit--three" aria-hidden="true" />
          <div className="shell interlude-content">
            <span className="eyebrow eyebrow--gold">LA BELLEZA DEL SILENCIO</span>
            <div className="interlude-mark" aria-hidden="true">✺</div>
            <h2 id="interlude-title">El silencio también<br/>tiene una <em>frecuencia.</em></h2>
            <p>Una experiencia sensorial no necesita prisa. Solo un instante de atención.</p>
          </div>
        </section>

        <section className="values section-light" aria-labelledby="values-title">
          <div className="shell values-layout">
            <div className="values-intro">
              <div className="eyebrow">03 / EL ENFOQUE</div>
              <h2 className="section-title" id="values-title">Pequeños rituales.<br/><em>Una intención.</em></h2>
              <p>Una filosofía de bienestar que pone en primer plano la experiencia personal, sin promesas extraordinarias ni fórmulas universales.</p>
              <span className="values-decoration" aria-hidden="true">✦</span>
            </div>
            <div className="value-list">
              {principles.map((item) => (
                <article className="value-item" key={item.index}>
                  <span>{item.index}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="value-item__glyph" aria-hidden="true">✳</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="questions section-light" id="preguntas" aria-labelledby="questions-title">
          <div className="shell questions-layout">
            <div className="questions-intro"><div className="eyebrow">PREGUNTAS FRECUENTES</div><h2 id="questions-title" className="section-title">Conocer antes de <em>explorar.</em></h2><p>Estamos construyendo el espacio de Wellness. Esta primera versión presenta nuestra identidad y enfoque.</p></div>
            <div className="question-list">
              {faqs.map((faq,i) => (
                <details key={faq.question} className="question-item">
                  <summary><span className="question-number">0{i+1}</span><span>{faq.question}</span><span className="question-plus" aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="shell closing-content">
            <div className="eyebrow eyebrow--gold">UN NUEVO ESPACIO EN EQUILIBRIA</div>
            <h2 id="closing-title">Una pausa puede<br/><em>ser el comienzo.</em></h2>
            <p>Muy pronto compartiremos las experiencias y actividades de Equilibria Wellness.</p>
            <a className="button button--gold" href={brand.institutionUrl} target="_blank" rel="noopener noreferrer">Conoce Equilibria <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-layout">
          <a className="brand brand--footer" href="#inicio" aria-label="Equilibria Wellness, volver al inicio"><img src="/brand/wellness-mark.svg" width={45} height={45} alt="" aria-hidden="true"/><span className="brand-lockup"><strong>EQUILIBRIA</strong><small>WELLNESS</small></span></a>
          <p>Un espacio para la calma, la escucha y el bienestar consciente.</p>
          <a className="footer-institution" href={brand.institutionUrl} target="_blank" rel="noopener noreferrer">Equilibria institucional ↗</a>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Equilibria Wellness · Concepto inicial</span><span>El catálogo y la agenda se anunciarán próximamente.</span></div>
      </footer>
    </>
  );
}
