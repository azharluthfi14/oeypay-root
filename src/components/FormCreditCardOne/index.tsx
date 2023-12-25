import type { ChangeEvent } from "react";

interface FormCreditCardOneProps {
  cardNumber: string;
  isCardValid: boolean;
  cvc: string;
  expDate: string;
  handleCardNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleexpDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCVCChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormCreditCardOne = ({
  cardNumber,
  isCardValid,
  expDate,
  cvc,
  handleexpDateChange,
  handleCardNumberChange,
  handleCVCChange,
}: FormCreditCardOneProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <label htmlFor="cardNumber" className="block font-medium">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={cardNumber}
          maxLength={19}
          onChange={handleCardNumberChange}
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          className={`mt-1 p-2 border rounded-md w-full ${
            isCardValid ? "border-gray-300" : "border-red-500"
          }`}
        />
      </div>
      <div className="space-y-3">
        <label htmlFor="expDate" className="block font-medium">
          Exp
        </label>
        <input
          type="text"
          name="expDate"
          onChange={handleexpDateChange}
          value={expDate}
          id="expDate"
          placeholder="MM/YY"
        />
      </div>
      <div className="space-y-3">
        <label htmlFor="cvc" className="block font-medium">
          CVC
        </label>
        <input
          type="text"
          name="cvc"
          onChange={handleCVCChange}
          value={cvc}
          id="cvc"
          placeholder="CVC"
        />
      </div>
    </div>
  );
};
