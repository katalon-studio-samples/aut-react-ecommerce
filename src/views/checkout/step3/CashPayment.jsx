/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import React from 'react';

const CashPayment = () => {
  const { values, setValues } = useFormikContext();

  return (
    <div className={`checkout-fieldset-collapse ${values.type === 'cash' ? 'is-selected-payment' : ''}`}>
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === 'cash'}
            id="modeCash"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: 'cash', name: 'Cash', cardnumber: '424242424242424242', expiry: '2099-10-10', ccv: '000' });
              }
            }}
            type="radio"
          />
          <label
            className="d-flex w-100"
            htmlFor="modeCash"
          >
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Cash</h4>
              <span className="text-subtle d-block margin-top-s">
                Your prompt payment is greatly appreciated, and it helps us maintain the efficiency of our operations. Thank you for your cooperation.
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CashPayment;
