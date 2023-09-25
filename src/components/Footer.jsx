function Footer() {
  return (
    <footer className=" bg-slate-600 p-10 font-mono w-full text-center text-xl">
      <ul className="flex m-auto items-center flex-col align-middle justify-center gap-5">
        <li>Pagina diseñada con ViteJS + React</li>
        <div className="flex items-center flex-col">
          <h1 className="">Realizado por:</h1>
          <div className="flex items-center flex-row gap-10 justify-evenly w-full">
            <li>Julian Mayola</li>
            <li>Elias Tello</li>
          </div>
        </div>
      </ul>
    </footer>
  );
}
export default Footer;
