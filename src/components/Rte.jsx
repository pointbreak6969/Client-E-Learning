import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import config from "../config/config";
import { useState } from "react";
const Rte = ({ name, control, label, defaultValue = "" }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full">
      {label && <label className={`${label}`}>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <>
            {loading && <div className="text-center text-gray-500 text-xl ">Loading...</div>}
              <Editor
                apiKey={config.tinyKey}
                initialValue={defaultValue}
                init={{
                  initialValue: defaultValue,
                  height: 500,
                  menubar: true,
                  plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "paste",
                    "help",
                    "wordcount",
                    "anchor",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  setup: (editor) => {
                    editor.on("init", () => {
                      setLoading(false);
                    });
                  },
                }}
                onEditorChange={onChange}
              />
            </>
          );
        }}
      />
    </div>
  );
};
export default Rte;
