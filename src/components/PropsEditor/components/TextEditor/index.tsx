import React, { useState } from 'react';
import { Input } from 'antd';
import { StoreValueView } from '../../StoreValueView';
import style from './index.module.scss';

export const TextEditor = ({ schema, value, onChange, store }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={style.wrapper}>
      <p>
        {schema.title || '文本'}
        <span className={style.desc}>{schema.desc}</span>
      </p>
      <div>
        <StoreValueView store={store} visible={focused} value={value} onChange={onChange}>
          <Input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChange={(e) => {
              const value = e.target.value;
              onChange(value);
            }}
          ></Input>
        </StoreValueView>
      </div>
    </div>
  );
};
