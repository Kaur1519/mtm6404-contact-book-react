import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../db";
import { addDoc, updateDoc, doc, getDoc, collection } from "firebase/firestore";

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        const snap = await getDoc(doc(db, "contacts", id));
        if (snap.exists()) setForm(snap.data());
      };
      fetchContact();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateDoc(doc(db, "contacts", id), form);
      navigate(`/contacts/${id}`);
    } else {
      const newDoc = await addDoc(collection(db, "contacts"), form);
      navigate(`/contacts/${newDoc.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <input
        placeholder="Last Name"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button type="submit">{id ? "Update" : "Add"}</button>
    </form>
  );
}
