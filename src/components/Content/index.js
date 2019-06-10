import React from 'react';

export default function Content() {
  const [sva, setSva] = useState([]);
  async function getSVA() {
    const response = await api.get('/sva');
    setSva(response.data);
  }
  return <div />;
}
