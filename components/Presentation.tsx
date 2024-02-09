const Presentation = (props: { class?: string }) => {
  return (
    <section className={`${props.class} pb-10 md:pt-12 lg:pt-20 text-balance`}>
      <h1 className="text-6xl mb-4">Reserva tu cancha</h1>
      <h2 className="text-2xl">Navegá en tiempo real por las canchas disponibles en tu zona.</h2>
    </section>
  );
};

export default Presentation;
