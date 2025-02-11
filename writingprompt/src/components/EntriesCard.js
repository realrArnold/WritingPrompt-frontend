//This is the order components will come in, reviews will likely have to be done somewhere else.
//Perhaps we can dynamcially have a new page each time new writings are submitted and put the reviews on there
const getCurrentDate = () =>{
  const today = new Date();
  return today.toISOString().split('T')[0];
};


const EntriesCard = ({ title, words, writngPrompt, genre, date, user });
const currentDate = getCurrentDate();

if (date !== currentDate) {
  return null;
}

return (
  <div className="py-6 flex justify-center">
    <div
      className="bg-gray-100 shadow-lg rounded-2xl text-center p-6 w-3/4 md:w-1/2 lg:w-1/2 flex flex-col gap-4"
      id="allEntriesDisplay"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-800 Underline">
          {writingPrompt}
        </h3>
        <h4 className="text-l font-semibold text-gray-800 underline">
          {title || ""}
        </h4>
        <p className="text-gray-600 font-medium">{genre || ""}</p>
        <p className="text-gray-600">{words}</p>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-600">
          <span className="font-medium">by</span> {user}
        </p>
        <p className="text-gray-500 text-sm">
          <span className="font-medium">Upovtes</span> {upvotes}
        </p>
      </div>
    </div>
  </div>
);

export default EntriesCard;
