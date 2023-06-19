import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Book, setOpenedModal } from "../../store/reducers/bookSlice";
import { AppDispatch } from "../../store/store";
import { ModalHome } from "./components/Modal";

interface StateBooks {
  book: {
    books: Book[];
  };
}

export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books } = useSelector((state: StateBooks) => state.book);

  function isOpenModal() {
    dispatch(setOpenedModal(true));
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div
        className=" flex justify-between items-center w-full px-10 py-5
      "
      >
        <h1
          className="text-4xl font-bold text-orange-500 text-start mb-5
      "
        >
          Minha Lista de Livros
        </h1>

        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={isOpenModal}
        >
          Adicionar Livro
        </button>
      </div>

      <div
        className="grid grid-cols-3 gap-4 w-full px-10
      "
      >
        {books.map((item: Book) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            author={item.author}
            image={"teste.jpg"}
          />
        ))}
      </div>
      <ModalHome />
    </main>
  );
};
