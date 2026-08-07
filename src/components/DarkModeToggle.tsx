import { useState, useId } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: {
    track: "w-8 h-[18px]",
    thumb: "w-3.5 h-3.5 left-[2px]",
    translate: "translate-x-3.5",
    icon: "text-[10px]",
  },
  md: {
    track: "w-11 h-6",
    thumb: "w-[18px] h-[18px] left-[3px]",
    translate: "translate-x-5",
    icon: "text-xs",
  },
  lg: {
    track: "w-14 h-[30px]",
    thumb: "w-6 h-6 left-[3px]",
    translate: "translate-x-[26px]",
    icon: "text-sm",
  },
} as const;

export function DarkModeToggle({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  className = "",
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const id = useId();
  const s = SIZES[size];

  const handleToggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label="Toggle"
        disabled={disabled}
        onClick={handleToggle}
        className={`group relative inline-flex flex-shrink-0 items-center rounded-full ring-1 ring-inset transition-colors duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.97] ${
          s.track
        } ${
          isChecked
            ? "bg-primary ring-primary-border hover:brightness-110"
            : "bg-border ring-border hover:bg-border/70"
        }`}
      >
        <span
          className={`absolute top-1/2 flex items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${
            s.thumb
          } ${isChecked ? `${s.translate} -translate-y-1/2` : "translate-x-0 -translate-y-1/2"}`}
        >
          <span
            className={`flex items-center justify-center text-primary ${s.icon}`}
          >
            {isChecked ? (
              <SunIcon weight="duotone" />
            ) : (
              <MoonIcon weight="duotone" />
            )}
          </span>
        </span>
      </button>
    </div>
  );
}
