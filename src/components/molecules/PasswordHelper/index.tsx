interface PasswordRequirementProps {
  isValid: boolean;
  text: string;
}

interface PasswordRequirementsListProps {
  requirements: {
    condition: boolean;
    text: string;
  }[];
}

const PasswordRequirement = ({ isValid, text }: PasswordRequirementProps) => {
  return (
    <li
      className={`flex items-center gap-1.5 transition-all duration-300 ease-in-out ${
        isValid ? 'text-green' : 'text-neutral-500'
      }`}>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`h-5 w-5 ${isValid && 'text-green'}`}>
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-sm">{text}</span>
    </li>
  );
};

export const PasswordHelper = ({
  requirements,
}: PasswordRequirementsListProps) => {
  return (
    <ul className="space-y-2">
      {requirements.map((requirement, index) => (
        <PasswordRequirement
          key={index}
          isValid={requirement.condition}
          text={requirement.text}
        />
      ))}
    </ul>
  );
};
