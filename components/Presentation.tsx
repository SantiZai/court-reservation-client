const Presentation = (props: { class?: string }) => {
  return (
    <section className={`${props.class} p-6 pb-10 md:pt-12 lg:pt-20 text-balance`}>
      <h1 className="text-6xl mb-4">Reserva tu cancha</h1>
      <p className="text-2xl">Navegá en tiempo real por las canchas disponibles en tu zona.</p>-
    </section>
  );
};

export default Presentation;
