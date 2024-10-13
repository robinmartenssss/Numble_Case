import "./Form.css";
import Input from "../Input/Input";
import { useState } from "react";
import useFormHandler from "../../Hooks/useFormHandler";
import Popup from "../Popup/Popup";

const Form = () => {
  const [gender, setGender] = useState("male");
  const [isSubscribed, setSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBevestiging = () => {
    setShowPopup(true);
  };

  const initialFormState = {
    firstName: "",
    lastName: "",
    numberPlate: "",
    email: "",
    street: "",
    number: "",
    bus: "",
    city: "",
    postcode: "",
    phone: "",
  };

  const { formState, error, handleChange, formValid, setError, setFormState } =
    useFormHandler(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    const newError = {
      firstName: !formState.firstName,
      lastName: !formState.lastName,
      numberPlate: !formState.numberPlate,
      email: !formState.email,
      street: !formState.street,
      number: !formState.number,
      city: !formState.city,
      postcode: formState.postcode.length !== 4,
      phone: formState.phone.length !== 10,
    };

    for (let key in newError) {
      if (newError[key]) {
        valid = false;
      }
    }

    setError(newError);

    if (!valid || !formValid) {
      return;
    }

    const formData = {
      gender,
      ...formState,
      subscription: isSubscribed ? "yes" : "no",
    };

    try {
      const response = await fetch("http://localhost:5244/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        resetForm();
      } else {
        alert("Er is een fout opgetreden bij het versturen van het formulier.");
      }
    } catch (error) {
      alert("Netwerkfout: kan geen verbinding maken met de server.");
      console.error("Error:", error);
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setError({
        firstName: false,
        lastName: false,
        numberPlate: false,
        email: false,
        street: false,
        number: false,
        city: false,
        postcode: false,
        phone: false,
      });

      setFormState(initialFormState);
      setSubscribed(false);
      setGender("male");
    }, 3000);
  };

  return (
    <>
      <div className="form_container">
        <h1 className="form_title">
          <span className="form_oblique_text">Vul uw</span> gegevens aan
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="flex form_double">
              <div>
                <label htmlFor="Dhr" className="container">
                  Dhr.
                  <input
                    type="radio"
                    id="Dhr"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <span className="form_radiobutton"></span>
                </label>
              </div>

              <div>
                <label htmlFor="Mevr" className="container">
                  Mevr.
                  <input
                    type="radio"
                    id="Mevr"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <span className="form_radiobutton"></span>
                </label>
              </div>
            </div>

            <div className="flex">
              <Input
                error={error.firstName}
                value={formState.firstName}
                label="Voornaam"
                onChange={(e) => handleChange(e, "firstName")}
                placeholder="Voornaam"
              />
            </div>

            <div className="flex">
              <Input
                error={error.lastName}
                value={formState.lastName}
                label="Naam"
                onChange={(e) => handleChange(e, "lastName")}
                placeholder="Naam"
              />
            </div>
            <div className="flex form_double">
              <Input
                error={error.numberPlate}
                value={formState.numberPlate}
                label="Nummerplaat"
                onChange={(e) => handleChange(e, "numberPlate")}
                placeholder="Nummerplaat"
              />
            </div>
            <div className="flex form_double">
              <Input
                error={error.email}
                value={formState.email}
                label="Email"
                onChange={(e) => handleChange(e, "email")}
                placeholder="Email"
              />
            </div>
            <div className="flex form_double">
              <Input
                error={error.street}
                value={formState.street}
                label="Straat"
                onChange={(e) => handleChange(e, "street")}
                placeholder="Straat"
              />
            </div>
            <div className="flex">
              <Input
                error={error.number}
                value={formState.number}
                label="Nummer"
                onChange={(e) => handleChange(e, "number")}
                placeholder="Nummer"
              />
            </div>
            <div className="flex">
              <Input
                value={formState.bus}
                alwaysShowCheck={true}
                label="Bus"
                onChange={(e) => handleChange(e, "bus")}
                placeholder={"Bus"}
                alwaysValid={true}
              />
            </div>
            <div className="flex">
              <Input
                error={error.city}
                value={formState.city}
                label="Stad"
                onChange={(e) => handleChange(e, "city")}
                placeholder={"Stad"}
              />
            </div>
            <div className="flex">
              <Input
                error={error.postcode}
                value={formState.postcode}
                label="Postcode"
                onChange={(e) => handleChange(e, "postcode")}
                placeholder={"Postcode"}
                minLength={4}
              />
            </div>
            <div className="flex form_double">
              <Input
                error={error.phone}
                value={formState.phone}
                label="Telefoon"
                onChange={(e) => handleChange(e, "phone")}
                placeholder={"Telefoon"}
                minLength={10}
              />
            </div>

            <div className="form_double">
              <label about="actions" className="container">
                Hou mij op de hoogte wanneer er interessante acties zijn bij Q
                team.
                <input
                  type="checkbox"
                  id="actions"
                  name="actions"
                  checked={isSubscribed}
                  onChange={(e) => {
                    setSubscribed(e.target.checked ? true : false);
                  }}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="button_container">
            <button
              type="submit"
              className="button_submit form_double"
              onClick={handleBevestiging}
            >
              Bevestigen
            </button>
          </div>
        </form>

        {showPopup && formValid && (
          <Popup
            message="Thank you for submitting your details. We will get back to you soon!"
            onClose={() => setShowPopup(false)} // Close popup handler
          />
        )}
      </div>
    </>
  );
};

export default Form;
