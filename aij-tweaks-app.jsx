const { useEffect } = React;

function TweaksApp() {
  const [tweaks, setTweaks] = useTweaks(window.__TWEAK_DEFAULTS);
  useEffect(() => { window.__applyTweaks && window.__applyTweaks(tweaks); }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks · AIJ Tucumán">
      <TweakSection title="Color">
        <TweakRadio
          label="Acento"
          value={tweaks.accent}
          onChange={(v) => setTweaks({ accent: v })}
          options={[
            { value: "terracota", label: "Terracota (default)" },
            { value: "bosque", label: "Bosque" },
            { value: "tinta", label: "Tinta azul" },
            { value: "ocre", label: "Ocre" }
          ]}
        />
        <TweakRadio
          label="Modo"
          value={tweaks.mode}
          onChange={(v) => setTweaks({ mode: v })}
          options={[
            { value: "claro", label: "Claro" },
            { value: "oscuro", label: "Oscuro" }
          ]}
        />
      </TweakSection>
      <TweakSection title="Tipografía & ritmo">
        <TweakRadio
          label="Titulares"
          value={tweaks.headingStyle}
          onChange={(v) => setTweaks({ headingStyle: v })}
          options={[
            { value: "serif", label: "Serif editorial" },
            { value: "sans", label: "Sans moderno" }
          ]}
        />
        <TweakRadio
          label="Densidad"
          value={tweaks.density}
          onChange={(v) => setTweaks({ density: v })}
          options={[
            { value: "relajado", label: "Relajado" },
            { value: "compacto", label: "Compacto" }
          ]}
        />
      </TweakSection>
      <TweakSection title="Contenido">
        <TweakToggle
          label="Mostrar nota de oficinas asociadas"
          value={tweaks.showOficinaNote}
          onChange={(v) => setTweaks({ showOficinaNote: v })}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
