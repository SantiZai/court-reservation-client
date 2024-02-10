const Presentation = (props: { class?: string }) => {
  return (
    <section className={`${props.class} md:pt-12 lg:pt-[14rem] lg:pb-[10rem] text-balance`}>
      <h1 className="w-1/2 text-6xl mb-4 font-semibold">Reserva tu cancha en el acto</h1>
      <h2 className="w-1/3 text-2xl">Navegá en tiempo real por las canchas disponibles en tu zona.</h2>
    </section>
  );
};

export default Presentation;
