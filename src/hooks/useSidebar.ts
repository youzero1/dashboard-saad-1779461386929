import { useState } from 'react';

export function useSidebar(): { collapsed: boolean; toggle: () => void; setCollapsed: (v: boolean) => void } {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((prev) => !prev);
  return { collapsed, toggle, setCollapsed };
}
