interface Props {
  children: React.ReactNode;
  class: string;
}

const BentoItem = (props: Props) => {
  return (
    <article
      className={`${props.class} border border-black/10 shadow-inner shadow-white/10`}
    >
      {props.children}
    </article>
  );
};
export default BentoItem;
