import { useState } from 'react';

export default function useRefresh() {
  const [, setState] = useState();

  return () => {
    setState({});
  };
}
