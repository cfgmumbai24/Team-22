import React from "react";
import coursecategory from "./coursecategory";

const CourseCategory = ({ category, setCategory }) => {
  return (
    <div>
      <div className="text-center font-bold text-3xl text-orange-900 py-3">Course Category</div>
      <div className="flex justify-around my-9">
        {coursecategory.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.cat?"All":item.cat)} key={index}>
              <div
                className= {`inline-flex items-center rounded-md bg-orange-950 text-white hover:bg-yellow-300 border-orange-900 border-2 text-xl ease-out hover:text-orange-950 px-3 py-2  font-semibold  hover:cursor-pointer w-72 h-14 text-center justify-center`}
              > {item.cat}
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCategory;
