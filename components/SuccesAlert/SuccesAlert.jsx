import React from "react"

const SuccesAlert = ({ title, isOpen, onClose }) => {
  return (
    <div className={isOpen ? "visible" : "invisible"}>
      <div className={`fixed z-50 top-0 left-0 w-full h-full`}>
        <div className="h-full flex justify-center items-center">
          <div className="w-8/12 md:w-1/3 bg-white p-8 rounded shadow-lg text-center">
            <p className="font-semibold mb-7">{title}</p>
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full opacity-75 bg-gray-800 z-40"></div>
    </div>
  )
}

export default SuccesAlert
