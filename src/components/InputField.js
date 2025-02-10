// src/components/InputField.js
import React from "react";


const InputField = ({ label, type, value, onChange, icon }) => (
  <div>
    <label className="block text-xs font-medium text-gray-700">{label}</label>
    <div className="mt-1 relative">
      {icon && <div className="absolute left-3 top-2.5 text-gray-400 text-sm">{icon}</div>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="pl-9 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  </div>
);

export default InputField;
