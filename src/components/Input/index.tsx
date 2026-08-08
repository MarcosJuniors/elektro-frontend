import { useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export default function Input({ label, icon, type = 'text', ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';
  const currentType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label className="text-xs font-semibold text-gray-700">
          {label}
        </label>
      )}

      <div className="flex items-center w-full border-b border-gray-400 py-2 px-1 focus-within:border-gray-800 transition-colors">
        {icon && <span className="text-gray-600 mr-3 text-lg">{icon}</span>}

        <input
          type={currentType}
          autoComplete="new-password"
          className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#F8F8F8_inset]"
          {...rest}
        />

        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-600 hover:text-gray-800 text-lg ml-2 focus:outline-none cursor-pointer"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
    </div>
  );
}