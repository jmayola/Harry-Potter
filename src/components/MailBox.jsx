import ShowComments from "./ShowComments";

function MailBox() {
  return (
    <>
      <div className="bg-[#1B285E ] m-7 place-items-center grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 p-3 rounded-xl">
        <ShowComments></ShowComments>
      </div>
    </>
  );
}
export default MailBox;
