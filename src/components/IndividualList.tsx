import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getIndividualList } from '../api/IndividualService';
import type { Individual } from '../api/models/Individual';

export const IndividualList: React.FC = () => {
  const [data, setData] = useState<Individual[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getIndividualList()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!data.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>個体情報一覧</h2>
      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>種別CD</th>
            <th>ID</th>
            <th>名前</th>
            <th>編集</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={`${i.speciesCd}-${i.id}`}>
              <td>{i.speciesCd}</td>
              <td>{i.id}</td>
              <td>{i.name ?? '-'}</td>
              <td>
                <Link to={`/edit/${i.speciesCd}/${i.id}`}>編集</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};