import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ContactList from "./pages/ContactList";
import ContactDetails from "./pages/ContactDetails";
import ContactForm from "./pages/ContactForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ContactList />} />
        <Route path="contacts/:id" element={<ContactDetails />} />
        <Route path="add" element={<ContactForm />} />
        <Route path="edit/:id" element={<ContactForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
