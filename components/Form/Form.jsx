"use client"
import React, { useState } from "react"
import FormInput from "../FormInput/FormInput"
import SuccesAlert from "../SuccesAlert/SuccesAlert"
import SelectList from "../SelectList/SelectList"
import useFetchData from "../../hooks/useFetchData"
import {
  isValidFullName,
  isValidBirthDate,
  isValidPhoneNumber,
  isValidEmail,
} from "../../utils/validation"

const MyForm = () => {
  const data = useFetchData()
  const [messageForm, setMessageForm] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    selectedOption: "",
  })
  const [succes, setSucces] = useState(false)

  let message = `<b>Новая заявка!</b> \n`
  message += `<b>ФИО: ${formData.fullName}</b> \n`
  message += `<b>Почта: ${formData.email}</b> \n`
  message += `<b>Номер: ${formData.phoneNumber}</b> \n`
  message += `<b>Год рождения: ${formData.birthDate}</b> \n`

  const closeAlert = () => {
    setSucces(false)
  }

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOption,
    }))
  }

  const handleSubmit = async () => {
    if (
      isValidFullName(formData.fullName) &&
      isValidBirthDate(formData.birthDate) &&
      isValidPhoneNumber(formData.phoneNumber) &&
      isValidEmail(formData.email)
    ) {
      try {
        await axios.post(data, {
          chat_id: data.chatid,
          parse_mode: "html",
          text: message,
        })
        setSucces(true)
        setMessageForm("Успешно отправлено!")
      } catch (error) {
        setSucces(true)
        setMessageForm("Ошибка. Попробуйте снова!")
      }
    }
  }

  return (
    <div id="form" className="py-32 px-5 lg:px-20">
      <div className="flex justify-center xl:justify-between gap-y-10 xl:gap-y-0  items-center flex-wrap xl:flex-nowrap rounded-3xl bg-blue-650 p-14 min-h-full">
        <div className="text-center xl:text-left">
          <h2 className="text-4xl font-bold text-white mb-5 ">Онлайн заявка</h2>
          <p className="text-2xl text-white ">
            Заполните эту форму, мы свяжемся с вами в ближайшее время!
          </p>
        </div>
        <div>
          <div className="grid grid-rows-3-auto grid-cols-auto lg:grid-cols-20 gap-7 mb-4">
            <FormInput
              title={"Фамилия, Имя и Отчество"}
              placeholder={"Иванов Алексей Петрович"}
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              onBlur={() => {}}
              isValid={isValidFullName}
            />
            <FormInput
              title={"Электронная почта"}
              placeholder={"ivanov@mail.com"}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={() => {}}
              isValid={isValidEmail}
              type="email"
            />
            <FormInput
              title={"Мобильный телефон"}
              placeholder={"+7"}
              type="number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              onBlur={() => {}}
              isValid={isValidPhoneNumber}
            />
            <FormInput
              title={"Дата рождения"}
              placeholder={"01.01.2000"}
              type="number"
              value={formData.birthDate}
              onChange={(e) => handleInputChange("birthDate", e.target.value)}
              onBlur={() => {}}
              isValid={isValidBirthDate}
            />
            <SelectList onChange={handleSelectChange} />
          </div>
          <SuccesAlert
            title={messageForm}
            isOpen={succes}
            onClose={closeAlert}
          />
          <button
            className="w-full rounded-lg border-2 border-stone-300 border-solid bg-white px-4 py-2 text-purple-550 mt-2"
            onClick={handleSubmit}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyForm
