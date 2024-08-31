import React, { useEffect, useState } from "react";
// import { api, category } from "../../api";
import { Rate, Spin } from "antd";
import { Title } from "../shared";
import Link from "next/link";
// import { ProductCard } from "../commons/ProductCard";

export const HomeMenCates = () => {
  const id = "65c495d3aec8c88e9ddaacf5";
  const [loader, setLoader] = useState(false);
  const [menuList, setMenuList] = useState([]);

//   const fetchItems = async () => {
//     setLoader(true);
//     try {
//       const res = await api.get(category.getSingleCategory + id);
//       if (res.success) {
//         setMenuList(res.result);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setLoader(false);
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);
  return (
    <div className="mb-10">
      <Title
        text="Men's"
        image="https://assets-v2.lottiefiles.com/a/446bf0de-1166-11ee-9648-6f0e04280ac8/xjElzeFKXo.gif"
      />
      <Spin spinning={loader} size="large">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 p-7 border border-[lightgray] rounded-lg shadow">
          {menuList?.products?.map(
            ({_id, ...product}, idx) =>
              idx < 10 && (
                <Link
                  key={_id}
                  href={`/productdetails/${_id}`}
                  // className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black px-3"
                >
                  {/* <ProductCard data={product} /> */}
                </Link>
              )
          )}
          <div className="col-span-2 sm:col-span-5 text-right">
            <Link
              href={`/categories/${id}`}
              className=" hover:underline hover:text-sky-600 hover:cursor-pointer font-semibold text-[404040]"
            >
              {"See More >>"}
            </Link>
          </div>
        </div>
      </Spin>
    </div>
  );
};
