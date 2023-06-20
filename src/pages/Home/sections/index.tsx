const BannerSection = () => {
  return (
    <section className="bg-black bg-opacity-80 bg-cover bg-no-repeat mt-8 h-screen w-full">
      <div className="flex flex-col justify-center items-start h-full w-full max-w-6xl px-4 py-10 my-10">
        <h1 className="text-4xl font-semibold px-10 text-orange-500">
          Já viu a importancia de ler um
          <span className="text-white font-bold ml-3">Livro</span>?
        </h1>

        <p className="text-white text-xl mt-4 text-justify w-1/2 font-semibold px-10">
          A leitura é uma das melhores formas de adquirir conhecimento, e com o
          GenesisBank você pode adquirir o seu livro favorito
        </p>
        <p className="text-white text-xl mt-4 text-justify w-1/2 font-semibold px-10">
          E ainda ganhar pontos para trocar por outros livros.
        </p>
        <span className="text-white text-xl mt-4 text-justify w-1/2 font-semibold px-10">
          <strong>GenesisBank</strong> o banco que te ajuda a ler mais. 📚
        </span>
      </div>
    </section>
  );
};

export default BannerSection;
