import axios from "axios";
import { useEffect, useState } from "react";
import { BookmarkForm } from "../components/form";
import { BookmarkList } from "../components/list";

// Note: API calls should be done here, 'axios' is already added as dependency

export const Bookmarks = () => {
  const [listBooks, setListBooks] = useState([]);
  const [form, setForm] = useState({ title: "", link: "" });

  const handleChange = (data) => {
    setForm({ 
      ...form,
      [data.name]: data.value,
    });
  };
  const handleClear = () => {
    setForm({ title: "", link: "" });
  };
  const handleLoadBooksmarks = async () => {
    await axios
      .get("http://localhost:3000/bookmarks/")
      .then((resp) => {
        setListBooks(resp.data);
        handleClear();
      })
      .catch(console.error());
  };

  const handleSaveBookmark = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/bookmarks/", form)
      .then((resp) => {
        handleLoadBooksmarks();
        alert("Se ha guardado correctamente: " + resp.data.title);
      })
      .catch(console.error());
  };

  useEffect(() => {
    handleLoadBooksmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BookmarkForm
        onHandleSave={handleSaveBookmark}
        onHandleChange={handleChange}
        form={form}
      />
      <BookmarkList data={listBooks} />
    </>
  );
};
