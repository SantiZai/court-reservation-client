const HeaderWeb = (props: { children: React.ReactNode, class?: string }) => {
  return (
    <header className={`hidden sm:block h-20 w-full ${props.class} bg-red-500`}>
      {props.children}
    </header>
  );
};

export default HeaderWeb;
