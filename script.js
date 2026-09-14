:root {
  --ink: #071112;
  --night: #07191a;
  --night-deep: #031011;
  --paper: #dce8d7;
  --muted: #91aaa0;
  --cyan: #8ce7cf;
  --green: #a8df63;
  --line: rgba(168, 223, 99, 0.25);
  --glass: rgba(7, 28, 27, 0.62);
  --sans: "Space Grotesk", sans-serif;
  --mono: "DM Mono", monospace;
  --ease: cubic-bezier(.2, .8, .2, 1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
}

body {
  margin: 0;
  color: var(--paper);
  background: var(--night-deep);
  font-family: var(--sans);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.scene,
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.scene {
  z-index: -2;
  overflow: hidden;
  background: #061719;
  transition: background 1.2s var(--ease);
}

.sky {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 68% 22%, rgba(91, 169, 158, .14), transparent 18%),
    linear-gradient(180deg, #06181f 0%, #092b2b 48%, #0b2822 100%);
  transition: filter 1.2s var(--ease), background 1.2s var(--ease);
}

.moon,
.sun {
  position: absolute;
  border-radius: 50%;
  transition: opacity 1.2s var(--ease), transform 1.2s var(--ease);
}

.moon {
  width: 110px;
  height: 110px;
  top: 15%;
  right: 14%;
  background: #d9efdb;
  box-shadow: 0 0 50px rgba(190, 245, 217, .3);
}

.sun {
  width: 120px;
  height: 120px;
  top: 13%;
  right: 15%;
  opacity: 0;
  transform: scale(.5);
  background: #ffe8a1;
  box-shadow: 0 0 90px rgba(255, 218, 117, .5);
}

.mountains {
  position: absolute;
  inset: 43% 0 0;
  background: linear-gradient(145deg, transparent 39%, #0a2828 40% 53%, transparent 54%) 0 0 / 48% 100%,
              linear-gradient(215deg, transparent 42%, #0a2225 43% 59%, transparent 60%) 100% 0 / 54% 100%;
  opacity: .8;
}

.forest {
  position: absolute;
  inset: auto -5% 0;
  height: 55%;
  background-repeat: repeat-x;
  transform-origin: bottom;
  animation: forestSway 14s ease-in-out infinite alternate;
}

.forest-back {
  background: linear-gradient(145deg, transparent 48%, #0e3530 49% 76%, transparent 77%) 0 0 / 130px 100%;
  opacity: .48;
}

.forest-mid {
  height: 45%;
  background: linear-gradient(145deg, transparent 45%, #08231f 46% 80%, transparent 81%) 0 0 / 100px 100%;
  opacity: .8;
}

.forest-front {
  height: 34%;
  background: linear-gradient(145deg, transparent 37%, #041615 38% 82%, transparent 83%) 0 0 / 74px 100%;
}

.mist {
  position: absolute;
  left: -10%;
  width: 120%;
  height: 18%;
  border-radius: 50%;
  background: rgba(154, 211, 183, .08);
  filter: blur(24px);
  animation: mistDrift 18s ease-in-out infinite alternate;
}

.mist-one { bottom: 27%; }
.mist-two { bottom: 42%; animation-delay: -7s; opacity: .55; }

.stars {
  position: absolute;
  inset: 0;
  opacity: .65;
  background-image: radial-gradient(circle, rgba(213,255,231,.8) 1px, transparent 1.5px);
  background-size: 97px 83px;
}

.grain {
  z-index: 10;
  opacity: .05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}

.cloud {
  position: absolute;
  top: 20%;
  left: -30%;
  width: 230px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,.45);
  filter: blur(7px);
  opacity: 0;
  animation: cloudMove 32s linear infinite;
}

.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  bottom: 8px;
  border-radius: 50%;
  background: inherit;
}

.cloud::before {
  left: 40px;
  width: 80px;
  height: 70px;
}

.cloud::after {
  right: 35px;
  width: 110px;
  height: 80px;
}

.cloud-two {
  top: 31%;
  animation-duration: 42s;
  animation-delay: -18s;
  transform: scale(.7);
}

.birds {
  position: absolute;
  top: 29%;
  left: -10%;
  width: 45px;
  height: 18px;
  opacity: 0;
  animation: birdMove 23s linear infinite;
}

.birds::before,
.birds::after {
  content: "";
  position: absolute;
  width: 22px;
  height: 10px;
  border-top: 2px solid #244b48;
  border-radius: 50%;
}

.birds::before { transform: rotate(25deg); }
.birds::after { left: 20px; transform: rotate(-25deg); }

.birds-two {
  top: 39%;
  transform: scale(.6);
  animation-delay: -11s;
  animation-duration: 28s;
}

.firefly-field {
  position: absolute;
  inset: 0;
}

.background-firefly {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 14px 4px rgba(168, 223, 99, .8);
  animation: fireflyFloat var(--duration) ease-in-out var(--delay) infinite alternate;
}

.site-header {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 5vw;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: .72rem;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid var(--green);
  border-radius: 50%;
  color: var(--green);
  font-family: Georgia, serif;
  font-size: 1.2rem;
}

.desktop-nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  position: relative;
  color: var(--muted);
  font-size: .72rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  transition: color .3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -8px;
  left: 0;
  height: 1px;
  background: var(--green);
  transform: scaleX(0);
  transition: transform .3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--paper);
}

.nav-link.active::after {
  transform: scaleX(1);
}

.theme-toggle {
  position: fixed;
  z-index: 22;
  top: 86px;
  left: 5vw;
  width: 60px;
  height: 30px;
  padding: 0;
  border: 1px solid rgba(168, 223, 99, .4);
  border-radius: 30px;
  background: rgba(5, 25, 24, .75);
  cursor: pointer;
}

.toggle-knob {
  position: absolute;
  top: 4px;
  left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px var(--green);
  transition: transform .6s var(--ease);
}

.theme-icon {
  position: absolute;
  top: 8px;
  font-size: 10px;
}

.moon-icon {
  left: 9px;
  width: 8px;
  height: 8px;
  border: 1px solid var(--cyan);
  border-radius: 50%;
}

.sun-icon {
  right: 9px;
  width: 9px;
  height: 9px;
  border: 1px solid #ffe49d;
  border-radius: 50%;
}

.menu-toggle,
.mobile-nav {
  display: none;
}

.page {
  position: relative;
  z-index: 1;
}

.section {
  position: relative;
  display: grid;
  align-items: center;
  min-height: 100svh;
  padding: 120px 10vw 70px;
  scroll-snap-align: start;
  overflow: hidden;
}

.section-number {
  position: absolute;
  top: 130px;
  right: 5vw;
  color: var(--muted);
  font: .65rem var(--mono);
  letter-spacing: .12em;
  opacity: .65;
}

.intro-content {
  position: relative;
  z-index: 3;
  width: min(660px, 100%);
  margin: 0 auto;
  text-align: center;
}

.profile-wrap {
  position: relative;
  width: 132px;
  margin: 0 auto 28px;
}

.profile-image {
  position: relative;
  z-index: 2;
  display: block;
  width: 110px;
  height: 110px;
  margin: auto;
  border: 1px solid rgba(220, 255, 228, .55);
  border-radius: 50%;
  object-fit: cover;
  background: #123b35;
  box-shadow: 0 0 35px rgba(117, 245, 193, .22);
}

.profile-ring {
  position: absolute;
  inset: -8px;
  border: 1px solid var(--green);
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 8s linear infinite;
}

.profile-status {
  display: block;
  margin-top: 15px;
  color: var(--green);
  font: .58rem var(--mono);
  letter-spacing: .09em;
  text-transform: uppercase;
}

.eyebrow,
.panel-label {
  color: var(--green);
  font: .65rem var(--mono);
  letter-spacing: .16em;
  text-transform: uppercase;
}

.hero-title {
  margin: 16px 0 0;
  color: var(--paper);
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 500;
  letter-spacing: -.08em;
  line-height: .85;
  text-shadow: 0 0 35px rgba(133, 244, 203, .13);
}

.title-c {
  position: relative;
  display: inline-block;
  color: var(--cyan);
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 400;
}

.signature-firefly {
  position: absolute;
  top: -16%;
  right: -10%;
  width: 32px;
  height: 30px;
  animation: flyToC 5s var(--ease) .8s both, fireflyHover 4s ease-in-out 5.8s infinite alternate;
}

.fly-body {
  position: absolute;
  z-index: 2;
  top: 12px;
  left: 13px;
  width: 7px;
  height: 15px;
  border-radius: 50%;
  background: #d8ff9c;
  box-shadow: 0 0 12px 5px rgba(168, 223, 99, .8);
}

.fly-wing {
  position: absolute;
  top: 8px;
  width: 13px;
  height: 8px;
  border: 1px solid rgba(180,255,214,.8);
  border-radius: 100% 0;
  animation: wingBeat .25s ease-in-out infinite alternate;
}

.wing-left { left: 0; transform: rotate(-25deg); }
.wing-right { right: 0; transform: rotate(115deg); }

.fly-trail {
  position: absolute;
  top: 18px;
  left: -25px;
  width: 28px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--green));
  transform: rotate(-20deg);
  opacity: .55;
}

.hero-name {
  margin: 20px 0 0;
  color: var(--green);
  font: 1rem var(--mono);
  letter-spacing: .28em;
  text-transform: uppercase;
}

.hero-description {
  max-width: 430px;
  margin: 26px auto 0;
  color: var(--muted);
  font-size: .95rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid var(--line);
  font-size: .7rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  transition: transform .3s ease, background .3s ease, border-color .3s ease;
}

.button:hover {
  transform: translateY(-3px);
  border-color: var(--green);
}

.button-primary {
  color: var(--ink);
  background: var(--green);
}

.button-ghost {
  color: var(--paper);
  background: rgba(255,255,255,.03);
}

.hero-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
  color: var(--muted);
  font: .58rem var(--mono);
  letter-spacing: .08em;
  text-transform: uppercase;
}

