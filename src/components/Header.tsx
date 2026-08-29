import React from "react";
import { useTelegram } from "../hooks/useTelegram";

interface HeaderProps {
  label1: string;
  value1?: string | number;
  label2?: string;
  value2?: string | number;
}

export const Header: React.FC<HeaderProps> = ({
  label1,
  value1,
  label2,
  value2,
}) => {
  const { isDark } = useTelegram();

  // Меняем логотип в зависимости от темы Telegram
  const logoSrc = isDark
    ? "/logos/Nika_Logo_dark.svg"
    : "/logos/Nika_Logo_light.svg";

  return (
    <div className="w-full h-[70px] px-[18px] py-[8px] flex justify-between border-solid rounded-[12px] border border-tg-hint">
      {/* Логотип */}
      <img
        src={logoSrc}
        alt="Nika Digital logo"
        className="w-[85px] h-[51px] object-contain shrink-0 ml-[12px]"
      />

      {value1 && (
        <div className="w-full pl-[12px]">
          <div className="flex w-full">
            <div className="grow w-auto text-right text-base text-tg-text ">
              <div>
                <span>{label1}:</span>
              </div>
              {label2 && (
                <div>
                  <span>{label2}:</span>
                </div>
              )}
            </div>
            <div className="w-[56px] pl-2">
              <div className="font-bold text-base text-tg-link">
                <div>
                  <span className="truncate">{value1}</span>
                </div>
                {label2 && (
                  <div>
                    <span>{value2}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {!value1 && (
        <div className="w-full pl-[12px] text-center text-tg-text">
          <div>
            <span className="text-2xl">{label1}</span>
          </div>
          {label2 !== undefined && label2 !== "" && value2 !== undefined && (
            <div>
              <span className="text-tg-text">{label2}:</span>
              <span className="font-bold text-base text-tg-link truncate">
                {value2}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
