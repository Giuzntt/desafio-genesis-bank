import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setDeleteBook } from "../../store/reducers/bookSlice";
import { useNavigate } from "react-router";

interface Card {
  id?: number;
  title: string;
  description: string;
  image: string;
  author?: string;
}

const Card = ({
  id,
  title = "",
  description = "",
  image = "teste.jpg",
  author = "",
}: Card) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`/${image}`} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {author}
        </span>
      </div>
      {/* create divider */}
      <div className="border-t-2 border-gray-200"></div>
      <div
        className="px-6 pt-4 pb-2 flex justify-end
      "
      >
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            navigate(`/details/${id}`, {
              state: {
                values: {
                  title,
                  description,
                  author,
                  image,
                },
              },
            })
          }
        >
          Ver detalhes
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => dispatch(setDeleteBook(id))}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Card;