.hero-meta i {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 10px var(--green);
}

.night-workspace {
  position: absolute;
  right: 8vw;
  bottom: 3vh;
  width: 260px;
  height: 220px;
  opacity: .85;
  transition: opacity .8s ease, transform .8s ease;
}

.desk {
  position: absolute;
  right: 0;
  bottom: 24px;
  width: 220px;
  height: 12px;
  border-radius: 50%;
  background: #2c1810;
  box-shadow: 0 10px 0 #1d120c, 0 0 35px rgba(255, 174, 93, .16);
}

.laptop {
  position: absolute;
  right: 44px;
  bottom: 35px;
  width: 90px;
  height: 55px;
  padding: 5px;
  border: 2px solid #203d3a;
  border-radius: 6px;
  background: #06100f;
  transform: skew(-5deg);
}

.laptop-screen {
  height: 100%;
  padding: 7px;
  color: #88d7bc;
  font: 6px/1.5 var(--mono);
  box-shadow: inset 0 0 15px rgba(80, 232, 182, .17);
}

.laptop-screen span { color: #c5dc75; }
.laptop-screen b { color: #f6c87e; }

.coffee {
  position: absolute;
  right: 13px;
  bottom: 37px;
}

.cup {
  width: 24px;
  height: 19px;
  border: 2px solid #9e805d;
  border-radius: 2px 2px 8px 8px;
  background: #352015;
}

.steam {
  position: absolute;
  bottom: 23px;
  width: 10px;
  height: 26px;
  border-left: 1px solid #b5cdb8;
  border-radius: 50%;
  animation: steam 2.5s ease-in-out infinite alternate;
}

.steam-one { left: 5px; }
.steam-two { left: 14px; animation-delay: -.7s; }

.character {
  position: absolute;
  object-fit: contain;
  pointer-events: none;
}

.character-night {
  right: 88px;
  bottom: 31px;
  width: 78px;
  height: 120px;
}

.scroll-cue {
  position: absolute;
  bottom: 32px;
  left: 5vw;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font: .6rem var(--mono);
  letter-spacing: .1em;
  text-transform: uppercase;
}

.scroll-cue span {
  display: block;
  width: 34px;
  height: 1px;
  background: var(--green);
}

.section-heading {
  max-width: 520px;
}

.section-heading h2 {
  margin: 12px 0;
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 500;
  letter-spacing: -.08em;
  line-height: .9;
}

.section-heading h2 em {
  color: var(--cyan);
  font-family: Georgia, serif;
  font-weight: 400;
}

.section-heading p {
  margin: 0;
  color: var(--muted);
  font-size: .95rem;
}

.story-layout,
.skills-layout {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: clamp(35px, 8vw, 120px);
  align-items: center;
  width: min(1120px, 100%);
  margin: 40px auto 0;
}

.glass-panel {
  padding: 32px;
  border: 1px solid rgba(156, 226, 188, .18);
  background: var(--glass);
  box-shadow: inset 0 1px rgba(255,255,255,.05), 0 25px 80px rgba(0,0,0,.12);
  backdrop-filter: blur(16px);
}

.story-copy p,
.automation-panel p {
  color: var(--muted);
  font-size: .92rem;
  line-height: 1.8;
}

.editable-note {
  color: var(--cyan) !important;
  font-size: .72rem !important;
}

.signature {
  margin-top: 34px;
  color: var(--paper);
  font-family: cursive;
  font-size: 2.2rem;
  transform: rotate(-5deg);
}

.timeline {
  display: grid;
  gap: 20px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 18px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(156, 226, 188, .13);
}

.timeline-marker {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--green);
  border-radius: 50%;
  color: var(--green);
  font: .62rem var(--mono);
}

.timeline-item small {
  color: var(--green);
  font: .58rem var(--mono);
  letter-spacing: .08em;
}

.timeline-item h3 {
  margin: 7px 0;
  font-size: 1.05rem;
  font-weight: 500;
}

.timeline-item p {
  margin: 0;
  color: var(--muted);
  font-size: .8rem;
  line-height: 1.6;
}

.skill-cloud {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.skill-card {
  min-height: 130px;
  padding: 18px;
  border: 1px solid rgba(156,226,188,.15);
  background: rgba(5, 25, 24, .5);
  transition: transform .3s ease, border-color .3s ease, background .3s ease;
}

.skill-card:hover {
  transform: translateY(-7px);
  border-color: var(--green);
  background: rgba(27, 62, 49, .6);
}

.skill-icon {
  display: block;
  margin-bottom: 22px;
  color: var(--cyan);
  font: 1.15rem var(--mono);
}

.skill-card h3 {
  margin: 0 0 5px;
  font-size: .8rem;
  font-weight: 500;
}

.skill-card p {
  margin: 0;
  color: var(--muted);
  font: .62rem var(--mono);
}

.automation-panel h3 {
  margin: 26px 0 12px;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: -.07em;
  line-height: .95;
}

.automation-panel h3 em {
  color: var(--green);
  font-family: Georgia, serif;
}

.flow-map {
  display: grid;
  gap: 7px;
  margin: 28px 0;
}

.flow-node {
  padding: 10px 13px;
  border: 1px solid rgba(140,231,207,.3);
  color: var(--cyan);
  font: .6rem var(--mono);
  letter-spacing: .1em;
}

.flow-line {
  width: 1px;
  height: 14px;
  margin-left: 14px;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
}

.result-node {
  color: var(--green);
  border-color: rgba(168,223,99,.5);
}

.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.interest-tags span {
  padding: 7px 9px;
  border: 1px solid rgba(168,223,99,.2);
  color: var(--muted);
  font: .58rem var(--mono);
}

.contact-layout {
  width: min(900px, 100%);
  margin: auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 42px;
}

.contact-card {
  display: grid;
  grid-template-columns: 42px 1fr 20px;
  gap: 14px;
  align-items: center;
  min-height: 82px;
  padding: 16px;
  border: 1px solid rgba(156,226,188,.17);
  background: rgba(5, 25, 24, .58);
  transition: transform .3s ease, border-color .3s ease, background .3s ease;
}

.contact-card:hover {
  transform: translateX(7px);
  border-color: var(--green);
  background: rgba(27, 62, 49, .6);
}

.contact-icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--green);
  border-radius: 50%;
  color: var(--green);
  font: 1rem var(--mono);
}

