import React, { useState } from "react";
import WriteFileListCard from "./WriteFileListCard";

function WriteFileListList() {
  const [files, setFiles] = useState([]);

  return (
    <section className="flex flex-col gap-[8px]">
      <label className="b1">리스트</label>

      <div className="flex-1 flex flex-col gap-[24px] overflow-y-scroll">
        <WriteFileListCard />
        <WriteFileListCard />
        <WriteFileListCard />
      </div>
    </section>
  );
}

export default WriteFileListList;
