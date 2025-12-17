export default function AddTask() {
  return (
    <div className="gap-5 p-6 flex flex-col w-100 bg-[#f8cece] rounded-md shadow">
      <input type="text" 
      placeholder="Task title"
      className="bg-white px-4 py-2 rounded-md outline-none"
      />

      <input type="text"
      placeholder="Task description"
      className="bg-white px-4 py-2 rounded-md outline-none"
      />

    <button className="bg-[#d06361] hover:bg-[#88a2e7] px-4 py-2 rounded-md text-white">
      Add task
    </button>
    </div>
  );
}
