import List from "./list";

export default function page() {
  return (
    <div className=" p-3 text-[#000] bg-gray-200">
      <h1 className="font-bold p-3">실시간 코인 TOP100</h1>
      <List></List>
    </div>
  );
}
