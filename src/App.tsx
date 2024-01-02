import { ChangeEvent, useState } from "react";
import { number } from "card-validator";

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChangeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/\D/g, "");

    // Max 16 karakter (XXXX XXXX XXXX XXXX)
    inputValue = inputValue.slice(0, 16);

    // format XXXX XXXX XXXX XXXX
    if (inputValue.length > 4) {
      inputValue = inputValue.match(/.{1,4}/g)?.join(" ") || "";
    }
    setCardNumber(inputValue);

    const cardValidation = number(inputValue.replace(/\s+/g, ""));
    setIsValid(cardValidation.isValid);
  };

  const handleChangeExpDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    let formatedDate = "";

    // Menghapus karakter non-digit
    inputValue = inputValue.replace(/\D/g, "");

    // Memastikan input tidak lebih dari 6 karakter (MM/YYYY)
    inputValue = inputValue.slice(0, 6);

    // Menyesuaikan format MM/YYYY
    for (let i = 0; i < inputValue.length; i++) {
      if (i === 2 && inputValue.length > 2) {
        formatedDate += "/";
      }
      if (i === 0 && parseInt(inputValue[i], 10) > 1) {
        formatedDate += "0" + inputValue[i];
      } else if (
        i === 0 &&
        inputValue.length === 2 &&
        parseInt(inputValue, 10) > 12
      ) {
        formatedDate = "01/" + inputValue.substring(2);
      } else {
        formatedDate += inputValue[i];
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

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md mx-auto">
        <div className="space-y-2.5">
          <label htmlFor="creditCard">No Card</label>
          <div className="relative">
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                <path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
            <input
              type="text"
              id="creditCard"
              value={cardNumber}
              onChange={handleChangeCardNumber}
              className={`bg-gray-300 border-transparent ${
                isValid
                  ? "focus:border-gray-300 border-gray-300"
                  : "focus:border-red-500 border-red-500"
              }  text-gray-900 text-sm rounded focus:ring-0 block w-full  p-2.5`}
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
            <small>
              {" "}
              {!isValid && (
                <p className="text-red-500 text-xs mt-1">
                  Invalid credit card number
                </p>
              )}
            </small>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="space-y-2.5">
            <label htmlFor="exp">Exp Date</label>
            <input
              type="text"
              value={expDate}
              onChange={handleChangeExpDate}
              placeholder="MM/YYYY"
              className="bg-gray-300 border-transparent focus:border-gray-300 text-gray-900 text-sm rounded focus:ring-0 block w-full  p-2.5  "
            />
          </div>
          <div className="space-y-2.5">
            <label htmlFor="exp">CVA</label>
            <input
              type="text"
              value={cvc}
              onChange={handleCVCChange}
              placeholder="CVA"
              className="bg-gray-300 border-transparent focus:border-gray-300 text-gray-900 text-sm rounded focus:ring-0 block w-full  p-2.5  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
