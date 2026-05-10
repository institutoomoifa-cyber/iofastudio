export default function Home() {
  return (
    <main
      style={{
        background: "#050505",
        color: "#d4af37",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        fontFamily: "serif",
      }}
    >
      <img
        src="/capa.jpg"
        alt="OGBE E OS OMO"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
        }}
      />

      <h1
        style={{
          fontSize: "60px",
          marginTop: "30px",
        }}
      >
        OGBE E OS OMO
      </h1>

      <p
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          lineHeight: "2",
          fontSize: "20px",
          color: "#f5e6a8",
        }}
      >
        Os traços sagrados representam o reconhecimento do Odù
        na encruzilhada entre Òrun e Ayé.
        São marcas ancestrais da consciência,
        do destino e da travessia espiritual entre o invisível
        e o visível.
      </p>

      <div style={{ lineHeight: "2", fontSize: "22px" }}>
        <p>Marco Rodrigues</p>
        <p>Áwọ Ifábúnmí Fátúmbí</p>
        <p>Àdíṣá Mákọnráwálẹ</p>
      </div>

      <h2 style={{ marginTop: "40px", fontSize: "40px" }}>
        R$ 88,88
      </h2>

      <a
        href="https://wa.me/5561998830914"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "18px 35px",
          background: "#d4af37",
          color: "#000",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Comprar Agora
      </a>

      <div
        style={{
          marginTop: "60px",
          opacity: 0.8,
          lineHeight: "2",
        }}
      >
        <p>Instituto Omo Ifá</p>
        <p>institutoomoifa@gmail.com</p>
        <p>WhatsApp: (61) 99883-0914</p>
        <p>WhatsApp: (62) 99314-2106</p>
      </div>
    </main>
  );
}
