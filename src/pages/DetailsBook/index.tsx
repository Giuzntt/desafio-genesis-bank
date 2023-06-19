import { useLocation, useNavigate } from "react-router";
import { HiArrowNarrowLeft } from "react-icons/hi";

const DetailsBook = () => {
  const location = useLocation();
  const { values } = location.state;

  const navigate = useNavigate();

  return (
    <main className="flex flex-col justify-start items-center h-screen bg-gray-100 ">
      <div className=" flex justify-start gap-5 items-center w-full px-10 py-5 my-20">
        <button
          className="flex items-center justify-center   text-sm font-semibold text-gray-700 "
          onClick={() => navigate(-1)}
        >
          <HiArrowNarrowLeft className="text-4xl font-bold text-orange-600 text-start mb-5" />
        </button>
        <h1
          className="text-4xl font-bold text-orange-500 text-start mb-5
      "
        >
          Detalhes Sobre o Livro
        </h1>
      </div>
      <div className="grid grid-row-2 gap-4 w-full px-10">
        <h3 className="text-2xl font-bold text-orange-500 text-start mb-5">
          Título
        </h3>
        <p className="text-gray-700 text-base">{values.title}</p>
        <h3 className="text-2xl font-bold text-orange-500 text-start mb-5">
          Descrição
        </h3>
        <p className="text-gray-700 text-base">{values.description}</p>
        <h3 className="text-2xl font-bold text-orange-500 text-start mb-5">
          Autor
        </h3>
        <p className="text-gray-700 text-base">{values.author}</p>
      </div>
    </main>
  );
};

export default DetailsBook;
