export const Nav = () => {
  return (
    <nav className="flex justify-center absolute top-5 left-0 right-0 z-10">
      <ul className="flex gap-5 text-zinc-400 ">
        <li className="transition duration-200 hover:text-white cursor-pointer">
          Accueil
        </li>
        <li className="transition duration-200 hover:text-white cursor-pointer">
          À propos de nous
        </li>
        <li className="transition duration-200 hover:text-white cursor-pointer">
          Services ou Produits
        </li>
        <li className="transition duration-200 hover:text-white cursor-pointer">
          Témoignages ou Avis clients
        </li>
        <li className="transition duration-200 hover:text-white cursor-pointer">
          Blog ou Dernières actualités
        </li>
        <li className="transition duration-200 hover:text-white cursor-pointer">
          Contact
        </li>
      </ul>
      {/* <Button>Connecxion</Button> */}
    </nav>
  );
};
