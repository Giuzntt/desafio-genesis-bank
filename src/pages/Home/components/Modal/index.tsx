import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { customStyles } from "./customStylesModal";
import { AppDispatch } from "../../../../store/store";
import {
  setAddBook,
  setOpenedModal,
} from "../../../../store/reducers/bookSlice";
import { Formik } from "formik";
import * as Yup from "yup";
import { HiX } from "react-icons/hi";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  author: Yup.string().required("Campo obrigatório"),
});

interface BookState {
  book: {
    openModal: boolean;
    initialData: {
      title: string;
      description: string;
      author: string;
    };
  };
}

export function ModalHome() {
  const openModal = useSelector((state: BookState) => state.book.openModal);
  const initialData = useSelector((state: BookState) => state.book.initialData);

  const dispatch = useDispatch<AppDispatch>();

  function closeModal() {
    dispatch(setOpenedModal(false));
  }

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className=" flex justify-between items-center w-full px-10 py-5">
        <h2 className="text-2xl font-bold text-orange-500 text-start mb-5">
          Adicionar novo livro
        </h2>
        <button onClick={closeModal}>
          <HiX className="text-4xl font-bold text-orange-500 text-start mb-5" />
        </button>
      </div>

      <Formik
        initialValues={initialData}
        onSubmit={(values) => {
          dispatch(setOpenedModal(false));
          dispatch(
            setAddBook({
              id: Math.random().toString(36).substr(2, 9),
              ...values,
              image: "teste.jpg",
            })
          );
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <div
              className=" grid grid-row-3 gap-4 w-full px-10
            "
            >
              <label className="block text-md font-medium text-gray-700">
                Título
              </label>

              <input
                type="text"
                name="title"
                id="UserEmail"
                placeholder="Digite o título do livro"
                className="mt-1 w-full rounded-sm border-gray-200 shadow-sm sm:text-sm h-10 px-2
                "
                value={values.title}
                onChange={handleChange}
              />
              {errors.title && (
                <div className="text-red-500 text-xs">{errors.title}</div>
              )}

              <label className="block text-md  font-medium text-gray-700">
                Descrição
              </label>
              <input
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                id="UserEmail"
                placeholder="Digite a descrição do livro"
                className="mt-1 w-full rounded-sm border-gray-200 shadow-sm sm:text-sm h-10 px-2"
              />
              {errors.description && (
                <div
                  className=" text-red-500 text-xs
                "
                >
                  {errors.description}
                </div>
              )}

              <label className="block text-md  font-medium text-gray-700">
                Autor
              </label>
              <input
                type="text"
                name="author"
                value={values.author}
                onChange={handleChange}
                id="UserEmail"
                placeholder="Digite o autor do livro"
                className="mt-1 w-full rounded-sm border-gray-200 shadow-sm sm:text-sm h-10 px-2"
              />
              {errors.author && (
                <div
                  className="text-red-500 text-xs
                
                "
                >
                  {errors.author}
                </div>
              )}

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2  rounded px-10 w-full
                
              "
              >
                Adicionar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
}
