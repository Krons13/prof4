import React, { useState } from "react"

const FormInput = ({
  title,
  placeholder,
  value,
  onChange,
  onBlur,
  isValid,
}) => {
  const [error, setError] = useState("")
  const [errorCheck, setErrorCheck] = useState(false)

  const handleBlur = () => {
    const isInputValid = isValid(value)
    setError(isInputValid ? "" : `Некорректно введено поле`)
    setErrorCheck(!isInputValid)
    onBlur()
  }

  return (
    <div className="col-span-2 lg:col-span-1">
      <div className={`${errorCheck ? "border-red-700" : 'border-stone-300'} relative  rounded-lg border-2  border-solid px-4 pt-2.5 pb-2 bg-white`}>
      <label className="block text-xs text-gray-750">{title}</label>
      <input
        className="w-full"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
    </div>
    {errorCheck ? <div className="text-red-700">{error}</div> : ''}
    </div>
  )
}

export default FormInput
