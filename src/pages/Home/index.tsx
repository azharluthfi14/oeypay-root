import { useRef } from 'react';

import type { GeeTestRef } from 'react-geetest-v4';
import GeeTest from 'react-geetest-v4';

import { Input } from '@/components';

export const HomePage = () => {
  const captchaRef = useRef<GeeTestRef | null>(null);

  return (
    <section data-testid="title-homepage">
      This is HomePage Mas
      <Input placeholder="Text input" />
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
      <button>Submit</button>
    </section>
  );
};
