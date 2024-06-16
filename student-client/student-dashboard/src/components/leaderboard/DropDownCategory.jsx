import { Dropdown } from 'rsuite';

const CategoryDropDown = ({category, setCatLeaderboard}) => (
  <Dropdown title={category} className="hover:bg-red-100 px-4 py-2 text-sm text-gray-700 transition duration-200 ease-in-out mx-2 w-56">
    <Dropdown.Item onClick = {()=>{setCatLeaderboard("English")}} className="bg-red-100 hover:cursor-pointer px-4 py-2 text-sm text-gray-700 transition duration-200 ease-in-out w-36">English</Dropdown.Item>
    <Dropdown.Item onClick = {()=>{setCatLeaderboard("Law")}} className="bg-red-100 px-4 hover:cursor-pointer py-2 text-sm text-gray-700 transition duration-200 ease-in-out w-36">Law</Dropdown.Item>
    <Dropdown.Item onClick = {()=>{setCatLeaderboard("Engineering")}} className="bg-red-100 hover:cursor-pointer px-4 py-2 text-sm text-gray-700 transition duration-200 ease-in-out w-36">Engineering</Dropdown.Item>
    <Dropdown.Item onClick = {()=>{setCatLeaderboard("Science")}} className="bg-red-100 px-4  hover:cursor-pointer py-2 text-sm text-gray-700 transition duration-200 ease-in-out w-36">Science</Dropdown.Item>
  </Dropdown>
);

export default CategoryDropDown