import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
import dots from "../assets/images/dots.svg";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { productdata } from "./ProductData";

let PageSize = 5;

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return productdata.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <table className="mx-2 mt-[50px] md:mt-[70px] lg:mt-[60px] md:w-[670px] lg:w-[790px]">
        <thead className="border-b border-[#D6D6DB] text-[#7A7A7D] text-xs md:text-base font-medium text-left">
          <tr>
            <th className="pb-[14px] pr-3">PRODUCT NAME</th>
            <th className="pb-[14px] pr-3">TYPE</th>
            <th className="pb-[14px] pr-3">SALES</th>
            <th className="pb-[14px] pr-3">PRICE</th>
          </tr>
        </thead>
        <tbody className="text-sm md:text-lg lg:text-base font-medium text-left">
          {currentTableData.map((item, index) => (
            <tr key={index}>
              <td className="pt-[17px] pr-3">{item.name}</td>
              <td className="pt-[17px]">{item.type}</td>
              <td className="pt-[17px] pl-3">{item.sales}</td>
              <td className="pt-[17px]">{item.price}</td>
              <td className="pt-[17px] pl-3">
                <Menu>
                  <MenuButton>
                    <img src={dots} alt="dots" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>View Public LInk</MenuItem>
                    <MenuItem>View Sales</MenuItem>
                    <MenuItem>View Abandoned Transactions</MenuItem>
                    <MenuItem>Product Reviews</MenuItem>
                    <MenuItem>Deactivate product</MenuItem>
                    <MenuItem>Delete product</MenuItem>
                    <MenuItem>Duplicate product</MenuItem>
                  </MenuList>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="flex justify-center pt-5 md:pt-10 bg-[#EEEEF4] pb-10"
        currentPage={currentPage}
        totalCount={productdata.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductTable;
