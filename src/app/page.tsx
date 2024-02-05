"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const quillRef = useRef<ReactQuill>(null);
  const quillConfig = {
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ script: "sub" }, { script: "super" }],
          [{ align: [] }],
          [{ color: [] }, { background: [] }],
          // ["link", "image", "video", "formula"],
          [{ image: "image" }, { video: "video" }, { link: "link" }],
          ["clean"], // Remove formatting

          // Additional options
          ["emoji"],
        ],
      },
    },
    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "list",
      "bullet",
      "link",
      "align",
      "blockquote",
      "code-block",
      "color",
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      {value}
      <ReactQuill
        ref={quillRef}
        theme={quillConfig.theme}
        value={value}
        onChange={setValue}
        className="h-64 w-1/2"
        formats={quillConfig.formats}
        placeholder="Add your note here..."
        modules={quillConfig.modules}
      />
    </main>
  );
}
