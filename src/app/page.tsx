export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#050505",
        color: "#d4af37",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "serif",
        textAlign: "center",
      }}
    >
      <img
        src="/capa.jpg"
        alt="Ogbe e os Omo"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(212,175,55,0.4)",
        }}
      />

      <h1
        style={{
          fontSize: "4rem",
          marginTop: "30px",
        }}
      >
        OGBE E OS OMO
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "900px",
          margin: "30px auto",
          lineHeight: "2",
          color: "#f5e6a8",
        }}
      >
        “Os traços sagrados representam o reconhecimento do Odù
        na encruzilhada entre Òrun e Ayé.
        São marcas ancestrais da consciência,
        do destino e da travessia espiritual entre o invisível
        e o visível.”
      </p>

      <div
        style={{
          marginTop: "40px",
          lineHeight: "2",
          fontSize: "1.2rem",
        }}
      >
        <p>Marco Rodrigues</p>
        <p>Áwọ Ifábúnmí Fátúmbí</p>
        <p>Àdíṣá Mákọnráwálẹ</p>
      </div>

      <div
        style={{
          marginTop: "50px",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        R$ 88,88
      </div>

      <a
        href="https://wa.me/5561998830914"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "40px",
          backgroundColor: "#d4af37",
          color: "#000",
          padding: "18px 35px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}
      >
        Comprar Agora
      </a>

      <div
        style={{
          marginTop: "70px",
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
