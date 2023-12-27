import Link from "next/link";
import React from "react";

interface ILink {
  link: string;
  name: string;
}

interface IDataList {
  title: string;
  linkList: ILink[];
}

function DataList({ linkList, title }: IDataList) {
  return (
    <div className="data-list">
      <p className="title">{title}</p>
      <div className="list">
        {linkList.map((link) => (
          <Link key={link.name} href={link.link}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DataList;
