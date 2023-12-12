import React, { useEffect, useRef, useState } from 'react';

import { Listbox } from '@headlessui/react';

interface ListBoxItem {
  value: string;
  label: string;
}

interface ListBoxProps {
  items: ListBoxItem[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const ListBoxComponent: React.FC<ListBoxProps> = ({
  items,
  selectedValue,
  onChange,
}) => {
  const [isDropdownAbove, setIsDropdownAbove] = useState(false);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setTriggerRect(rect);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (triggerRect) {
      const windowHeight = window.innerHeight;
      const dropdownHeight = 200; // Adjust this value as needed

      setIsDropdownAbove(triggerRect.bottom + dropdownHeight > windowHeight);
    }
  }, [triggerRect]);

  console.log('isDropdownAbove', isDropdownAbove);

  return (
    <Listbox value={selectedValue} onChange={value => onChange(value as string)}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button ref={triggerRef} className="border px-4 py-2">
            {items.find(item => item.value === selectedValue)?.label || 'Select an item'}
          </Listbox.Button>

          {open && (
            <Listbox.Options
              className={`absolute w-full bg-rose-500 ${
                isDropdownAbove ? 'bottom-10' : '  top-10 w-full'
              }`}>
              {items.map(item => (
                <Listbox.Option key={item.value} value={item.value}>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected ? 'bg-blue-500 text-white' : 'text-black'
                      } cursor-pointer px-4 py-2`}>
                      {item.label}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </div>
      )}
    </Listbox>
  );
};
