type CustomTextBoxProps = {
  onAnalyze: () => void;
};
const CustomTextBox = ({ onAnalyze }: CustomTextBoxProps) => {
  return (
    <div className="w-full h-full p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2 text-gray-900 text-left">
        Write your note!
      </h1>
      <p className="text-gray-600 mb-4 text-left">
        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      <textarea
        className="w-full p-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Write your clinical note here..."
        rows={10}
      />
      <button
        onClick={onAnalyze}
        className="mt-4 w-1/4 float-right py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
      >
        Analyze
      </button>
    </div>
  );
};
export default CustomTextBox;
