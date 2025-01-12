"use client";

import React, { useState, useCallback } from "react";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";

// Types for IconButton Props
type IconButtonProps = {
  icon: React.ElementType;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
};

// IconButton Component
const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  isActive = false,
  onClick,
  className = "",
}) => (
  <button
    className={`h-[64px] w-full flex items-center justify-center min-w-[64px] max-w-[64px] hover:bg-gray-200 ${
      isActive ? "bg-defaultGreen text-white" : "text-gray-700"
    } ${className}`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
  </button>
);

// Types for Select Props
type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

// Select Component
const Select: React.FC<SelectProps> = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="p-1 h-[64px] min-w-[64px] text-sm bg-transparent"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

// Main TextEditor Component
const TextEditor: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("16");
  const [fontFamily, setFontFamily] = useState<string>("sans-serif");
  const [activeFormats, setActiveFormats] = useState<{
    bold: boolean;
    italic: boolean;
    underline: boolean;
    alignLeft: boolean;
    alignCenter: boolean;
    alignRight: boolean;
    alignJustify: boolean;
  }>({
    bold: false,
    italic: false,
    underline: false,
    alignLeft: true,
    alignCenter: false,
    alignRight: false,
    alignJustify: false,
  });

  const handleCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    handleSelectionChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectionChange = useCallback(() => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      alignLeft: document.queryCommandState("justifyLeft"),
      alignCenter: document.queryCommandState("justifyCenter"),
      alignRight: document.queryCommandState("justifyRight"),
      alignJustify: document.queryCommandState("justifyFull"),
    });
  }, []);

  return (
    <div className="w-full" style={{ margin: 0 }}>
      <div className="flex items-center gap-1 bg-[#F8F7FC] border min-h-[64px]">
        <div className="flex flex-wrap items-center gap-1">
          <IconButton
            icon={Bars3BottomLeftIcon}
            isActive={activeFormats.alignLeft}
            onClick={() => handleCommand("justifyLeft")}
          />
          <IconButton
            icon={Bars3CenterLeftIcon}
            isActive={activeFormats.alignCenter}
            onClick={() => handleCommand("justifyCenter")}
          />
          <IconButton
            icon={Bars3BottomRightIcon}
            isActive={activeFormats.alignRight}
            onClick={() => handleCommand("justifyRight")}
          />
          <IconButton
            icon={Bars3Icon}
            isActive={activeFormats.alignJustify}
            onClick={() => handleCommand("justifyFull")}
          />
          <div className="w-px h-6 bg-gray-300 mx-1" />
          <IconButton
            icon={ArrowUturnLeftIcon}
            onClick={() => handleCommand("undo")}
          />
          <IconButton
            icon={ArrowUturnRightIcon}
            onClick={() => handleCommand("redo")}
          />
          <div className="w-px h-6 bg-gray-300 mx-1" />
          <IconButton
            icon={BoldIcon}
            isActive={activeFormats.bold}
            onClick={() => handleCommand("bold")}
          />
          <IconButton
            icon={ItalicIcon}
            isActive={activeFormats.italic}
            onClick={() => handleCommand("italic")}
          />
          <IconButton
            icon={UnderlineIcon}
            isActive={activeFormats.underline}
            onClick={() => handleCommand("underline")}
          />
          <div className="w-px h-6 bg-gray-300 mx-1" />
          <Select
            value={fontSize}
            onChange={(value) => {
              setFontSize(value);
              handleCommand("fontSize", value);
            }}
            options={[
              { value: "12", label: "12px" },
              { value: "14", label: "14px" },
              { value: "16", label: "16px" },
              { value: "18", label: "18px" },
              { value: "20", label: "20px" },
              { value: "24", label: "24px" },
              { value: "30", label: "30px" },
              { value: "36", label: "36px" },
            ]}
          />
          <Select
            value={fontFamily}
            onChange={(value) => {
              setFontFamily(value);
              handleCommand("fontName", value);
            }}
            options={[
              { value: "sans-serif", label: "Sans Serif" },
              { value: "serif", label: "Serif" },
              { value: "monospace", label: "Monospace" },
            ]}
          />
        </div>
      </div>

      <div className="relative">
        <div
          contentEditable
          className="min-h-[200px] p-4 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
          onKeyUp={handleSelectionChange}
          onMouseUp={handleSelectionChange}
          onFocus={handleSelectionChange}
          dir="auto"
        />
      </div>
    </div>
  );
};

export default TextEditor;
