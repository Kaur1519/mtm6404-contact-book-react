import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db";
import { Link } from "react-router-dom";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const snapshot = await getDocs(collection(db, "contacts"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => a.lastName.localeCompare(b.lastName));
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const filtered = contacts.filter(c =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(c => (
          <li key={c.id}>
            <Link to={`/contacts/${c.id}`}>
              {c.firstName} {c.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
