if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ============================================================
// DATA
// ============================================================
const PRACTICES = [
  {
    num: "01",
    title: "Derecho Penal",
    lead: "Defensa técnica y asistencia a personas que se encuentran en conflicto o condenadas.",
    items: [
      "Defensa en causa penales (robos, leciones, estafas, etc).",
      "Medidas de libertad y excarcelaciones",
      "Asistencia a víctimas (denuncias, querellas)",
      "Violencia de genero y medidas de proteccion",
      
    ]
  },
  {
    num: "02",
    title: "Derecho Previsional",
    lead: "Tramites de jubilaciones, pensiones, cualquier beneficio de ANSES y litigios federales.",
    items: [
      "Jubilaciones ordinarias y especiales (docentes, policias, judiciales, etc)",
      "Pensiones, PNC, graciables",
      "Retiro transitorio por invalidez",
      "Juicios contra el ANSES, ANDIS y ARCA",
      
    ]
  },
  {
    num: "03",
    title: "Derecho de Familia y Sucesiones",
    lead: "Tramitamos judicialmente todo tipo de medida tendiente a lograr un resultado donde involucre a las personas humanas, juridicas y niños, niñas y adolescentes.",
    items: [
      "Divorcios unilateral y bilateral",
      "Alimentos",
      "Division de bienes", 
      "Régimen comunicacional",
      "Medidas de proteccion y internacion voluntaria",
      "Sucesiones",
      
      
    ]
  },
  {
    num: "04",
    title: "Derecho Civil y Comercial",
    lead: "Aconsejamos a empresas y particulares sobre derecho empresarial, derecho comercial, consumidor y todo juicio de interes pecuniario. En particular reclamos por daños y perjuicios.",
    items: [
      "Derecho comercial",
      "Derecho empresarial",
      "Derecho de consumidor",
      "Asistensia a empresas",
      "Asistencia a obras sociales",
      "Daños y perjuicios en general"
    ]
  },
  {
    num: "05",
    title: "Cobros Ejecutivos",
    lead: "Nos esmeramos y ejecutamos todo tipo de titulo ejecutivo (pagarés, contratos, cheques y todo otro titulo de caracter ejecutivo).",
    items: [
      
    ]
  },
  {
    num: "06",
    title: "Derecho Laboral",
    lead: "Tramitamos extrajudicialmente y judicialmente todo tipo de proceso laboral y de despido. Asesorando personas humanas y empresas.",
    items: [
      
    ]
  },
  {
    num: "07",
    title: "Derecho de la salud",
    lead: "En esta area garantizamos el acceso de todas las pesonas, sin importar su condicion a beneficios que tengan interes la salud.",
    items: [
      "Tratamientos medicos y medicamentos",
      "Cirujias",
      "Amparo de salud",
      "Reclamo a obras sociales",
      "Reclamo a PAMI",
      "Protesis y silla de ruedas"
    ]
  },
  {
    num: "08",
    title: "Mala Praxis Medica",
    lead: "Defensa y denuncias tanto en sede penal como en sede civil por daños y perjuicios. Nos especializamos en el campo de mala praxis ocupandonos de ayudar a los profesionales que estan siendo demandados y tambien de las personas que fueron menoscabadas su salud con algun procedimiento medico.",
    items: [
      
    ]
  }

];

const TEAM = [
  {
    initials: "DR",
    photo: "equipo/Damm.png",
    name: "DR. Guillermo Agustin Damm",
    role: "Socio fundador",
    bio: [
      "Me especializo en las areas de derecho de familias, accidentes de transito y laboral. Tambien me dedico a la defensa penal de imputados y querella."
    ],
    edu: "Universidad Nacional de Tucumán (1998) · Universidad Austral (LLM, 2004)",
    mat: "T° 34 F° 112 CAT · T° 428 F° 94 CPACF",
    idiomas: "Español",
    foco: "Matricula provincial y federal"
  },
  {
    initials: "DR",
    photo: "script redondo/Matias Morante.png",
    photoRound: "script redondo/Matias Morante.png",
    name: "DR. Matias Leonel Morante",
    role: "Socio fundador",
    bio: [
      "Me especializo en las areas de derecho previsional, derecho a la salud, accidentes laborales y de transito, mala praxis medica y sucesiones. Tambien me dedico a la defensa penal de imputados y querella."
    ],
    edu: "Universidad Nacional de Tucumán (2008) · Especialización en Derecho del Trabajo (UBA)",
    mat: "T° 41 F° 210 CAT",
    idiomas: "Español",
    foco: "Matricula provincial y federal"
  },


];

