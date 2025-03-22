import { InputType } from '@/types/InputType';
import { FC } from 'react';

const Input: FC<InputType> = ({ name, placeholder, type, onChange, value, extraClass }) => {
  return (
    <input
        autoComplete='off'
      className={`placeholder:text-[#00000033] w-[518px] py-[16px] pl-[26px] bg-[#ebeff3] rounded-[6px] text-[16px] leading-[100%] outlined-none ${extraClass}`}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
