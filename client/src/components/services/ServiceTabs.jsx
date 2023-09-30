import React, { useEffect, useState } from "react";
import { ConfigProvider, Space, Tabs } from "antd";
import { useSearchParams, Link } from "react-router-dom";
import WebServiceDetails from "./serviceDetails/WebServiceDetails";
import DesignsService from "./serviceDetails/DesignsService";
import VideoEditingService from "./serviceDetails/VideoEditingService";
import DigitalMarketingService from "./serviceDetails/DigitalMarketingService";

export default function ServiceTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams.get("message");

  console.log(message);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const items = [
    {
      key: "1",
      itemColor: "yellow",
      token: {
        colorPrimary: "#aaa",
        itemSelectedColor: "#bbb",
      },
      label: `Web and Mobile App Development`,
      children: <WebServiceDetails />,
      // disabled: admin,
    },
    {
      key: "2",
      label: `Graphic Design | UI/UX Design`,
      children: (
        <div className="">
          <DesignsService />
        </div>
      ),
    },
    {
      key: "3",
      label: `Video Editing`,
      children: (
        <div className="">
          <VideoEditingService />
        </div>
      ),
    },
    {
      key: "4",
      label: `Digital Marketing`,
      children: (
        <div className="">
          <DigitalMarketingService />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="">
        <div className=""></div>
        <div className="">
          <div className="">
            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorPrimary: "#222222",
                  borderRadius: 2,

                  // Alias Token
                  colorBgContainer: "#f6ffed",
                },
              }}
            >
              <Space>
                <Tabs defaultActiveKey="1" itemColor="red" items={items} />
              </Space>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
}
