import type { SelectProps } from "antd";
import { Input, Select, Tag } from "antd";
import React, { useState } from "react";
import "./Home.css";
const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"jobs" | "companies">("jobs");
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  type TagRender = SelectProps["tagRender"];
  const MAX_COUNT = 2;
  const options: { value: string }[] = [
    { value: "Hà Nội" },
    { value: "TP Hồ Chí Minh" },
    { value: "Đà Nẵng" },
    { value: "An Giang" },
    { value: "Bà Rịa - Vũng Tàu" },
    { value: "Bắc Giang" },
    { value: "Bắc Kạn" },
    { value: "Bạc Liêu" },
    { value: "Bắc Ninh" },
    { value: "Bến Tre" },
    { value: "Bình Định" },
    { value: "Bình Dương" },
    { value: "Bình Phước" },
    { value: "Bình Thuận" },
    { value: "Cà Mau" },
    { value: "Cần Thơ" },
    { value: "Cao Bằng" },
    { value: "Đắk Lắk" },
    { value: "Đắk Nông" },
    { value: "Điện Biên" },
    { value: "Đồng Nai" },
    { value: "Đồng Tháp" },
    { value: "Gia Lai" },
    { value: "Hà Giang" },
    { value: "Hà Nam" },
    { value: "Hà Tĩnh" },
    { value: "Hải Dương" },
    { value: "Hải Phòng" },
    { value: "Hậu Giang" },
    { value: "Hòa Bình" },
    { value: "Hưng Yên" },
    { value: "Khánh Hòa" },
    { value: "Kiên Giang" },
    { value: "Kon Tum" },
    { value: "Lai Châu" },
    { value: "Lâm Đồng" },
    { value: "Lạng Sơn" },
    { value: "Lào Cai" },
    { value: "Long An" },
    { value: "Nam Định" },
    { value: "Nghệ An" },
    { value: "Ninh Bình" },
    { value: "Ninh Thuận" },
    { value: "Phú Thọ" },
    { value: "Phú Yên" },
    { value: "Quảng Bình" },
    { value: "Quảng Nam" },
    { value: "Quảng Ngãi" },
    { value: "Quảng Ninh" },
    { value: "Quảng Trị" },
    { value: "Sóc Trăng" },
    { value: "Sơn La" },
    { value: "Tây Ninh" },
    { value: "Thái Bình" },
    { value: "Thái Nguyên" },
    { value: "Thanh Hóa" },
    { value: "Thừa Thiên Huế" },
    { value: "Tiền Giang" },
    { value: "Trà Vinh" },
    { value: "Tuyên Quang" },
    { value: "Vĩnh Long" },
    { value: "Vĩnh Phúc" },
    { value: "Yên Bái" },
  ];

  const tagRender: TagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="blue"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <div className="full">
      <article className="bg-blue-400 background firstpart">
        <div className="container">
          <div className="slogan">
            <h1 className="text-6xl absolute">
              <span className="font-light text-gray-600">From</span>
              <span className="ml-3 kind">College</span>
              <span className="ml-3 font-light text-gray-600">to</span>
              <span className="ml-3 kind">Corporations</span>
              <br />
              <span className="font-light text-gray-600">in a touch!</span>
            </h1>
          </div>
          <div className="search mt-42 p-4 bg-white rounded-lg ">
            {" "}
            {/* Added padding, background color, and rounded corners */}
            <ul className="tab_title flex border-b mb-4  items-center">
              {" "}
              {/* Added margin-bottom */}
              <li
                className={`cursor-pointer vieclam px-4 py-2 font-medium ${
                  activeTab === "jobs" ? " kind border-b-2  " : "kind2"
                }`}
                onClick={() => setActiveTab("jobs")}
              >
                Carreer
              </li>
              <li
                className={`cursor-pointer congti px-4 py-2 font-medium ${
                  activeTab === "companies" ? " kind border-b-2  " : "kind2"
                }`}
                onClick={() => setActiveTab("companies")}
              >
                Corporation
              </li>
            </ul>
            <div className="mt-4">
              <div className="flex items-center  space-x-4">
                <Input
                  placeholder="Search by keywords"
                  style={{ height: 46 }}
                />
                <button className="px-4 py-2 button1 text-white rounded">
                  Search
                </button>
              </div>
              <div className="mt-4 grid grid-cols-3">
                <Select
                  placeholder="Field"
                  style={{ width: 254.46, height: 46 }}
                  onChange={handleChange}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
                <Select
                  mode="multiple"
                  tagRender={tagRender}
                  maxCount={MAX_COUNT}
                  placeholder="Location"
                  style={{ width: 254.46, height: 46 }}
                  options={options}
                />
                <Select
                  placeholder="Income"
                  style={{ width: 254.46, height: 46 }}
                  onChange={handleChange}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-blue-100 hashtag px-3 py-1 rounded-full mr-2">
                #OfficeJobs
              </span>
              <span className="inline-block bg-blue-100 hashtag  px-3 py-1 rounded-full mr-2">
                #GeneralJobs
              </span>
              <span className="inline-block bg-blue-100 hashtag px-3 py-1 rounded-full mr-2">
                #Hanoi
              </span>
              <span className="inline-block bg-blue-100 hashtag px-3 py-1 rounded-full mr-2">
                #HighIncome
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