// ============================================================
// RENDER: PRACTICES
// ============================================================
const practicesEl = document.getElementById("practices");
practicesEl.innerHTML = PRACTICES.map((p, idx) => `
  <div class="practice" data-idx="${idx}">
    <div class="practice-head">
      <div class="practice-num">${p.num}</div>
      <div class="practice-title">${p.title}</div>
      <div class="practice-plus">+</div>
    </div>
    <div class="practice-body">
      <div class="practice-body-inner">
        <div class="practice-body-content">
          <div></div>
          <div>
            <div class="lead">${p.lead}</div>
            <ul>
              ${p.items.map(i => `<li>${i}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`).join("");

practicesEl.querySelectorAll(".practice").forEach(el => {
  el.addEventListener("click", () => {
    const alreadyOpen = el.classList.contains("open");
    practicesEl.querySelectorAll(".practice").forEach(x => x.classList.remove("open"));
    if (!alreadyOpen) el.classList.add("open");
  });
});

function openPracticeByIndex(idx) {
  const row = practicesEl.querySelector(`.practice[data-idx="${idx}"]`);
  if (!row) return;
  practicesEl.querySelectorAll(".practice").forEach(x => x.classList.remove("open"));
  row.classList.add("open");
  row.scrollIntoView({ behavior: "smooth", block: "center" });
}

const footPracticesEl = document.getElementById("foot-practices");
if (footPracticesEl) {
  footPracticesEl.innerHTML = PRACTICES.map(
    (p, idx) =>
      `<li><button type="button" class="foot-practice-btn" data-idx="${idx}">${p.title}</button></li>`
  ).join("");
  footPracticesEl.querySelectorAll(".foot-practice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openPracticeByIndex(parseInt(btn.getAttribute("data-idx"), 10));
    });
  });
}

// ============================================================
// RENDER: TEAM
// ============================================================
const teamEl = document.getElementById("team");
teamEl.innerHTML = TEAM.map((m, idx) => `
  <div class="member" data-idx="${idx}">
    <div class="member-img">
      ${m.photo
        ? `<img src="img/${m.photo}" alt="Foto de ${m.name}" />`
        : `<div class="initials">${m.initials}</div>
           <div class="placeholder-text">[ retrato · ${m.name.split(" ")[0].toLowerCase()} ]</div>`
      }
    </div>
    <div class="member-meta">
      <div>
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
      </div>
      <div class="member-arrow">→</div>
    </div>
  </div>
`).join("");

teamEl.querySelectorAll(".member").forEach(el => {
  el.addEventListener("click", () => openModal(parseInt(el.dataset.idx)));
});

// ============================================================
// MODAL
// ============================================================
const backdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");

function openModal(idx) {
  const m = TEAM[idx];
  modalContent.innerHTML = `
    ${(m.photoRound || m.photo)
      ? `<img class="modal-avatar-img" src="img/${m.photoRound || m.photo}" alt="Foto de ${m.name}" />`
      : `<div class="modal-avatar">${m.initials}</div>`
    }
    <h3>${m.name}</h3>
    <span class="modal-role">${m.role}</span>
    <div class="modal-divider"></div>
    <div class="modal-bio">${m.bio[0]}</div>
    <div class="modal-tags">
      <span class="modal-tag">${m.foco}</span>
      <span class="modal-tag">${m.idiomas}</span>
    </div>
  `;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + "px";
  document.body.style.overflow = "hidden";
  backdrop.classList.add("active");
  backdrop.setAttribute("aria-hidden", "false");
}

function closeModal() {
  backdrop.classList.add("closing");
  setTimeout(() => {
    backdrop.classList.remove("active", "closing");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, 350);
}

document.getElementById("modal-close").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ============================================================
// NAV SCROLL
// ============================================================
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 8);
});

// ============================================================
// REVEAL ON SCROLL
// ============================================================
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ============================================================
// FORM
// ============================================================
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll(".field").forEach(f => {
    f.classList.remove("invalid");
    if (f.dataset.required !== undefined) {
      const input = f.querySelector("input:not([type=hidden]), textarea");
      const hiddenInput = f.querySelector("input[type=hidden]");
      const val = input ? input.value.trim() : (hiddenInput ? hiddenInput.value.trim() : "");
      if (!val) { f.classList.add("invalid"); ok = false; }
      if (f.dataset.type === "email" && val) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { f.classList.add("invalid"); ok = false; }
      }
    }
  });
  if (!ok) return;

  const btn = form.querySelector(".form-submit");
  btn.disabled = true; btn.textContent = "Enviando…";

  setTimeout(() => {
    form.querySelectorAll("input, textarea").forEach(i => i.value = "");
    // reset custom select
    const csWrap = document.getElementById("cs-area");
    if (csWrap) {
      csWrap.querySelector(".cs-value").textContent = "Seleccionar —";
      csWrap.querySelector(".cs-trigger").classList.remove("selected");
      csWrap.querySelectorAll(".cs-option").forEach(o => o.classList.remove("active"));
    }
    document.getElementById("ticket").textContent = "T-" + Math.floor(Math.random() * 90000 + 10000);
    document.getElementById("form-success").classList.add("active");
    btn.style.display = "none";
  }, 600);
});

// ============================================================
// CUSTOM SELECT
// ============================================================
(function () {
  const wrap     = document.getElementById("cs-area");
  if (!wrap) return;
  const trigger  = wrap.querySelector(".cs-trigger");
  const valueEl  = wrap.querySelector(".cs-value");
  const dropdown = wrap.querySelector(".cs-dropdown");
  const hidden   = document.getElementById("area");

  function openDropdown() {
    wrap.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    wrap.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  }

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    wrap.classList.contains("open") ? closeDropdown() : openDropdown();
  });

  dropdown.querySelectorAll(".cs-option").forEach(opt => {
    opt.addEventListener("click", () => {
      dropdown.querySelectorAll(".cs-option").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      valueEl.textContent = opt.textContent;
      hidden.value = opt.dataset.value;
      trigger.classList.add("selected");
      closeDropdown();
      // clear invalid state
      wrap.closest(".field").classList.remove("invalid");
    });
  });

  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) closeDropdown();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdown();
  });
})();

// ============================================================
// MARQUEE: el desplazamiento lo hace CSS (translate -50%);
// la rueda y el arrastre mueven el "tiempo" de la animación.
// ============================================================
(function initMarquee() {
  const box = document.querySelector(".marquee");
  const track = document.querySelector(".marquee-track");
  if (!box || !track) return;

  /** ms de timeline por px de arrastre (más alto = más sensible) */
  const DRAG_MS_PER_PX = 72;
  /** rueda / trackpad */
  const WHEEL_FACTOR = 2.1;

  let dragging = false;
  let startX = 0;
  let startTime = 0;

  function cssAnim() {
    const local = track.getAnimations?.();
    if (local && local.length) return local[0];
    const all = document.getAnimations?.() ?? [];
    for (let i = 0; i < all.length; i++) {
      const eff = all[i].effect;
      if (eff && eff.target === track) return all[i];
    }
    return null;
  }

  function animDurationMs() {
    const a = cssAnim();
    if (a && a.effect && a.effect.getTiming) {
      const d = a.effect.getTiming().duration;
      if (typeof d === "number" && d > 0 && !Number.isNaN(d)) return d;
    }
    const raw = getComputedStyle(track).animationDuration;
    const m = /^([\d.]+)s$/i.exec(raw || "");
    return m ? parseFloat(m[1]) * 1000 : 50000;
  }

  function wrapTime(t) {
    const dur = animDurationMs();
    if (!dur) return t;
    let x = t % dur;
    if (x < 0) x += dur;
    return x;
  }

  box.addEventListener("pointerdown", e => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const a = cssAnim();
    if (!a) return;
    dragging = true;
    startX = e.clientX;
    startTime = a.currentTime;
    a.pause();
    try {
      box.setPointerCapture(e.pointerId);
    } catch (_) {}
    e.preventDefault();
  });

  box.addEventListener("pointermove", e => {
    if (!dragging) return;
    const a = cssAnim();
    if (!a) return;
    const dx = e.clientX - startX;
    a.currentTime = wrapTime(startTime - dx * DRAG_MS_PER_PX);
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    const a = cssAnim();
    if (a) a.play();
  }

  box.addEventListener("pointerup", endDrag);
  box.addEventListener("pointercancel", endDrag);
  box.addEventListener("lostpointercapture", endDrag);

  box.addEventListener(
    "wheel",
    e => {
      const a = cssAnim();
      if (!a) return;
      e.preventDefault();
      const d = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      a.currentTime = wrapTime(a.currentTime + d * WHEEL_FACTOR);
    },
    { passive: false }
  );
})();

// ============================================================
// STATS ANIMATION
// ============================================================
(function () {
  const statsEl = document.querySelector(".stats");
  if (!statsEl) return;

  const LETTERS_UP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LETTERS_LO = "abcdefghijklmnopqrstuvwxyz";

  const data = Array.from(statsEl.querySelectorAll(".stat")).map(stat => {
    const nEl  = stat.querySelector(".n");
    const lEl  = stat.querySelector(".l");
    const raw  = nEl.textContent.trim();
    const num  = parseInt(raw, 10);
    const isNum = !isNaN(num);
    return {
      nEl, lEl,
      isNum,
      target: num,
      suffix: raw.endsWith("+") ? "+" : "",
      rawText: raw,
      label: lEl.textContent.trim()
    };
  });

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function countUp(el, target, suffix, dur) {
    const t0 = performance.now();
    function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.innerHTML = Math.round(easeOut(p) * target) + (suffix ? `<em>${suffix}</em>` : "");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function scramble(el, finalText, dur) {
    const t0  = performance.now();
    const chars = finalText.split("");
    function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      let out = "";
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (!/[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(c)) { out += c; continue; }
        const isUpper = c === c.toUpperCase() && c !== c.toLowerCase();
        const pool    = isUpper ? LETTERS_UP : LETTERS_LO;
        const settled = (i / chars.length) * 0.75;
        if (p > settled + 0.25) {
          out += c;
        } else {
          out += pool[Math.floor(Math.random() * pool.length)];
        }
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = finalText;
    }
    requestAnimationFrame(step);
  }

  let fired = false;
  new IntersectionObserver((entries, obs) => {
    if (fired || !entries[0].isIntersecting) return;
    fired = true;
    obs.disconnect();
    data.forEach(({ nEl, lEl, isNum, target, suffix, rawText, label }, i) => {
      setTimeout(() => {
        if (isNum) countUp(nEl, target, suffix, 1400);
        else       scramble(nEl, rawText, 900);
        scramble(lEl, label, 900);
      }, i * 140);
    });
  }, { threshold: 0.4 }).observe(statsEl);
})();

// ============================================================
// MENÚ MÓVIL
// ============================================================
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (!hamburger || !mobileMenu) return;

  function toggleMenu(force) {
    const open = force !== undefined ? force : !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
  }

  hamburger.addEventListener('click', () => toggleMenu());

  mobileMenu.querySelectorAll('.nav-mobile-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('click', (e) => {
    if (!document.getElementById('nav').contains(e.target)) toggleMenu(false);
  });
})();

// ============================================================
// LOGO CLICK ANIMATION + SCROLL TO H1
// ============================================================
(function () {
  const brand = document.querySelector('.brand');
  const logo  = document.querySelector('.brand-logo');
  const h1    = document.querySelector('h1.display');
  if (!brand || !logo || !h1) return;

  brand.addEventListener('click', function (e) {
    e.preventDefault();
    logo.classList.remove('animating');
    void logo.offsetWidth;
    logo.classList.add('animating');
    logo.addEventListener('animationend', () => logo.classList.remove('animating'), { once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
(function () {
  const navLinks = document.querySelectorAll('.nav ul a[href^="#"]');
  const targets = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)
      );
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  targets.forEach(t => io.observe(t));
})();

// ============================================================
// TWEAKS
// ============================================================
function applyTweaks(t) {
  const root = document.documentElement;
  root.dataset.accent = t.accent || "terracota";
  root.dataset.mode = t.mode || "claro";
  root.dataset.heading = t.headingStyle || "serif";
  root.dataset.density = t.density || "relajado";
  document.querySelectorAll('[data-show="oficina"]').forEach(el => {
    el.style.display = t.showOficinaNote ? "" : "none";
  });
}
applyTweaks(window.__TWEAK_DEFAULTS);
window.__applyTweaks = applyTweaks;
