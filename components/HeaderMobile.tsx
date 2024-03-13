const HeaderMobile = (props: { children: React.ReactNode; class?: string }) => {
  return (
    <header className={`sm:hidden w-full py-4 border-b-2 ${props.class}`}>
      {props.children}
    </header>
  );
};

export default HeaderMobile;
