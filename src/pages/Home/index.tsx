import { useRef, useState } from 'react';

import type { GeeTestRef } from 'react-geetest-v4';
import GeeTest from 'react-geetest-v4';

import { Input, ListBoxComponent } from '@/components';

export const HomePage = () => {
  const captchaRef = useRef<GeeTestRef | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>(''); // Inisialisasi nilai default

  const items = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleListBoxChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <section data-testid="title-homepage">
      This is HomePage Mas
      <ListBoxComponent
        items={items}
        selectedValue={selectedValue}
        onChange={handleListBoxChange}
      />
      <p>Selected Value: {selectedValue}</p>
      {/* <Input placeholder="Text input" />
      <GeeTest
        nativeButton={{
          width: '100%',
        }}
        rootClassName="p-5"
        ref={captchaRef}
        captchaId={'650457b6fc1d5c03e2625e1079d55ec2'}
        product={'popup'}
        onSuccess={result => console.log('success. result: ', result)}
      />
      <button>Submit</button> */}
    </section>
  );
};
