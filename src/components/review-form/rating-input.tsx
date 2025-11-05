import React from 'react';

interface RatingInputProps {
  value: number;
  title: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RatingInput({ value, title, onChange }: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        onChange={onChange}
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
