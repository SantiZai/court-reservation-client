const Presentation = (props: { class?: string }) => {
  return (
    <section className={`${props.class} text-balance`}>
      <h1 className="w-full text-6xl mb-4 font-semibold">Reserva tu cancha en el acto</h1>
      <h2 className="w-full text-2xl">Navegá en tiempo real por las canchas disponibles en tu zona.</h2>
    </section>
  );
};

export default Presentation;
