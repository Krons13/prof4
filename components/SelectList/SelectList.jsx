import React, { useState } from "react"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()

const SelectList = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const options = [
    { value: "Автострахование", label: "Автострахование" },
    { value: "ДМС", label: "ДМС" },
    { value: "Имущественное страхование", label: "Имущественное страхование" },
    { value: "Ипотечное страхование", label: "Ипотечное страхование" },
    { value: "Личное страхование", label: "Личное страхование" },
    { value: "Страхование путешествия", label: "Страхование путешествия" },
    {
      value: "Страхование финансовых рисков",
      label: "Страхование финансовых рисков",
    },
    { value: "Телемедицина", label: "Телемедицина" },
    { value: "Продлить полис", label: "Продлить полис" },
    { value: "Оплатить полис", label: "Оплатить полис" },
    { value: "Активировать полис", label: "Активировать полис" },
    { value: "Проверить полис", label: "Проверить полис" },
  ]

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions)
    const selectedOption = selectedOptions.map((item) => item.value).join(", ")
    onChange(selectedOption)
  }

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      padding: "11px 10px",
      gridColum: "span 2",
      backgroundColor: "white",
    }),
  }

  return (
    <div className="col-span-2">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        styles={colourStyles}
        placeholder="Выберите категорию"
        onChange={handleSelectChange}
      />
    </div>
  )
}

export default SelectList
