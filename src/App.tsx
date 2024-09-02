import { ChangeEvent, FormEvent, useState } from "react";
import {
  DIVISOR,
  LUHN_ADJUSTMENT,
  MAX_DIGITS,
  MAX_INPUT_LENGTH,
  MAX_SIN_NUMBER,
  MULTIPLIER,
} from "./constants";
import AppButton from "./components/AppButton";
import AppInput from "./components/AppInput";
import AppLabel from "./components/AppLabel";
import AppForm from "./components/AppForm";
import AppHeader from "./components/AppHeader";
import Card from "./components/Card";

function App() {
  const [loading, setLoading] = useState(false);
  const [sin, setSin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * A function that validates whether the input string
   * is a valid Social Insurance Number (SIN) or not
   * @param sin The SIN in string format
   * @returns true if it's a valid SIN, otherwise false
   */
  const validateSin = (sin: string) => {
    // base cases
    if (!sin || sin.length !== MAX_DIGITS) return false;

    let sum = 0;
    for (let i = 0; i < sin.length; i++) {
      let digit = parseInt(sin[i]);

      // double the digits only in odd indices
      if (i % MULTIPLIER !== 0) {
        digit *= MULTIPLIER;

        // if doubled digit is greater than 9, adjust by subtracting 9
        if (digit > LUHN_ADJUSTMENT) {
          digit -= LUHN_ADJUSTMENT;
        }
      }
      sum += digit;
    }
    // if there's remainder, it's invalid
    return sum % DIVISOR === 0;
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // add a loading indicator for UX
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    validateSin(sin)
      ? setSuccessMessage("Success! SIN number is valid.")
      : setErrorMessage("Oh no! SIN number is not valid.");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // clear messages for new inputs
    setSuccessMessage("");
    setErrorMessage("");
    setSin(event.currentTarget.value);
  };

  return (
    <main className="container max-w-lg p-5 m-auto md:p-20">
      <section>
        <Card>
          <AppHeader
            title="SIN Validator"
            subTitle="Enter your SIN below to validate."
          />
          <AppForm
            action="#"
            id="sinValidatorForm"
            name="sinValidatorForm"
            onSubmit={handleFormSubmit}
            loading={loading}
            successMessage={successMessage}
            errorMessage={errorMessage}
          >
            <AppLabel
              htmlFor="sinInput"
              text="Social Insurance Number (SIN):"
            />
            <AppInput
              disabled={loading}
              onChange={handleInputChange}
              maxLength={MAX_INPUT_LENGTH}
              max={MAX_SIN_NUMBER}
              type="text"
              id="sinInput"
              name="sin"
              placeholder="Enter your 9-digit SIN"
              pattern="[0-9]{9}"
              title="SIN must be exactly 9 numeric digits."
            />
            <AppButton disabled={!sin} loading={loading} />
          </AppForm>
        </Card>
      </section>
    </main>
  );
}

export default App;
