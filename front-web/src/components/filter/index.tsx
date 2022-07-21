import { useEffect, useState } from 'react';
import { Store } from '../../types';
import Select from 'react-select';
import { makeRequest } from '../../utils/request';

import './styles.css';

type Props = {
  onFilterChange: (store: Store) => void;
};

function Filter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  const handleChangeStore = (value: Store) => {
    onFilterChange(value);
  };

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores')
      .then((response) => {
        setSelectStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch store list');
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <Select
        options={selectStores}
        isClearable
        placeholder="Escolha a loja"
        className="store-filter"
        classNamePrefix="store-filter-select"
        onChange={(value) => handleChangeStore(value as Store)}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
      />
    </div>
  );
}

export default Filter;
