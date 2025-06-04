import React, { useState } from 'react';
import { Individual } from '../api/models/Individual';
import { updateIndividual, deleteIndividual } from '../api/IndividualService';

type Props = {
  individual: Individual;
  onUpdated?: () => void;
  onDeleted?: () => void;
};

export const IndividualEditor: React.FC<Props> = ({ individual, onUpdated, onDeleted }) => {
  const [form, setForm] = useState<Individual>(individual);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await updateIndividual(form.speciesCd, form.id, form);
      setError(null);
      if (onUpdated) onUpdated();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteIndividual(form.speciesCd, form.id);
      setError(null);
      if (onDeleted) onDeleted();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h3>個体情報編集</h3>
      <div>
        <label>
          種別CD:
          <input name="speciesCd" value={form.speciesCd} onChange={handleChange} disabled />
        </label>
      </div>
      <div>
        <label>
          ID:
          <input name="id" value={form.id} onChange={handleChange} disabled />
        </label>
      </div>
      <div>
        <label>
          名前:
          <input name="name" value={form.name ?? ''} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          性別:
          <input name="gender" value={form.gender ?? ''} onChange={handleChange} />
        </label>
      </div>
      <button onClick={handleUpdate}>更新</button>
      <button onClick={handleDelete} style={{ marginLeft: '8px', color: 'red' }}>削除</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};