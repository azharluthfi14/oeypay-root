import { ChangeEvent, useState } from "react";
import { FormCreditCardOne } from "./components/FormCreditCardOne";

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isCardValid, setIsCardValid] = useState(true);
  const [cardType, setCardType] = useState<string | null>(null);

  const validateCardNumber = (inputText: string) => {
    const sanitizedInput = inputText.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitizedInput.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedInput.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    setIsCardValid(sum % 10 === 0);
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputNumber = event.target.value.replace(/\D/g, "");
    let formatedNumber = "";

    for (let i = 0; i < inputNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatedNumber += " ";
      }
      formatedNumber += inputNumber[i];
    }
    setCardNumber(formatedNumber);
    validateCardNumber(formatedNumber);
    detectCardType(formatedNumber);
  };

  const handleexpDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputDate = event.target.value.replace(/\D/g, "");
    let formatedDate = "";

    if (inputDate.length > 4) {
      inputDate = inputDate.substring(0, 4);
    }

    for (let i = 0; i < inputDate.length; i++) {
      if (i === 2 && inputDate.length > 2) {
        formatedDate += "/";
      }
      if (i === 0 && parseInt(inputDate[i], 10) > 1) {
        formatedDate += "0" + inputDate[i];
      } else if (
        i === 0 &&
        inputDate.length === 2 &&
        parseInt(inputDate, 10) > 12
      ) {
        formatedDate = "01/" + inputDate.substring(2);
      } else {
        formatedDate += inputDate[i];
      }
    }

    setExpDate(formatedDate);
  };

  const handleCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputNumber = event.target.value.replace(/\D/g, "");
    if (inputNumber.length > 4) {
      // Limit the input to 4 characters
      inputNumber = inputNumber.substring(0, 4);
    }
    setCvc(inputNumber);
  };

  const detectCardType = (inputText: string) => {
    const sanitizedInput = inputText.replace(/\D/g, "");

    if (/^4/.test(sanitizedInput)) {
      setCardType("Visa");
    } else if (/^5/.test(sanitizedInput)) {
      setCardType("MasterCard");
    } else {
      setCardType(null);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="space-y-6">
        <h4>{cardNumber.replace(/\s/g, "")}</h4>
        <h4>{expDate.replace(/\s/g, "")}</h4>
        {cardType && (
          <p className="text-gray-600 text-sm mt-2">
            Card Type: <strong>{cardType}</strong>
          </p>
        )}

        <FormCreditCardOne
          cardNumber={cardNumber}
          cvc={cvc}
          expDate={expDate}
          handleCVCChange={handleCVCChange}
          handleCardNumberChange={handleCardNumberChange}
          handleexpDateChange={handleexpDateChange}
          isCardValid={isCardValid}
        />
      </div>
    </div>
  );
}
