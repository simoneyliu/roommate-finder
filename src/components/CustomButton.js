import React from 'react';
import '../styles/customButton.scss';

export function CustomButton({ label, domClassName, isDisabled, isSelected, onTabClick }) {
  let selected = isSelected ? ' selected ' : ' not-selected ';
  let disabled = isDisabled ? ' disabled ' : ' enabled ';

  return (
    <button onClick={onTabClick} disabled={isDisabled} className={'custom-button' + selected + disabled + domClassName}>
      {label}
    </button>
  );
}
