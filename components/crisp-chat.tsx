'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('05a97219-8d54-401d-b609-a76ebc45d00e');
  }, []);

  return null;
};
