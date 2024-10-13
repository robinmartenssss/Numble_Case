import "./Form.css";
import Input from "../Input/Input";

const Form = () => {
  return (
    <>
      <div className="form_container">
        <h1 className="form_title">
          <span className="form_oblique_text">Vul uw</span> gegevens aan
        </h1>

        <form>
          <div className="grid-container">
            <div className="flex form_double">
              <div>
                <label htmlFor="Dhr" className="container">
                  Dhr.
                  <input type="radio" id="Dhr" name="gender" value="male" />
                  <span className="form_radiobutton"></span>
                </label>
              </div>

              <div>
                <label htmlFor="Mevr" className="container">
                  Mevr.
                  <input type="radio" id="Mevr" name="gender" value="female" />
                  <span className="form_radiobutton"></span>
                </label>
              </div>
            </div>

            <div className="flex">
              <Input label="Voornaam" placeholder="Voornaam" />
            </div>

            <div className="flex">
              <Input label="Naam" placeholder="Naam" />
            </div>
            <div className="flex form_double">
              <Input label="Nummerplaat" placeholder="Nummerplaat" />
            </div>
            <div className="flex form_double">
              <Input label="Email" placeholder="Email" />
            </div>
            <div className="flex form_double">
              <Input label="Straat" placeholder="Straat" />
            </div>
            <div className="flex">
              <Input label="Nummer" placeholder="Nummer" />
            </div>
            <div className="flex">
              <Input alwaysShowCheck={true} label="Bus" placeholder="Bus" />
            </div>
            <div className="flex">
              <Input label="Stad" placeholder="Stad" />
            </div>
            <div className="flex">
              <Input label="Postcode" placeholder="Postcode" />
            </div>
            <div className="flex form_double">
              <Input label="Telefoon" placeholder="Telefoon" />
            </div>

            <div className="form_double">
              <label about="actions" className="container">
                Hou mij op de hoogte wanneer er interessante acties zijn bij Q
                team.
                <input type="checkbox" id="actions" name="actions" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="button_container">
            <button type="submit" className="button_submit form_double">
              Bevestigen
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
