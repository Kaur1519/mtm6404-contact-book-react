import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../db";
import { useEffect, useState } from "react";

export default function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const ref = doc(db, "contacts", id);
      const snap = await getDoc(ref);
      if (snap.exists()) setContact({ id: snap.id, ...snap.data() });
    };
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "contacts", id));
    navigate("/");
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Email: {contact.email}</p>
      {contact.phone && <p>Phone: {contact.phone}</p>}
      <Link to={`/edit/${id}`}>Edit</Link> |{" "}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
