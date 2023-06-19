import { createSlice } from "@reduxjs/toolkit";

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
}

interface BookState {
  books: Book[];
  loading: boolean;
  error: null | string;
  openModal: boolean;
  initialData?: {
    title: string;
    description: string;
    author: string;
  };
}

const initialState: BookState = {
  books: [
    {
      id: 1,
      title: "The Lord of the Rings",
      description:
        "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      author: "J. R. R. Tolkien",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/0/0c/The_Lord_of_the_Rings_logo.png",
    },
    {
      id: 2,
      title: "The Hobbit",
      description:
        "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
      author: "J. R. R. Tolkien",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/7/72/The_Hobbit_Cover.JPG",
    },
  ],
  loading: false,
  error: null,
  openModal: false,

  initialData: {
    title: "",
    description: "",
    author: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setOpenedModal: (state, action) => {
      state.openModal = action.payload;
    },

    setAddBook: (state, action) => {
      state.books.push(action.payload);
    },

    setDeleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { setOpenedModal, setAddBook, setDeleteBook } = bookSlice.actions;
