import React,{useRef} from "react";

import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "this is the docs important to me",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now ", tagColor: "blue" },
    },
    {
      desc: "this is the docs important to me",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now ", tagColor: "" },
    },
    {
      desc: "this is the docs important to me",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload ", tagColor: "" },
    },
  ];

  return (
    <div
      ref={ref}
      className=" fixed z-[3] top-0 left -0 w-full h-full flex gap-10 flex-wrap p-5 "
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
