import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import GenModal from "../components/GenModal";

function Register() {
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState(""); // To set the text for the modal

  // Use useCallback to memoize the handleClose function
  const handleClose = () => {setShow(false);};

  const handleShow = (text: string) => {
    setModalText(text); // Set the text for the modal
    setShow(true);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value;
    const password = (event.target as HTMLFormElement).password.value;

    try {
      const response = await axios.get("http://localhost:8000/getFirebase");
      if (response.data) {
        const firebaseApp = initializeApp(response.data);
        const auth = getAuth(firebaseApp);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User created successfully", user);
      }
    } catch (error: any) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        handleShow("email in use");
      } else if (errorCode === "auth/weak-password") {
        handleShow("Bitch password");
      } else {
        handleShow("Something else is going on here !");
      }
    }
  };

  return (
    <>
      <GenModal Text={modalText} show={show} onHide={handleClose} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Control type="email" placeholder="example@email.com" name="email" required />
        <br />
        <br />
        <Form.Control type="password" placeholder="password" name="password" required />
        <br />
        <br />
        <button type="submit">Create my account</button>
      </Form>
    </>
  );
}

export default Register;
