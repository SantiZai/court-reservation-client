const HeaderMobile = (props: { children: React.ReactNode; class?: string }) => {
  return (
    <header className={`sm:hidden w-full ${props.class}`}>
      {props.children}
    </header>
  );
};

export default HeaderMobile;
