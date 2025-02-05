import React, {useState} from "react";
const WritingArea = ({client}) => {
    const [data, setData] = useState({
        writingEntry: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value,
            });
        };

        const submitHandler = async (e) => {
            console.log("Form submiited with data",data);

            const response = await client.addEntry(data);
            console.log(response)
            if (response.data.status === "200") {
              console.log("Event added successfully");
            } else {
              console.log("Error adding event");}
          };

    return (
      <div
        className="bg-gray-100 container mx-auto p-6 rounded-lg shadow-lg max-w-md mt-10"
        id="addUserEntry"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Write Here
        </h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Name
            </label>
            <input
              type="text"
              name="writingEntry"
              value={data.writingEntry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-20 text-left align-top"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  

export default WritingArea;