.contact-card b,
.contact-card small {
  display: block;
}

.contact-card b {
  font-size: .85rem;
  font-weight: 500;
}

.contact-card small {
  margin-top: 5px;
  color: var(--muted);
  font-size: .68rem;
}

.contact-card strong {
  color: var(--green);
}

.contact-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  color: var(--muted);
  font: .58rem var(--mono);
  letter-spacing: .1em;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .8s var(--ease), transform .8s var(--ease);
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.intro-section .reveal:nth-child(2) { transition-delay: .15s; }
.intro-section .reveal:nth-child(3) { transition-delay: .25s; }
.intro-section .reveal:nth-child(4) { transition-delay: .35s; }
.intro-section .reveal:nth-child(5) { transition-delay: .45s; }
.intro-section .reveal:nth-child(6) { transition-delay: .55s; }

body.day-mode .sky {
  background: linear-gradient(180deg, #72bad0 0%, #aedbd0 46%, #6aab72 100%);
  filter: saturate(1.15) brightness(1.12);
}

body.day-mode .moon {
  opacity: 0;
  transform: scale(.5);
}

body.day-mode .sun {
  opacity: 1;
  transform: scale(1);
}

body.day-mode .stars,
body.day-mode .mist {
  opacity: 0;
}

body.day-mode .cloud,
body.day-mode .birds {
  opacity: 1;
}

body.day-mode .forest-back { opacity: .75; }
body.day-mode .forest-mid { opacity: .9; }
body.day-mode .forest-front { opacity: .7; }
body.day-mode .toggle-knob { transform: translateX(29px); }
body.day-mode .night-workspace { opacity: 0; transform: translateY(20px); }

@keyframes forestSway {
  from { transform: scaleX(1) skewX(0deg); }
  to { transform: scaleX(1.015) skewX(1deg); }
}

@keyframes mistDrift {
  from { transform: translateX(-3%); }
  to { transform: translateX(8%); }
}

@keyframes cloudMove {
  to { transform: translateX(145vw); }
}

@keyframes birdMove {
  to { transform: translate(145vw, -50px); }
}

@keyframes fireflyFloat {
  0% { transform: translate(0, 0) scale(.6); opacity: .25; }
  50% { opacity: 1; }
  100% { transform: translate(var(--x), var(--y)) scale(1.2); opacity: .35; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes flyToC {
  from { opacity: 0; transform: translate(120px, 80px) scale(.3); }
  to { opacity: 1; transform: translate(0) scale(1); }
}

@keyframes fireflyHover {
  from { transform: translate(0, 0) rotate(-5deg); }
  to { transform: translate(7px, -11px) rotate(8deg); }
}

@keyframes wingBeat {
  to { transform: scaleY(.45) rotate(-25deg); }
}

@keyframes steam {
  to { transform: translate(7px, -5px) rotate(8deg); opacity: .2; }
}

@media (max-width: 800px) {
  .desktop-nav { display: none; }

  .menu-toggle {
    display: grid;
    gap: 6px;
    width: 42px;
    height: 38px;
    padding: 10px;
    border: 1px solid var(--line);
    background: rgba(5,25,24,.7);
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    height: 1px;
    background: var(--paper);
  }

  .mobile-nav {
    position: fixed;
    z-index: 19;
    top: 76px;
    right: 5vw;
    display: grid;
    gap: 18px;
    min-width: 145px;
    padding: 20px;
    border: 1px solid var(--line);
    background: rgba(5,25,24,.94);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: opacity .3s ease, transform .3s ease;
  }

  .mobile-nav.open {
    opacity: 1;
    pointer-events: auto;
    transform: none;
  }

  .section {
    display: block;
    padding: 125px 6vw 70px;
  }

  .section-number {
    top: 98px;
    right: 6vw;
  }

  .theme-toggle {
    top: 92px;
    left: 6vw;
  }

  .intro-content {
    padding-top: 15px;
  }

  .hero-title {
    font-size: clamp(3.3rem, 16vw, 6rem);
  }

  .hero-meta {
    margin-top: 35px;
  }

  .night-workspace {
    right: 50%;
    bottom: 0;
    transform: translateX(50%) scale(.78);
    transform-origin: bottom center;
  }

  body.day-mode .night-workspace {
    transform: translate(50%, 20px) scale(.78);
  }

  .scroll-cue {
    display: none;
  }

  .story-layout,
  .skills-layout {
    display: block;
    margin-top: 35px;
  }

  .story-copy {
    margin-bottom: 30px;
  }

  .skill-cloud {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 28px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    margin-top: 34px;
  }

  .contact-footer {
    display: grid;
    gap: 12px;
    margin-top: 45px;
  }
}

@media (max-width: 450px) {
  .site-header {
    padding: 22px 6vw;
  }

  .profile-wrap {
    transform: scale(.85);
    margin-bottom: 12px;
  }

  .hero-description {
    max-width: 310px;
    font-size: .85rem;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
    width: min(260px, 100%);
    margin-right: auto;
    margin-left: auto;
  }

  .button {
    justify-content: center;
  }

  .hero-meta {
    font-size: .5rem;
  }

  .section-heading h2 {
    font-size: 3.5rem;
  }

  .glass-panel {
    padding: 23px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}

@media (hover: none) {
  .cursor-glow {
    display: none;
  }
}
